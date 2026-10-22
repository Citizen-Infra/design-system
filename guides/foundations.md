# Open Manual foundations

## Principle

Show what a tool does, explain its operation, and keep the next action easy to find. Personality comes from typography, composition, clear examples, and a consistent visual language—not a sales funnel, fake activity metrics, decorative terminals, or blueprint costumes.

The token file is the executable source of numeric values. Use `--cibc-*` semantic roles rather than copying hex values. Keep recognizable family traits while giving each surface the layout its task needs.

## Roles

- Page/surface/subtle/raised distinguish grounds and grouping. Flat by default; use the overlay shadow only when real depth is necessary.
- Text/secondary/muted remain readable. Decorative borders are weaker than control boundaries; don't interchange their roles.
- Action and its hover/active/on-action values form a tested pair. Citron accent has its own on-accent value; never use white labels on it.
- Links, focus, selected states, success/warning/danger/information, and domain data have distinct semantic contracts even when some values coincide.
- Community provenance is data, not decoration. A brand update must not redefine the meaning of a status, a selected person, an overlap, a warning, or a permission.
- Four reference data levels have tested label colors. Interpolation, transparency, busy overlays, or personal-selection layers need their own contrast/meaning checks; the four stops do not certify arbitrary composites.

## Type, space, and controls

Use local Public Sans 400/600/700 for headings, reading, and controls. Keep the system mono stack for code, seeds, hashes, and comparable technical records—not visual theatre. Use tabular numerals where alignment matters. Check glyph coverage before adding languages.

The rem-based scale covers captions, compact UI, body, lead, section/page/display headings; don't apply display scale to an admin form. Reading measure is near 68ch; broad working grids may use more width. Keep tight groups within a task and larger separation between tasks.

Default controls are 44px-equivalent, with 48px touch-focused and 32px compact provisions. Compact density needs context; it isn't the mobile default. Maintain at least applicable target-size/spacing standards. Use native buttons for actions and links for navigation, visible labels, meaningful loading/empty/error states, and non-color state indications.

Focus is an opaque 3px ring with 3px offset, adjusted only to remain visible on the actual surrounding surface. Do not clip focus or shrink text to fit. A positioned, labelled scroll region can contain a genuinely two-dimensional table; do not hide document overflow to mask a reflow bug.

Shapes are mostly flat, with modest control/overlay/optional-card radii. Don't wrap every piece of content in a card. Transitions use the shared durations and ease-out; reduced-motion sets the durations to zero. Content starts visible.

## Themes and identity layers

Light defaults at `:root`; `[data-cibc-theme="dark"]` supplies the companion. Consumers retain ownership of light/dark/system preferences. Reflect their resolved choice instead of creating another preference store. On-fill text changes with fills; pale dark-mode actions need dark ink, not white labels.

A community's separately authorized deployment identity is distinct from CIBC defaults or member-selected skins. Preserve opt-in, version pinning, allowed-font/shape choices, contrast checks, and protected product-controlled semantics. Do not turn a closed-world appearance schema into arbitrary CSS or font URLs.

## Validation

The tests calculate 36 text pairs and 16 focus/control pairs per mode: 104 combinations total. Text pairs meet 4.5:1 and defined control boundaries meet 3:1. These checks don't certify whole interfaces, identify every state, prove glyph delivery, or validate transparency/interpolated data.

During adoption, inspect real content, keyboard focus, semantics, screen-reader labels, loading/errors, 200% text, narrow/wide layouts, forced colors, reduced motion, and actual local font delivery. The website pilot exercised normal widths and focused enlarged-text scenarios; each other project needs its own product-specific verification.
