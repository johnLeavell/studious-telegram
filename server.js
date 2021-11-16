const express = require("express");
require("dotenv").config();
const cors = require("cors");
const routes = require("./routes");
const db = require("./models");
const Role = db.role;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.json({ message: "Welcome to node, jwt, auth." });
});

db.sequelize.sync();

function initial() {
  Role.create({
    id: 1,
    name: "user",
  });

  Role.create({
    id: 2,
    name: "moderator",
  });

  Role.create({
    id: 3,
    name: "admin",
  });
}
app.use("/", routes);
module.exports = app;
