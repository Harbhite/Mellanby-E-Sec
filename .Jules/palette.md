UX and Accessibility Learnings: Documented usage of lucide-react, Tailwind CSS, and HashRouter.
## 2025-02-28 - Mobile Menu Accessibility
**Learning:** State-driven toggle components require dynamic `aria-expanded` and `aria-label` attributes, an `aria-controls` ID link, and explicit `aria-hidden="true"` on inner SVGs to prevent redundant screen reader announcements.
**Action:** Always ensure dynamic toggle components have these comprehensive accessibility attributes.
