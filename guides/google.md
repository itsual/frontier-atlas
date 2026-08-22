# Google  -  Gemini 3 family

Current as of 22 August 2026. [Sources](../SOURCES.md).

Google categorises the Gemini family by **task effort and complexity**  -  from on-device micro-tasks to cloud reasoning. This guide uses the **Gemini 3** lineup from Google AI and DeepMind documentation. The original seed sheet described Gemini 1.5 / 2.0 (Flash, Pro, Flash-Lite, Flash Thinking, Nano). Those names are historical; the routing *idea* (start on Flash, step up only if it struggles, step down only if the task is simple) still holds.

## Core models

| Model | API flavour | Role | When to use | Ideal activities |
| --- | --- | --- | --- | --- |
| **Gemini Nano** | On-device | Minimal / edge | Zero-latency, offline, or data that must not leave the device | Smart replies, on-device transcription, prediction, grammar, basic offline translation |
| **Gemini 3.5 Flash-Lite** (and 3.1 Flash-Lite) | `gemini-3.5-flash-lite` | Low effort, high volume | Lowest cost and latency for massive-scale repetitive work that does not need deep reasoning | Classification, simple extraction, ticket routing, proofreading, sentiment |
| **Gemini 3.7 Flash** | `gemini-3.7-flash` | Medium effort  -  the workhorse | Default for ~80% of daily tasks and agents. Complex coding, agentic workflows, reliable multi-step execution | Conversation, summarising long docs/video, standard multimodal work, agentic coding, knowledge work |
| **Gemini 3.6 / 3.5 Flash** | `gemini-3.6-flash`, `gemini-3.5-flash` | Previous Flash generations | Pinned production that has not migrated | Same jobs as Flash, on the older generation |
| **Gemini 3.1 Pro** | `gemini-3.1-pro-preview` | High effort | Highly complex, nuanced problems  -  expert logic, advanced coding, synthesising massive datasets. **Preview** | Massive codebases, legal/financial cross-reference, architecture, insights from extremely long inputs |

Thinking is built into the 3.x Flash line. Treat “deliberate thinking” as a control you turn up when accuracy on STEM, planning, or synthesis matters more than immediate speed  -  not as a way to make the essay longer.

### 3.7 Flash specifics (DeepMind)

- Status: general availability.
- Context: **1M input / 64k output**.
- Input: text, image, video, audio, PDF. Output: text.
- Tools: function calling, search as a tool, computer use.
- **Introductory price** (3.6 and 3.7 Flash) through **31 December 2026**: **$0.75 input / $3.75 output** per 1M tokens.
- From **1 January 2027**: **$1.50 / $7.50**.

## Specialised modality models

| Family | Effort type | Ideal activities |
| --- | --- | --- |
| **Imagen** | Visual design | Infographics with legible text, photorealistic marketing assets, fast localised text insertion |
| **Veo** | Video production | Cinematic video from text/images; conversational video editing via natural language |

## Waterfall  -  how to choose

1. **Where is the data processed?**
   - Must stay on the phone/computer → **Nano**
   - Cloud is acceptable → step 2
2. **Is it a domain-specific generative task?**
   - Image → **Imagen** (or Grok Imagine Image 2.0)
   - Video → **Veo** (or Grok Imagine Video 1.5)
   - Otherwise → step 3
3. **Speed/budget vs brainpower?**
   - **Start with Gemini 3.7 Flash.** Fast, cheap, extremely capable, designed as the default.
   - **Upgrade to 3.1 Pro** (or turn up thinking) only if Flash struggles with the logic, emits bad code, or fails to connect concepts across massive documents.
   - **Downgrade to Flash-Lite** only if the task is simple enough that a smaller model does it perfectly and you want to shave latency and cost at massive scale.

## Peer starting points

On Artificial Analysis - style comparisons published with 3.7 Flash, Google places it next to **Claude Sonnet 5** and **GPT-5.6 Terra** as a workhorse, not as a Fable/Sol-class ceiling model. For the hardest reasoning, Atlas still routes to Sol Extra High / Pro, Opus 5 / Fable 5, or Grok 4.6 Heavy  -  then back to Gemini Pro if you are standardising on Google Cloud.
