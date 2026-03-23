# 📝 ThinkBoard - MERN Notes App

A full-stack notes application built with the **MERN** stack (MongoDB, Express.js, React, Node.js) featuring rate limiting with Upstash Redis.

## ✨ Features

- 📒 Create, read, update, and delete notes
- 🔍 View individual note details
- ⚡ Rate limiting with Upstash Redis
- 🎨 Modern UI with TailwindCSS & DaisyUI
- 🔔 Toast notifications for user feedback

## 🛠️ Tech Stack

| Layer      | Technology                          |
| ---------- | ----------------------------------- |
| Frontend   | React, Vite, TailwindCSS, DaisyUI  |
| Backend    | Node.js, Express.js                 |
| Database   | MongoDB (Atlas)                     |
| Rate Limit | Upstash Redis                       |
| HTTP       | Axios                               |

## 📁 Project Structure

```
Mern/
├── backend/
│   ├── server.js              # Express server entry point
│   ├── .env                   # Environment variables (not committed)
│   ├── package.json
│   └── src/
│       ├── config/
│       │   ├── db.js          # MongoDB connection
│       │   └── upstash.js     # Upstash Redis config
│       ├── controllers/
│       │   └── notesController.js
│       ├── middleware/
│       │   └── rateLimiter.js
│       ├── models/
│       │   └── Note.js
│       └── routes/
│           └── notesRoutes.js
└── frontend/
    ├── index.html
    ├── vite.config.js
    ├── package.json
    └── src/
        ├── main.jsx
        ├── App.jsx
        ├── index.css
        ├── components/
        │   ├── Navbar.jsx
        │   ├── NoteCard.jsx
        │   ├── NotesNotFound.jsx
        │   └── RateLimitedUI.jsx
        ├── pages/
        │   ├── HomePage.jsx
        │   ├── CreatePage.jsx
        │   └── NoteDetailPage.jsx
        └── lib/
            ├── axios.js
            └── utils.js
```

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- [MongoDB Atlas](https://www.mongodb.com/atlas) account
- [Upstash Redis](https://upstash.com/) account (optional, for rate limiting)

### 1. Clone the Repository

```bash
git clone https://github.com/ImethDewmina128At90/Note_Mern.git
cd Note_Mern
```

### 2. Setup Backend

```bash
cd backend
npm install
```

Create a `.env` file in the `backend` folder:

```env
MONGO_URI=your_mongodb_connection_string
UPSTASH_REDIS_REST_URL=your_upstash_url
UPSTASH_REDIS_REST_TOKEN=your_upstash_token
```

> **Note:** The app works without Upstash credentials — rate limiting will simply be skipped.

Start the backend server:

```bash
npm run dev
```

The backend runs on **http://localhost:5001**

### 3. Setup Frontend

```bash
cd frontend
npm install
```

Start the frontend dev server:

```bash
npm run dev
```

The frontend runs on **http://localhost:5173**

## 📡 API Endpoints

| Method   | Endpoint         | Description         |
| -------- | ---------------- | ------------------- |
| `GET`    | `/api/notes`     | Get all notes       |
| `GET`    | `/api/notes/:id` | Get a note by ID    |
| `POST`   | `/api/notes`     | Create a new note   |
| `PUT`    | `/api/notes/:id` | Update a note       |
| `DELETE` | `/api/notes/:id` | Delete a note       |

## 🔐 Environment Variables

| Variable                   | Description                | Required |
| -------------------------- | -------------------------- | -------- |
| `MONGO_URI`                | MongoDB connection string  | ✅ Yes    |
| `UPSTASH_REDIS_REST_URL`   | Upstash Redis REST URL     | ❌ No     |
| `UPSTASH_REDIS_REST_TOKEN` | Upstash Redis REST token   | ❌ No     |
| `PORT`                     | Backend port (default 5001)| ❌ No     |
| `NODE_ENV`                 | Environment mode           | ❌ No     |

## 📜 License

This project is licensed under the ISC License.
