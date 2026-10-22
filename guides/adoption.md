# Adoption boundaries

Creating this repository does **not** migrate a consumer. Each integration is a separately authorized change with its own tests and rollout.

| Surface | Integration approach | Preserve |
|---|---|---|
| CIBC website | Pin this foundation as a build-time source instead of maintaining an independent token copy | Approved content, destinations, privacy route, participation path, and progressive functionality |
| Wiki | A small Starlight custom-CSS adapter and locally served font mapping | Search, sidebar, anchors, citations, on-page navigation, theme preference, and reading measure |
| Book Power | Map existing site roles to this contract before updating scoped components | Source books/authors/licences, catalog visibility, installation, and access/inquiry flows |
| Avails | Map existing utility/component roles and explicitly remove literal brand-color duplication | Date/time and timezone behavior, anonymous participation, touch/keyboard grid interaction, and distinct data layers |
| Allotment | Map its plain-CSS roles and verify progress/audit views | Candidate privacy, quotas, draw behavior, reproducibility evidence, warnings, and export/handoff |
| My Community and Community Admin | Coordinate the same foundation version across member/organizer surfaces | Permissions, local-first data, independent feed failures, consent, theme/skin contracts, and destructive confirmations |

Keep small adapters close to the consuming framework rather than introducing a shared React dependency into every project. Base tokens alone do not remove literals or stale component rules; audit the actual cascade during each migration.

Do not confuse framework-specific roles with CIBC role names: a component library's generic `accent` slot does not automatically mean this system's citron emphasis. Preserve role intent, not just matching variable spellings.

If a consumer vendors an artifact, record its immutable source revision and file checksums with the licences. Do not patch those values invisibly; feed corrections back into the shared source and adopt a new revision deliberately. Consumers should test their actual rendered states after an update, even when the contract tests pass.

Publication is GitHub source only. No npm package, automatic CDN, deployment, service provisioning, permission change, or consumer update is implied.
