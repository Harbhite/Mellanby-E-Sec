UX and Accessibility Learnings: Documented usage of lucide-react, Tailwind CSS, and HashRouter.

## 2026-04-06 - Mobile Menu Accessibility
**Learning:** When adding `aria-label` to an icon-only button like a hamburger menu, inner SVG icons from libraries like `lucide-react` should also receive `aria-hidden="true"` to prevent redundant screen reader announcements. Furthermore, stateful toggles require dynamic `aria-expanded` attributes and `aria-controls` mapping to the target container's ID.
**Action:** Always pair `aria-expanded` with `aria-controls` for toggles, add visible keyboard focus states (e.g., `focus-visible:ring-2`), and hide purely decorative inner SVG components.
