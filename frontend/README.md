# 🔮 Mini Arcana

A full-stack Tarot journal application where users can draw Tarot cards, write personal interpretations, and save their readings.

## 🌐 Live Demo

Frontend: https://mini-arcana.vercel.app/

Backend API: https://mini-arcana-backend.onrender.com/api/readings

---

## ✨ Features

* Draw a random Tarot card
* Write a question and interpretation
* Save readings to PostgreSQL
* View previous readings
* Load saved readings when the application starts
* Responsive interface
* Deployed full-stack application

---

## 🏗️ Architecture

```text
React Frontend
     │
     │ HTTP requests
     ▼
Express REST API
     │
     │ SQL queries
     ▼
PostgreSQL Database
     │
     ▼
Neon
```

### Deployment

```text
GitHub
 ├── Frontend → Vercel
 └── Backend  → Render
                  │
                  ▼
                 Neon
              PostgreSQL
```

---

## Tech Stack

### Frontend

* React
* Vite
* Tailwind CSS
* JavaScript

### Backend

* Node.js
* Express
* CORS
* PostgreSQL driver (`pg`)

### Database

* PostgreSQL
* Neon

### Deployment

* GitHub
* Vercel
* Render
* Neon

---

## 📁 Project Structure

```text
mini-arcana/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── TarotCard.jsx
│   │   │   ├── ReadingForm.jsx
│   │   │   └── ReadingList.jsx
│   │   │
│   │   ├── data/
│   │   │   └── cards.js
│   │   │
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   │
│   ├── .env
│   ├── package.json
│   └── vite.config.js
│
├── backend/
│   ├── controllers/
│   │   └── readingControllers.js
│   │
│   ├── routes/
│   │   └── readingRoutes.js
│   │
│   ├── database/
│   │   └── db/
│   │       └── db.js
│   │
│   ├── server.js
│   ├── package.json
│   └── .env
│
├── .gitignore
└── README.md
```

---

## 🔌 API Endpoints

### Get all readings

```http
GET /api/readings
```

Returns all saved readings.

### Create a reading

```http
POST /api/readings
```

Example request:

```json
{
  "question": "What should I focus on today?",
  "card_name": "The Empress",
  "interpretation": "I should focus on creativity and growth."
}
```

---

## 🗄️ Database

The application uses a PostgreSQL table called `readings`.

```text
readings
────────────────────────
id
question
card_name
interpretation
created_at
```

The database is hosted using Neon.

---

## 🚀 Run Locally

### 1. Clone the repository

```bash
git clone https://github.com/yaminmamamyo-maw/mini-arcana.git
cd mini-arcana
```

### 2. Start the backend

```bash
cd backend
npm install
node server.js
```

The API runs on:

```text
http://localhost:3000
```

### 3. Start the frontend

Open another terminal:

```bash
cd frontend
npm install
npm run dev
```

The frontend will run on the Vite development URL.

---

## 🔐 Environment Variables

The application uses environment variables for configuration.

### Frontend

```env
VITE_API_URL=http://localhost:3000
```

### Backend

```env
DATABASE_URL=your_database_connection_string
```

Environment files are excluded from Git using `.gitignore`.

---

## 📚 What I Learned

This project helped me understand how a full-stack application works from end to end:

```text
User
 ↓
React
 ↓
HTTP Request
 ↓
Express Route
 ↓
Controller
 ↓
PostgreSQL
 ↓
Database Response
 ↓
Express
 ↓
React
 ↓
User
```

I practiced:

* React components
* React state and `useEffect`
* Form handling
* API requests with `fetch`
* REST API design
* Express routes and controllers
* PostgreSQL queries
* Environment variables
* Git and GitHub
* CORS
* Deployment
* Connecting frontend, backend, and database
