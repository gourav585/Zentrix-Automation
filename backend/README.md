# Zentrix Backend

Production-style Node/Express backend for demo request capture and admin listing.

## Structure

```txt
src/
  app.js
  server.js
  config/
    env.js
    database.js
  controllers/
    health.controller.js
    contact.controller.js
    admin.controller.js
  middleware/
    adminAuth.middleware.js
  models/
    contactRequest.model.js
  routes/
    health.routes.js
    contact.routes.js
    admin.routes.js
  validators/
    contact.validator.js
```

## Setup

1. Copy `.env.example` to `.env`
2. Fill:
   - `MONGODB_URI` with real password (no `<db_password>`)
   - `ADMIN_KEY` with your own key
   - `CORS_ORIGIN` (comma-separated origins in production)
3. Run:

```bash
npm install
npm run dev
```

## API

- `GET /api/health`
- `POST /api/contact`
- `GET /api/admin/requests` (requires `x-admin-key` if `ADMIN_KEY` is set)

## Render Notes

- `CORS_ORIGIN` should be your frontend URL (example: `https://zentrix-frontend.onrender.com`).
- Multiple origins are supported with comma-separated values.
