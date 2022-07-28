module.exports = (app) => {
  const student = require("../controllers/student.controller.js");

  // Create a new students
  app.post("/students", student.create);

  // Retrieve all students
  app.get("/students", student.findAll);

  // Retrieve a single students with students_code
  app.get("/students/:Reg_num", student.findOne);

  // Update a students with students_code
  app.put("/students/:Reg_num", student.update);

  // Delete a students with students_code
  app.delete("/students/:Reg_num", student.delete);

  // Delete all students
  //app.delete("/students", student.deleteAll);

  // Retrieve grades of a single student with reg_num
  app.get("/grades/:Reg_num/:year/:semester", student.getGrades);

  // Retrieve attendance of a single student by course
  app.get("/attendance/:Reg_num/:course_code", student.getAttendanceByCourse);

  // Retrieve attendance of a single student
  app.get("/attendance/:Reg_num", student.getAttendanceAll);
};
