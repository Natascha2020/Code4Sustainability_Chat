const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ChatMessageSchema = new Schema({
  date: { type: Date, default: Date.now },
  message: [{ type: mongoose.Schema.Types.ObjectId, ref: "Message" }],
  id_project: String,
  id_developer: String,
});

module.exports = mongoose.model("ChatMessage", ChatMessageSchema);
