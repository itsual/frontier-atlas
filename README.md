> [!IMPORTANT]
> **Pricing disclaimer:** Pricing, availability, and model behavior can change. For the latest pricing and product details, refer to the official vendor website or documentation before making a decision.

<p align="center">
  <img src="assets/banner.svg" alt="Frontier Atlas  -  Pick the model. Match the effort." width="100%" />
</p>

<p align="center">
  <a href="https://github.com/itsual/frontier-atlas/blob/main/guides/openai.md"><img src="https://img.shields.io/badge/OpenAI-GPT--6%20Astra-7d9b8a?style=flat-square&labelColor=0c0b09" alt="OpenAI GPT-6 Astra" /></a>
  <a href="https://github.com/itsual/frontier-atlas/blob/main/guides/anthropic.md"><img src="https://img.shields.io/badge/Anthropic-Claude%205.1-c4896c?style=flat-square&labelColor=0c0b09" alt="Anthropic Claude 5.1" /></a>
  <a href="https://github.com/itsual/frontier-atlas/blob/main/guides/xai.md"><img src="https://img.shields.io/badge/xAI-Grok%204.6-d8d2c4?style=flat-square&labelColor=0c0b09" alt="xAI Grok 4.6" /></a>
  <a href="https://github.com/itsual/frontier-atlas/blob/main/guides/google.md"><img src="https://img.shields.io/badge/Google-Gemini%203.8-7a8aa0?style=flat-square&labelColor=0c0b09" alt="Google Gemini 3.8" /></a>
</p>

<p align="center">
  <em>A field guide to frontier models  -  which one, how hard it should think, and when to move up.</em><br />
  Current as of <strong>17 September 2026</strong>
</p>

<p align="center">
  <a href="docs/index.html"><strong>Open the interactive desk →</strong></a>
  &nbsp;·&nbsp;
  <a href="#the-five-second-desk">Five-second rule</a>
  &nbsp;·&nbsp;
  <a href="#the-labs">The labs</a>
  &nbsp;·&nbsp;
  <a href="SOURCES.md">Sources</a>
</p>

---

Four labs. Dozens of model IDs. Effort dials that do not mean the same thing twice.

**Frontier Atlas** is a routing desk, not a leaderboard. You describe the work  -  a client email, a thousand PDFs, a production review  -  and you get a **model x effort** pair, the reason it fits, and the exact condition that should make you step up. Nothing here is a benchmark claim. Every cell is a documented default, a vendor recommendation, or a compiled activity from the cheat sheets this repo was built from.

This edition covers the **closed frontier at four labs**. Open-weight near-frontier models (DeepSeek, Kimi, GLM, Qwen, and peers) are out of scope until they get their own guide. They can be the right cost choice; they are not routed here.

> Use the **lowest effort that reliably meets the quality bar.** Higher is not automatically better. Length of the source document is not by itself a reason to reach for High.

## Contents

1. [The five-second desk](#the-five-second-desk)
2. [How to read a recommendation](#how-to-read-a-recommendation)
3. [The labs](#the-labs)
4. [Activity playbook](#activity-playbook)
5. [Principles that actually change the answer](#principles-that-actually-change-the-answer)
6. [Interactive explorer](#interactive-explorer)
7. [What's in this repo](#whats-in-this-repo)
8. [Accuracy and date](#accuracy-and-date)

---

## The five-second desk

If you only have five seconds, start here.

| Situation | Choose |
| --- | --- |
| I just need a good answer quickly. | **GPT-5.6 Sol Instant** |
| This is normal professional work. | **GPT-5.6 Sol Medium** |
| I have many routine tasks to process. | **GPT-5.6 Luna Medium** |
| I need a capable workhorse for repeated analysis or coding. | **GPT-5.6 Terra Medium** |
| There are several documents, sources, calculations or trade-offs. | **GPT-5.6 Sol High** |
| This is ambiguous, difficult, and important enough to justify deeper checking. | **GPT-5.6 Sol Extra High** |
| This is the final, high-stakes 5.6 deliverable and a small quality improvement matters. | **GPT-5.6 Sol Pro** |
| Sol Extra High / Sol Pro is falling short, or the job is computer use. | **GPT-6 Astra** |
| The workflow is already validated on GPT-5.5 and consistency matters. | **GPT-5.5 Medium / High** |
| I am shipping a Claude production agent. | **Sonnet 5 at medium or high** |
| Quality is the priority on Claude, including long coding runs. | **Opus 5 at high** (xhigh if the run is long) |
| Opus 5 is visibly falling short. | **Fable 5.1 at high** |
| Most Grok tasks  -  chat, research, coding, agents. | **Grok 4.6** |
| Most Gemini work. | **Gemini 3.8 Flash** |
| Low-latency Gemini voice agent. | **Gemini 3.8 Live** |

Full activity tables  -  email, decks, mass-balance reviews, PDF extraction, on-device, video  -  live in [`guides/`](guides/).

```mermaid
flowchart TD
  A[What is the job?] --> B{Is the output pixels?}
  B -->|Image| IMG[Grok Imagine Image 2.0 or Imagen]
  B -->|Video| VID[Grok Imagine Video 1.5 or Veo]
  B -->|Voice| LIVE[Gemini 3.8 Live or Grok Voice]
  B -->|Text / code / agents| C{Must it stay on-device?}
  C -->|Yes| NANO[Gemini Nano]
  C -->|No| D{Is it high-volume and well-defined?}
  D -->|Yes| VOL[Luna Medium · Haiku 4.5 · Flash-Lite · Grok Fast]
  D -->|No| E{Which lab are you already on?}
  E -->|OpenAI| OA[Sol Medium  -  raise effort, don't swap labs yet]
  E -->|Anthropic| AN[Sonnet 5 high  -  Opus 5 if quality is the point]
  E -->|xAI| XA[Grok 4.6  -  4.3 only for 1M context]
  E -->|Google| GO[3.8 Flash  -  3.1 Pro only if Flash struggles]
  OA --> F{Stakes / ambiguity?}
  F -->|Several sources or trade-offs| SOLH[Sol High]
  F -->|Ambiguous and costly to get wrong| SOLX[Sol Extra High]
  F -->|Final client / production-critical on 5.6| SOLP[Sol Pro]
  F -->|Sol still falling short or computer use| AST[GPT-6 Astra]
  AN --> G{Is Opus 5 falling short?}
  G -->|Yes| FAB[Fable 5.1 at high]
  G -->|Long coding run| OPX[Opus 5 at xhigh]
```

---

## How to read a recommendation

Every pair in this atlas has three layers. Skip any of them and the table becomes folklore.

| Layer | What it answers | What it is not |
| --- | --- | --- |
| **Model** | Which intelligence / speed / cost envelope. | A moral ranking of labs. |
| **Effort** | How much reasoning *this request* is allowed to spend. | A length control. Prompt for length separately. |
| **Move up when** | The condition that should change the pair. | A reason to live on Pro / max / Astra all day. |

**Effort names do not travel.** ChatGPT *Instant* is roughly API *light / low / none*. Claude `high` is the default, not a panic setting. Grok consumer *Heavy* is the cousin of API `xhigh`. Gemini mostly routes by **tier** (Flash vs Pro vs Lite), with thinking as a separate control.

If you change effort in the middle of a Claude conversation that relies on prompt caching, you throw the cache away. Vary effort across workloads, not inside a cached thread.

---

## The labs

Four short portraits. Open a guide when you need the full matrix.

<table>
<tr>
<td width="50%" valign="top">

### OpenAI  -  GPT-6 and GPT-5.6
[Full guide](guides/openai.md)

Astra is the **generation ceiling**. Sol, Terra, and Luna are **capability tiers** inside GPT-5.6. The number is the generation; the name is the tier.

| Model | Role | List price (in / out per 1M) |
| --- | --- | --- |
| **GPT-6 Astra** | Ceiling. Hardest end-to-end and computer-use work. | $10 / $50 |
| **Sol** | 5.6 flagship. Quality and judgment. | $4 / $20 |
| **Terra** | Everyday workhorse. GPT-5.5's successor for production. | $2 / $12 |
| **Luna** | Fast, cheap, well-defined volume. | $0.20 / $1.20 |
| **GPT-5.5** | Legacy. Keep for validated prompts. |  -  |

Default for mixed professional work: **Sol Medium**. Move to **Astra** only when Sol Extra High / Sol Pro is not enough, or the job is computer use.

GPT-5.6 list prices above replace the 22 August desk ($5/$30 Sol, $2.50/$15 Terra, $1/$6 Luna). Cached input still gets the steep discount. Confirm live rates before you standardise.

</td>
<td width="50%" valign="top">

### Anthropic  -  Claude 5
[Full guide](guides/anthropic.md)

Effort is a first-class API parameter: `low` · `medium` · `high` · `xhigh` · `max`. It taxes *every* token  -  text, tools, thinking.

| Model | Role | List price |
| --- | --- | --- |
| **Fable 5.1** | Ceiling. Long-horizon agents. | $10 / $50 |
| **Opus 5** | Quality-first default. | $5 / $25 |
| **Sonnet 5** | Production agents at volume. | $2 / $10 |
| **Haiku 4.5** | Classify / route / extract. | $1 / $5 |

Default: **Sonnet 5 at `high`** for production; **Opus 5 at `high`** when quality is the point; **Fable 5.1 at `high`** only when Opus 5 is visibly falling short.

Haiku 4.5 does **not** take `effort`. Use `budget_tokens` instead. Mythos 5.1 shares Fable 5.1's specs and is invitation-only. Fable 5 remains the previous ceiling.

</td>
</tr>
<tr>
<td width="50%" valign="top">

### xAI  -  Grok 4
[Full guide](guides/xai.md)

Official line: start with **Grok 4.6**. Switch only for context, cost, or a specialised surface. Grok 4.7 is not generally available as of 17 September 2026.

| Model | Role | Context | List price |
| --- | --- | --- | --- |
| **Grok 4.6** | Flagship. Code + everything else. | 500k | $2 / $6 |
| **Grok 4.3** | Longer context, cheaper. | 1M | $1.25 / $2.50 |
| **Grok 4.20 Reasoning** | Hard multi-step analysis. | 1M+ | $1.25 / $2.50 |
| **Grok 4.20 Multi-Agent** | Parallel exploration. | 1M+ | $1.25 / $2.50 |
| **Grok Build 0.1** | Coding specialist. | 256k | $1 / $2 |
| **Fast variants** | Volume / throughput. | up to 2M | ~$0.20 / $0.50 |

Consumer modes: **Auto** · **Think / Expert** · **Heavy** (multi-agent). Grok Build CLI default moved to 4.6 on 12 August 2026. Knowledge cutoff for 4.6: 1 February 2026.

Media: **Imagine Image 2.0**, **Imagine Video 1.5**, **Voice API**.

</td>
<td width="50%" valign="top">

### Google  -  Gemini 3
[Full guide](guides/google.md)

Google routes primarily by **tier**, not a universal effort dial. The current Flash workhorse is **3.8 Flash** (2 September 2026). 3.7 Flash is the previous default from the 22 August desk.

| Model | Role | Notes |
| --- | --- | --- |
| **3.8 Flash** | Workhorse. Coding + agents. | Start here. 1M in / 64k out. |
| **3.7 / 3.6 / 3.5 Flash** | Previous Flash generations. | Keep if pinned. |
| **Flash-Lite** | High-throughput, cheap. | Downgrade only if the task is simple. |
| **3.8 Live** | Low-latency voice. | Default Live API model. |
| **3.1 Pro** | Preview. Heavy lifting. | Upgrade only if Flash struggles. |
| **Nano** | On-device / offline. | Privacy and zero-latency. |

3.8 (and 3.6 / 3.7) Flash introductory price: **$0.75 / $3.75** per 1M through 31 December 2026; **$1.50 / $7.50** from 1 January 2027.

Media: **Imagen**, **Veo**, **Gemini Omni Flash**.

</td>
</tr>
</table>

---

## Activity playbook

A sample of the desk. The full list  -  with *move up when* clauses  -  is in the interactive explorer and the lab guides.

| Work | Start here | Move up when |
| --- | --- | --- |
| Email / LinkedIn rewrite | **Sol Instant** | Sensitive, political, or multi-stakeholder → Sol Medium |
| Meeting minutes at volume | **Luna Medium** | Ambiguous decisions must be inferred → Sol High |
| Market / competitor research | **Sol High** | Conflicting sources, investment-grade → Extra High |
| Literature review, both sides | **Sol Extra High** | Publication-grade or exec recs → Sol Pro, then Astra |
| Spreadsheet cleaning | **Luna Medium** | Formulas and business rules → Terra Medium |
| Spreadsheet diagnosis | **Terra Medium / High** | Causal / forecast / strategy → Sol High |
| Slides from a brand template | **Sol High** | Hierarchy + story + fidelity all critical → Extra High |
| Routine coding | **Terra Medium** · **Grok 4.6** · **Sonnet 5 high** · **3.8 Flash** | Architecture / unfamiliar repo → Sol High |
| Production-critical review | **Sol Extra High** | Security, data-loss, deploy risk, computer use → Sol Pro, **Astra**, or Fable 5.1 |
| Bulk PDF / form extraction | **Luna Medium** · **Haiku 4.5** | Exceptions only → Terra High / Sol High |
| Long-running coding agent | **Fable 5.1 high** or **Opus 5 xhigh** | Give a large `max_tokens` (start at 64k) |
| On-device / offline | **Gemini Nano** |  -  |
| Voice agent | **Gemini 3.8 Live** · **Grok Voice** | Extended Thinking if the agent must reason first |
| Image / video | **Imagine** or **Imagen / Veo** |  -  |

---

## Principles that actually change the answer

1. **Lowest effort that meets the bar.** OpenAI, Anthropic, and xAI all publish this. Raise effort only where representative evals show a gain.
2. **Effort is not length.** On Claude Opus 5, changing effort does not reliably shorten responses. Say how long you want the answer.
3. **Raise effort, don't prompt around it.** If reasoning is shallow, turn the dial. If the prompt is vague, Extra High / `max` will over-analyse.
4. **Don't flip effort mid-cache.** Claude invalidates prompt cache when `effort` changes.
5. **Re-sweep on migrate.** Opus 4.8's "start at `xhigh` for coding" is replaced by "start at `high`" for Opus 5 and Fable 5.1. GPT-5.5 prompts should be A/B'd against Terra and Sol before a silent cutover. Do not treat Astra as the new Instant default.
6. **A long document is not a hard problem.** Instant / `low` / Flash-Lite will summarise a 80-page PDF. High is for trade-offs, not page count.

---

## Interactive explorer

This repository ships a **static desk** you can open without installing anything:

**[Open the interactive desk](https://itsual.github.io/frontier-atlas/)**  -  live GitHub Pages site for choosing a task and priority, getting a route, and exploring each model family.

To run it locally:

```bash
git clone https://github.com/itsual/frontier-atlas.git
cd frontier-atlas
# open docs/index.html in a browser
python3 -m http.server 8080 --directory docs
```

The GitHub Pages workflow publishes the site from `docs/`. In GitHub Settings → Pages, select **GitHub Actions** as the source.

---

## What's in this repo

```
.
├── README.md                 ← you are here
├── SOURCES.md                ← every vendor URL we trusted
├── CONTRIBUTING.md           ← how to propose a dated correction
├── LICENSE
├── assets/banner.svg
├── guides/
│   ├── openai.md             ← GPT-6 Astra and GPT-5.6 Sol / Terra / Luna / 5.5
│   ├── anthropic.md          ← Fable 5.1 · Opus 5 · Sonnet 5 · Haiku 4.5
│   ├── xai.md                ← Grok 4.6 and the rest of the family
│   └── google.md             ← Gemini 3.8, Live, Nano, Imagen, Veo
└── docs/index.html           ← interactive desk
```

---

## Accuracy and date

Compiled **17 September 2026** from:

- the four source cheat sheets that seeded this repo (22 August 2026)
- OpenAI, Anthropic, xAI, Google DeepMind, and Google AI developer docs linked in [`SOURCES.md`](SOURCES.md)

Since the 22 August desk: **GPT-6 Astra** shipped (3 September), **Claude Fable 5.1** shipped (1 September), **Gemini 3.8 Flash** and **3.8 Live** shipped (2 and 15 September), and GPT-5.6 list prices moved. **Grok 4.6** is still the xAI flagship.

Prices are **vendor API list** unless a dated promotion is noted. Availability, effort defaults, and list prices change  -  re-read the linked docs before you standardise a production path.

Vendor names and model names are trademarks of their owners. This is an independent routing aid, not an official product of any lab.

<p align="center"><br /><em>Pick the model. Match the effort. Then get back to the work.</em></p>
