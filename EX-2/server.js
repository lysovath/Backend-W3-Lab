// server.js
import express from 'express';
import courses from "./course.js";
const app = express();
const PORT = 3000;

// Route: GET /departments/:dept/courses
app.get('/departments/:dept/courses', (req, res) => {
    const { dept } = req.params;
    const { level, minCredits, maxCredits, semester, instructor } = req.query;
    // Implementing the filter logic
    // Hint: Use the filter method to filter the courses array based on the provided criteria
    const coursesFiltered = courses.filter(course => {
        if(course.department.toLowerCase() !== dept) return false;
        if(level && course.level.toLowerCase() !== level) return false;
        if(minCredits && course.credits < Number(minCredits)) return false;
        if(maxCredits && course.credits > Number(maxCredits)) return false;
        if(semester && course.semester.toLowerCase() !== semester) return false;
        if(instructor && course.instructor.toLowerCase() !== instructor) return false;
        return true;
    })
    if(coursesFiltered.length === 0){
        return res.send(`No data found`);
    }
    return res.send(coursesFiltered);

});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
