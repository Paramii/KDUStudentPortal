module.exports = app => {
    const lecturer = require("../controllers/lecturer.controller.js");

    // Create a new lecturers
    app.post("/lecturers", lecturer.create);

    // Retrieve all lecturers
    app.get("/lecturers", lecturer.findAll);

    // Retrieve a single lecturers with lecturers_code
    app.get("/lecturers/:lecID", lecturer.findOne);

    // Update a lecturers with lecturers_code
    app.put("/lecturers/:lecID", lecturer.update);

    // Delete a lecturers with lecturers_code
    app.delete("/lecturers/:lecID", lecturer.delete);

    // Delete all lecturers
    //app.delete("/lecturers", lecturer.deleteAll);
};