UX and Accessibility Learnings: Documented usage of lucide-react, Tailwind CSS, and HashRouter.

## 2024-05-27 - Navbar Icon Buttons Accessibility
**Learning:** Icon-only links and toggle buttons (like the hamburger menu) in the Navbar were missing visible focus states and proper screen reader attributes, impacting keyboard navigation accessibility.
**Action:** Always add `focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c5a059]` to interactive elements in the top navigation to match the brand color. Additionally, ensure icon-only interactive elements have an `aria-label` and inner SVG icons are explicitly marked with `aria-hidden="true"`.
