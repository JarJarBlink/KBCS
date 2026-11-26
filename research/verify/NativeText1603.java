package dev.kbcs.textprobe;

import android.app.Activity;
import android.app.Instrumentation;
import android.graphics.Bitmap;
import android.graphics.Canvas;
import android.graphics.Paint;
import android.graphics.Rect;
import android.graphics.Typeface;
import android.graphics.fonts.Font;
import android.graphics.text.PositionedGlyphs;
import android.graphics.text.TextRunShaper;
import android.os.Build;
import android.os.Bundle;
import android.text.Layout;
import android.text.StaticLayout;
import android.text.TextPaint;
import java.io.OutputStream;
import java.io.PrintStream;
import java.nio.ByteBuffer;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.text.Bidi;
import java.util.Arrays;
import java.util.Base64;
import java.util.LinkedHashSet;
import java.util.Locale;
import java.util.Set;
import org.json.JSONArray;
import org.json.JSONObject;

public final class NativeText1603 extends Instrumentation {
    private Bundle arguments;

    @Override public void onCreate(Bundle args) {
        arguments = args;
        start();
    }

    @Override public void onStart() {
        Bundle result = new Bundle();
        try {
            JSONArray cases = new JSONArray(arguments.getString("cases"));
            Path directory = getTargetContext().getFilesDir().toPath();
            for (int index = 0; index < cases.length(); index++) {
                JSONObject sample = cases.getJSONObject(index);
                String id = sample.getString("id");
                if (!id.matches("[a-z0-9-]+")) throw new IllegalArgumentException(id);
                String prefix = directory.resolve(id).toString();
                try (PrintStream report = new PrintStream(prefix + ".metrics.txt", StandardCharsets.UTF_8.name())) {
                    measure(sample, prefix, report);
                }
            }
            result.putString("stream", "Generated " + cases.length() + " reference bitmaps");
            finish(Activity.RESULT_OK, result);
        } catch (Exception error) {
            result.putString("stream", android.util.Log.getStackTraceString(error));
            finish(Activity.RESULT_CANCELED, result);
        }
    }

    private static StaticLayout layout(String text, TextPaint paint, int width,
            Layout.Alignment alignment, boolean includePad) {
        return new StaticLayout(text, paint, width, alignment, 1f, 0f, includePad);
    }

    private static void measure(JSONObject sample, String prefix, PrintStream report) throws Exception {
        String font = sample.getString("font");
        float size = (float) sample.getDouble("size");
        float wrap = (float) sample.getDouble("wrap");
        int alignment = sample.getInt("align");
        boolean stroke = sample.getBoolean("stroke");
        String encodedText = sample.getString("text");
        String text = new String(Base64.getDecoder().decode(encodedText), StandardCharsets.UTF_8);

        TextPaint paint = new TextPaint();
        paint.setAntiAlias(true);
        switch (font) {
            case "": break;
            case "thonburi": paint.setTypeface(Typeface.defaultFromStyle(Typeface.NORMAL)); break;
            case "default_bold":
            case "thonburi_bold": paint.setTypeface(Typeface.defaultFromStyle(Typeface.BOLD)); break;
            case "default_italic": paint.setTypeface(Typeface.defaultFromStyle(Typeface.ITALIC)); break;
            default: paint.setTypeface(Typeface.create(font, Typeface.NORMAL)); break;
        }
        boolean includePad = font.equals("thonburi") || font.equals("thonburi_bold");
        paint.setTextSize(size);
        paint.setARGB(255, 255, 255, 255);

        float desired = Layout.getDesiredWidth(text, paint);
        float width = wrap > 0f && wrap != Float.POSITIVE_INFINITY ? wrap : desired;
        int layoutWidth = (int) (width + 1f);
        StaticLayout measured = layout(text, paint, layoutWidth, Layout.Alignment.ALIGN_NORMAL, includePad);
        int bitmapWidth = (int) Math.ceil((float) measured.getWidth() + 4f);
        int bitmapHeight = (int) Math.ceil((float) measured.getHeight());
        Bitmap bitmap = Bitmap.createBitmap(bitmapWidth, bitmapHeight, Bitmap.Config.ARGB_8888);
        Rect bounds = new Rect();
        paint.getTextBounds(text, 0, text.length(), bounds);
        Paint.FontMetrics metrics = paint.getFontMetrics();
        float advance = paint.measureText(text);

        Layout.Alignment drawingAlignment = alignment == 0 ? Layout.Alignment.ALIGN_CENTER
                : alignment == 2 ? Layout.Alignment.ALIGN_OPPOSITE : Layout.Alignment.ALIGN_NORMAL;
        if (stroke) {
            paint.setStrokeWidth(2f);
            paint.setStyle(Paint.Style.STROKE);
        }
        StaticLayout drawn = layout(text, paint, bitmapWidth, drawingAlignment, includePad);
        drawn.draw(new Canvas(bitmap));

        ByteBuffer pixels = ByteBuffer.allocate(bitmap.getByteCount());
        bitmap.copyPixelsToBuffer(pixels);
        Files.write(Paths.get(prefix + ".pixels"), pixels.array());
        try (OutputStream output = Files.newOutputStream(Paths.get(prefix + ".png"))) {
            if (!bitmap.compress(Bitmap.CompressFormat.PNG, 100, output)) {
                throw new IllegalStateException("PNG encoding failed");
            }
        }
        report.printf(Locale.ROOT, "build=%s api=%d locale=%s paintLocales=%s%n",
                Build.FINGERPRINT, Build.VERSION.SDK_INT, Locale.getDefault(), paint.getTextLocales());
        report.printf(Locale.ROOT, "font=%s size=%s wrap=%s alignment=%s stroke=%b includePad=%b textBase64=%s%n",
                font, size, wrap, drawingAlignment, stroke, includePad, encodedText);
        report.printf(Locale.ROOT, "flags=%d hinting=%d desired=%s advance=%s bounds=%s layoutWidth=%d%n",
                paint.getFlags(), paint.getHinting(), desired, advance, bounds.toShortString(), layoutWidth);
        report.printf(Locale.ROOT, "top=%s ascent=%s descent=%s bottom=%s leading=%s baselineShift=%d%n",
                metrics.top, metrics.ascent, metrics.descent, metrics.bottom, metrics.leading, paint.baselineShift);
        report.printf(Locale.ROOT, "width=%d height=%d rowBytes=%d density=%d config=%s premultiplied=%b colorSpace=%s%n",
                bitmapWidth, bitmapHeight, bitmap.getRowBytes(), bitmap.getDensity(),
                bitmap.getConfig(), bitmap.isPremultiplied(), bitmap.getColorSpace());
        for (int line = 0; line < drawn.getLineCount(); line++) {
            report.printf(Locale.ROOT, "line=%d start=%d end=%d x=%s baseline=%d%n", line,
                    drawn.getLineStart(line), drawn.getLineEnd(line), drawn.getLineLeft(line), drawn.getLineBaseline(line));
        }
        if (drawn.getLineCount() == 1 && text.indexOf('\t') < 0 && !text.isEmpty()
                && !Bidi.requiresBidi(text.toCharArray(), 0, text.length())) {
            PositionedGlyphs glyphs = TextRunShaper.shapeTextRun(text, 0, text.length(),
                    0, text.length(), 0f, 0f, false, paint);
            Set<String> fonts = new LinkedHashSet<>();
            for (int index = 0; index < glyphs.glyphCount(); index++) {
                Font selected = glyphs.getFont(index);
                fonts.add(String.format(Locale.ROOT,
                        "shaperFont=%s ttc=%d fontWeight=%d axes=%s weightOverride=%s fakeBold=%b",
                        selected.getFile(), selected.getTtcIndex(), selected.getStyle().getWeight(),
                        Arrays.toString(selected.getAxes()), glyphs.getWeightOverride(index), glyphs.getFakeBold(index)));
            }
            fonts.forEach(report::println);
        }
    }
}
