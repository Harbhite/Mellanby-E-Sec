# Admin Dashboard Access

This document outlines how to access the **Kenneth Mellanby Hall e-Secretariat Admin Dashboard**.

## 1. Access URL

The admin dashboard is located at:
**[http://localhost:3000/#/admin](http://localhost:3000/#/admin)**

*(If deployed, replace `localhost:3000` with your domain)*

## 2. Default Credentials

The system requires an initial admin user to be created.
If you have not created one yet, please run the following command in your terminal:

```bash
npm run create-admin admin@mellanby.edu.ng "Mellanby@2025"
```

Once created, you can log in with:

| Field | Value |
| :--- | :--- |
| **Email** | `admin@mellanby.edu.ng` |
| **Password** | `Mellanby@2025` |

> **Note:** These credentials are not active by default. You **must** run the script above to create the user in your Supabase project.

## 3. Troubleshooting Login

If you cannot log in:
1. Ensure your local server is running (`npm run dev`).
2. Ensure you have a valid internet connection (Supabase is cloud-hosted).
3. Check the console for any error messages.
4. Verify that the user exists in your Supabase Authentication dashboard.
5. Verify that the user has the `admin` role in the `profiles` table (the script attempts to set this, but you may need to do it manually in the Supabase SQL Editor if RLS blocks it).

### SQL to Manually Grant Admin Role
If the script fails to set the role, run this in your Supabase SQL Editor:
```sql
UPDATE profiles
SET role = 'admin'
WHERE id = '(USER_ID_FROM_AUTH_TABLE)';
```

## 4. Security Note
**Please change the default password immediately after your first login** or create a new personal admin account and delete the default one.
