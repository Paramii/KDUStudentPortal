module.exports = app => {
  const users = require("../controllers/user.controller.js");

  // Create a new User
  app.post("/users", users.create);

  // Retrieve all users
  app.get("/users", users.findAll);

  // Retrieve a single User with email
  app.get("/users/:email", users.findOne);

  // Update a User with email
  app.put("/users/:email", users.update);

  // Delete a User with email
  app.delete("/users/:email", users.delete);

  // Delete all User
  //app.delete("/users", users.deleteAll);
};