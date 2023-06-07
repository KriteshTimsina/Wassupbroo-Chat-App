const express = require("express");
const cors = require("cors");
const http = require("http");

const app = express();

const server = http.createServer(app);

app.use(cors());

server.listen(3001, () => {
  console.log("Server listening");
});
