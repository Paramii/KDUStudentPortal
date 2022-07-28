module.exports = (app) => {
  const course = require("../controllers/course.controller.js");

  // Create a new courses
  app.post("/courses", course.create);

  // Retrieve all courses
  app.get("/courses", course.findAll);

  // Retrieve a single courses with courses_code
  app.get("/courses/:course_code", course.findOne);

  // Update a courses with courses_code
  app.put("/courses/:course_code", course.update);

  // Delete a courses with courses_code
  app.delete("/courses/:course_code", course.delete);

  // Delete all courses
  //app.delete("/courses", course.deleteAll);

  // Retrieve all courses by student ID
  app.get("/courses/:Reg_num/:year/:semester", course.findAllStudentCourses);
};
