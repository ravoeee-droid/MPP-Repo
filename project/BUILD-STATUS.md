# MPP BUILD STATUS

Updated: 2026-09-20

## Core build completed

- Next.js 16 / React 19 foundation
- editorial MPP design tokens and typography
- responsive Golden Master header + mobile navigation
- Hero aligned to selected reference
- Hero Operating Line
- Operating System aligned to selected reference
- Services aligned to selected reference
- interactive 5-step Growth Diagnostic
- diagnostic → contextual contact journey for People / Performance / Systems
- Problem / category-reframing section
- Founder section aligned to selected reference
- Process section aligned to selected reference
- People / Performance / Systems Proof Engine
- Trust OS
- Fit / qualification
- editorial Insights
- FAQ
- Final CTA
- Footer
- Mia · MPP KI-Assistentin front-end shell
- GSAP reveal / scroll choreography
- Lenis synchronized with GSAP ScrollTrigger
- reduced-motion support
- skip links / mobile navigation accessibility layer
- preview noindex + robots disallow lock
- automatic asset loader with safe fallback state

## Routes built

- /
- /recruiting
- /performance
- /systems
- /ueber-mpp
- /case-studies
- /insights
- /kontakt
- /impressum
- /datenschutz
- custom 404

## Asset pipeline

Core imagery is auto-wired to exact paths in `project/ASSET-MANIFEST.md`.

When approved WebP files are uploaded to those locations, the fallback slots disappear automatically without another layout rewrite.

Still needed:
- canonical dark/light logo assets
- favicon/app icons
- Golden Master reference boards in /references
- final approved founder/people/performance/systems/process/insights images
- icon SVG set
- approved Google reviews
- approved customer logos
- verified case-study evidence
- exact BAFA/funding evidence if used
- any TÜV/ISO/IHK/membership proof if used

## Verified public facts in use

- owner: Mattias Pedro Panthel
- MPP - Recruit
- Cologne address/contact data
- recruiting / matching
- sales support / coaching
- business consulting including process optimisation, organisational development and strategic personnel management

MPP's current website states that numerous services are BAFA-eligible. This remains a SOURCE CLAIM and is not presented as a certification badge or guaranteed funding.

## Production blockers

See `project/LEGAL-BLOCKERS.md`.

Before launch:
- final privacy implementation matched to actual stack
- booking / lead-delivery decision
- Mia provider + approved knowledge base
- analytics / consent decision
- real proof assets
- logo source of truth
- final legal/business review
- production SEO index switch

## Verification state

GitHub Actions workflow exists for:
- dependency install
- TypeScript check
- production build

Current evidence:
- Code authored: PASS
- GitHub writes: PASS
- Local production build: UNVERIFIED
- CI result: UNVERIFIED until an observable check completes
- Visual QA: UNVERIFIED until rendered screenshots are available
- Runtime QA: UNVERIFIED

Per framework, UNVERIFIED is not PASS.

## Next exact pass after asset upload

1. verify auto-wired images
2. compare Hero at 1440px with Golden Master reference
3. compare Operating System with reference
4. compare Services with reference
5. compare Founder + Process with references
6. tune image crops / type / spacing
7. tune scroll choreography
8. visual QA 1440 + 1920
9. visual QA 390 + 430 + 768
10. regression fix loop
11. trust/content replacement
12. Release Evidence

## Release state

**REVISION_REQUIRED / BUILD IN PROGRESS**

No final production deploy without explicit human approval.
