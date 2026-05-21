UX and Accessibility Learnings: Documented usage of lucide-react, Tailwind CSS, and HashRouter.

## 2024-10-24 - Enhance Navbar Accessibility
**Learning:** State-driven UI toggles (like hamburger menus) require dynamic `aria-expanded` and specific structural linkages (`aria-controls`) to be fully accessible. Adding standard keyboard focus visualization (e.g. `focus-visible:ring-2 focus-visible:ring-[#c5a059]`) explicitly on interactive icon elements ensures critical navigation paths are traversable for screen readers and keyboard users.
**Action:** When implementing or updating toggle buttons (especially icon-only mobile navigation), systematically verify the presence of `aria-expanded`, `aria-controls`, a valid ID on the target container, and visually distinct `focus-visible` styles matching the brand colors.
