const express = require("express");
const cors = require("cors");
const hostname = "0.0.0.0";
const port = 3001;

const server = express();
server.use(cors());
server.use(express.json());
server.use(express.urlencoded());
server.use((_, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

const mongoose = require("mongoose");
// mongoose.connect("mongodb://localhost:27017/apinode"); // Whithout Docker
mongoose.connect("mongodb://mongo/apinode");

// const postRoute = require("./api/routes/postRoute");
// postRoute(server);

// const commentRoute = require("./api/routes/commentRoute");
// commentRoute(server);

const userRoute = require("./api/routes/userRoute.js");
userRoute(server);

server.listen(port, hostname);
