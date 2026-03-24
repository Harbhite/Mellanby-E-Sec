UX and Accessibility Learnings: Documented usage of lucide-react, Tailwind CSS, and HashRouter.

## 2024-03-24 - Add ARIA attributes to navigation icons and mobile menu
**Learning:** For state-driven toggle components like the mobile hamburger menu and icon-only links, accessibility standards mandate dynamic `aria-expanded` and `aria-label` attributes. Further, an `aria-controls` attribute should explicitly link the toggle to the target container's ID, and `aria-hidden="true"` should be applied to decorative inner SVG icons to prevent redundant screen reader announcements.
**Action:** Always ensure stateful toggles feature `aria-expanded`, `aria-controls` mapping to a corresponding element ID, visible focus states (e.g., `focus-visible:ring-2`), explicit `aria-label`s on icon-only buttons, and `aria-hidden="true"` on inner SVGs.
