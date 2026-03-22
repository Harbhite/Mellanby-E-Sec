UX and Accessibility Learnings: Documented usage of lucide-react, Tailwind CSS, and HashRouter.

## 2026-03-22 - Accessible Hamburger Toggles
**Learning:** State-driven toggle components like hamburger menus require dynamic `aria-expanded`, dynamic `aria-label`, an `aria-controls` explicitly linking to the target container's ID, and their inner decorative icons must be `aria-hidden='true'`.
**Action:** Apply this comprehensive attribute set along with visible focus states (`focus-visible:ring-2`) for all future mobile or responsive toggle components.
