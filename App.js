const { json } = require("body-parser");
const express = require("express");
const { User } = require("./Users");
const cors = require("cors");

const MovieData = require("./anime-offline-database.json");

const App = express();

App.use(json());
App.use(cors("*"));

App.get("/", (req, res) => {
  res.send("Demo Server Running...");
});

App.get("/user", (req, res) => {
  res.send(User);
});

App.post("/user", (req, res) => {
  if (
    !(
      req?.body?.name ||
      req?.body?.email ||
      req?.body?.phone ||
      req?.body?.address
    )
  ) {
    res.status(400).send({ error: "bad request" });
    return;
  }
  const name = req.body.name;
  const email = req.body.email;
  const phone = req.body.phone;
  const address = req.body.address;
  User.name = name;
  User.email = email;
  User.phone = phone;
  User.address = address;
  console.log(User);
  res.send(User);
});

App.get("/movies", (req, res) => {
  const data = MovieData.data;
  data.slice(0,100)
  res.status(200).send(data);
  return;
});

App.listen(5000, (err) => {
  if (!err) console.info("server running on port 5000");
});
