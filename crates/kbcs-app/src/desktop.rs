use crate::service::Service;
use anyhow::Result;
use std::{cell::RefCell, path::PathBuf, rc::Rc};
use tao::{
    event::{Event, WindowEvent},
    event_loop::{ControlFlow, EventLoopBuilder},
    monitor::MonitorHandle,
    window::{Fullscreen, Window, WindowBuilder},
};
use wry::{NewWindowResponse, WebContext, WebView, WebViewBuilder};

#[derive(serde::Deserialize)]
#[serde(tag = "action", rename_all = "snake_case")]
enum BattleDisplay {
    List,
    Enter {
        battle: Option<usize>,
        tools: Option<usize>,
    },
    Leave,
    Focus,
    ShowTools,
}

enum DesktopEvent {
    Exit(i32),
    Display(BattleDisplay),
}

struct ToolsWindow {
    webview: Option<WebView>,
    window: Window,
}

fn send_display(webview: &WebView, detail: serde_json::Value) {
    let _ = webview.evaluate_script(&format!(
        "window.dispatchEvent(new CustomEvent('kbcs:display',{{detail:{detail}}}));"
    ));
}

fn desktop_protocol(builder: WebViewBuilder<'_>, service: Service) -> WebViewBuilder<'_> {
    builder.with_asynchronous_custom_protocol("kbcs".into(), move |_, request, responder| {
        let path = request.uri().path().to_owned();
        crate::service::dispatch(&service, &path, move |service, accepted| {
            let path = request
                .uri()
                .path_and_query()
                .map_or("/", |value| value.as_str());
            let reply = if accepted {
                service.handle(request.method().as_str(), path, request.body())
            } else {
                crate::service::Reply::overloaded()
            };
            let response = wry::http::Response::builder()
                .status(reply.status)
                .header("Content-Type", reply.mime)
                .header("X-Content-Type-Options", "nosniff")
                .body(reply.bytes)
                .unwrap();
            responder.respond(response);
        });
    })
}

const BATTLE_HELP: &str =
    "https://kbc-rakv0.pages.dev/information/appli/battlecats/help/index.html";
fn open_battle_help(url: &str) {
    if url == BATTLE_HELP {
        // 対象を固定し、外部ヘルプだけを既定のブラウザで開く。
        #[cfg(windows)]
        {
            use std::os::windows::process::CommandExt;
            let _ = std::process::Command::new("explorer.exe")
                .arg(BATTLE_HELP)
                .creation_flags(0x08000000)
                .spawn();
        }
        #[cfg(target_os = "macos")]
        let _ = std::process::Command::new("/usr/bin/open")
            .arg(BATTLE_HELP)
            .spawn();
    }
}

pub fn run(root: PathBuf, region: String, source: String) -> Result<()> {
    start(root, region, source, false)
}

pub fn check(root: PathBuf, region: String, source: String) -> Result<()> {
    start(root, region, source, true)
}

fn start(root: PathBuf, region: String, source: String, check: bool) -> Result<()> {
    let event_loop = EventLoopBuilder::<DesktopEvent>::with_user_event().build();
    let update_exit = event_loop.create_proxy();
    if check {
        let timeout = update_exit.clone();
        std::thread::spawn(move || {
            std::thread::sleep(std::time::Duration::from_secs(40));
            let _ = timeout.send_event(DesktopEvent::Exit(2));
        });
    }
    let window = WindowBuilder::new()
        .with_window_icon(Some(tao::window::Icon::from_rgba(
            include_bytes!("../assets/app-icon.rgba").to_vec(),
            256,
            256,
        )?))
        .with_visible(!check)
        .with_title("KBCS")
        .with_inner_size(tao::dpi::LogicalSize::new(1180.0, 820.0))
        .with_min_inner_size(tao::dpi::LogicalSize::new(760.0, 520.0))
        .build(&event_loop)?;
    let mut service = Service::new(root.clone(), region, source);
    service.desktop = true;
    if !check {
        service.grant_launch_cat_food();
        service.start_updates();
        crate::shortcut::ensure_once(root.clone());
    }
    let mut context = WebContext::new(Some(root.join("webview")));
    let builder = WebViewBuilder::new_with_web_context(&mut context);
    #[cfg(target_os = "macos")]
    let builder = {
        use wry::WebViewBuilderExtDarwin;
        // WKWebViewはdata_directoryを使わない。保存先別の安定した識別子を使う。
        let hash = kbcs_data::source::hash(root.to_string_lossy().as_bytes());
        let mut identifier = [0u8; 16];
        for (index, byte) in identifier.iter_mut().enumerate() {
            *byte = u8::from_str_radix(&hash[index * 2..index * 2 + 2], 16).unwrap();
        }
        builder
            .with_data_store_identifier(identifier)
            .with_background_throttling(wry::BackgroundThrottlingPolicy::Disabled)
    };
    let tools = Rc::new(RefCell::new(None::<ToolsWindow>));
    if check {
        *tools.borrow_mut() = Some(ToolsWindow {
            webview: None,
            window: WindowBuilder::new()
                .with_visible(false)
                .build(&event_loop)?,
        });
    }
    let webview = desktop_protocol(builder, service.clone())
        .with_initialization_script(if check { DESKTOP_CHECK } else { "" })
        .with_ipc_handler({
            move |request| {
                if request.body() == "kbcs:restart-for-update" {
                    let _ = update_exit.send_event(DesktopEvent::Exit(0));
                } else if let Some(json) = request.body().strip_prefix("kbcs:battle-display:") {
                    let origin = (request.uri().scheme_str(), request.uri().host());
                    if matches!(
                        origin,
                        (Some("http"), Some("kbcs.localhost")) | (Some("kbcs"), Some("localhost"))
                    ) && let Ok(command) = serde_json::from_str(json)
                    {
                        let _ = update_exit.send_event(DesktopEvent::Display(command));
                    }
                } else if check
                    && let Some(result) = request.body().strip_prefix("kbcs:desktop-check:")
                {
                    eprintln!("KBCS desktop check: {result}");
                    let ok = serde_json::from_str::<serde_json::Value>(result)
                        .is_ok_and(|value| value["ok"] == true);
                    let _ = update_exit.send_event(DesktopEvent::Exit(if ok { 0 } else { 1 }));
                } else if check
                    && let Some(progress) =
                        request.body().strip_prefix("kbcs:desktop-check-progress:")
                {
                    eprintln!("KBCS desktop check progress: {progress}");
                }
            }
        })
        .with_new_window_req_handler({
            let tools = tools.clone();
            #[cfg(windows)]
            let service = service.clone();
            move |url, features| {
                open_battle_help(&url);
                if url != "about:blank" {
                    return NewWindowResponse::Deny;
                }
                let Ok(mut tools) = tools.try_borrow_mut() else {
                    return NewWindowResponse::Deny;
                };
                let Some(tools) = tools.as_mut().filter(|tools| tools.webview.is_none()) else {
                    return NewWindowResponse::Deny;
                };
                let builder = WebViewBuilder::new();
                #[cfg(windows)]
                let builder = {
                    use wry::WebViewBuilderExtWindows;
                    desktop_protocol(
                        builder.with_environment(features.opener.environment),
                        service.clone(),
                    )
                };
                #[cfg(target_os = "macos")]
                let builder = {
                    use wry::WebViewBuilderExtMacos;
                    builder.with_webview_configuration(features.opener.target_configuration)
                };
                let Ok(popup) = builder
                    .with_navigation_handler(|url| url == "about:blank")
                    .build(&tools.window)
                else {
                    return NewWindowResponse::Deny;
                };
                #[cfg(target_os = "macos")]
                use wry::WebViewExtMacOS;
                #[cfg(windows)]
                use wry::WebViewExtWindows;
                #[cfg(windows)]
                let child = popup.webview();
                #[cfg(target_os = "macos")]
                let child = popup.webview().into_super();
                let response = NewWindowResponse::Create { webview: child };
                tools.webview = Some(popup);
                response
            }
        })
        .with_navigation_handler(|url| {
            open_battle_help(&url);
            url.starts_with("http://kbcs.localhost/")
                || url.starts_with("kbcs://localhost/")
                || url == "https://ponosgames.com/information/appli/battlecats/combo/index.html"
        })
        .with_on_page_load_handler(|event, url| {
            if matches!(event, wry::PageLoadEvent::Finished) {
                eprintln!("KBCS UI loaded: {url}");
            }
        })
        .with_url("kbcs://localhost/")
        .build(&window)?;
    let mut monitors = Vec::<MonitorHandle>::new();
    event_loop.run(move |event, target, control_flow| {
        *control_flow = ControlFlow::Wait;
        use serde_json::json;
        match event {
            Event::LoopDestroyed => service.discard_recording_uploads(),
            Event::UserEvent(DesktopEvent::Exit(code)) => *control_flow = ControlFlow::ExitWithCode(code),
            Event::UserEvent(DesktopEvent::Display(BattleDisplay::List)) => {
                monitors = window.available_monitors().collect();
                let current = window.current_monitor();
                let list: Vec<_> = monitors.iter().enumerate().map(|(index, monitor)| {
                    let size = monitor.size();
                    json!({"id":index,"name":monitor.name(),"width":size.width,"height":size.height,"current":current.as_ref()==Some(monitor)})
                }).collect();
                send_display(&webview, json!({"action":"list","monitors":list}));
            }
            Event::UserEvent(DesktopEvent::Display(BattleDisplay::Enter { battle, tools: display })) => {
                let current: Vec<_> = window.available_monitors().collect();
                let battle = if let Some(id) = battle {
                    let Some(monitor) = monitors.get(id).filter(|monitor| current.contains(monitor)) else {
                        send_display(&webview, json!({"action":"error","message":"戦闘用のモニターが見つかりません。全画面表示を開き直してください"}));
                        return;
                    };
                    Some(monitor.clone())
                } else {
                    window.current_monitor()
                };
                if let Some(id) = display {
                    let Some(monitor) = monitors.get(id).filter(|monitor| Some(*monitor)!=battle.as_ref() && current.contains(monitor)) else {
                        send_display(&webview, json!({"action":"error","message":"操作盤を表示する別のモニターを選択してください"}));
                        return;
                    };
                    let origin = monitor.position();
                    let scale = monitor.scale_factor();
                    let size = monitor.size().to_logical::<f64>(scale);
                    let tool_window = WindowBuilder::new().with_visible(false).with_title("KBCS 戦闘操作盤")
                        .with_inner_size(tao::dpi::LogicalSize::new((size.width - 80.0).clamp(400.0, 1050.0), (size.height - 100.0).clamp(360.0, 820.0)))
                        .build(target);
                    let Ok(tool_window) = tool_window else {
                        send_display(&webview, json!({"action":"error","message":"操作盤ウィンドウを作成できません"}));
                        return;
                    };
                    tool_window.set_outer_position(tao::dpi::PhysicalPosition::new(origin.x + (24.0 * scale) as i32, origin.y + (48.0 * scale) as i32));
                    *tools.borrow_mut() = Some(ToolsWindow { webview: None, window: tool_window });
                }
                window.set_fullscreen(Some(Fullscreen::Borderless(battle)));
                send_display(&webview, json!({"action":"entered","tools":display.is_some()}));
            }
            Event::UserEvent(DesktopEvent::Display(BattleDisplay::Leave)) => {
                tools.borrow_mut().take();
                window.set_fullscreen(None);
                window.set_focus();
            }
            Event::UserEvent(DesktopEvent::Display(BattleDisplay::Focus)) => window.set_focus(),
            Event::UserEvent(DesktopEvent::Display(BattleDisplay::ShowTools)) => {
                if let Some(tools) = tools.borrow().as_ref().filter(|tools| tools.webview.is_some()) {
                    tools.window.set_visible(true);
                }
            }
            Event::WindowEvent { event: WindowEvent::CloseRequested, window_id, .. } => {
                if window_id == window.id() {
                    *control_flow = ControlFlow::Exit;
                } else if let Some(tools) = tools.borrow().as_ref().filter(|tools| tools.window.id()==window_id) {
                    tools.window.set_visible(false);
                    send_display(&webview, json!({"action":"closed"}));
                }
            }
            _ => ()
        }
    });
}

// 画面操作をせず、実際のWebViewで同梱素材・C++入口・別窓と可逆録画を確認する。
const DESKTOP_CHECK: &str = r#"
const runDesktopCheck = async () => {
  if (!(location.href.startsWith('kbcs://localhost/') || location.href.startsWith('http://kbcs.localhost/'))) return;
  const report = (message) => window.ipc.postMessage('kbcs:desktop-check-progress:'+message);
  report('JavaScript started');
  const checks = {};
  const probe = async (name, operation) => {
    try { await operation(); checks[name] = true; }
    catch (error) { checks[name] = String(error); }
    report(name+': '+checks[name]);
  };
  await Promise.all([
    probe('module', async () => {
      const {createSessionId} = await import(new URL('/src/shared/browser/session-id.js', location.href).href);
      if (!/^[0-9a-f-]{36}$/.test(createSessionId())) throw Error('session id');
    }),
    probe('native', async () => {
      const response = await fetch('/api/motion-timeline', {method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({soulFrames:2,specialFrames:3})});
      if (!response.ok || !(await response.json()).frames.length) throw Error('native POST');
    }),
    probe('image', async () => {
      const response = await fetch('/images/kbc-logo.png');
      if (!response.ok || new Uint8Array(await response.arrayBuffer())[0] !== 137) throw Error('image');
    }),
    probe('webgl', () => {
      if (!document.createElement('canvas').getContext('webgl')) throw Error('WebGL');
    }),
    probe('tools-window', async () => {
      const popup = window.open('about:blank', 'kbcs-battle-tools', 'popup');
      if (!popup) throw Error('tools window unavailable');
      for (let attempt=0; attempt<40 && !popup.document.body; ++attempt) await new Promise(resolve=>setTimeout(resolve,50));
      const canvas = document.createElement('canvas'), ctx = canvas.getContext('2d');
      ctx.fillStyle='#ffa000'; ctx.fillRect(0,0,1,1);
      const button = document.createElement('button'); let clicked = false; button.onclick=()=>{clicked=true;};
      popup.document.body.append(canvas,button); button.click();
      if (!clicked || ctx.getImageData(0,0,1,1).data[1]!==160) throw Error('tool DOM adoption');
      const css = new popup.XMLHttpRequest(); css.open('GET', new URL('/stage-sortie.css',location.href).href);
      await new Promise((resolve,reject)=>{css.onload=()=>css.status===200?resolve():reject(Error('child CSS '+css.status));css.onerror=()=>reject(Error('child protocol'));css.send();});
    }),
    probe('frame-archive', async () => {
      const {recordFrameArchive,discardFrameArchive}=await import(new URL('/battle-recording-frames.js',location.href).href);
      const canvas=document.createElement('canvas'); canvas.width=961; canvas.height=640;
      canvas.getContext('2d').fillRect(0,0,961,640);
      await new Promise((resolve,reject)=>{
        const recording=recordFrameArchive(canvas,'KBCS-desktop-check.zip',(archive,error)=>{
          if(!archive) reject(Error(error));
          else {discardFrameArchive(archive.id).then(()=>archive.frames===2?resolve():reject(Error('frame count')),reject);}
        },()=>recording.stop());
        recording.capture(); recording.capture(); recording.stop();
      });
    }),
  ]);
  window.ipc.postMessage('kbcs:desktop-check:'+JSON.stringify({ok:Object.values(checks).every(value => value === true),checks}));
};
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', runDesktopCheck, {once:true});
else void runDesktopCheck();
"#;
