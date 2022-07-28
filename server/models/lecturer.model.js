const sql = require("./db.js");

// constructor
const Lecturer = function (lecturer) {
  this.lecID = lecturer.lecID;
  this.lec_NIC = lecturer.lec_NIC;
  this.lec_fName = lecturer.lec_fName;
  this.lec_lName = lecturer.lec_lName;
  this.lec_address = lecturer.lec_address;
  this.lec_country = lecturer.lec_country;
  this.lec_DOB = lecturer.lec_DOB;
  this.lec_email = lecturer.lec_email;
  this.lec_gender = lecturer.lec_gender;
};
Lecturer.create = (newlecturer, result) => {
  sql.query("INSERT INTO lecturer SET ?", newlecturer, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created lecturer: ", { lecID: res.insertlecID, ...newlecturer });
    result(null, { lecID: res.insertlecID, ...newlecturer });
  });
};

Lecturer.findBylecID = (lecID, result) => {
  sql.query(`SELECT * FROM lecturer WHERE lecID= ?`, [lecID], (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length > 0) {
      console.log("found lecturer: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found lecturer with the lecID
    result({ kind: "not_found" }, null);
  });
};

Lecturer.getAll = result => {
  sql.query("SELECT * FROM lecturer", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("lecturer: ", res);
    result(null, res);
  });
};

Lecturer.updateBylecID = (lecID, lecturer, result) => {
  sql.query(
    "UPDATE lecturer SET lecID = ?, password = ?, role = ? WHERE lecID = ?",
    [lecturer.lecID, lecturer.password, lecturer.role, lecID],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found lecturer with the lecID
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated lecturer: ", { lecID: lecID, ...lecturer });
      result(null, { lecID: lecID, ...lecturer });
    }
  );
};

Lecturer.remove = (lecID, result) => {
  sql.query("DELETE FROM lecturer WHERE lecID = ?", lecID, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found lecturer with the lecID
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted lecturer with lecID: ", lecID);
    result(null, res);
  });
};

Lecturer.removeAll = result => {
  sql.query("DELETE FROM lecturer", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} lecturer`);
    result(null, res);
  });
};

module.exports = Lecturer;