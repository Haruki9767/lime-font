from pathlib import Path
from fontTools.ttLib import TTFont

ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "public" / "fonts" / "lime-fonts.ttf"
TARGET = ROOT / "public" / "fonts" / "lime-fonts.woff2"

if not SOURCE.is_file():
    raise SystemExit(f"Missing source font: {SOURCE}")

font = TTFont(str(SOURCE))
font.flavor = "woff2"
font.save(str(TARGET))

generated = TTFont(str(TARGET))
if generated.flavor != "woff2" or not generated.getGlyphOrder():
    raise SystemExit(f"Invalid WOFF2 output: {TARGET}")

print(f"Generated and validated {TARGET} from {SOURCE} ({len(generated.getGlyphOrder())} glyphs)")
