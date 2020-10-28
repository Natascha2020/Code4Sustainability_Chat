const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MessageSchema = new Schema({
  date: { type: Date, default: Date.now },
  message: String,
  id_user: String,
});

module.exports = mongoose.model("Message", MessageSchema);
