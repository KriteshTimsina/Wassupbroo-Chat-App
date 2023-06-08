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

  //sends the message to all the users on the server

  // socketIO.on("join_room", (data) => {
  //   socket.join(data);
  //   console.log(`User with ID: ${socket.id} joined room: ${data}`);
  // });
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
      room: "Yoga with diwash",
      roomId: "diwash",
      imageUrl: "https://diwashdahal.com.np/assets/img/profile.jpg",
    },
    {
      room: "Music with Kritesh",
      roomId: "kritesh",
      imageUrl: "https://kriteshtimsina.com.np/assets/kritesh-057690bd.jpg",
    },
    {
      room: "Unity with Shreedesh",
      roomId: "shreedesh",
      imageUrl: "https://shreedeshniroula.com.np/images/profile1.jpg",
    },
  ];

  res.status(200).json({ room: rooms });
});

http.listen(3001, () => {
  console.log("Server listening");
});
