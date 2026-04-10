UX and Accessibility Learnings: Documented usage of lucide-react, Tailwind CSS, and HashRouter.

## 2024-04-10 - Navbar Controls Accessibility
**Learning:** For state-driven toggle components (like the hamburger menu), accessibility standards require dynamic `aria-expanded` and an `aria-controls` attribute explicitly linking the toggle button to the target container's ID. Additionally, inner SVG icons inside icon-only buttons/links must be explicitly marked with `aria-hidden="true"` to prevent redundant screen reader announcements.
**Action:** When adding ARIA labels to interactive elements, always ensure `aria-expanded` is dynamic (bound to state), use `aria-controls` pointing to the exact ID of the target container, and add `aria-hidden="true"` to any inner SVG elements.
