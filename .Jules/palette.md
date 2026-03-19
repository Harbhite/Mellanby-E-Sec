UX and Accessibility Learnings: Documented usage of lucide-react, Tailwind CSS, and HashRouter.

## 2024-05-15 - State-driven Toggle Accessibility
**Learning:** For state-driven toggle components like hamburger menus, accessibility standards require dynamic `aria-expanded` and `aria-label` attributes, as well as an `aria-controls` attribute explicitly linking the toggle button to the target container's ID.
**Action:** Always ensure that toggle buttons have `aria-expanded` reflecting their state, `aria-controls` pointing to the collapsible container's ID, and explicit focus indicators (`focus-visible`). Hide decorative inner SVGs using `aria-hidden="true"`.
