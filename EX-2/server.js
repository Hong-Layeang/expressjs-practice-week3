// server.js
import express from 'express';
import courses from "./data/course.js";
import logger from './middleware/logger.js';
import authenticateToken from './middleware/authenticateToken.js';
import courseRoutes from './routes/courses.route.js';

const app = express();
const PORT = 3000;

// global middleware
app.use(logger);
app.use(authenticateToken);

// Route: GET /departments/:dept/courses
// app.get('/departments/:dept/courses', (req, res) => {
//     const { dept } = req.params;
//     const { level, minCredits, maxCredits, semester, instructor } = req.query;
    // Implementing the filter logic
    // Hint: Use the filter method to filter the courses array based on the provided criteria
// });

app.use('/departments', courseRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
