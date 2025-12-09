# Deployment Guide

## Frontend (Vercel/Netlify)

1.  **Build**:
    Run inside `frontend-react`:
    ```bash
    npm run build
    ```
    Output folder: `dist/`.

2.  **Vercel Configuration**:
    - Root Directory: `frontend-react`
    - Build Command: `npm run build`
    - Output Directory: `dist`
    - Env Vars: `VITE_API_URL` (Pointer to your live backend URL)

## Backend (Railway/Heroku/Forge)

1.  **Railway/Heroku**:
    - Root Directory: `backend-laravel`
    - Buildpack: PHP
    - Env Vars:
      - `APP_KEY`: (Run `php artisan key:generate --show` locally to get one)
      - `APP_DEBUG`: false
      - `APP_URL`: Your live domain

2.  **Docker (Optional)**:
    - Use `sail` or create a `Dockerfile` in `backend-laravel`.
