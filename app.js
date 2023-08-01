const express = require("express");
const dotenv = require("dotenv");

dotenv.config();
const fs = require("fs");
const path = require("path");
const mongoose = require("mongoose");
const userRoutes = require("./routes/user");
const bodyParser = require("body-parser");
const morgan = require("morgan");
var cors = require("cors");
const User = require("./model/user");
const app = express();

const accessLogStram = fs.createWriteStream(
  path.join(__dirname, "access.log"),

  { flags: "a" }
);

app.use(cors());

app.use(morgan("combined", { stream: accessLogStram }));
app.use(userRoutes);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose
  .connect(process.env.DB_URL)
  .then((result) => {
    console.log("connected");
    app.listen(3000);
  })
  .catch((err) => {
    console.log(err);
  });
