# 🚀 CODISH Nova - AI-Powered Senior Code Reviewer

CODISH Nova is a modern, full-stack MERN application that provides developer teams and individuals with instant, senior-level code reviews. By harnessing the power of Google's Gemini AI, CODISH acts as an expert companion to spot bugs, optimize performance, ensure DRY/SOLID compliance, and elevate code quality.

---

## 🌟 Key Features

- **💻 Real-Time Code Editor:** Interactive code editing workspace featuring syntax highlighting powered by PrismJS.
- **🤖 Senior Code Reviewer Persona:** Reviews are handled by **CODISH**, an AI persona simulating a senior developer with 7+ years of experience. Feedback is concise, constructive, actionable, and formatted using rich markdown with emoji indicators (✅, ⚠️, 🚀, 💡, 🛑).
- **🔒 Secure Authentication:** Custom registration and login flow using **bcrypt** password hashing and cookie-based **JWT** session tokens.
- **🎨 Modern Developer UI:** Fully responsive design styled using Tailwind CSS v4, complete with dark-mode aesthetic, ambient glassmorphism glows, and fluid micro-animations.
- **📄 Markdown Rendering:** AI reviews are rendered using markdown support featuring highlight.js syntax blocks for quick copy-pasting of recommended code fixes.

---

## 🛠️ Tech Stack

### Frontend
- **Framework:** React 19 + Vite
- **Styling:** Tailwind CSS v4
- **Routing:** React Router DOM v7
- **Code Editor:** `react-simple-code-editor` + PrismJS
- **Markdown & Code Highlight:** `react-markdown` + `rehype-highlight` + Github-Dark styles
- **HTTP Client:** Axios

### Backend
- **Runtime:** Node.js
- **Framework:** Express.js v5 (beta)
- **Database:** MongoDB + Mongoose ODM
- **Security & Auth:** JSON Web Tokens (JWT), BCrypt password hashing, Cookie Parser
- **AI Integration:** Google Gen AI SDK (`@google/genai`) using `gemini-3-flash-preview`

---

## 📂 Project Structure

```bash
AI_REVIEW/
├── backend/
│   ├── src/
│   │   ├── controlers/         # Express Route Controllers (Auth, AI Response)
│   │   │   ├── ai.conntrollers.js
│   │   │   └── auth.controller.js
│   │   ├── db/                 # Database connection logic
│   │   │   └── mongo.db.js
│   │   ├── models/             # Mongoose schemas
│   │   │   └── users.model.js
│   │   ├── routes/             # App routing (User API, AI API)
│   │   │   ├── ai.routes.js
│   │   │   └── user.routes.js
│   │   ├── services/           # Business logic (Gemini API Integration)
│   │   │   └── ai.services.js
│   │   └── app.js              # Express app setup (CORS, Middlewares, Routes)
│   ├── .env                    # Backend Environment variables
│   ├── server.js               # Entry point (HTTP Server)
│   └── package.json
│
├── frontend/
│   └── AI_frontend/
│       ├── public/             # Static Assets
│       ├── src/
│       │   ├── components/     # Reusable components (e.g. ProfileOverlay)
│       │   ├── pages/          # Pages (Landing, Login, Register, Home Dashboard)
│       │   ├── App.css
│       │   ├── App.jsx         # App routes config
│       │   ├── index.css       # Tailwind entry point
│       │   └── main.jsx        # React DOM entry point
│       ├── .env                # Frontend Environment variables
│       ├── vercel.json         # Vercel deployment configurations
│       ├── vite.config.js      # Vite build settings
│       └── package.json
│
└── readme.md                   # Project documentation
```

---

## 🚀 Getting Started

### 📋 Prerequisites
Ensure you have the following installed on your machine:
- [Node.js](https://nodejs.org/) (v18+ recommended)
- [MongoDB](https://www.mongodb.com/) (Local instance or MongoDB Atlas cluster)
- Google Gemini API Key (Get one from [Google AI Studio](https://aistudio.google.com/))

## 🔌 API Documentation

### Authentication Routes
- **`POST /api/user/register`**
  - Registers a new user.
  - **Body:** `{ username, email, password }`
  - Sets cookies with JWT token `Ai_token`.
- **`POST /api/user/login`**
  - Authenticates user credentials.
  - **Body:** `{ email, password }`
  - Sets cookies with JWT token `Ai_token`.
- **`POST /api/user/logout`**
  - Clears `Ai_token` cookies.

### AI Review Routes
- **`POST /ai/get-response`**
  - Submits code for AI senior developer evaluation.
  - **Body:** `{ prompt }` (where prompt is the raw code string)
  - Returns a detailed Markdown review.
