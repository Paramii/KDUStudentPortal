const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors")
const app = express();
var admin = require("firebase-admin");

var serviceAccount = require("./kdusms-876be-firebase-adminsdk-o1vik-535fb6d9a5.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
// parse requests of content-type: application/json
app.use(bodyParser.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())
// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to KDUSMS!" });
});

app.post("/setLec", async (req, res) => {
  admin.auth()
      .setCustomUserClaims(req.body.uid, {
         lecturer:true
        // YOU CAN ADD ANY FIRLDS IN THERE
      })
      .then(() => console.log('done'))
})

require("./routes/user.routes.js")(app);
require("./routes/course.routes.js")(app);
require("./routes/student.routes.js")(app);
require("./routes/lecturer.routes.js")(app);
// set port, listen for requests
app.listen(3000, () => {
  console.log("Server is running on port 3000.");
});

