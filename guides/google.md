> [!IMPORTANT]
> **Pricing disclaimer:** For current pricing, availability, limits, and supported controls, refer to the official vendor website or documentation. Reviewed 19 October 2026.

# Google

Reviewed 19 October 2026 from [official model documentation](https://ai.google.dev/gemini-api/docs/models).

## Gemini 4 Argon

- API ID: `gemini-4-argon`
- Documented role: Complex reasoning with native multimodal input.
- Native inputs verified for this catalog: text, image, audio, video.
- Context: 1,048,576 tokens. Reserve capacity for output and check provider accounting.

## Gemini 3.8 Flash

- API ID: `gemini-3.8-flash`
- Documented role: Efficient multimodal work and agents.
- Native inputs verified for this catalog: text, image, audio, video.
- Context: Not verified in this review; excluded from large context routing.

## Gemini 3.5 Flash-Lite

- API ID: `gemini-3.5-flash-lite`
- Documented role: Simple tasks at high throughput.
- Native inputs verified for this catalog: text.
- Context: Not verified in this review; excluded from large context routing.

## Choosing for a task

Provider capability descriptions are evidence for compatibility, not proof of superiority over another lab. Evaluate accuracy, latency, and total cost on representative inputs. Prefer an efficient model for routine structured processing, a balanced model for everyday work, and deeper capability for demanding problems.

Gemini 4 Argon uses a unified 1,048,576 token context. Synchronous output defaults to a 65,536 token maximum; special long decode is a separate configuration. Argon supports low, medium, and high thinking and text output, not image generation or Live API output.
