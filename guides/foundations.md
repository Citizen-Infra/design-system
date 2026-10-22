# Open Index foundations

## Principle

Introduce the collective and its work plainly, and keep real participation actions easy to find. The reference-manual character is visual: strong information hierarchy, colour-coded fields, large readable labels, and deliberate alignment. It is not a requirement to invent an instructional product, fake tool controls, or a product-demo selector.

The token file is the executable source of numeric values. Use `--cibc-*` semantic roles rather than copying hex values. Keep recognizable family traits while giving each surface the layout its task needs.

## Roles

- Page/surface/subtle/raised distinguish grounds and grouping. Flat by default; use the overlay shadow only when real depth is necessary.
- Text/secondary/muted remain readable. Decorative borders are weaker than control boundaries; don't interchange their roles.
- Action and its hover/active/on-action values form a tested pair. The bright yellow page and blue action/reference field establish the main contrast; coral accent has dark on-accent text, never a white-label shortcut.
- Strong blue, warm coral, and fresh mint fields have their own on-field text roles. Inverse links/focus belong on the blue field; warm/fresh fields use their dark on-field text and focus-on-vivid. Do not infer that generic foreground values work on every coloured surface.
- Links, focus, selected states, success/warning/danger/information, and domain data have distinct semantic contracts even when some values coincide.
- Community provenance is data, not decoration. A brand update must not redefine the meaning of a status, a selected person, an overlap, a warning, or a permission.
- Four reference data levels have tested label colors. Interpolation, transparency, busy overlays, or personal-selection layers need their own contrast/meaning checks; the four stops do not certify arbitrary composites.

## Type, space, and controls

Use local Public Sans 400/600/700 for headings, reading, and controls. Keep the system mono stack for code, seeds, hashes, and comparable technical records—not visual theatre. Use tabular numerals where alignment matters. Check glyph coverage before adding languages.

The rem-based scale keeps even captions/UI at 20–22px-equivalent, body at 22–24px, lead at 26–30px, and display at 48–88px. There is no tiny-print exception for supporting content. Keep reading measures and layouts appropriate to larger text; broad working grids may use more width. Do not impose a fixed pixel root or shrink controls to keep an old layout unchanged.

Default controls are 56px-equivalent, with 60px touch-focused and 48px compact provisions. Compact is a deliberate application-density choice, not permission for smaller text. Use native buttons for actions and links for navigation, visible labels, meaningful loading/empty/error states, and non-color state indications.

Focus is an opaque 3px ring with 3px offset, adjusted only to remain visible on the actual surrounding surface. Do not clip focus or shrink text to fit. A positioned, labelled scroll region can contain a genuinely two-dimensional table; do not hide document overflow to mask a reflow bug.

Shapes are mostly flat, with modest control/overlay/optional-card radii. Don't wrap every piece of content in a card. Transitions use the shared durations and ease-out; reduced-motion sets the durations to zero. Content starts visible.

## Themes and identity layers

Light defaults at `:root`; `[data-cibc-theme="dark"]` supplies the companion. Consumers retain ownership of light/dark/system preferences. Reflect their resolved choice instead of creating another preference store. On-fill text changes with fills; pale dark-mode actions need dark ink, not white labels.

A community's separately authorized deployment identity is distinct from CIBC defaults or member-selected skins. Preserve opt-in, version pinning, allowed-font/shape choices, contrast checks, and protected product-controlled semantics. Do not turn a closed-world appearance schema into arbitrary CSS or font URLs.

## Validation

The tests calculate 41 text pairs and 19 focus/control pairs per mode: 120 combinations total. Text pairs meet 4.5:1 and defined control boundaries meet 3:1. Type-floor tests guard the large-text contract. These checks don't certify whole interfaces, identify every state, prove glyph delivery, or validate transparency/interpolated data.

During adoption, inspect real content, keyboard focus, semantics, screen-reader labels, loading/errors, 200% text, narrow/wide layouts, forced colors, reduced motion, and actual local font delivery. The website pilot exercised normal widths and focused enlarged-text scenarios; each other project needs its own product-specific verification.
