const Course = require("../models/course.model.js");

// Create and Save a new course
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  // Create a course
  const course = new Course({
    course_code: req.body.course_code,
    course_name: req.body.course_name,
    no_of_credits: req.body.no_of_credits,
  });

  // Save course in the database
  Course.create(course, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the course.",
      });
    else res.send(data);
  });
};

// Retrieve all Courses from the database.
exports.findAll = (req, res) => {
  Course.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving Courses.",
      });
    else res.send(data);
  });
};

// Find a single course with a course_code
exports.findOne = (req, res) => {
  Course.findBycourse_code(req.params.course_code, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found course with course_code ${req.params.course_code}.`,
        });
      } else {
        res.status(500).send({
          message:
            "Error retrieving course with course_code " +
            req.params.course_code,
        });
      }
    } else res.send(data);
  });
};

// Update a course identified by the course_code in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  Course.updateBycourse_code(
    req.params.course_code,
    new Course(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found course with course_code ${req.params.course_code}.`,
          });
        } else {
          res.status(500).send({
            message:
              "Error updating course with course_code " +
              req.params.course_code,
          });
        }
      } else res.send(data);
    }
  );
};

// Delete a course with the specified course_code in the request
exports.delete = (req, res) => {
  Course.remove(req.params.course_code, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found course with id ${req.params.course_code}.`,
        });
      } else {
        res.status(500).send({
          message: "Could not delete course with id " + req.params.course_code,
        });
      }
    } else res.send({ message: `course was deleted successfully!` });
  });
};

// Delete all Courses from the database.
exports.deleteAll = (req, res) => {
  Course.removeAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Courses.",
      });
    else res.send({ message: `All Courses were deleted successfully!` });
  });
};

// Retrieve all Courses by student ID.
exports.findAllStudentCourses = (req, res) => {
  const reqParams = {
    Reg_num: req.params.Reg_num,
    year: req.params.year,
    semester: req.params.semester,
  };
  Course.getCoursesByStudentId(reqParams, (err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving Courses.",
      });
    else res.send(data);
  });
};
