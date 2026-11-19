import { initializeThemeControls } from "../shared/theme/theme.js";

import {initializeSiteSettings} from '../shared/browser/game-settings.js';
import {initializeWorkspace} from "/workspace.js";
import {initializeUpdates,observeUpdates} from '/updates.js';
import {initializeStartup} from '/startup.js';

const phone=location.pathname==='/pages/stage-sortie/'&&new URLSearchParams(location.search).get('phone')==='1';
initializeThemeControls();
if(!phone){
 initializeSiteSettings();
 initializeWorkspace();
 initializeStartup(observeUpdates);
 initializeUpdates();
}else document.body.classList.add('phone-surface');
