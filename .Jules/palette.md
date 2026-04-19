UX and Accessibility Learnings: Documented usage of lucide-react, Tailwind CSS, and HashRouter.
## 2024-05-19 - Accessible Mobile Menus
**Learning:** For interactive overlay menus (like Navbars and Sidebars), applying `aria-expanded`, `aria-controls` (linking to the container `id`), and `aria-hidden="true"` on inner SVG icons makes navigation vastly improved for screen readers. Using `focus-visible:ring-2` with the theme colors ensures high-contrast keyboard navigability without disrupting mouse interactions.
**Action:** Always pair `aria-expanded` and `aria-controls` when implementing custom dropdowns or sidebars, and explicitly hide decorative icons from screen readers.
