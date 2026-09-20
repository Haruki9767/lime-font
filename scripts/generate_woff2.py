from pathlib import Path
from fontTools.ttLib import TTFont

ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "client" / "public" / "lime-fonts.ttf"
TARGET = ROOT / "client" / "public" / "lime-fonts.woff2"

if not SOURCE.is_file():
    raise SystemExit(f"Missing source font: {SOURCE}")

font = TTFont(str(SOURCE))
font.flavor = "woff2"
font.save(str(TARGET))
print(f"Generated {TARGET} from {SOURCE}")
