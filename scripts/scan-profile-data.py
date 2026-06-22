from __future__ import annotations

import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "backend" / "knowledge" / "source-scan-summary.json"

SOURCE_FILES = [
    ROOT / "frontend" / "src" / "data" / "arun-profile.json",
    ROOT / "frontend" / "src" / "data" / "portfolio.js",
]

KEYWORDS = [
    "PLC",
    "SCADA",
    "DCS",
    "SICAM",
    "SCALA",
    "DWAL",
    "Druk Wang Alloys",
    "Fuzzy Automation",
    "Basic Health Monitoring",
    "HVAC",
    "Leadership",
    "Student Research Meet",
    "IEEE manuscript",
    "ESP32",
    "Raspberry Pi",
    "MAX30102",
    "Electrical Testing",
    "VFD"
]


def normalize(text: str) -> str:
    return re.sub(r"\s+", " ", text).strip()


def extract_hits(text: str, keyword: str) -> list[str]:
    hits = []
    for match in re.finditer(re.escape(keyword), text, flags=re.IGNORECASE):
        start = max(0, match.start() - 180)
        end = min(len(text), match.end() + 220)
        snippet = normalize(text[start:end])
        if snippet not in hits:
            hits.append(snippet)
        if len(hits) >= 3:
            break
    return hits


def main() -> None:
    result = {"sources": [], "keywords": {}}
    for source in SOURCE_FILES:
        if not source.exists():
            continue
        text = source.read_text(encoding="utf-8", errors="ignore")
        result["sources"].append(str(source))
        for keyword in KEYWORDS:
            hits = extract_hits(text, keyword)
            if hits:
                result["keywords"].setdefault(keyword, []).extend(hits)
    OUTPUT.write_text(json.dumps(result, indent=2), encoding="utf-8")
    print(f"Wrote {OUTPUT}")


if __name__ == "__main__":
    main()
