UX and Accessibility Learnings: Documented usage of lucide-react, Tailwind CSS, and HashRouter.

## 2026-04-17 - Accessible Mobile Menu Toggles
**Learning:** For stateful toggle components like the mobile hamburger menu, simply adding an `onClick` is insufficient for accessibility. The interactive element must inform screen readers of its state and purpose. Additionally, utility classes like `focus:outline-none` destroy keyboard navigation cues unless an explicit `focus-visible` alternative is provided.
**Action:** When implementing menu or disclosure toggles, always bind `aria-expanded` to the toggle state, explicitly link the button to the content container using `aria-controls` with a matching `id`, provide a descriptive `aria-label`, explicitly hide decorative inner SVGs (`aria-hidden="true"`), and replace `focus:outline-none` with accessible alternatives like `focus-visible:ring-2`.
