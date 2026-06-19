from __future__ import annotations

import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "backend" / "knowledge" / "source-scan-summary.json"

SOURCE_FILES = [
    Path(r"C:\Users\sanya\Documents\New project\arun_resume_professional_main\qa_text.txt"),
    Path(r"C:\Users\sanya\Desktop\Desktop Organized - 2026-06-07\ARUN SANYASI.txt"),
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
    "ESP32",
    "Raspberry Pi",
    "MAX30102",
    "Student Research Meet",
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
