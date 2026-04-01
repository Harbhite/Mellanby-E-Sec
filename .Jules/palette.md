UX and Accessibility Learnings: Documented usage of lucide-react, Tailwind CSS, and HashRouter.

## 2024-02-14 - Maintenance Form Accessibility
**Learning:** Found critical accessibility gap in Maintenance form: inputs lacked `id` attributes and labels lacked `htmlFor`, making them invisible to screen readers despite visual proximity.
**Action:** Always verify form accessibility using `get_by_label` in Playwright or similar tools to ensure programmatic association. Added explicit `role="alert"` for form feedback messages.
