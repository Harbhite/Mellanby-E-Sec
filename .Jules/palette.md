UX and Accessibility Learnings: Documented usage of lucide-react, Tailwind CSS, and HashRouter.

## 2024-05-22 - Missing Accessible Names on Icon Controls
**Learning:** Navigation components relied on visual icons (Lucide) and hover titles without accessible names for screen readers.
**Action:** Systematically audit all icon-only buttons for `aria-label` or `aria-labelledby` during component creation.
