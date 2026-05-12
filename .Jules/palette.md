UX and Accessibility Learnings: Documented usage of lucide-react, Tailwind CSS, and HashRouter.

## 2024-05-12 - Icon-only Menu Toggles
**Learning:** React Lucide icons in mobile menu toggles (`Navbar.tsx` and `AdminLayout.tsx`) were being read by screen readers as image elements, while the buttons lacked context about their state.
**Action:** When adding `aria-label`, `aria-expanded`, and `aria-controls` to icon-only toggle buttons, also ensure inner `<Menu />` and `<X />` icons receive `aria-hidden="true"` and the button has visible focus states (`focus-visible:ring-2`).
