const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MessageSchema = new Schema({
  date: { type: Date, default: Date.now },
  content: String,
  id_user: String,
  typeOfUser: String,
});

module.exports = mongoose.model("Message", MessageSchema);
