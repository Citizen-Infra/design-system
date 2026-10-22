# CIBC typographic assets

The four PNGs are original procedural typography in the Open Index visual language:

| File | Dimensions | Use |
|---|---|---|
| `favicon-16.png` | 16×16 | Small browser icon |
| `favicon-32.png` | 32×32 | Browser icon |
| `apple-touch-icon.png` | 180×180 | Apple touch icon |
| `og-image.png` | 1200×630 | Club social preview |

Initials read **C I / B C** in a two-by-two arrangement, white on strong blue. The social image centres the full club name on bright yellow, keeps the approved plain-language headline, and places the collective's Build/Learn/Teach language and domain in a blue reference field. It is not a screenshot, product-demo selector, or record of live activity. Supporting image text remains large rather than fine print.

The `0.2` PNGs were re-rendered from this repository's source and canonical tokens. `provenance.json` records the actual font/token inputs and hashes; each PNG also embeds its authored-source description. The normal and italic font binaries remain separately licensed under OFL; the new artwork is covered by the repository's MIT licence. Consumers pinned to `0.1` retain their old assets until they explicitly adopt and refresh serving copies.

To regenerate with an existing Playwright Core installation and installed Google Chrome:

```sh
node scripts/render-brand-assets.mjs --playwright-module /path/to/playwright-core/index.mjs
```

Run from the repository root. No browser automation package is installed or invoked by consumer imports or package install hooks. The renderer closes its loopback server and owned Chrome process on completion/failure.

Regeneration resets embedded image provenance. Re-embed an accurate authored-source description with the Impeccable asset tool (or an equivalent provenance workflow) before shipping regenerated rasters. Preserve the source, font licence, and provenance when reusing or adapting this work; don't present the generic club image as a product-specific screenshot or real community data.
