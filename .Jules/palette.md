UX and Accessibility Learnings: Documented usage of lucide-react, Tailwind CSS, and HashRouter.

## 2024-05-15 - Accessible State-Driven Toggles
**Learning:** For state-driven toggle components like hamburger menus, accessibility standards require dynamic `aria-expanded` and `aria-label` attributes to communicate state, as well as an `aria-controls` attribute explicitly linking the toggle button to the target container's ID. In addition, when adding `aria-label` to an icon-only button, the inner SVG icons (e.g., from `lucide-react`) should be explicitly marked with `aria-hidden="true"` to prevent redundant screen reader announcements.
**Action:** Always verify that toggle buttons contain `aria-expanded`, `aria-controls` pointing to a valid ID on the controlled content block, `aria-label` or equivalent text alternative, and `aria-hidden="true"` on inner icons.
