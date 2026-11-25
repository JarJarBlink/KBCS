import android.graphics.Bitmap;
import android.graphics.Canvas;
import android.graphics.Paint;
import android.graphics.Rect;
import android.graphics.Typeface;
import android.os.Build;
import android.text.Layout;
import android.text.StaticLayout;
import android.text.TextPaint;
import java.io.OutputStream;
import java.nio.ByteBuffer;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.Base64;
import java.util.Locale;

public final class NativeText1603 {
    private static StaticLayout layout(String text, TextPaint paint, int width,
            Layout.Alignment alignment, boolean includePad) {
        return new StaticLayout(text, paint, width, alignment, 1f, 0f, includePad);
    }

    public static void main(String[] args) throws Exception {
        if (args.length != 7) {
            throw new IllegalArgumentException("font size wrap alignment stroke textBase64 outPrefix");
        }
        String font = args[0];
        float size = Float.parseFloat(args[1]);
        float wrap = Float.parseFloat(args[2]);
        int alignment = Integer.parseInt(args[3]);
        boolean stroke = Boolean.parseBoolean(args[4]);
        String text = new String(Base64.getDecoder().decode(args[5]), StandardCharsets.UTF_8);
        String prefix = args[6];

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
        System.out.printf(Locale.ROOT, "build=%s api=%d locale=%s paintLocales=%s%n",
                Build.FINGERPRINT, Build.VERSION.SDK_INT, Locale.getDefault(), paint.getTextLocales());
        System.out.printf(Locale.ROOT, "font=%s size=%s wrap=%s alignment=%s stroke=%b includePad=%b textBase64=%s%n",
                font, size, wrap, drawingAlignment, stroke, includePad, args[5]);
        System.out.printf(Locale.ROOT, "flags=%d hinting=%d desired=%s advance=%s bounds=%s layoutWidth=%d%n",
                paint.getFlags(), paint.getHinting(), desired, advance, bounds.toShortString(), layoutWidth);
        System.out.printf(Locale.ROOT, "top=%s ascent=%s descent=%s bottom=%s leading=%s baselineShift=%d%n",
                metrics.top, metrics.ascent, metrics.descent, metrics.bottom, metrics.leading, paint.baselineShift);
        System.out.printf(Locale.ROOT, "width=%d height=%d rowBytes=%d density=%d config=%s premultiplied=%b colorSpace=%s%n",
                bitmapWidth, bitmapHeight, bitmap.getRowBytes(), bitmap.getDensity(),
                bitmap.getConfig(), bitmap.isPremultiplied(), bitmap.getColorSpace());
        for (int line = 0; line < drawn.getLineCount(); line++) {
            System.out.printf(Locale.ROOT, "line=%d start=%d end=%d x=%s baseline=%d%n", line,
                    drawn.getLineStart(line), drawn.getLineEnd(line), drawn.getLineLeft(line), drawn.getLineBaseline(line));
        }
    }
}
