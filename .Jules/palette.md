UX and Accessibility Learnings: Documented usage of lucide-react, Tailwind CSS, and HashRouter.

## 2024-05-24 - Accessible Icon-Only Navigation
**Learning:** Responsive nav bars often use icon-only elements like hamburger menus and secondary quick links. Screen readers announce the SVG element or link title poorly if not appropriately masked and labeled.
**Action:** When creating icon-only buttons or links, ensure the interactive container has `aria-label` providing full context, `focus-visible:ring-2` for keyboard users, and explicitly mark the inner `<Icon>` with `aria-hidden="true"`. Also, for toggles (like mobile menu buttons), add `aria-expanded={isOpen}` to indicate state.
