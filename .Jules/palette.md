UX and Accessibility Learnings: Documented usage of lucide-react, Tailwind CSS, and HashRouter.

## 2024-05-24 - Accessibility for Hamburger Menus
**Learning:** For state-driven toggle components like hamburger menus, accessibility standards require dynamic `aria-expanded` and `aria-label` attributes, as well as an `aria-controls` attribute explicitly linking the toggle button to the target container's ID. When applying `aria-label` to icon-only buttons, inner SVG icons from libraries like `lucide-react` should be explicitly marked with `aria-hidden="true"` to prevent redundant screen reader announcements. Using `focus-visible:ring-2 focus-visible:ring-[#c5a059]` is effective for keyboard focus states.
**Action:** Always verify `aria-expanded`, `aria-controls`, and `aria-hidden` attributes when creating or modifying stateful icon-only toggle buttons in React.
