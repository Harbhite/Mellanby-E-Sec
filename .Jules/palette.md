UX and Accessibility Learnings: Documented usage of lucide-react, Tailwind CSS, and HashRouter.

## 2025-03-05 - Mobile Menu & Icon Links Accessibility
**Learning:** State-driven toggle components (like the hamburger menu) require explicit dynamic accessibility tags (`aria-expanded`, `aria-controls`) and their target container needs a matching `id`. Furthermore, purely decorative or purely informational SVG icons inside labeled interactive elements need `aria-hidden="true"` to prevent screen readers from reading redundant information.
**Action:** When creating toggle buttons or icon-only buttons with tooltips, always ensure that `aria-label`, `aria-expanded`, and `aria-controls` are fully configured and any internal SVGs have `aria-hidden="true"`.
