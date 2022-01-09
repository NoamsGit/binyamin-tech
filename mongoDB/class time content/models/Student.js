const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    default: "Noam",
  },
  age: {
    type: Number,
    max: 120,
    required: true,
  },
  date: Date,
});

module.exports = mongoose.model("Student", studentSchema);
