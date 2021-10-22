const mongoose = require("mongoose");

const secretSchema = mongoose.Schema({
  name: { type: String, required: true },
});

module.exports = secretSchema;