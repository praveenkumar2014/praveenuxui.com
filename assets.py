"""Regenerate brand image assets and UX/UI voiceovers for the local mirror."""

from pathlib import Path
import shutil
import subprocess
import tempfile

from PIL import Image

ROOT = Path(__file__).resolve().parent
SITE = ROOT / "site"
LOGO = SITE / "img" / "praveenlogo.png"
VOICE = "Samantha"
RATE = 165

# Rebuild the site's image assets from the supplied logo so nothing still
# points at the original brand's artwork.
logo = Image.open(LOGO).convert("RGBA")

for size in (16, 32, 180):
    logo.resize((size, size), Image.LANCZOS).save(
        SITE / "favicon" / f"favicon-{size}x{size}.png"
    )

touch = Image.new("RGBA", (180, 180), (1, 12, 46, 255))
touch.alpha_composite(logo.resize((150, 150), Image.LANCZOS), (15, 15))
touch.convert("RGB").save(SITE / "favicon" / "apple-touch-icon.png")

og = Image.new("RGB", (1200, 630), (1, 12, 46))
mark = logo.resize((470, 470), Image.LANCZOS)
og.paste(mark, ((1200 - 470) // 2, (630 - 470) // 2), mark)
og.save(SITE / "img" / "og.png", optimize=True)

# Original audio carried the old mental-health script. These are original
# UX/UI lines spoken with the local system voice, ready to be replaced with
# real recordings later.
VOICES = {
    "_remote/a.storyblok.com/f/299979/x/7d2538c170/01-testimonial.mp3": (
        "Praveen took a messy, ambitious idea and turned it into a flow our "
        "users understood instantly. The handoff was the cleanest we have ever had."
    ),
    "_remote/a.storyblok.com/f/299979/x/43fe5530e0/02-testimonial.mp3": (
        "Every review brought a sharper insight. Our usability scores went up "
        "and support tickets went down within one release."
    ),
    "_remote/a.storyblok.com/f/299979/x/a64621c332/03-testimonial.mp3": (
        "The design system gave our whole team a shared language. We shipped "
        "faster without losing consistency."
    ),
    "_remote/a.storyblok.com/f/299979/x/d21fc53ea0/04-testimonial.mp3": (
        "They asked the questions nobody else asked, and the research changed "
        "our roadmap for the better."
    ),
    "_remote/a.storyblok.com/f/299979/x/2e5810e2c9/05-testimonial.mp3": (
        "Thoughtful, fast, and genuinely collaborative. Our onboarding finally "
        "feels like our brand."
    ),
    "_remote/a.storyblok.com/f/299979/x/717e575b4d/06-testimonial.mp3": (
        "Accessibility was baked in from day one. That made the whole product "
        "better for everyone."
    ),
    "_remote/a.storyblok.com/f/299979/x/46e2f0a9bd/question-01.mp3": (
        "What does success look like for you, and how will we know when we get there?"
    ),
    "_remote/a.storyblok.com/f/299979/x/117c8424d4/question-02.mp3": (
        "Where does the current experience slow you down or break your flow?"
    ),
    "_remote/a.storyblok.com/f/299979/x/cf1b1f905e/question-03.mp3": (
        "Which part of this process feels unclear or frustrating today?"
    ),
    "_remote/a.storyblok.com/f/299979/x/2cfabd7781/question-04.mp3": (
        "How do you decide what to keep, what to cut, and what to simplify?"
    ),
    "_remote/a.storyblok.com/f/299979/x/9ddd626060/question-05.mp3": (
        "What would make this feel effortless on your busiest day?"
    ),
    "_remote/a.storyblok.com/f/299979/x/836c3f0991/question-06.mp3": (
        "What do you wish the product understood about the way you actually work?"
    ),
}

if shutil.which("say") and shutil.which("ffmpeg"):
    with tempfile.TemporaryDirectory(prefix="praveen-tts-") as tmp:
        aiff = Path(tmp) / "voice.aiff"
        for rel, text in VOICES.items():
            out = SITE / rel
            if not out.parent.exists():
                continue
            subprocess.run(
                ["say", "-v", VOICE, "-r", str(RATE), "-o", str(aiff), text],
                check=True,
            )
            subprocess.run(
                [
                    "ffmpeg", "-y", "-loglevel", "error",
                    "-i", str(aiff), "-codec:a", "libmp3lame",
                    "-qscale:a", "4", str(out),
                ],
                check=True,
            )
    print("regenerated 12 voiceovers")
else:
    print("say/ffmpeg unavailable; kept existing audio")

print("regenerated og.png and favicons")
