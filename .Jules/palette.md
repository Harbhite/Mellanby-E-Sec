## 2024-05-22 - Form Accessibility Pattern
**Learning:** Found a recurring pattern of form inputs nested near labels but missing `htmlFor`/`id` association, which fails WCAG criteria.
**Action:** When working on forms in this codebase, always explicitly link labels to inputs using `htmlFor` and `id`, and ensure focus states are clearly visible (e.g., using `ring-2`).
