# AI Career Compass

AI Career Compass is a full-stack web app that guides users through an interactive career assessment and generates personalized tech career recommendations using Google Gemini.

## Features

- **Start screen** with a dark, modern UI introducing the assessment
- **Interactive multi-step assessment** covering interests, skills, goals, and learning preferences
- **Loading / analysis state** while Gemini processes answers, with rotating status messages and error retry
- **Personalized results** including:
  - AI user profile (strengths, growth areas, learning style)
  - Top career matches with fit scores
  - 90-day learning roadmap
  - Future career projection (outlook, salary, next roles, skills)
  - Reality-check warnings
- Responsive UI built with React and Tailwind CSS

## User Flow

1. Land on the start screen and begin the assessment
2. Answer each question step by step
3. Click **Finish** → navigate to the loading screen
4. Backend analyzes answers with Gemini
5. View results on the results page

## Tech Stack

| Layer | Technologies |
| --- | --- |
| Frontend | React, Vite, TypeScript, Tailwind CSS, React Router, Axios, Lucide |
| Backend | Node.js, Express, TypeScript, Zod, Google GenAI (Gemini) |

## Project Structure

```text
ai-career-compass/
├── frontend/          # React + Vite client
│   └── src/
│       ├── pages/     # Assessment, Loading, Results
│       ├── components/
│       ├── hooks/
│       ├── api/
│       └── data/
└── backend/           # Express API + Gemini integration
    └── src/
        ├── routes/
        ├── controllers/
        ├── services/
        ├── ai/
        ├── validators/
        └── prompts/
```

## Getting Started

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd ai-career-compass
```

### 2. Backend setup

```bash
cd backend
npm install
```

Create a `.env` file in `backend/`:

```env
GEMINI_API_KEY=your_gemini_api_key
PORT=5000
```

Start the API:

```bash
npm run start:dev
```

The server runs at `http://localhost:5000` by default.

### 3. Frontend setup

In a new terminal:

```bash
cd frontend
npm install
npm run dev
```

The app runs at the Vite URL shown in the terminal (typically `http://localhost:5173`).

> The frontend API client expects the backend at `http://localhost:5000`.

## Environment Variables

| Variable | Location | Description |
| --- | --- | --- |
| `GEMINI_API_KEY` | `backend/.env` | Required. Google Gemini API key used for career analysis |
| `PORT` | `backend/.env` | Optional. Backend port (defaults to `5000`) |

## API

| Method | Endpoint | Description |
| --- | --- | --- |
| `GET` | `/` | Health check |
| `POST` | `/api/analyze` | Accepts assessment answers and returns AI career results |

## Scripts

### Frontend (`frontend/`)

- `npm run dev` — start Vite development server
- `npm run build` — typecheck and production build
- `npm run preview` — preview production build
- `npm run lint` — run ESLint

### Backend (`backend/`)

- `npm run start:dev` — start Express with hot reload (`tsx watch`)

## License

This project is for educational and portfolio purposes.
