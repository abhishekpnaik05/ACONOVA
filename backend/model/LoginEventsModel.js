const mongoose = require("mongoose");

const loginEventSchema = new mongoose.Schema({
  email: { type: String, required: true },
  loginTime: { type: Date, default: Date.now },
});

const LoginEventModel = mongoose.model("LoginEvent", loginEventSchema);
module.exports = { LoginEventModel };
