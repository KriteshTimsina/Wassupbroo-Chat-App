//imports
const express = require("express");
const cors = require("cors");
const app = express();
const http = require("http").createServer(app);

//init

//middlewares
app.use(express.json());
app.use(cors());

//socket connection
const socketIO = require("socket.io")(http, {
  cors: {
    origin: "http://localhost:3000",
  },
});

socketIO.on("connection", (socket) => {
  console.log(`⚡: ${socket.id} user just connected!`);

  socket.on("user_join_room", (data) => {
    console.log(`${data.username} joined the room.`);
    socketIO.emit("joinMessage", data);
  });
  
  socket.on("join_room", (roomId) => {
    socket.join(roomId);
    console.log(`User with ID: ${socket.id} joined room: ${roomId}`);
  });

  socket.on("message", (data) => {
    console.log(data);
    socketIO.emit("messageResponse", data);
  });

  socket.on("disconnect", () => {
    console.log("🔥: A user disconnected");
  });
});

app.get("/rooms", (req, res) => {
  const rooms = [
    {
      room: "Global chatroom",
      roomId: "global",
      imageUrl: "https://cdn-icons-png.flaticon.com/128/2206/2206461.png",
    },
  ];

  res.status(200).json(rooms);
});

http.listen(3001, () => {
  console.log("Server listening");
});
