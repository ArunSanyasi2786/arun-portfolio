# Arun Sanyasi Portfolio

Premium engineering portfolio website for **Arun Sanyasi**, an Instrumentation and Control Engineering graduate focused on PLC, SCADA, DCS concepts, industrial automation, control systems, instrumentation, sensors, HMI, Raspberry Pi, ESP32, industrial communication and project development.

## Features

- React + Vite frontend
- Tailwind CSS futuristic blue/black design system
- Framer Motion scroll reveal and interaction animations
- React Three Fiber hero scene with starfield, torus knot, distorted sphere and wireframe geometry
- Responsive layout for mobile, tablet, laptop and desktop
- Profile image with rotating conic-gradient halo and orbiting skill tags
- Project cards with extracted portfolio images and detail modals
- Resume/CV download section with runtime PDF availability check
- Contact form UI with optional backend submission
- Express backend with `/api/chat`, `/api/contact` and `/api/health`
- ArunBot floating chatbot with backend mode and GitHub Pages static fallback mode
- Local knowledge base in `backend/knowledge/arun-profile.json`
- Frontend fallback knowledge copy in `frontend/src/data/arun-profile.json`
- Asset provenance in `ASSET_MANIFEST.md`

## Project Structure

```text
arun-portfolio/
├── frontend/
│   ├── public/
│   │   └── files/
│   ├── src/
│   │   ├── assets/
│   │   │   ├── profile/
│   │   │   ├── projects/
│   │   │   └── review-needed/
│   │   ├── components/
│   │   ├── sections/
│   │   ├── data/
│   │   ├── hooks/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
├── backend/
│   ├── knowledge/
│   │   └── arun-profile.json
│   ├── routes/
│   ├── server.js
│   ├── package.json
│   └── .env.example
├── scripts/
│   ├── extract-assets.py
│   └── scan-profile-data.py
├── ASSET_MANIFEST.md
├── README.md
├── .gitignore
└── package.json
```

## Run Locally

Install all workspace dependencies from the root:

```bash
npm install
```

Run frontend and backend together:

```bash
npm run dev
```

Frontend only:

```bash
cd frontend
npm install
npm run dev
```

Backend only:

```bash
cd backend
npm install
cp .env.example .env
npm run dev
```

Default local URLs:

- Frontend: `http://localhost:5173`
- Backend: `http://localhost:8080`
- Health check: `http://localhost:8080/api/health`

## CV / Portfolio PDF

Place the final PDF here:

```text
frontend/public/files/arun-portfolio.pdf
```

The download button checks for this file at runtime. If it is missing, the website shows:

```text
Portfolio PDF will be available soon.
```

## ArunBot Chatbot

ArunBot works in two modes:

1. **Backend mode**: When the backend is running locally or deployed, frontend calls `/api/chat`.
2. **Static fallback mode**: On GitHub Pages, if no backend URL is configured, ArunBot answers using `frontend/src/data/arun-profile.json`.

Optional AI integration is server-side only. API keys are never exposed to the frontend.

Backend `.env` example:

```env
PORT=8080
FRONTEND_ORIGIN=http://localhost:5173
USE_OPENAI=false
OPENAI_API_KEY=
OPENAI_MODEL=gpt-4.1-mini
```

Set `USE_OPENAI=true` only after adding a valid server-side key. The backend automatically falls back to local knowledge if the AI request fails.

## GitHub Pages Deployment

GitHub Pages hosts the frontend only.

### Option A: GitHub Actions

A workflow is included at:

```text
.github/workflows/deploy-frontend.yml
```

Steps:

1. Push this repo to GitHub as `arun-portfolio`.
2. In GitHub, go to **Settings > Pages**.
3. Set **Source** to **GitHub Actions**.
4. Push to `main`. The workflow builds `frontend` and deploys it.

The Vite base path defaults to:

```text
/arun-portfolio/
```

If your repository name is different, set the workflow environment variable `VITE_BASE_PATH` accordingly.

### Option B: gh-pages package

```bash
cd frontend
npm install
VITE_BASE_PATH=/arun-portfolio/ npm run deploy
```

## Backend Deployment

GitHub Pages cannot host Express APIs. Deploy the backend separately.

### Render

1. Create a new Web Service.
2. Root directory: `backend`
3. Build command: `npm install`
4. Start command: `npm start`
5. Add environment variables from `backend/.env.example`.
6. Set `FRONTEND_ORIGIN` to your GitHub Pages URL.
7. In GitHub Pages frontend deployment, set `VITE_API_URL` to your Render backend URL.

### Railway

1. Create a new Railway project from the GitHub repo.
2. Set the service root to `backend`.
3. Add the same environment variables.
4. Use the generated public backend URL as `VITE_API_URL` when building frontend.

### Vercel Serverless Alternative

For a serverless deployment, convert `backend/routes/chat.js` logic into a Vercel API function under `api/chat.js`. Keep the knowledge JSON server-side or bundle a sanitized copy. Do not expose API keys to the frontend.

## Asset Extraction

Re-run asset extraction:

```bash
npm run extract:assets
```

Re-run profile source scanning:

```bash
npm run scan:profile
```

Review copied assets and provenance in:

```text
ASSET_MANIFEST.md
```

Privacy rules followed:

- No API keys committed.
- No raw private Word, PowerPoint or PDF documents copied into frontend assets.
- Runtime health databases, logs, generated QR exports and archives excluded.
- Only selected project/profile images copied and compressed.

## Manual Details To Fill Later

- Replace `frontend/public/files/arun-portfolio.pdf` with the final CV/portfolio PDF.
- Add Arun's real LinkedIn URL in `frontend/src/data/portfolio.js` and `backend/knowledge/arun-profile.json`.
- Update contact details if a different public email/phone should be used.
- Add live project links if repositories or demos become available.
