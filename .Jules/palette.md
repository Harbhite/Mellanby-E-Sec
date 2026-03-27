UX and Accessibility Learnings: Documented usage of lucide-react, Tailwind CSS, and HashRouter.

## 2024-05-18 - Navbar Accessibility Improvements
**Learning:** Icon-only buttons (like secondary navigation items and mobile menu toggles) require explicit `aria-label`s for screen readers. Standard Tailwind `focus-visible` classes significantly improve keyboard navigation by providing clear visual indicators, especially in components heavily relying on icons. `aria-expanded` is also crucial for toggle buttons to reflect their state to assistive technologies.
**Action:** Always ensure icon-only buttons have `aria-label`s and interactive elements have appropriate `focus-visible` styling in this design system.
