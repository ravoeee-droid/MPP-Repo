# ASSET MANIFEST

The user/client will upload image, logo and content assets into this repository.

## Structure

```
public/assets/
  brand/
  logos/
  founder/
  people/
  performance/
  systems/
  process/
  trust/
  insights/
  icons/
  references/
```

## Auto-wired production paths

The website now attempts these exact paths automatically. If a file is missing, the visual fallback remains visible; once the file is uploaded, it appears without another code edit.

### Founder
- `public/assets/founder/hero.png`
- `public/assets/founder/portrait.png`

### People
- `public/assets/people/recruiting.png`
- `public/assets/people/detail-role.png`
- `public/assets/people/detail-selection.png`

### Performance
- `public/assets/performance/meeting.png`
- `public/assets/performance/detail-rhythm.png`
- `public/assets/performance/detail-coaching.png`

### Systems
- `public/assets/systems/approach-workshop.png`
- `public/assets/systems/structure.png`
- `public/assets/systems/detail-mapping.png`
- `public/assets/systems/detail-process.png`

### Process
- `public/assets/process/01-analyse.png`
- `public/assets/process/02-klarheit.png`
- `public/assets/process/03-umsetzung.png`
- `public/assets/process/04-entwicklung.png`

### Insights
- `public/assets/insights/people.png`
- `public/assets/insights/performance.png`
- `public/assets/insights/systems.png`

## Golden Master references

Expected under `public/assets/references/`:

- `menschen_leistung_systemeqatigiit.png`
- `wachstum_mit_system_people_performance_systems.png`
- `drei_hebel_für_stärkeres_wachstum.png`
- `menschen_systeme_und_zukunft_gestalten.png`
- `vom_gespräch_zur_wirkung.png`

These are DESIGN references, not final full-page images to embed.

## Logo source of truth

Expected:
- primary dark logo
- inverse/light logo
- horizontal lockup
- compact mark
- favicon/app icons

Before production release, declare one canonical source for each and update all instances to that source. Never mix generated variants.

## Founder truth rule

Founder identity verified from MPP's public imprint:
- Mattias Pedro Panthel
- Inhaber MPP / MPP - Recruit

Founder identity and selected public career milestones are now verified against the public MPP imprint and public professional profiles. Any additional biography, quantified experience claims or private client history still require client/source evidence.

AI-generated founder approximations must not be presented as documentary proof photography.

## Icons

Direction:
- 24×24 viewBox
- 1.7px stroke
- round caps/joins
- currentColor
- Citron only for active/signature states

Expected:
People, Recruiting, Performance, Systems, Structure, Analysis, Strategy, Growth, Confidentiality, Calendar, Conversation, Search, Case Study, Review, Check, Arrow, Diagnostic, Leadership, Process, Role.

## Media rules

- no text burned into photographs
- no fake wall logos
- no fake client names
- no fake dashboards/results
- prefer AVIF/WebP
- fixed dimensions/aspect ratios
- responsive crops
- meaningful alt text
- rights/source ledger before release


## IMAGE QUALITY LOCK — HARD GATE

MPP imagery must never be upscaled from small source files.

### Delivery quality
- Next/Image quality: **95 by default**
- Hero / founder-critical images: **quality 100**
- Responsive candidates available up to **3840 px**
- Browser delivery format: **WebP**
- Default `sizes` intentionally favors resolution over aggressive bandwidth saving
- No CSS blur, sharpening filter, fake grain layer or low-resolution placeholder is allowed to become the final image

### Minimum source resolution

The CI quality gate rejects uploaded production assets below these minimums:

| Asset type | Minimum source |
| --- | --- |
| Founder Hero | 2800 × 1800 px |
| Founder Portrait | 2000 × 2600 px |
| Main People / Performance / Systems photos | 2200 × 1600 px |
| Systems workshop | 2400 × 1600 px |
| Process images | 1600 × 1200 px |
| Insight/editorial images | 1800 × 1400 px |

For retina-heavy or wide desktop hero use, prefer source masters around **3200–4000 px on the long edge**.

### Source rule

If the only available image is smaller than the minimum:
1. do **not** stretch it into a large website slot,
2. obtain the original / higher-resolution export,
3. or regenerate/re-export the image at a genuinely higher native resolution.

Simply exporting a 1024 px image as a 3000 px WebP does not create real detail and does not pass the visual quality standard.

### Compression rule

Never run final MPP photography through:
- WhatsApp compression,
- screenshots,
- social-media downloads,
- low-quality CloudConvert/WebP settings,
- repeated JPEG → WebP → JPEG conversion chains.

Use the original master file whenever possible.


## Current upload wiring

The current production masters uploaded on 2026-09-20 are PNG source files. They are wired into the runtime paths above, and Next/Image handles responsive browser delivery. Do not pre-compress them again before use.
