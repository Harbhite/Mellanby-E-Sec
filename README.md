<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Mellanby Hall E-Secretariat

This is the E-Secretariat platform for Mellanby Hall, featuring a public facing website and a secure admin dashboard.

## Features

- **Public Access**: View upcoming events, latest news, and submit maintenance requests.
- **Admin Dashboard**: secure login to manage events, news, and view maintenance requests.
- **Supabase Backend**: Real-time database for content management.

## Run Locally

**Prerequisites:**  Node.js

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Supabase Setup:**
   - Create a new project on [Supabase](https://supabase.com).
   - Copy the database schema from `supabase/schema.sql` and run it in the Supabase SQL Editor.
   - Retrieve your project URL and Anon Key from Project Settings > API.

3. **Environment Variables:**
   - Create a `.env` file in the root directory.
   - Add your Supabase credentials:
     ```
     VITE_SUPABASE_URL=your_project_url
     VITE_SUPABASE_ANON_KEY=your_anon_key
     ```

4. **Run the app:**
   ```bash
   npm run dev
   ```

## Deployment

Build the application for production:
```bash
npm run build
```
