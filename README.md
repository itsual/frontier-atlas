> [!IMPORTANT]
> **Pricing disclaimer:** For current pricing, availability, limits, and supported controls, refer to the official vendor website or documentation. Reviewed 19 October 2026.

# Frontier Atlas

[Open the interactive selector](https://itsual.github.io/frontier-atlas/)

Choose models based on the work, input modality, complexity, context requirements, and provider access. This independent guide covers text output from four providers. It separates documented capabilities from editorial routing suggestions.

## Current lineup

- **GPT-6 Astra** (`gpt-6-astra`): Demanding reasoning and coding.
- **GPT-6.1 Sol** (`gpt-6.1-sol`): General complex work with a lower cost than Astra.
- **GPT-6 Luna** (`gpt-6-luna`): Focused tasks and repeated structured processing.
- **Claude Fable 5.1** (`claude-fable-5-1`): Demanding reasoning after Opus falls short.
- **Claude Opus 5.5** (`claude-opus-5-5`): Long coding runs and knowledge work.
- **Claude Sonnet 5.5** (`claude-sonnet-5-5`): Balance of speed and intelligence.
- **Claude Haiku 5.5** (`claude-haiku-5-5`): Classification, extraction, and routing.
- **Grok 4.7** (`grok-4.7`): Current xAI general and coding recommendation.
- **Gemini 4 Argon** (`gemini-4-argon`): Complex reasoning with native multimodal input.
- **Gemini 3.8 Flash** (`gemini-3.8-flash`): Efficient multimodal work and agents.
- **Gemini 3.5 Flash-Lite** (`gemini-3.5-flash-lite`): Simple tasks at high throughput.

## How selection works

1. Filter by provider, native input support, and verified context capacity.
2. Exclude efficiency models for demanding or consequential work.
3. Order compatible options by task fit and the requested working style.
4. Show up to four options with explanations and provider documentation. Ties are alphabetical, not performance claims.

The selector uses explicit editorial rules, not measured cross-provider rankings. Complexity takes precedence over an efficiency preference. Task fit is broad guidance from vendor role descriptions. Test candidates on representative work before standardizing.

Research requires search or supplied current sources. Quantitative work needs calculation tools and validation. Coding needs repository context and tests. Sensitive work needs an approved environment and review.

## Scope

API model names can differ from consumer chat app menus. Dedicated image, video, and voice output products are outside the text selector. Input support does not imply output support. Unknown context values are excluded for the large input option. Input and output must fit the provider's context rules.

## Repository

- `docs/data/atlas.json`: catalog and evidence links
- `docs/router.mjs`: deterministic selection rules
- `docs/app.js`: accessible interface and rendering
- `guides/`: current provider notes
- [Sources](SOURCES.md) and [changelog](CHANGELOG.md)

Serve locally with `python -m http.server 8080 --directory docs`. Opening the HTML directly does not support fetching the catalog. GitHub Actions publishes `docs/` to Pages.
