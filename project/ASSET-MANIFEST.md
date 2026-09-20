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
- `public/assets/founder/hero.webp`
- `public/assets/founder/portrait.webp`

### People
- `public/assets/people/recruiting.webp`

### Performance
- `public/assets/performance/meeting.webp`

### Systems
- `public/assets/systems/approach-workshop.webp`
- `public/assets/systems/structure.webp`

### Process
- `public/assets/process/01-analyse.webp`
- `public/assets/process/02-klarheit.webp`
- `public/assets/process/03-umsetzung.webp`
- `public/assets/process/04-entwicklung.webp`

### Insights
- `public/assets/insights/people.webp`
- `public/assets/insights/performance.webp`
- `public/assets/insights/systems.webp`

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

Detailed biography, years of experience and career milestones still require client/source evidence.

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
