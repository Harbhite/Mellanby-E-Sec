## 2024-05-24 - Accessibility Fix for Maintenance Form
**Learning:** The maintenance request form used visual labels without programmatic association, which is a common pattern in this codebase.
**Action:** When auditing forms, specifically check for `htmlFor` and `id` pairs, especially on custom styled inputs.
