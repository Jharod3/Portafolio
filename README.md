# Portfolio Jharod Hidalgo

Full Stack Portfolio developed with Laravel 10 (Backend) and React + Vite (Frontend).

## Prerequisites
- PHP 8.1+
- Composer
- Node.js 18+

## Setup

### Backend (Laravel)

1.  Navigate to `backend-laravel`:
    ```bash
    cd backend-laravel
    ```
2.  Install dependencies:
    ```bash
    composer install
    ```
3.  Copy `.env` (if not exists):
    ```bash
    cp .env.example .env
    ```
4.  Generate Key:
    ```bash
    php artisan key:generate
    ```
5.  Serve:
    ```bash
    php artisan serve
    ```
    API will run at `http://localhost:8000`.

### Frontend (React)

1.  Navigate to `frontend-react`:
    ```bash
    cd frontend-react
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Run development server:
    ```bash
    npm run dev
    ```
    App will run at `http://localhost:5173`.

## Architecture

- **Backend**: Laravel handles API requests (`/api/about`, `/api/projects`). Data is served from `PortfolioController`. Migrations are included for Database integration.
- **Frontend**: React (Vite) with TypeScript. Uses `axios` to fetch data, `animejs` for animations, and `tailwindcss` for styling. Dark mode is supported.

## Structure

- `/backend-laravel`: Laravel codebase.
- `/frontend-react`: React codebase.
- `/content`: Raw content files from CV.
