UX and Accessibility Learnings: Documented usage of lucide-react, Tailwind CSS, and HashRouter.

## 2023-10-27 - Navbar Accessibility Enhancements
**Learning:** Found that secondary icon-only navigation links lacked `aria-label`s, and the mobile hamburger menu lacked necessary `aria-expanded` and `aria-controls` states, reducing screen reader clarity.
**Action:** Always add descriptive `aria-label`s to icon-only buttons/links, `aria-hidden="true"` to their internal SVGs, and ensure toggle buttons correctly communicate their state and target container ID to assistive technologies.
