# MPP LEGAL / PRIVACY BLOCKERS

Status: STOP-SHIP UNTIL RESOLVED

This file documents implementation dependencies that must be resolved before production release. It is not legal advice.

## Verified legal identity

- MPP - Recruit
- Inhaber: Mattias Pedro Panthel
- Benfleetstraße 11, 50858 Köln, Deutschland
- Telefon: 0176 4516719
- E-Mail: mpp-recruit@web.de

The new imprint route uses the current § 5 DDG terminology.

## Privacy blockers before production

The final Datenschutzerklärung must match the real production stack. Do not copy old/template language blindly.

Freeze and document:
- Vercel hosting and processing setup
- contact / lead delivery
- booking provider, if any
- analytics provider(s)
- consent manager / cookie behavior
- Clarity, if used
- advertising pixels, if used
- Growth Diagnostic storage policy
- Mia AI provider/model/data path
- CRM / human handoff
- logs / monitoring
- external fonts/media
- embedded third parties
- retention periods
- data-subject request contact

## Mia / AI

Before production:
- AI label remains visible
- approved knowledge base only
- no real-employee impersonation
- privacy disclosure matches provider and data path
- abuse / prompt-injection protection
- no sensitive data requested unless intentionally designed and reviewed
- human handoff defined

## Analytics

Do not activate non-essential analytics or ad tracking until consent and privacy implementation are finalized.

## Release blocker

Production release remains blocked until:
1. integrations are frozen
2. privacy copy is reconciled to integrations
3. consent/cookie behavior is tested
4. legal pages are reviewed by the responsible business/legal party
