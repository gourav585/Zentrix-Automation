# Deploy on Render

This repository is pre-configured for Render using `render.yaml`.

## 1. Create services from Blueprint

1. Push this repo to GitHub.
2. In Render, use **New +** -> **Blueprint** and select the repo.
3. Render will create:
   - `zentrix-backend` (Node web service)
   - `zentrix-frontend` (Static site)

## 2. Set required environment variables

### Backend (`zentrix-backend`)

- `MONGODB_URI`: your MongoDB Atlas connection URI
- `ADMIN_KEY`: secure admin key
- `CORS_ORIGIN`: frontend URL  
  Example: `https://zentrix-frontend.onrender.com`

### Frontend (`zentrix-frontend`)

- `VITE_API_BASE_URL`: backend URL  
  Example: `https://zentrix-backend.onrender.com`

## 3. Redeploy both services

After setting env vars, redeploy backend and frontend.

## Notes

- SPA routing is handled via rewrite rule in `render.yaml`, so routes like `/about` and `/contact` work on refresh.
- Backend responses are compressed in production for faster payload delivery.
