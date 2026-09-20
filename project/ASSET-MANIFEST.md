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

Before implementation, declare one canonical source for each. Never mix generated variants.

## Founder
Expected:
- original identity/reference portrait
- approved hero/founder photo
- editorial portrait
- workshop/analysis/CTA photos if available

AI-generated founder approximations must not be presented as real photography.

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
- AVIF/WebP where useful
- fixed dimensions / aspect ratios
- responsive crops
- real alt text
- rights/source ledger before release
