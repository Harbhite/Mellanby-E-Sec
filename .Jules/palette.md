UX and Accessibility Learnings: Documented usage of lucide-react, Tailwind CSS, and HashRouter.

## 2024-05-18 - Accessibility for State-Driven Toggles & Icon Links
**Learning:** State-driven toggle components like hamburger menus must explicitly link to the content they control using `aria-controls` and indicate state with `aria-expanded`. Icon-only links and buttons must have `aria-label` for screen readers, `aria-hidden="true"` on the SVG to prevent redundant announcements, and clear keyboard focus states (e.g., `focus-visible:ring-2 focus-visible:ring-[#c5a059]`).
**Action:** Always include `aria-controls`, `aria-expanded`, `aria-label`, and `focus-visible` ring styles when implementing icon buttons and toggles in the Navbar.
