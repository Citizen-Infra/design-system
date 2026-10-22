# CIBC design system

**Open Manual** is the shared design foundation for the Citizen Infrastructure Builders Club: readable Public Sans, cool light surfaces, petrol ink and actions, restrained citron emphasis, and plain explanations of what the tools do.

This is the initial **0.1.0-draft.1** foundation, extracted from the CIBC website pilot. It is not a finished cross-product component library. The wiki and applications have not been migrated by creating this repository.

## What is here

- [`tokens.css`](tokens.css): the canonical namespaced semantic token contract, including light/dark roles, spacing, typography, focus geometry, and motion.
- [`fonts.css`](fonts.css) and [`fonts/`](fonts/): local normal/italic Public Sans variable Latin subsets, weights 400–700, with their original SIL Open Font License.
- [`brand/`](brand/): the CIBC typographic PNG favicon/touch icons and social image, approved headline, and provenance.
- [`guides/foundations.md`](guides/foundations.md): how to apply the visual language without confusing brand, state, and data.
- [`guides/adoption.md`](guides/adoption.md): integration boundaries for websites, reading surfaces, and applications.
- [`scripts/render-brand-assets.mjs`](scripts/render-brand-assets.mjs): reproducible procedural artwork source; browser tooling is not a production dependency.
- [`test/`](test/): dependency-free token, contrast, packaging, asset, and licence checks.

## Consumption

Use an immutable Git commit or a deliberately versioned artifact, not a floating branch or a runtime CDN. This repository has not been published to npm: `@citizen-infra/design-system` is the local package identifier, not a claim of a registered package. `private: true` intentionally prevents an accidental registry publish while allowing build-time Git/local consumption.

For a build pipeline that has installed this package from an explicitly pinned Git revision:

```css
@import "@citizen-infra/design-system/tokens.css";
@import "@citizen-infra/design-system/fonts.css";

body {
  font-family: var(--cibc-font-sans);
  color: var(--cibc-color-text);
  background: var(--cibc-color-page);
}
```

The token file does not provide a reset or component behavior. Light is the default; consumers may apply `data-cibc-theme="dark"` using their existing resolved theme preference. Do not create a competing preference store or silently replace a separately branded community deployment.

When vendoring is necessary, copy a versioned artifact with its licences, source revision, and checksums. Do not hand-copy palette values into another independent source of truth. Fonts must remain local to the consumer, especially in browser extensions.

## Check locally

Requires Node ≥22.12. No install is needed to run the contract tests:

```sh
npm test
```

The contract tests validate 104 specified light/dark contrast pairs. This is mathematical coverage of those combinations, not a complete WCAG audit, a guarantee for interpolated data colors, or proof that every downstream interface works.

## Release boundaries

Initial publication means the GitHub source repository only. There is no npm release, deployment, automatic migration, runtime asset service, or publishing/install hook. Adoption must be an explicit change in each consuming project, preserving its functionality and permissions. The initial draft may evolve while those interfaces validate it; breaking changes need migration notes.

## Licences

Newly authored code, documentation, and artwork: [MIT](LICENSE). Public Sans font binaries retain their existing [SIL Open Font License](fonts/OFL-Public-Sans.txt); see [third-party notices](THIRD_PARTY.md). No legacy CIBC brand-kit assets are included or relicensed here.
