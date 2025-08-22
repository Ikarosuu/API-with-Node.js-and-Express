# ⚽ API with Node.js and Express ⚽

This project is a REST API built with **Node.js**, **Express**, and **TypeScript** to manage players and clubs as an example of its functionality.  

## 📂 Project Structure

- **`app.ts`** → Main Express configuration (middlewares, CORS, JSON, routes).  
- **`routes.ts`** → Defines the API routes.  
- **`server.ts`** → Entry point that initializes the server.  
- **`controllers/`** → Contains the business logic for players and clubs.  
- **`data/`** → Contains static data.  
- **`models/`** → Typings and contracts (Club, Player, Statistics, HttpResponse).  
- **`repositories/`** → Access and manipulate the data (e.g., clubs.json).  
- **`services/`** → Business logic layer, processes data from the repositories.  
- **`utils/`** → Handles headers and response bodies.  

## 🚀 Technologies Used

- [Node.js](https://nodejs.org/)  
- [Express](https://expressjs.com/)  
- [TypeScript](https://www.typescriptlang.org/)  
- [CORS](https://www.npmjs.com/package/cors)  

## ⚙️ Installation

Clone the repository and install the dependencies:

```bash
git clone https://github.com/Ikarosuu/API-with-Node.js-and-Express
cd API-with-Node.js-and-Express
npm install
```

## ▶️ Running the Server

Before running, set the environment variable `PORT` (example: `3000`).  

```bash
npm run start:dev
```

The server will be running at:  

```
http://localhost:3000
```

## 📌 API Routes

All routes are under the `/api` prefix.  

### 👤 Players (`/api/players`)

- `GET /players` → Get all players  
- `POST /players` → Create a new player  
- `GET /players/:id` → Get a player by ID  
- `DELETE /players/:id` → Delete a player by ID  
- `PATCH /players/:id` → Update a player by ID  

### 🏆 Clubs (`/api/clubs`)

- `GET /clubs` → Get all clubs
- `GET /clubs/:id` → Get a club by ID 

## 🔧 CORS Configuration

By default, CORS is enabled.  
There is also a restrictive configuration example that only allows:  

- Origins:  
  - `https://www.exemplo.com/`  
  - `http://www.exemplo2.com`  
- Methods:  
  - `GET`  