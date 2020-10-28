const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ChatSchema = new Schema({
  date: { type: Date, default: Date.now },
  message: [{ content: String, date: { type: Date, default: Date.now }, id_user: String }],
  id_project: String,
  id_developer: String,
});

module.exports = mongoose.model("Chat", ChatSchema);
