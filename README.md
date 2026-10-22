# CIBC design system

**Open Index** is the bold, large-type shared design foundation for the Citizen Infrastructure Builders Club: bright yellow club information, a strong blue reference field, readable Public Sans, coral/mint supporting fields, and plain functional communication.

This is the opt-in **0.2.0-draft.1** revision. It replaces the initial pilot's subdued palette and small type scale; it is not a drop-in visual update. Existing consumers pinned to an earlier commit remain unchanged until they explicitly adopt a new revision. It is not a finished cross-product component library or an automatic wiki/application migration.

## What is here

- [`tokens.css`](tokens.css): the canonical namespaced semantic token contract, including light/dark roles, spacing, typography, focus geometry, and motion.
- [`fonts.css`](fonts.css) and [`fonts/`](fonts/): local normal/italic Public Sans variable Latin subsets, weights 400–700, with their original SIL Open Font License.
- [`brand/`](brand/): the CIBC typographic PNG favicon/touch icons and social image, approved headline, and provenance.
- [`guides/foundations.md`](guides/foundations.md): how to apply the visual language without confusing brand, state, and data.
- [`guides/adoption.md`](guides/adoption.md): integration boundaries for websites, reading surfaces, and applications.
- [`scripts/render-brand-assets.mjs`](scripts/render-brand-assets.mjs): reproducible procedural artwork source; browser tooling is not a production dependency.
- [`test/`](test/): dependency-free token, contrast, packaging, asset, and licence checks.

## Large type and coloured fields

Supporting text has a 20px-equivalent minimum, growing to 22px at wide viewports; body type is 22–24px, lead 26–30px, and display 48–88px. Values use rem-based clamps and do not override the user's root font preference. Standard controls grow to 56px-equivalent (60px touch, 48px compact).

Use `surface-strong` with `on-surface-strong` for the blue reference field, and inverse link/focus roles inside it. Coral `surface-warm` and mint `surface-fresh` have their own dark on-field text and `focus-on-vivid`; do not place the ordinary blue link or dark-mode focus colour on those fields blindly. Status and data semantics remain separate from these brand surfaces.

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

The contract tests validate 120 specified light/dark contrast pairs, including new field/inverse roles, plus type floors and distribution/licence consistency. This is mathematical coverage of those combinations, not a complete WCAG audit, a guarantee for interpolated data colors, or proof that every downstream interface works. See the [migration notes](guides/migrating-to-0.2.md) before adoption.

## Release boundaries

Initial publication means the GitHub source repository only. There is no npm release, deployment, automatic migration, runtime asset service, or publishing/install hook. Adoption must be an explicit change in each consuming project, preserving its functionality and permissions. The initial draft may evolve while those interfaces validate it; breaking changes need migration notes.

## Licences

Newly authored code, documentation, and artwork: [MIT](LICENSE). Public Sans font binaries retain their existing [SIL Open Font License](fonts/OFL-Public-Sans.txt); see [third-party notices](THIRD_PARTY.md). No legacy CIBC brand-kit assets are included or relicensed here.
