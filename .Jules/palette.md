UX and Accessibility Learnings: Documented usage of lucide-react, Tailwind CSS, and HashRouter.

## 2026-04-21 - Accessible State-Driven Toggles
**Learning:** State-driven toggle components (like hamburger menus) require dynamic `aria-expanded` attributes, an explicit `aria-controls` linking the button to the target container's ID, and `aria-hidden` on nested icons to prevent redundant screen reader announcements.
**Action:** When updating toggle buttons, always pair `aria-expanded` with an `aria-controls` ID reference, ensure explicit `aria-label` text, and hide presentation-only icons.
