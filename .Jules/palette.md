UX and Accessibility Learnings: Documented usage of lucide-react, Tailwind CSS, and HashRouter.

## 2024-05-24 - State-Driven Toggle Components
**Learning:** For state-driven toggle components like hamburger menus, accessibility standards require dynamic `aria-expanded`, an `aria-controls` attribute linking the button to the target container's ID, and `aria-hidden="true"` on inner decorative icons (e.g., from `lucide-react`) to prevent redundant screen reader announcements.
**Action:** Always add these specific ARIA attributes to interactive toggle buttons and their corresponding dropdown containers, and explicitly manage focus states using `focus-visible` to support keyboard navigation.