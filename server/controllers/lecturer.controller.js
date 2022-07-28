const Lecturer = require("../models/lecturer.model.js");

// Create and Save a new lecturer
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a lecturer
  const lecturer = new lecturer({
    lecID: req.body.lecID,
    lec_NIC: req.body.lec_NIC,
    lec_fName: req.body.lec_fName,
    lec_lName: req.body.lec_lName,
    lec_address: req.body.lec_address,
    lec_country: req.body.lec_country,
    lec_DOB: req.body.lec_DOB,
    lec_email: req.body.lec_email,
    lec_gender: req.body.lec_gender,
  });
  
  // Save lecturer in the database
  Lecturer.create(lecturer, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the lecturer."
      });
    else res.send(data);
  });
};

// Retrieve all lecturers from the database.
exports.findAll = (req, res) => {
    Lecturer.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving lecturers."
      });
    else res.send(data);
  });
};

// Find a single lecturer with a lecID
exports.findOne = (req, res) => {
    Lecturer.findBylecID(req.params.lecID, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found lecturer with lecID ${req.params.lecID}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving lecturer with lecID " + req.params.lecID
        });
      }
    } else res.send(data);
  });
};

// Update a lecturer identified by the lecID in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  Lecturer.updateBylecID(
    req.params.lecID,
    new lecturer(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found lecturer with lecID ${req.params.lecID}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating lecturer with lecID " + req.params.lecID
          });
        }
      } else res.send(data);
    }
  );
};

// Delete a lecturer with the specified lecID in the request
exports.delete = (req, res) => {
    Lecturer.remove(req.params.lecID, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found lecturer with id ${req.params.lecID}.`
        });
      } else {
        res.status(500).send({
          message: "Could not delete lecturer with id " + req.params.lecID
        });
      }
    } else res.send({ message: `lecturer was deleted successfully!` });
  });
};

// Delete all lecturers from the database.
exports.deleteAll = (req, res) => {
    Lecturer.removeAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all lecturers."
      });
    else res.send({ message: `All lecturers were deleted successfully!` });
  });
};