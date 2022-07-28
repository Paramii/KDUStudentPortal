const sql = require("./db.js");

// constructor
const Course = function (course) {
  this.course_code = course.course_code;
  this.course_name = course.course_name;
  this.no_of_credits = course.no_of_credits;
};

Course.create = (newcourse, result) => {
  sql.query("INSERT INTO course SET ?", newcourse, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created course: ", {
      course_code: res.insertcourse_code,
      ...newcourse,
    });
    result(null, { course_code: res.insertcourse_code, ...newcourse });
  });
};

Course.findBycourse_code = (course_code, result) => {
  sql.query(
    `SELECT * FROM course WHERE course_code= ?`,
    [course_code],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }

      if (res.length > 0) {
        console.log("found course: ", res[0]);
        result(null, res[0]);
        return;
      }

      // not found course with the course_code
      result({ kind: "not_found" }, null);
    }
  );
};

Course.getAll = (result) => {
  sql.query("SELECT * FROM course", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("course: ", res);
    result(null, res);
  });
};

Course.updateBycourse_code = (course_code, course, result) => {
  sql.query(
    "UPDATE course SET course_code = ?, course_name = ?, no_of_credits = ? WHERE course_code = ?",
    [course.course_code, course.course_name, course.no_of_credits, course_code],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found course with the course_code
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated course: ", { course_code: course_code, ...course });
      result(null, { course_code: course_code, ...course });
    }
  );
};

Course.remove = (course_code, result) => {
  sql.query(
    "DELETE FROM course WHERE course_code = ?",
    course_code,
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found course with the course_code
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("deleted course with course_code: ", course_code);
      result(null, res);
    }
  );
};

Course.removeAll = (result) => {
  sql.query("DELETE FROM course", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} course`);
    result(null, res);
  });
};

Course.getCoursesByStudentId = (reqParams, result) => {
  sql.query(
    `SELECT * FROM course c, co_stu cs WHERE c.course_code = cs.course_code AND cs.Reg_num =? AND c.year= ? AND c.semester= ?`,
    [reqParams.Reg_num, reqParams.year, reqParams.semester],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      console.log("course: ", res);
      result(null, res);
    }
  );
};

module.exports = Course;
