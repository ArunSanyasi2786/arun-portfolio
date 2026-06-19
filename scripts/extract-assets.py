from __future__ import annotations

import hashlib
import os
import re
import shutil
import subprocess
import zipfile
from dataclasses import dataclass
from pathlib import Path
from typing import Iterable

from PIL import Image, ImageOps

ROOT = Path(__file__).resolve().parents[1]
PROJECTS_DIR = ROOT / "frontend" / "src" / "assets" / "projects"
PROFILE_DIR = ROOT / "frontend" / "src" / "assets" / "profile"
REVIEW_DIR = ROOT / "frontend" / "src" / "assets" / "review-needed"
MANIFEST = ROOT / "ASSET_MANIFEST.md"

for directory in (PROJECTS_DIR, PROFILE_DIR, REVIEW_DIR):
    directory.mkdir(parents=True, exist_ok=True)

CANDIDATES = {
    "profile": Path(r"C:\Users\sanya\Desktop\Desktop Organized - 2026-06-07\Images\WhatsApp Image 2026-03-15 at 9.31.51 PM.jpeg"),
    "kiosk_machine": Path(r"C:\Users\sanya\Documents\New project\cst_health_kiosk\assets\illustrations\kiosk_machine.png"),
    "measuring_assistant": Path(r"C:\Users\sanya\Documents\New project\cst_health_kiosk\assets\illustrations\measuring_assistant.png"),
    "results_background": Path(r"C:\Users\sanya\Documents\New project\cst_health_kiosk\assets\backgrounds\results_bg.png"),
    "qr_background": Path(r"C:\Users\sanya\Documents\New project\cst_health_kiosk\assets\backgrounds\qr_bg.png"),
    "pulse_reference": Path(r"C:\Users\sanya\Documents\New project\cst_health_kiosk\assets\detail_graphics\pulse_reference_chart.png"),
    "sample_output": Path(r"C:\Users\sanya\Documents\New project\cst_health_kiosk\hardware_and_design\sample_outputs\P4.png"),
}

OFFICE_SOURCES = [
    Path(r"C:\Users\sanya\Documents\New project\cst_health_kiosk\project_documents\presentations\Basic_Health_Monitoring_Station.pptx"),
    Path(r"C:\Users\sanya\Documents\New project\cst_health_kiosk\project_documents\final_report\Group_3_Basic_Health_Monitoring_Station.docx"),
    Path(r"C:\Users\sanya\Documents\New project\cst_health_kiosk\project_documents\manual\Group_3_MANUAL_Basic_health_Monitoring_Station.docx"),
]

PDF_SOURCES = [
    Path(r"C:\Users\sanya\Documents\New project\cst_health_kiosk\project_documents\final_report\Group_3_Basic_Health_Monitoring_Station.pdf"),
]

@dataclass
class AssetEntry:
    output: Path
    source: Path
    status: str
    reason: str

entries: list[AssetEntry] = []


def sha12(path: Path) -> str:
    h = hashlib.sha256()
    with path.open("rb") as f:
        for chunk in iter(lambda: f.read(65536), b""):
            h.update(chunk)
    return h.hexdigest()[:12]


def safe_open_image(path: Path) -> Image.Image | None:
    try:
        img = Image.open(path)
        img.load()
        return ImageOps.exif_transpose(img)
    except Exception:
        return None


def save_web_image(img: Image.Image, dest: Path, *, max_side: int = 1400, square: bool = False, quality: int = 84) -> None:
    if square:
        width, height = img.size
        side = min(width, height)
        left = max(0, (width - side) // 2)
        top = max(0, (height - side) // 2)
        img = img.crop((left, top, left + side, top + side))
    img.thumbnail((max_side, max_side), Image.Resampling.LANCZOS)
    if dest.suffix.lower() in {".jpg", ".jpeg"}:
        out = img.convert("RGB")
        out.save(dest, "JPEG", quality=88, optimize=True, progressive=True)
    else:
        # Keep alpha for transparent UI assets, otherwise use compact RGB webp.
        if img.mode not in ("RGB", "RGBA"):
            img = img.convert("RGBA")
        img.save(dest, "WEBP", quality=quality, method=6)


def copy_image(src: Path, dest: Path, status: str, reason: str, *, square: bool = False) -> None:
    if not src.exists():
        return
    img = safe_open_image(src)
    if img is None:
        return
    save_web_image(img, dest, square=square)
    entries.append(AssetEntry(dest.relative_to(ROOT), src, status, reason))


def extract_office_images(source: Path, out_dir: Path, prefix: str, max_count: int, status: str) -> None:
    if not source.exists():
        return
    temp = ROOT / ".asset-tmp" / prefix
    if temp.exists():
        shutil.rmtree(temp)
    temp.mkdir(parents=True, exist_ok=True)
    extracted: list[tuple[int, Path, tuple[int, int]]] = []
    try:
        with zipfile.ZipFile(source) as zf:
            for name in zf.namelist():
                lower = name.lower()
                if not lower.startswith(("word/media/", "ppt/media/")):
                    continue
                if not lower.endswith((".png", ".jpg", ".jpeg", ".webp")):
                    continue
                target = temp / Path(name).name
                target.write_bytes(zf.read(name))
                img = safe_open_image(target)
                if img is None:
                    continue
                width, height = img.size
                # Skip tiny logos/icons; keep substantial project visuals.
                if width < 360 or height < 220:
                    continue
                extracted.append((width * height, target, (width, height)))
    except Exception:
        return

    extracted.sort(reverse=True, key=lambda item: item[0])
    for index, (_, path, size) in enumerate(extracted[:max_count], start=1):
        dest = out_dir / f"{prefix}-{index:02d}.webp"
        img = safe_open_image(path)
        if img is None:
            continue
        save_web_image(img, dest, max_side=1400)
        reason = f"Extracted embedded image from {source.name}; original dimensions {size[0]}x{size[1]}."
        entries.append(AssetEntry(dest.relative_to(ROOT), source, status, reason))


def render_pdf_first_page(source: Path, dest: Path, status: str) -> None:
    if not source.exists():
        return
    temp_prefix = ROOT / ".asset-tmp" / "pdf-render" / source.stem
    temp_prefix.parent.mkdir(parents=True, exist_ok=True)
    try:
        subprocess.run(
            ["pdftoppm", "-png", "-f", "1", "-singlefile", "-r", "150", str(source), str(temp_prefix)],
            check=True,
            stdout=subprocess.DEVNULL,
            stderr=subprocess.DEVNULL,
        )
        rendered = temp_prefix.with_suffix(".png")
        img = safe_open_image(rendered)
        if img is None:
            return
        save_web_image(img, dest, max_side=1400)
        entries.append(AssetEntry(dest.relative_to(ROOT), source, status, "Rendered first page of final report PDF as a portfolio preview."))
    except Exception:
        # Leave PDF rendering optional because Poppler availability varies.
        return


def write_manifest() -> None:
    lines = [
        "# Asset Manifest",
        "",
        "This file lists every image copied or generated for the portfolio website, with source provenance and review status.",
        "",
        "## Copied / Generated Assets",
        "",
        "| Output | Status | Source | Reason |",
        "| --- | --- | --- | --- |",
    ]
    for entry in entries:
        source = str(entry.source)
        lines.append(f"| `{entry.output.as_posix()}` | {entry.status} | `{source}` | {entry.reason} |")
    if not entries:
        lines.append("| _None_ | - | - | - |")
    lines.extend([
        "",
        "## Privacy Notes",
        "",
        "- No raw private Word, PowerPoint, or PDF documents were copied into frontend assets.",
        "- Runtime health databases, logs, generated QR exports, and private archives are intentionally excluded.",
        "- Images in `frontend/src/assets/review-needed/` are not used by the live site until manually reviewed.",
    ])
    MANIFEST.write_text("\n".join(lines) + "\n", encoding="utf-8")


def main() -> None:
    copy_image(CANDIDATES["profile"], PROFILE_DIR / "arun-sanyasi-profile.jpg", "used", "Selected as the clearest profile-style portrait from local image files.", square=True)
    copy_image(CANDIDATES["kiosk_machine"], PROJECTS_DIR / "bhms-kiosk-machine.webp", "used", "CST Health Kiosk illustration showing the project device concept.")
    copy_image(CANDIDATES["measuring_assistant"], PROJECTS_DIR / "bhms-measuring-assistant.webp", "used", "Health monitoring measurement workflow illustration from the project app.")
    copy_image(CANDIDATES["results_background"], PROJECTS_DIR / "bhms-results-interface.webp", "used", "Results/dashboard visual from the health kiosk app assets.")
    copy_image(CANDIDATES["qr_background"], PROJECTS_DIR / "bhms-qr-interface.webp", "used", "QR report handoff visual from the health kiosk app assets.")
    copy_image(CANDIDATES["pulse_reference"], PROJECTS_DIR / "sensor-reference-chart.webp", "used", "Sensor/health parameter visualization from app detail graphics.")
    copy_image(CANDIDATES["sample_output"], PROJECTS_DIR / "bhms-sample-output.webp", "used", "Sample output/evidence image from the final-year project files.")

    for source in OFFICE_SOURCES:
        slug = re.sub(r"[^a-z0-9]+", "-", source.stem.lower()).strip("-")[:48]
        target_dir = PROJECTS_DIR if "basic-health-monitoring" in slug or "group-3" in slug else REVIEW_DIR
        status = "used" if target_dir == PROJECTS_DIR else "review-needed"
        extract_office_images(source, target_dir, f"extracted-{slug}", max_count=3, status=status)

    for source in PDF_SOURCES:
        render_pdf_first_page(source, PROJECTS_DIR / "final-report-preview.webp", "used")

    temp_root = ROOT / ".asset-tmp"
    if temp_root.exists():
        shutil.rmtree(temp_root)
    write_manifest()
    print(f"Wrote {len(entries)} asset entries to {MANIFEST}")


if __name__ == "__main__":
    main()
