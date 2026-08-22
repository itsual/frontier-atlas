# OpenAI — GPT-5.6 family

Current as of 22 August 2026. [Sources](../SOURCES.md).

Sol, Terra, and Luna are **capability tiers** inside the GPT-5.6 generation. GPT-5.5 is the preceding generation. The **model** sets the intelligence / speed / cost envelope; the **effort** setting sets how much reasoning is applied to this request.

OpenAI’s own positioning: Sol for complex open-ended work, Terra as the pragmatic all-rounder and natural starting point for work previously given to GPT-5.5, Luna for clear, repeatable, high-volume tasks.

In eligible paid ChatGPT plans, Instant through Extra High currently run **GPT-5.6 Sol**; the Pro selection runs **GPT-5.6 Sol Pro**. Terra and Luna are more directly selectable in ChatGPT Work, Codex, and the API.

## Models

| Model | Positioning | Best suited for | Practical reading |
| --- | --- | --- | --- |
| **GPT-5.6 Sol** | Flagship | Complex, ambiguous, high-value work: judgment, analysis, polish, research, coding, design, tool use | Use when quality and judgment matter most |
| **GPT-5.6 Terra** | Everyday workhorse | Routine professional work, analysis, coding, tool workflows, document processing, repeated business tasks | Use for most day-to-day production work |
| **GPT-5.6 Luna** | Fastest / cheapest 5.6 tier | High-volume, well-defined extraction, classification, transformation, structured summarisation | Use when the task is clear and must be repeated at scale |
| **GPT-5.5** | Previous frontier | Existing 5.5 workflows, long-context retrieval, coding, agents, comparison testing | Retain for compatibility; prefer Terra or Sol for new work |

### List prices (API, USD per 1M tokens)

| Model | Input | Output | Notes |
| --- | --- | --- | --- |
| Sol | $5.00 | $30.00 | 21 Aug 2026: API/credit pricing dropped by over 20% for three months (reported promo $4 / $20) |
| Terra | $2.50 | $15.00 | 20% reduction on 30 July 2026. Competitive with GPT-5.5 at lower cost |
| Luna | $1.00 | $6.00 | 80% reduction on 30 July 2026. Default for ChatGPT Free and Go as of August 2026 |

Prompt caching: GPT-5.6 introduces explicit cache breakpoints and a 30-minute minimum cache life. Cache writes bill at 1.25× uncached input; cache reads keep the 90% discount.

Sol also exposes `max` and `ultra` reasoning modes in some surfaces. **Ultra** coordinates multiple agents for complex tasks. Pro is a **quality-first execution mode**, not merely another effort tick.

## What each effort actually means

“Instant” is primarily a ChatGPT label. On Terra, Luna, or API configs the closest analogue is **Light, Low, or None**. Extra High broadly corresponds to `xhigh`.

| Effort | Use it when | Typical | Do not use it merely because |
| --- | --- | --- | --- |
| **Instant / Light–Low** | Simple, low-risk, well-scoped, needs a quick response | Email polish, short summaries, definitions, brainstorming, formatting, routine Q&A | The document is long. Length ≠ difficulty |
| **Medium** | Normal planning and judgment, clear objective | Business writing, proposals, spreadsheet analysis, decks, standard research, coding | You assume High is always better. Medium is often the balance |
| **High** | Several steps, sources, constraints, alternatives, dependencies | Market analysis, technical proposals, root-cause, complex coding, strategy, architecture | You want a longer answer. Ask for length separately |
| **Extra High** | Failure is costly, the problem is ambiguous, assumptions need challenge | Deep research, engineering design, optimisation, security review, due diligence | The prompt is unclear. More reasoning amplifies over-analysis |
| **Pro** | A marginal gain in reliability materially affects the outcome; speed is secondary | Final investment calls, client-critical deliverables, production migration reviews | The task is routine. Pro is not justified for ordinary requests |

OpenAI’s operational rule: **use the lowest effort that reliably meets the quality requirement.** Medium is the balanced starting point.

## Model × effort matrix

### GPT-5.6 Sol

| Instant / Light–Low | Medium | High | Extra High | Pro |
| --- | --- | --- | --- | --- |
| Quick but polished professional responses: email rewriting, brief explanations, brainstorming, simple tables, meeting notes, straightforward file questions | **Recommended general default.** Proposals, reports, document analysis, presentations, everyday research, normal coding, business planning | Complex multi-step work with several documents, sources, constraints or trade-offs. Strategy, technical analysis, market research, architecture, difficult coding | Ambiguous or high-impact work needing deeper exploration and cross-checking. Deep research, engineering trade-offs, difficult RCA, final solution design | Highest-value, quality-first work. Board/client submissions, production-critical reviews, difficult optimisation, final legal/financial/technical checks, long-running complex work |

### GPT-5.6 Terra

| Instant / Light–Low | Medium | High | Extra High | Pro |
| --- | --- | --- | --- | --- |
| Routine professional work at greater efficiency: rewriting, formatting, simple extraction, standard summaries, well-defined transformations | **Best everyday workhorse.** Spreadsheet analysis, tool-enabled workflows, report drafts, coding, structured research, operational execution | Complex but cost- or throughput-sensitive work. Multi-step analysis, document synthesis, agentic workflows, debugging, repeated research | Difficult repeated workflows where Terra has already been tested and meets the bar. Compare against Sol Medium or High before standardising | Not normally shown as “Terra Pro” in ChatGPT. For quality-first work, Sol Pro is the clearer choice |

### GPT-5.6 Luna

| Instant / Light–Low | Medium | High | Extra High | Pro |
| --- | --- | --- | --- | --- |
| **Best high-volume option.** Classification, tagging, field extraction, cleaning, normalisation, routing, templated replies, short summaries | Repeatable tasks that need limited judgment. Structured summaries, document triage, standard QA, batch transformations | Messier high-volume work: exception handling, multi-field extraction, controlled tool use, limited multi-step decisions | Usually not efficient. If the task needs nuanced judgment, move to Terra or Sol rather than pushing Luna harder | Not normally shown as “Luna Pro”. Usually less sensible than changing model |

### GPT-5.5

| Instant / Light–Low | Medium | High | Extra High | Pro |
| --- | --- | --- | --- | --- |
| Fast legacy workflows and apps that must preserve 5.5 behaviour | Recommended baseline for existing 5.5 prompts, long-context retrieval, document-heavy work, tool use, established coding | Difficult existing agents, complex debugging, research, 5.5-to-5.6 migration comparisons | Boundary testing, regression evals, hardest unmigrated workflows | Use 5.5 Pro when consistency with previous 5.5 outputs matters. For new quality-first work, choose 5.6 Sol Pro |

## Recommended combinations

| Activity | Start | Move up when |
| --- | --- | --- |
| Professional email, LinkedIn, message rewrite | **Sol Instant** | Sensitive, political, persuasive, several stakeholders → Sol Medium |
| Meeting minutes and action tables | **Luna Medium** (volume) or **Sol Instant/Medium** (executive polish) | Ambiguous discussion; decisions and owners must be inferred → Sol High |
| Interview feedback / candidate evaluation | **Sol Medium** | Detailed competency framework → Sol High |
| Customer intro / campaign | **Sol Medium** | Strategic account positioning → Sol High |
| Broad market or competitor research | **Sol High** | Conflicting sources, investment-grade conclusion → Extra High |
| Balanced literature review | **Sol Extra High** | Publication-grade synthesis or final exec recs → Pro |
| Process / proposal / treatment-philosophy review | **Sol High** | Final design assumptions, mass-balance, CAPEX/OPEX, client-facing commitments → Extra High or Pro |
| Spreadsheet cleaning, extraction, classification | **Luna Medium** | Formulas, relationships, exceptions, business rules → Terra Medium |
| Spreadsheet analysis and metric diagnosis | **Terra Medium or High** | Causal reasoning, forecasting, conflicting definitions, strategy → Sol High |
| Word doc / report / proposal from references | **Sol Medium** | Structure, terminology, narrative must be followed precisely → Sol High |
| PowerPoint from a brand template | **Sol High** | Visual hierarchy + story + data + template fidelity all critical → Extra High |
| Routine coding, scripts, transforms | **Terra Medium** | Architecture, difficult debugging, unfamiliar codebase, multi-component integration → Sol High |
| Production-critical code or architecture review | **Sol Extra High** | Security, data-loss, reliability, deployment risk → Sol Pro |
| High-volume extraction from PDFs / forms | **Luna Medium** | Exceptions → Terra High or Sol High, not Luna Extra High on the whole batch |
| Existing production prompt validated on 5.5 | **GPT-5.5 Medium** | Migrate only after comparing accuracy, consistency, latency, cost against Terra and Sol |

## Recommended default for mixed professional work

- **Default:** GPT-5.6 Sol Medium
- **Research, technical analysis, strategic decisions:** Sol High
- **Deep research, critical engineering, difficult solution design:** Sol Extra High
- **Final client, management, or production-critical deliverables:** Sol Pro
- **Repeated spreadsheet / document processing:** Terra Medium
- **Bulk extraction, classification, structured transformation:** Luna Medium
- **GPT-5.5:** retain mainly for validated workflows or comparison testing
