const sql = require("./db.js");

// constructor
const User = function (user) {
  this.email = user.email;
  this.password = user.password;
  this.role = user.role;
};

User.create = (newuser, result) => {
  sql.query("INSERT INTO users SET ?", newuser, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created user: ", { email: res.insertemail, ...newuser });
    result(null, { email: res.insertemail, ...newuser });
  });
};

User.findByEmail = (email, result) => {
  sql.query(`SELECT * FROM users WHERE email= ?`, [email], (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length > 0) {
      console.log("found user: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found user with the email
    result({ kind: "not_found" }, null);
  });
};

User.getAll = result => {
  sql.query("SELECT * FROM users", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("users: ", res);
    result(null, res);
  });
};

User.updateByEmail = (email, user, result) => {
  sql.query(
    "UPDATE users SET email = ?, password = ?, role = ? WHERE email = ?",
    [user.email, user.password, user.role, email],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found user with the email
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated user: ", { email: email, ...user });
      result(null, { email: email, ...user });
    }
  );
};

User.remove = (email, result) => {
  sql.query("DELETE FROM users WHERE email = ?", email, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found user with the email
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted user with email: ", email);
    result(null, res);
  });
};

User.removeAll = result => {
  sql.query("DELETE FROM users", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} users`);
    result(null, res);
  });
};

module.exports = User;