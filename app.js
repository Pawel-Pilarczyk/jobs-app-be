const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const blogRoutes = require("./routes/blogRoutes");

// express app
const app = express();

mongoose
  .connect(dbURI)
  .then((result) => {
    //listen for request
    app.listen(3000);
  })
  .catch((e) => console.log(e));
//regieter view engeen:
app.set("view engine");

//middleware static files
app.use(express.static("./public"));
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("Works");
});
