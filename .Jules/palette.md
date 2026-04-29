UX and Accessibility Learnings: Documented usage of lucide-react, Tailwind CSS, and HashRouter.

## 2023-10-27 - Mobile Hamburger Menu Accessibility
**Learning:** Stateful navigation elements like mobile hamburger menus require dynamic `aria-expanded` attributes and an `aria-controls` attribute that matches the specific `id` of the dropdown container. Additionally, inner SVG icons inside these buttons should be marked with `aria-hidden="true"` to prevent redundant screen reader announcements.
**Action:** When creating or fixing toggle buttons, always map their state to `aria-expanded`, link them to their target container using `aria-controls`, and ensure keyboard focus is visible and inner decorative icons are hidden.
