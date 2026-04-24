UX and Accessibility Learnings: Documented usage of lucide-react, Tailwind CSS, and HashRouter.

## 2024-04-24 - Accessible Icon Buttons and Hamburger Menus
**Learning:** For state-driven toggle components like hamburger menus, it is important to add dynamic `aria-expanded` and link the button to the target container using `aria-controls`. Additionally, when using `lucide-react` icons inside icon-only interactive elements, the `<item.icon>` should have `aria-hidden="true"` to prevent redundant screen reader announcements when the parent wrapper already has an `aria-label`.
**Action:** When adding `aria-label` to icon-only interactive components, immediately add `aria-hidden="true"` to the child icon element and ensure focus indicators (e.g. `focus-visible:ring-2`) are explicitly defined.
