# STACK

## Baseline

- **Framework:** Next.js App Router, TypeScript
- **UI foundation:** shadcn/ui + accessible primitives
- **Styling:** Tailwind CSS + CSS variables/design tokens
- **Motion:** Motion for React as default; GSAP only for sequences that genuinely need timeline/ScrollTrigger-level control
- **Icons:** Lucide
- **Forms:** React Hook Form + Zod or Server Actions + Zod depending on complexity
- **Images:** `next/image`, responsive `sizes`, AVIF/WebP where appropriate, Sharp for preprocessing
- **Video:** poster-first, lazy loading, autoplay only muted and justified, mobile fallbacks
- **Hosting:** Vercel
- **Analytics:** Vercel Web Analytics + Speed Insights; Microsoft Clarity where useful; business-specific conversion events
- **SEO:** Next metadata APIs, JSON-LD, sitemap, robots, canonical strategy, OG images
- **QA:** Playwright + axe, Lighthouse CI/budget, typecheck, lint, visual/manual mobile QA

## Curated UI / inspiration layer

### Tier A — default sources

1. **21st.dev** — discovery layer and agent-ready registry. Use to search for high-quality sections and interaction patterns, then adapt source into our own system.
2. **shadcn/ui** — accessible base primitives and project-owned source.
3. **Motion** — primary animation layer.

### Tier B — specialist sources

- **Magic UI** — restrained marketing motion, beams, marquees, reveal effects, bento patterns.
- **Aceternity UI** — cinematic/experimental marketing moments; use sparingly.
- **React Bits** — text, background and interaction primitives when high customization is needed.
- **Motion Primitives / Animate UI / Origin UI / Cult UI** — specialist blocks and interaction references.
- **Radix / Base UI primitives** — behavior-first components when building custom visual systems.

### Tier C — advanced visual layer

- **Three.js / React Three Fiber** — only for product visualization, spatial storytelling or a true signature moment.
- **Spline** — fast 3D prototyping/embedding when the asset cost is justified.
- **WebGL shaders** — only with a static fallback and measured performance budget.

## Content / CMS

Choose per project, not by habit:

- **Sanity:** editorial content, structured case studies, multi-language marketing sites.
- **Supabase/Postgres:** application data, portals, dynamic tools, calculators requiring persistence.
- **Static typed content:** fastest option for small sites with rare content updates.

## Integrations

Select only what supports the business outcome:

- CRM / lead routing
- booking/calendar
- email transactional flows
- Meta Pixel / Google Ads conversion tags
- Google Search Console
- Microsoft Clarity
- maps/reviews where legally and commercially suitable
- webhook/n8n automation for lead handling

## Dependency rule

Every dependency must pass four questions:

1. Does it solve a real project need?
2. Can we own/customize the result?
3. Is the performance cost acceptable?
4. Is accessibility/reduced-motion behavior controllable?

If not, do not add it.

## Version policy

- Pin production dependencies.
- Renovate/Dependabot-style upgrade workflow rather than blind `latest` updates.
- Security patches take priority.
- Major framework upgrades only after preview deployment and regression checks.
- Keep agent instructions/version-matched docs in the repo when supported.

## Source registry

- 21st: https://21st.dev/
- 21st MCP: https://21st.dev/mcp
- shadcn/ui: https://ui.shadcn.com/
- Motion: https://motion.dev/
- Magic UI: https://magicui.design/
- Aceternity UI: https://ui.aceternity.com/
- React Bits: https://reactbits.dev/
- Playwright: https://playwright.dev/
- web.dev Core Web Vitals: https://web.dev/articles/vitals
- Vercel Speed Insights: https://vercel.com/docs/speed-insights
