UX and Accessibility Learnings: Documented usage of lucide-react, Tailwind CSS, and HashRouter.

## 2024-05-06 - Mobile Menu State Accessibility
**Learning:** For stateful toggle components (like hamburger menus) in this application, it's crucial to dynamically update `aria-expanded` and `aria-label`, explicitly link the toggle to the container using `aria-controls`, and hide inner decorative SVGs with `aria-hidden="true"`. Also, since users navigate via keyboard, adding explicit focus indicators matching the primary color (e.g., `focus-visible:ring-[#c5a059]`) is essential to meet accessibility standards and the brand styling.
**Action:** Always include full state accessibility attributes (`aria-expanded`, `aria-controls`, dynamic `aria-label`) and prominent `focus-visible` styling when adding or updating interactive toggle components.
