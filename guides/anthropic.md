# Anthropic  -  Claude 5 generation

Current as of 22 August 2026. Prices are Claude **API list** rates (USD per 1M tokens). Bedrock, Vertex AI, and Foundry may differ. [Sources](../SOURCES.md).

## Current lineup

| Model | API ID | Price (in / out) | Latency | Context / max out | Best suited for |
| --- | --- | --- | --- | --- | --- |
| **Claude Fable 5** | `claude-fable-5` | $10 / $50 | Slower | 1M / 128k | Next-generation intelligence for long-running agents  -  hardest problems, highest capability |
| **Claude Opus 5** | `claude-opus-5` | $5 / $25 | Moderate | 1M / 128k | Complex agentic coding and enterprise work  -  recommended quality-first starting point |
| **Claude Sonnet 5** | `claude-sonnet-5` | $2 / $10 | Fast | 1M / 128k | Best combination of speed and intelligence  -  production workloads at volume |
| **Claude Haiku 4.5** | `claude-haiku-4-5` | $1 / $5 | Fastest | 200k / 64k | Fastest model with near-frontier intelligence  -  classify, route, extract, subagents |
| Opus 4.8 (legacy) | `claude-opus-4-8` | $5 / $25 | Moderate | 1M / 128k | Still supported; migrate to Opus 5 |
| Sonnet 4.6 (legacy) | `claude-sonnet-4-6` | $3 / $15 | Fast | 1M / 128k | Still supported; migrate to Sonnet 5 |

Footnotes:

- **Claude Mythos 5** shares Fable 5’s specs and pricing but is invitation-only inside Project Glasswing.
- Fable 5 uses the tokenizer introduced with Opus 4.7. The same text produces **roughly 30% more tokens** than pre-4.7 models.
- Sonnet 5’s introductory **$2 / $10** was made permanent (earlier charts showed $3 / $15 as then-standard).

## What effort does

The `effort` parameter affects **all** tokens in the response: text, tool calls, function arguments, and thinking. It is not a strict budget. At lower effort Claude still thinks on hard problems  -  just less than it would at higher effort.

Supported on Fable 5, Mythos 5 and Preview, Opus 4.5 - 5, Sonnet 4.6 and 5. **Not** supported on Haiku 4.5  -  use extended thinking `budget_tokens` instead.

| Level | What it does | Typical activities |
| --- | --- | --- |
| `low` | Most efficient. Significant token savings, some capability reduction | Classification, extraction, lookups, routing, subagent steps, high-volume chat |
| `medium` | Balanced, moderate savings | Everyday agentic tasks, code generation, tool-heavy workflows where cost matters |
| `high` (default) | Equivalent to not setting the parameter | Complex reasoning, difficult coding, agentic tasks |
| `xhigh` | Extended capability for long-horizon work | Agentic / coding runs over ~30 minutes, million-token budgets, repeated tool calling, deep search |
| `max` | No constraints on token spending | Frontier research, hardest debugging, deepest analysis  -  only when evals show headroom above `xhigh` |

**With tools:** lower effort combines operations, makes fewer calls, skips preamble, confirms tersely. Higher effort plans before acting, calls more tools, summarises changes, comments more thoroughly.

API default is `high` (including Claude Code). Set it **explicitly**. On Opus 5, effort is **not a length control**  -  prompt for length. Changing effort mid-conversation **invalidates prompt caching**.

At `xhigh` or `max`, thinking cannot be disabled on Opus 5 (400 if you try). Give the model room: start `max_tokens` at **64k** and tune. On Fable 5, `max_tokens` is a hard cap on thinking + text.

Opus 5 and Opus 4.8 have a **fast mode** research preview: up to 2.5× output speed at premium pricing.

## Model × effort

### Fable 5

| `low` | `medium` | `high` | `xhigh` | `max` |
| --- | --- | --- | --- | --- |
| Routine work, interactive sessions where you want speed. Lower effort on Fable 5 still often exceeds `xhigh` on prior models | Standard agentic and analysis work at lower cost | **Start here.** Anthropic’s default for most Fable tasks | Most capability-sensitive workloads  -  very long autonomous runs, multi-hour coding | Frontier-level only. Output is $50/MTok |

### Opus 5

| `low` | `medium` | `high` | `xhigh` | `max` |
| --- | --- | --- | --- | --- |
| Use liberally wherever evals show quality holds  -  drafting, summaries, scoped edits | Everyday enterprise agents, document workflows, moderate coding | **Start here.** Default; adjust on evals | Demanding coding and agentic work  -  large refactors, multi-repo, long tool loops | When unconstrained spending is justified |

### Sonnet 5

| `low` | `medium` | `high` | `xhigh` | `max` |
| --- | --- | --- | --- | --- |
| High-volume or latency-sensitive. Chat and non-coding where turnaround wins | Cost-saving step-down. Comparable to Sonnet 4.6 at `high`  -  a good production default | **Start here.** Complex reasoning, coding, agents where quality > speed | Hardest coding/agentic tasks  -  cheaper Opus-class effort on hard coding | Rarely needed; consider Opus 5 at `high` instead |

### Haiku 4.5

Effort parameter is **not supported**. Use for classification, entity extraction, intent routing, guardrails, parallel subagents, simple Q&A at scale.

### Opus 4.8 (legacy)

Older guidance: **start at `xhigh` for coding and agentic use cases**, `high` for most other intelligence-sensitive work. Re-sweep when you migrate  -  Opus 5 / Fable 5 start at `high`.

### Sonnet 4.6 (legacy)

Start at `medium`. `xhigh` is not supported. Sonnet 5 at `medium` is the documented analogue of 4.6 at `high`.

## Rules of thumb

- **Defaults differ by surface.** Still set effort explicitly.
- **Raise effort, don’t prompt around it.** Shallow reasoning → turn the dial, don’t add “think harder”.
- **Re-sweep on migrate.** Do not carry 4.7/4.8 effort settings into 5th-gen models.
- **Don’t flip effort if you cache.**

## Quick decision flow

1. **Haiku 4.5** for classify / route / extract at scale.
2. **Sonnet 5 at `medium` or `high`** for most production agents.
3. **Opus 5 at `high`** when quality is the priority; `xhigh` for long coding runs.
4. **Fable 5 at `high`** only for the hardest problems where Opus 5 is visibly falling short.
