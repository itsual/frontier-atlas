# Google - Gemini 3 family

Current as of 17 September 2026. [Sources](../SOURCES.md).

Google categorises the Gemini family by **task effort and complexity** - from on-device micro-tasks to cloud reasoning. This guide uses the **Gemini 3** lineup from Google AI and DeepMind documentation. The original seed sheet described Gemini 1.5 / 2.0 (Flash, Pro, Flash-Lite, Flash Thinking, Nano). Those names are historical; the routing *idea* (start on Flash, step up only if it struggles, step down only if the task is simple) still holds.

The August 2026 desk started on **Gemini 3.7 Flash**. That generation is still stable. The current Flash workhorse is **Gemini 3.8 Flash**, shipped 2 September 2026 at the same introductory price.

## Core models

| Model | API flavour | Role | When to use | Ideal activities |
| --- | --- | --- | --- | --- |
| **Gemini Nano** | On-device | Minimal / edge | Zero-latency, offline, or data that must not leave the device | Smart replies, on-device transcription, prediction, grammar, basic offline translation |
| **Gemini 3.5 Flash-Lite** (and 3.1 Flash-Lite) | `gemini-3.5-flash-lite` | Low effort, high volume | Lowest cost and latency for massive-scale repetitive work that does not need deep reasoning | Classification, simple extraction, ticket routing, proofreading, sentiment |
| **Gemini 3.8 Flash** | `gemini-3.8-flash` | Medium effort - the workhorse | Default for ~80% of daily tasks and agents. Long-horizon coding, agentic workflows, multi-step enterprise work | Conversation, summarising long docs/video, standard multimodal work, agentic coding, knowledge work |
| **Gemini 3.7 / 3.6 / 3.5 Flash** | `gemini-3.7-flash`, `gemini-3.6-flash`, `gemini-3.5-flash` | Previous Flash generations | Pinned production that has not migrated | Same jobs as Flash, on the older generation |
| **Gemini 3.8 Live** | `gemini-3.8-live` | Low-latency voice | Default Live API model for voice agents that should not wait on long reasoning | Real-time speech-to-speech agents |
| **Gemini 3.8 Live Extended Thinking** | `gemini-3.8-live-extended-thinking` | Voice + reasoning | Voice interactions that need more background thinking | Voice agents that plan before speaking |
| **Gemini 3.1 Pro** | `gemini-3.1-pro-preview` | High effort | Highly complex, nuanced problems - expert logic, advanced coding, synthesising massive datasets. **Preview** | Massive codebases, legal/financial cross-reference, architecture, insights from extremely long inputs |

Thinking is built into the 3.x Flash line. 3.8 Flash exposes thinking levels `low`, `medium` (default), and `high`. Treat thinking as a control you turn up when accuracy on STEM, planning, or synthesis matters more than immediate speed - not as a way to make the essay longer.

### 3.8 Flash specifics

- Status: general availability. Model id: `gemini-3.8-flash`.
- Context: **1M input / 64k output**.
- Input: text, image, video, audio, PDF. Output: text.
- Tools: function calling, search, computer use (preview), code execution, URL context.
- Thinking levels: `low` · `medium` · `high`.
- **Introductory price** through **31 December 2026**: **$0.75 input / $3.75 output** per 1M tokens (same band as 3.6 / 3.7 Flash).
- From **1 January 2027**: **$1.50 / $7.50**.
- A Fairwind-gated **3.8 Flash Cyber** variant exists for trusted defenders. It is not a general routing default.

### 3.7 Flash (previous workhorse)

Keep 3.7 Flash when a production path is pinned and evals have not been re-swept. Google positions 3.8 Flash as a drop-in successor at the same introductory price, with stronger long-horizon coding and agent loops.

## Specialised modality models

| Family | Effort type | Ideal activities |
| --- | --- | --- |
| **Imagen** / Nano Banana image models | Visual design | Infographics with legible text, photorealistic marketing assets, fast localised text insertion |
| **Veo** / **Gemini Omni Flash** | Video production | Cinematic or conversational video from text/images; Omni Flash is Google's generate-and-edit video surface |

## Waterfall - how to choose

1. **Where is the data processed?**
   - Must stay on the phone/computer → **Nano**
   - Cloud is acceptable → step 2
2. **Is it a domain-specific generative task?**
   - Image → **Imagen** (or Grok Imagine Image 2.0)
   - Video → **Veo** / **Omni Flash** (or Grok Imagine Video 1.5)
   - Live voice → **Gemini 3.8 Live** (Extended Thinking if the agent must reason first)
   - Otherwise → step 3
3. **Speed/budget vs brainpower?**
   - **Start with Gemini 3.8 Flash.** Fast, cheap, designed as the default.
   - **Keep 3.7 Flash** only if the workflow is pinned.
   - **Upgrade to 3.1 Pro** (or turn thinking to `high`) only if Flash struggles with the logic, emits bad code, or fails to connect concepts across massive documents.
   - **Downgrade to Flash-Lite** only if the task is simple enough that a smaller model does it perfectly and you want to shave latency and cost at massive scale.

## Peer starting points

On comparisons published with 3.8 Flash, Google places it next to **Claude Opus 5**, **Claude Sonnet 5**, **GPT-5.6 Sol**, and **GPT-5.6 Terra** as a cheap workhorse that can approach higher-cost frontier scores on some long-horizon coding sets. For the hardest reasoning and computer-use work, Atlas still routes to Sol Extra High / GPT-6 Astra, Opus 5 / Fable 5.1, or Grok 4.6 Heavy - then back to Gemini Pro if you are standardising on Google Cloud.
