const sql = require("./db.js");

// constructor
const Student = function (student) {
  this.Reg_num = student.Reg_num;
  this.NIC = student.NIC;
  this.fName = student.fName;
  this.lname = student.lname;
  this.address = student.address;
  this.country = student.country;
  this.DOB = student.DOB;
  this.email = student.email;
  this.gender = student.gender;
};

Student.create = (newstudent, result) => {
  sql.query("INSERT INTO student SET ?", newstudent, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created student: ", {
      Reg_num: res.insertReg_num,
      ...newstudent,
    });
    result(null, { Reg_num: res.insertReg_num, ...newstudent });
  });
};

Student.findByReg_num = (Reg_num, result) => {
  sql.query(`SELECT * FROM student WHERE Reg_num= ?`, [Reg_num], (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length > 0) {
      console.log("found student: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found student with the Reg_num
    result({ kind: "not_found" }, null);
  });
};

Student.getAll = (result) => {
  sql.query("SELECT * FROM student", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("student: ", res);
    result(null, res);
  });
};

Student.updateByReg_num = (Reg_num, student, result) => {
  sql.query(
    "UPDATE student SET Reg_num = ?, password = ?, role = ? WHERE Reg_num = ?",
    [student.Reg_num, student.password, student.role, Reg_num],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found student with the Reg_num
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated student: ", { Reg_num: Reg_num, ...student });
      result(null, { Reg_num: Reg_num, ...student });
    }
  );
};

Student.remove = (Reg_num, result) => {
  sql.query("DELETE FROM student WHERE Reg_num = ?", Reg_num, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found student with the Reg_num
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted student with Reg_num: ", Reg_num);
    result(null, res);
  });
};

Student.removeAll = (result) => {
  sql.query("DELETE FROM student", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} student`);
    result(null, res);
  });
};

Student.getStudentGrades = (reqParams, result) => {
  sql.query(
    `SELECT * FROM course c, co_stu cs WHERE cs.course_code = c.course_code AND cs.Reg_num= ? AND c.year= ? AND c.semester= ?`,
    [reqParams.Reg_num, reqParams.year, reqParams.semester],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }

      console.log("found student: ", res);
      result(null, res);
      return;
    }
  );
};

Student.getStudentAttendanceByCourse = (reqParams, result) => {
  sql.query(
    `SELECT * FROM co_stu_attendance WHERE Reg_num= ? AND course_code= ?`,
    [reqParams.Reg_num, reqParams.course_code],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }

      result(null, res[0]);
      return;
    }
  );
};

Student.getStudentAllAttendance = (reqParams, result) => {
  sql.query(
    `SELECT * FROM co_stu_attendance ca, course c WHERE c.course_code = ca.course_code AND ca.Reg_num= ?`,
    [reqParams.Reg_num],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
      console.log('ssssssssssssssssssss', res)
      result(null, res);
      return;
    }
  );
};
module.exports = Student;
