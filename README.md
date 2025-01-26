# Vite React TypeScript Starter - Portfolio Tracker

This project is a **portfolio tracker** built using **Vite**, **React**, and **TypeScript**. It allows users to track their stock investments in real time by interacting with a backend API.

---

## Features

- **Real-Time Stock Tracking:** Monitor your stock investments.
- **CRUD Operations:** Add, view, edit, and delete your stock data.
- Designed with **TypeScript** for improved type safety and scalability.

## Assumptions and Limitations

- **Backend API:** The backend API is assumed to be available at `https://stocktracker-backend-2zve.onrender.com/api/stocks` or at `http://localhost:8080/api/stocks`.
- **Default User:** No user authentication is implemented; all operations are performed under a default user ID.
- **Educational Purpose:** The application is for educational purposes and may not be production-ready without further enhancements.

---

## Steps to Run the Project Locally

### 1. Clone the Repository

```sh
git clone <repository-url>
cd <repository-directory>
```

### 2. Install Dependencies

Run the following command to install the required dependencies:

```sh
npm install
```

### 3. Set Up Environment Variables

Create a `.env` file in the root directory and add the following environment variables:

```env
VITE_API_URL=http://localhost:8080/api/stocks
```
or
```env
VITE_API_URL=https://stocktracker-backend-2zve.onrender.com/api (hosted)
```

### 4. Run the Development Server

Start the development server using:

```sh
npm run dev
```

### 5. Open the Application

Open your browser and navigate to:  
[http://localhost:5173](http://localhost:5173)

---

## Links

- **Deployed Application:** [https://stocktracker-frontend-sigma.vercel.app/](https://stocktracker-frontend-sigma.vercel.app/)
- **Live API Documentation:** [https://drive.google.com/file/d/1B0WXa9sogO61KtRsKJqS_YopkHutPNRA/view?usp=sharing](https://drive.google.com/file/d/1B0WXa9sogO61KtRsKJqS_YopkHutPNRA/view?usp=sharing)

---

## Tech Stack

- **Frontend:** Vite, React, TypeScript
- **Backend (API):** A hosted API on [Render](https://render.com).

---

## Getting Help

If you encounter any issues, feel free to raise them in the Issues section of the repository.

---
