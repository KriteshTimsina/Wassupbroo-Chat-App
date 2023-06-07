const express = require("express");
const cors = require("cors");
const http = require("http");

const app = express();

const server = http.createServer(app);

app.use(express.json());
app.use(cors());

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
server.listen(3001, () => {
  console.log("Server listening");
});
