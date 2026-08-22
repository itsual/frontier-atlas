# Contributing to Frontier Atlas

Corrections are welcome. New folklore is not.

## What belongs here

- A **dated** change to a model’s positioning, list price, context window, effort parameter, or vendor-recommended default.
- A new **current** model in a family this atlas already covers (GPT, Claude, Grok, Gemini, plus the specialised media/on-device siblings).
- A clearer *move up when* clause that does not invent capability.

## What does not

- Unsourced benchmark screenshots.
- “X is smarter than Y” as a routing rule.
- Effort advice that contradicts the vendor’s own docs without quoting them.

## How to propose a change

1. Open an issue or PR against `main`.
2. Cite a **primary** URL (vendor blog, platform docs, model card). Secondary round-ups are not enough.
3. Put the retrieval date in the commit or PR body (`as of YYYY-MM-DD`).
4. If a price is promotional, say when it expires. List price and promo are different cells.
5. If you change a default (for example Claude coding effort `xhigh` → `high`), note the generation the old default belonged to so we do not silently rewrite history.

## Style

- Tables over prose. *Move up when* over adjectives.
- No emoji in headings.
- Model IDs in `code` font. Effort values in `code` font when they are API parameters (`high`, `xhigh`), title case when they are ChatGPT labels (Instant, Pro).

## Date

The atlas is labelled with a single “current as of” stamp on the README. Bump it when the facts change.
