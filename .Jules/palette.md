UX and Accessibility Learnings: Documented usage of lucide-react, Tailwind CSS, and HashRouter.

## 2025-02-14 - Accessible Mobile Navigation Toggles
**Learning:** For state-driven toggle components (like hamburger menus) to be fully accessible, they require dynamic `aria-expanded` and `aria-label` attributes reflecting the current state. They also need an `aria-controls` attribute pointing to the ID of the collapsible container, and visual focus states (e.g. `focus-visible:ring-2`) for keyboard users.
**Action:** When implementing or reviewing any toggle control (menu, accordion, dropdown), ensure these four accessibility elements (`aria-expanded`, `aria-label`, `aria-controls`, and focus styles) are present.
