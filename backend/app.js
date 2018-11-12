const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const toDoRoutes = require("./routes/todo");
// const usersRoutes = require("./routes/user");
// const shoppingCartRoutes = require("./routes/shoppingCart");

const app = express();

// DB Config
const db = require("./config/keys").mongoURI;

mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => {
    console.log("Connected to database!");
  })
  .catch(() => {
    console.log("Connection failed!");
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  // res.setHeader(
  //   "Access-Control-Allow-Methods",
  //   "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  // );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});

app.use("/api/todo", toDoRoutes);
// app.use("/api/user", usersRoutes);
// app.use("/api/shopping-cart", shoppingCartRoutes);

// OTHER ERROR FROM SERVER
app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});

module.exports = app;
