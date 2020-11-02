const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Message = require("../Models/Message");

const ChatSchema = new Schema({
  date: { type: Date, default: Date.now },
  textMessages: [{ type: Schema.Types.ObjectId, ref: "Message" }],
  id_project: String,
  id_developer: String,
});

module.exports = mongoose.model("Chat", ChatSchema);
