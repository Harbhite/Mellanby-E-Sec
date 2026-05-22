UX and Accessibility Learnings: Documented usage of lucide-react, Tailwind CSS, and HashRouter.

## 2024-05-22 - Mobile Menu Accessibility Pattern
**Learning:** For state-driven toggle components (like hamburger menus) in this application, accessibility standards require dynamic `aria-expanded` and `aria-label` attributes to correctly announce their current state, along with an `aria-controls` attribute explicitly linking the toggle button to the target dropdown container's ID. Additionally, icon-only buttons need `focus-visible:ring-2 focus-visible:ring-[#c5a059]` for keyboard focus visibility and `aria-hidden="true"` on the inner SVG to prevent redundant screen reader announcements.
**Action:** When creating or modifying stateful interactive components (like toggles, modals, or dropdowns), ensure they are explicitly linked via `aria-controls`, maintain dynamic `aria-expanded` state, implement clear focus states, and hide decorative inner SVGs from screen readers.
