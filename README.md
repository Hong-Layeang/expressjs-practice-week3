
# 📘 ExpressJS Practice - Week 3

This repository contains practice exercises for learning Express.js, focusing on route handling, POST requests, middleware, and API design. This work is part of the Web Development course at CADT.

---

## 📌 Goals

- ✅ Set up and run an Express.js HTTP server
- ✅ Implement RESTful routing with Express
- ✅ Parse POST data using middleware
- ✅ Use middleware for logging, validation, and authentication
- ✅ Build and filter API responses with route/query parameters

---

## 📁 Project Structure

```
.
├── server.js               # Main server file
├── logger.js               # Middleware for logging request details
├── validateQuery.js        # Middleware for validating query params
├── auth.js                 # (Optional) Token-based authentication middleware
├── data/                   # Course data for API simulation (if any)
└── README.md               # This file
```

---

## 🧪 Exercises

### ✅ Exercise 1 – Refactor Native HTTP to Express
Refactor your Week 2 code from using Node's `http` module to use the Express.js framework for better route handling and code readability.

### ✅ Exercise 2 – Course Catalog API

Build an API for course records:

- Route: `GET /departments/:dept/courses`
- Supports filtering with:
  - `level` (e.g., undergraduate)
  - `minCredits`, `maxCredits`
  - `semester` (e.g., fall)
  - `instructor` (partial match)
- Edge cases handled:
  - Invalid credit range (`minCredits > maxCredits`)
  - No matches return empty array
  - Unknown filters are ignored

### ✅ Exercise 3 – Middleware Enhancements

- **Logger Middleware**: Logs method, path, query, and timestamp
- **Validation Middleware**: Validates credit filters
- **Auth Middleware (Bonus)**: Requires `?token=xyz123` for protected routes

---

## 🚀 Run the Project

```bash
npm install
node server.js
```

Open your browser or Postman:

```
http://localhost:3000/departments/CSE/courses?level=undergraduate&minCredits=3
```
