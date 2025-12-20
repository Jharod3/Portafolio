# Deployment Guide

## Deploy to Vercel (Recommended)

1.  Push your code to GitHub.
2.  Go to [Vercel](https://vercel.com) and sign up/login.
3.  Click **"Add New..."** -> **"Project"**.
4.  Import your repository (`Portafolio`).
5.  Vercel will detect `Vite`.
    - **Root Directory**: `frontend-react` (Important: Click "Edit" and select this folder).
    - **Build Command**: `npm run build`
    - **Output Directory**: `dist`
6.  Click **Deploy**.

## Deploy to Netlify

1.  Push your code to GitHub.
2.  Log in to Netlify and "Add new site" -> "Import from Git".
3.  Connect GitHub and select your repository.
4.  Configure:
    - **Base directory**: `frontend-react`
    - **Build command**: `npm run build`
    - **Publish directory**: `dist`
5.  Click **Deploy site**.
