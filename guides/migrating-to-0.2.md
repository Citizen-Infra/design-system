# Migrating from 0.1 to 0.2

`0.2.0-draft.1` is an explicitly different visual treatment, not a patch to adopt silently. Pin an immutable new Git revision only after the consuming project's adoption is authorized. Existing applications, the wiki, and the website do not change when a new source commit is published.

## Main changes

- Light page: bright yellow; action/link and the strong reference surface: blue. Coral and mint provide additional section treatments. The semantic status and four data-level values retain their separate meaning.
- Caption/UI ranges: 20–22px-equivalent; body: 22–24px; lead: 26–30px; display: 48–88px. These are rem-based values, not fixed root sizing or an exemption from text zoom/reflow checks.
- Controls: 56px-equivalent standard, 60px touch, 48px compact. Review actual padding, line height, wrapping, header rows, dialogs, and tables; do not assume the old geometry still works.
- Added field pairs: `color-surface-strong` / `color-on-surface-strong`, `color-surface-warm` / `color-on-surface-warm`, and `color-surface-fresh` / `color-on-surface-fresh`.
- Added inverse roles: `color-link-inverse`, `color-link-inverse-hover`, `color-focus-inverse`; the vivid coral/mint fields use `color-focus-on-vivid`. These are contextual roles, not replacements for status or data semantics.
- Added wordmark scale and display tracking. Existing role names remain, but many values change; this is not visual backward compatibility.
- Favicons/touch icon use blue/white; the social card centres the full club name on yellow and carries the collective's build/learn/teach language in a blue field. Existing consumer serving copies must be refreshed deliberately along with provenance, not just the stylesheet.

## On-field rules

On ordinary light surfaces use the normal text/link/focus roles. On the blue reference field use its white foreground, inverse link/hover, and inverse focus roles. On coral/mint use the corresponding dark on-field foreground (underlined for links) and focus-on-vivid. Never reuse a pale dark-theme foreground or a generic blue link there merely because it passed on an ordinary surface.

Keep status labels/icons and their own pairings. Heatmap interpolation, transparent overlays, selected slots, probability scales and community provenance require product-specific review. The unchanged data stops are not brand accents.

## Consumer acceptance

Keep the full club name and straightforward communication where appropriate; don't substitute a fake product interface to demonstrate the design language. Preserve actual product functionality, links, permissions, private states, separately branded community deployments, and user-owned appearance choices.

Verify narrow/wide real content, all interactive states, keyboard/focus, 200% text, forced colours, reduced motion, locally loaded font weights/italics and the updated PNGs. Run both foundation and consumer tests. Mathematical pair tests are not a complete rendered accessibility audit.

Source publication is GitHub only. There is no npm release or deployment hook, and no consumer is migrated automatically.
