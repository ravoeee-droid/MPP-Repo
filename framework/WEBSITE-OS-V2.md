# Website OS V2

Website OS V2 turns the blueprint into a product system, not a one-off website generator.

## Product contract

Every premium customer project is generated as four connected layers:

1. **Public Website** — brand, story, conversion, SEO/GEO, performance.
2. **Customer Cockpit (`/admin`)** — leads, CRM, traffic, conversion, SEO, reputation, content, automations, opportunities and health.
3. **Data & Integration Layer** — analytics events, CRM state, Search Console, business data, reviews and runtime telemetry.
4. **Growth Loop** — detect opportunity → recommend action → execute/test → measure → learn.

A customer should never receive a website that becomes a black box after launch.

## Master pipeline

`INPUT → RESEARCH → CUSTOMER MIND → VALUE → POSITIONING → SUBJECTIVITY FIREWALL → STORY → UX → COPY → ART DIRECTION → COMPONENT INTELLIGENCE → BUILD → CODE QA → VISUAL QA → PERFORMANCE/A11Y/SEO QA → HUMAN TASTE → DEPLOY → COCKPIT → EXPERIMENT → LEARN`

## Core agents

### Research Agent
Collects only source-backed facts from the existing website and approved public sources. Extracts services, people, proof, locations, language, media, FAQs and existing CTAs. Never upgrades an inferred statement into a fact.

### Customer Mind Agent
Models functional problem, emotional problem, desired identity, values, fears, objections, decision criteria, trust requirements and language used by customers.

### Strategy Agent
Produces the real product/value, factual differentiation, competitive alternatives, positioning and a coherent strategic hierarchy.

### Subjectivity Firewall
Removes subjective adjectives and superlatives from the positioning. If the value proposition collapses without words such as `best`, `premium`, `innovative`, `leading`, `tailored`, or similar puffery, strategy returns to discovery.

### Story Director
Customer is the hero; the company is the guide. Defines current state, desired state, tension, mechanism, proof moments and next action.

### UX Director
Controls cognitive load, information hierarchy, mental-model compatibility, continuity, discoverability and interaction clarity. Novelty may improve the brand expression but must not make standard tasks harder.

### Copy Director
Writes from evidence and customer language. Claims require proof. Generic CTA and filler language are blocked.

### Art Director
Creates a project-specific design DNA. Every section must fit it. One signature interaction is preferred over many disconnected effects.

### Component Architect
Searches the internal registry first, then 21st.dev / approved component sources when necessary. Components are adapted, not pasted blindly.

### Builder
Builds server-first Next.js output with strict dependency and performance budgets.

### Quality Director
Cannot be the Builder. Runs concerns/confusions/conflicts, anti-slop, code, visual, mobile, accessibility, SEO/GEO, performance, conversion and data-integrity gates.

### Growth Director
After launch, turns behavior and business outcomes into prioritized experiments. It must optimize for qualified business outcomes, not vanity metrics.

## Tool orchestration

Tools are capabilities, not mandatory dependencies. The orchestrator selects the smallest stack that can meet the project quality target.

### Research
- Crawl4AI: structured crawl / LLM-ready extraction
- Stagehand: browser interaction when deterministic crawling is insufficient

### Component system
- Storybook: internal component registry and isolated component QA
- 21st.dev + approved component ecosystems: discovery source

### Code quality
- TypeScript
- ESLint
- Knip: dead code / unused exports / dependency cleanup
- Size Limit: bundle budgets

### Browser, accessibility and visual QA
- Playwright
- axe
- Pa11y CI
- Argos or equivalent visual regression
- AI Visual Director screenshot review

### Performance and SEO
- Lighthouse CI
- Unlighthouse full-site scanning
- sitespeed.io for Elite projects or runtime performance investigations
- schema-dts for typed structured data

### Copy quality
- textlint / Vale with Website Master rules
- Proof Firewall
- Subjectivity Firewall
- repetition / generic CTA / empty superlative detection

### Growth
- PostHog for analytics, replay, funnels and product insights when appropriate
- GrowthBook for controlled experiments where meaningful sample volume exists

## Project modes

### Standard
Local or focused company website. Uses the core strategy/copy/design gates, Playwright, accessibility, Lighthouse, tracking and customer cockpit. Avoid heavyweight tooling unless a need is detected.

### Pro
Adds deeper competitor research, visual regression, component-registry QA, full-site performance/SEO scanning and stronger CRM/growth integrations.

### Elite
Adds advanced browser research, sitespeed diagnostics, experimentation infrastructure, more extensive visual QA and continuous optimization loops.

The mode controls effort and tooling, never the integrity rules. Fake proof, broken conversion, inaccessible critical UI and release without runtime QA are blocked in every mode.

## Two readiness states

### Plan Ready
Strategy + evidence + story + page architecture + design direction + component plan score >= 90 and zero blockers.

### Release Ready
Only after the real rendered build passes:
- forms and conversions
- mobile and responsive behavior
- keyboard/accessibility
- console/runtime errors
- analytics events
- metadata/schema/indexability
- Core Web Vitals/performance budget
- visual regression
- human taste review
- cockpit data integrity

## Learning loop

After every project, store only reusable learnings, never customer-private data:
- component acceptance/rejection
- recurring visual corrections
- conversion hypotheses and outcomes
- performance regressions and fixes
- copy patterns rejected as generic
- quality-gate failures

The system should become more opinionated over time, not merely larger.
