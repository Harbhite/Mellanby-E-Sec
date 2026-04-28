UX and Accessibility Learnings: Documented usage of lucide-react, Tailwind CSS, and HashRouter.

## 2024-04-28 - Navbar Accessibility Enhancements
**Learning:** State-driven toggle components (like the mobile hamburger menu) require dynamic `aria-expanded` and `aria-label` attributes to properly communicate their state to screen readers. They also must have an `aria-controls` attribute pointing to the ID of the container they control to explicitly link them together. Additionally, icon-only buttons/links need an `aria-label` and should have their inner SVG icons explicitly hidden from screen readers using `aria-hidden="true"`. Finally, using `focus-visible` ensures proper keyboard accessibility without disrupting mouse users.
**Action:** Always verify that interactive menu toggles have `aria-expanded`, `aria-controls` mapped to a target `id`, explicit `aria-labels` (when lacking text), `aria-hidden` on nested SVGs, and clear `focus-visible` states.
