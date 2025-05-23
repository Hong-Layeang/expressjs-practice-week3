import express from 'express';
import courses from '../data/course.js';
import validateCredits from '../middleware/validateCredits.js';

const router = express.Router();

router.get('/:dept/courses', validateCredits, (req, res) => {
    const { dept } = req.params;
    const { level, minCredits, maxCredits, semester, instructor } = req.query;

    let filteredCourses = courses.filter(course =>
        course.department.toLowerCase() === dept.toLowerCase()
    );

    if (filteredCourses.length === 0) {
        return res.status(404).send({ message: 'No courses found for this department!' });
    }

    if (level) {
        filteredCourses = filteredCourses.filter(course =>
            course.level.toLowerCase() === level.toLowerCase()
        );
    }

    if (minCredits) {
        filteredCourses = filteredCourses.filter(course => course.credits >= parseInt(minCredits));
    }

    if (maxCredits) {
        filteredCourses = filteredCourses.filter(course => course.credits <= parseInt(maxCredits));
    }

    if (semester) {
        filteredCourses = filteredCourses.filter(course =>
            course.semester.toLowerCase() === semester.toLowerCase()
        );
    }

    if (instructor) {
        filteredCourses = filteredCourses.filter(course =>
            course.instructor.toLowerCase().includes(instructor.toLowerCase())
        );
    }

    if (filteredCourses.length === 0) {
        return res.status(404).send({ message: 'No courses matched your criteria!' });
    }

    res.status(200).send({
        results: filteredCourses,
        meta: {
            total: filteredCourses.length
        }
    });
});

export default router;
