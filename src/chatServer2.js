require("dotenv").config();
require("./dbConfig");
const express = require("express");
const cors = require("cors");

const Chat = require("./Models/Chat.js");
const Message = require("./Models/Message.js");

const port = process.env.PORT || 5004;
const frontUrl = process.env.FRONTURL;

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
      console.log(" client-id:", client.id);

      client.on("connection", async ({ idUser, chatPartnerId, typeOfUser }) => {
        try {
          let checkChatProject = await Chat.findOne({ id_project: idUser, id_developer: chatPartnerId });
          let checkChatDeveloper = await Chat.findOne({ id_project: chatPartnerId, id_developer: idUser });
          let getMessages = {};
          if (!checkChatProject && !checkChatDeveloper) {
            getMessages = {};
          } else if (typeOfUser === "Project") {
            //find chat and return the last 10 messages sent in order from latest to newest to display in chat window
            getMessages = await Chat.findOne({ id_project: idUser, id_developer: chatPartnerId }).populate({
              path: "textMessages",
              options: { sort: { date: -1 }, limit: 10 },
            });
            getMessages.textMessages = getMessages.textMessages.reverse();
          } else {
            //find chat and return the last 10 messages sent in order from latest to newest to display in chat window
            getMessages = await Chat.findOne({ id_project: chatPartnerId, id_developer: idUser }).populate({
              path: "textMessages",
              options: { sort: { date: -1 }, limit: 10 },
            });
            getMessages.textMessages = getMessages.textMessages.reverse();
          }

          socket.to(client.id).emit("latestMessages", getMessages);
        } catch (error) {
          console.log(error);
        }
      });

      client.on("newMessage", async (msg) => {
        try {
          const content = msg.content;
          const idUser = msg.idUser;
          const chatPartnerId = msg.chatPartnerId;
          const typeOfUser = msg.typeOfUser;

          //if there was no chat before between chat partners
          /* const checkChatExistance = await Chat.find({ _id: createdChat._id }); */

          const createdMessage = await Message.create({ content: content, id_user: idUser, typeOfUser: typeOfUser });
          let messageId = createdMessage._id;
          //check for existent corresponsing chat, if exists push to content array, if not create Chat

          let checkChatProject = await Chat.findOne({ id_project: idUser, id_developer: chatPartnerId });
          let checkChatDeveloper = await Chat.findOne({ id_project: chatPartnerId, id_developer: idUser });
          let createdChat = {};

          if (!checkChatProject && !checkChatDeveloper) {
            typeOfUser === "Project"
              ? (createdChat = await Chat.create({ id_project: idUser, id_developer: chatPartnerId }, { $push: { textMessages: messageId } }))
              : (createdChat = await Chat.create({ id_project: chatPartnerId, id_developer: idUser }, { $push: { textMessages: messageId } }));
          } else {
            let addedMessage = {};
            typeOfUser === "Project"
              ? (addedMessage = await Chat.findOneAndUpdate({ _id: checkChatProject._id }, { $push: { textMessages: messageId } }))
              : (addedMessage = await Chat.findOneAndUpdate({ _id: checkChatDeveloper._id }, { $push: { textMessages: messageId } }));
          }
          socket.to(client.id).emit("addedMessage", createdMessage);
        } catch (error) {
          console.log(error);
        }
      });
    });
  } catch (error) {
    console.log(error);
  }
};

main();
