const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    lowercase: true,
    maxLength: 20,
    default: "Noam",
  },
  age: {
    type: Number,
    max: 130,
    min: 0,
    required: true,
  },
  date: {
    type: Date,
    default: () => new Date().getTime(),
  },
  test: [
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Test",
    },
  ],
});

module.exports = mongoose.model("Student", studentSchema);
