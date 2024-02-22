const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const app = express();
const port = 5000;
const errorHandler = require("./middleware/errorHandler");
app.use(cors());
app.use(express.json());
app.use(errorHandler);

//connection object for server
// const DB="mongodb+srv://ravi:ravi@ravikirancluster.y9qux2p.mongodb.net/Userdetails?retryWrites=true&w=majority"
const DB = "mongodb://localhost:27017/employee";
mongoose
  .connect(DB, {})
  .then(() => console.log("connected to database"))
  .catch((err) => console.error(err));

//middleware

app.use("/digitalflack/employee", require("./routes/employeeRouter"));

app.listen(port, () => {
  console.log("listening on port " + port);
});
