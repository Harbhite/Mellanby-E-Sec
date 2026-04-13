UX and Accessibility Learnings: Documented usage of lucide-react, Tailwind CSS, and HashRouter.

## 2024-04-13 - State-Driven Toggle Component Accessibility
**Learning:** For state-driven toggle components (like hamburger menus), accessibility standards require dynamic `aria-expanded` and `aria-label` attributes, as well as an `aria-controls` attribute explicitly linking the toggle button to the target container's ID. When inner SVGs are used as icons within buttons, they should have `aria-hidden="true"` to prevent redundant screen reader announcements.
**Action:** Always ensure that toggle buttons are fully wired up with `aria-expanded` and `aria-controls`, and use `aria-hidden="true"` on their child icons.
