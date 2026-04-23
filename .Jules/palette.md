UX and Accessibility Learnings: Documented usage of lucide-react, Tailwind CSS, and HashRouter.

## 2025-02-28 - Add Accessible Mobile Menu Toggle
**Learning:** The mobile hamburger menu lacked proper ARIA attributes (like `aria-expanded`, `aria-controls`, `aria-label`) and visible keyboard focus states (`focus-visible:ring-2`). SVG icons inside the button also needed `aria-hidden="true"` to avoid redundant announcements.
**Action:** When implementing icon-only toggle buttons in the future, always ensure they are connected to their target container with an `id` via `aria-controls`, have dynamic `aria-expanded` state, clear `aria-label`, visible keyboard focus, and `aria-hidden` on inner decorative icons.
