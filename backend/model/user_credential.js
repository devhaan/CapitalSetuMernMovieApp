const mongoose = require("mongoose");

const UserData = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true,
  },
  
});

const User = mongoose.model("User", UserData);

module.exports = User;
