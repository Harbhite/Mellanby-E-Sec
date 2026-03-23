UX and Accessibility Learnings: Documented usage of lucide-react, Tailwind CSS, and HashRouter.

## 2024-05-15 - State-driven Toggle Component Accessibility
**Learning:** Hamburger menus and dropdown toggles require explicit state communication. Relying solely on visual changes (like an X vs Menu icon) leaves screen reader users guessing about the current state.
**Action:** When creating state-driven toggle components, always include dynamic `aria-expanded` and `aria-label` attributes, use `aria-controls` linked to the target container's ID, apply visible focus states for keyboard navigation, and hide inner decorative SVGs with `aria-hidden="true"`.
