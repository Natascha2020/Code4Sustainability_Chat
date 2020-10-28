require("dotenv").config();
require("./dbConfig");
const express = require("express");
const cors = require("cors");

const Chat = require("./Models/Chat.js");

const port = process.env.PORT || 5004;
const frontUrl = "http://localhost:3000";

const app = express();
const server = app.listen(port, () => console.log(`Server running on port ${port}.`));

const main = async () => {
  app.use(
    cors({
      origin: frontUrl,
      optionsSuccessStatus: 200,
      credentials: true,
    })
  );

  try {
    const socket = require("socket.io")(server);
    socket.on("connection", async (client) => {
      console.log("client connected...");

      client.on("newMessage", async (msg) => {
        console.log(msg);
        let createdMessage = await Chat.create({ message: [{ content: msg }] });
        let newMessage = await Chat.find({ _id: createdMessage._id });
        socket.emit("message", newMessage);
      });
    });
  } catch (error) {
    console.log(error);
  }
};

main();

/* client.on("message", async (msg) => {
        let message = await Message.Schema.statics.create(msg);
        socket.emit("message", message);
      }); */

/*  let latest = await Message.Schema.statics.latest(10);
      client.emit("latest", latest); */

/* const options = {...};
const io = require("socket.io")(options);
const Chat = require("./Models/Chat"); */

/* io.on("connection", (socket) => {
  socket.on("joinChat100", () => {
    socket.join("room1", () => {
      io.to("room1").emit("update", "Welcome to the room");
    });
  });
  socket.on("joinChat200", () => {
    socket.join("room2", () => {
      io.to("room2").emit("update", "Welcome to the room");
    });
  });
}); */

/* io.listen(5004);
 */
