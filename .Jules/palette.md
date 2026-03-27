UX and Accessibility Learnings: Documented usage of lucide-react, Tailwind CSS, and HashRouter.

## 2024-05-24 - Lucide React ARIA Attributes
**Learning:** lucide-react icons rendered within icon-only buttons need to be explicitly hidden using `aria-hidden="true"` to prevent redundant screen reader announcements, since the surrounding `<button>` or `<Link>` element should handle the announcement via `aria-label`.
**Action:** When adding `aria-label` to icon-only buttons, ensure inner `<icon />` components receive the `aria-hidden="true"` attribute.