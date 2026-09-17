# xAI - Grok 4 family

Current as of 17 September 2026. [Sources](../SOURCES.md).

Rule of thumb: **start with Grok 4.6**. Only switch when you have a clear reason - context length, cost, or a specialised coding / media surface. As of this retrieval date, official developer docs still list Grok 4.6 as the current flagship. Grok 4.7 is not generally available and has no public model card, API id, or list price.

## Core text / reasoning models

| Model | Context | Best when | Ideal activities | Price (in / out per 1M) | Notes |
| --- | --- | --- | --- | --- | --- |
| **Grok 4.6** | 500k | Default for almost everything | Coding, agentic workflows, complex reasoning, long-running agents, knowledge work, analysis, chat | $2 / $6 (cached input $0.50) | Most intelligent + fastest. Configurable reasoning (low to xhigh). Official recommendation for code + general use. Powers Grok Build as of 12 Aug 2026. Knowledge cutoff 1 Feb 2026 |
| **Grok 4.5** | 500k | Coding and agents (previous gen) | Strong coding, tool use, agent loops | $2 / $6 | Excellent fallback; keep if a Skills library was tuned on 4.5 |
| **Grok 4.3** | 1M | Need more context or lower cost | Long documents, large codebases, document generation (PDF / sheets / slides) | $1.25 / $2.50 | Reach for this when you exceed 500k |
| **Grok 4.20 Reasoning** | 1M+ | Hard multi-step problems | Deep step-by-step reasoning, complex analysis | $1.25 / $2.50 | Reasoning-focused variant |
| **Grok 4.20 Multi-Agent** | 1M+ | Extremely hard problems | Multi-agent collaboration, parallel exploration | $1.25 / $2.50 | Heavy-style multi-perspective reasoning |
| **Grok Build 0.1** | 256k | Specialised coding agent | Agentic coding, repo refactoring, multi-file edits, debugging, tool-heavy development, web apps | $1 / $2 | Fast + cheap coding specialist. Always-on reasoning. Originally powered Grok Build CLI; CLI default is now 4.6 |
| **Fast variants** (e.g. Grok 4.1 Fast) | Up to 2M | High volume + cost sensitivity | Classification, routing, bulk summarisation, simple chatbots, lightweight agents | ~$0.20 / $0.50 | Best for scale and throughput |

Grok 4.6 modalities: text and image input; function calling, structured outputs, tool use. API id: `grok-4.6`.

## Specialised capabilities

| Capability | Model / API | When to use | Typical |
| --- | --- | --- | --- |
| Image generation and editing | Grok Imagine Image 2.0 / Quality | Creating or editing visuals | Text-to-image, image-to-image, high-quality stills |
| Video generation | Grok Imagine Video 1.5 | Creating videos | Text-to-video, image-to-video |
| Voice / real-time audio | Grok Voice API | Conversational voice interfaces | Real-time speech, STT, TTS, voice agents |

## Consumer modes (grok.com / iOS / Android)

You mainly meet the latest flagship (**Grok 4.6**) through:

| Mode | Reading |
| --- | --- |
| **Auto** | Balanced default |
| **Think / Expert** | Higher reasoning effort |
| **Heavy** | Multi-agent style - highest quality, slower |

SuperGrok unlocks higher limits and advanced modes.

## Effort on the API

4.6 exposes configurable reasoning from **low to xhigh**. Map consumer modes roughly as Auto = low/medium, Think/Expert = high, Heavy = xhigh. Raise effort for difficult coding, architecture, research, and long-running agents. Do not spend Heavy on classification.

## Quick decision guide

- **Most tasks (chat, research, coding, agents)** → **Grok 4.6**
- **Serious coding / building software / autonomous agents** → **Grok 4.6** or **Grok Build 0.1** (cheaper, coding-only, 256k)
- **Very long context** → **Grok 4.3** or the **4.20** series
- **Maximum quality on the hardest problems** → **Grok 4.6** (high / xhigh / Heavy) or **Multi-Agent**
- **High volume / cost-sensitive** → **Fast variants**
- **Images or videos** → **Imagine**
- **Voice** → **Voice API**
