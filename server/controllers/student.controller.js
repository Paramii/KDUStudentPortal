const Student = require("../models/student.model.js");

// Create and Save a new student
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  // Create a student
  const student = new Student({
    Reg_num: req.body.Reg_num,
    NIC: req.body.NIC,
    fName: req.body.fName,
    lName: req.body.lname,
    address: req.body.address,
    country: req.body.country,
    DOB: req.body.DOB,
    email: req.body.email,
    gender: req.body.gender,
  });

  // Save student in the database
  Student.create(student, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the student.",
      });
    else res.send(data);
  });
};

// Retrieve all students from the database.
exports.findAll = (req, res) => {
  Student.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving students.",
      });
    else res.send(data);
  });
};

// Find a single student with a Reg_num
exports.findOne = (req, res) => {
  Student.findByReg_num(req.params.Reg_num, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found student with Reg_num ${req.params.Reg_num}.`,
        });
      } else {
        res.status(500).send({
          message:
            "Error retrieving student with Reg_num " + req.params.Reg_num,
        });
      }
    } else res.send(data);
  });
};

// Update a student identified by the Reg_num in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  Student.updateByReg_num(
    req.params.Reg_num,
    new student(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found student with Reg_num ${req.params.Reg_num}.`,
          });
        } else {
          res.status(500).send({
            message:
              "Error updating student with Reg_num " + req.params.Reg_num,
          });
        }
      } else res.send(data);
    }
  );
};

// Delete a student with the specified Reg_num in the request
exports.delete = (req, res) => {
  Student.remove(req.params.Reg_num, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found student with id ${req.params.Reg_num}.`,
        });
      } else {
        res.status(500).send({
          message: "Could not delete student with id " + req.params.Reg_num,
        });
      }
    } else res.send({ message: `student was deleted successfully!` });
  });
};

// Delete all students from the database.
exports.deleteAll = (req, res) => {
  Student.removeAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all students.",
      });
    else res.send({ message: `All students were deleted successfully!` });
  });
};

// Get grades of a student with a Reg_num
exports.getGrades = (req, res) => {
  const reqParams = {
    Reg_num: req.params.Reg_num,
    year: req.params.year,
    semester: req.params.semester,
  };
  Student.getStudentGrades(reqParams, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found grades of a student with Reg_num ${req.params.Reg_num}.`,
        });
      } else {
        res.status(500).send({
          message:
            "Error retrieving grades of a student with Reg_num " + req.params.Reg_num,
        });
      }
    } else res.send(data);
  });
};

// Get attendance of a student with a Reg_num
exports.getAttendanceByCourse = (req, res) => {
  const reqParams = {
    Reg_num: req.params.Reg_num,
    course_code: req.params.course_code,
  };
  Student.getStudentAttendanceByCourse(reqParams, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found attendance of a student with Reg_num ${req.params.Reg_num}.`,
        });
      } else {
        res.status(500).send({
          message:
            "Error retrieving attendance of a student with Reg_num " + req.params.Reg_num,
        });
      }
    } else res.send(data);
  });
};

// Get attendance of a student with a Reg_num
exports.getAttendanceAll = (req, res) => {
  const reqParams = {
    Reg_num: req.params.Reg_num,
  };
  Student.getStudentAllAttendance(reqParams, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found attendance of a student with Reg_num ${req.params.Reg_num}.`,
        });
      } else {
        res.status(500).send({
          message:
            "Error retrieving attendance of a student with Reg_num " + req.params.Reg_num,
        });
      }
    } else res.send(data);
  });
};