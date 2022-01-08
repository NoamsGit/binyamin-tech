const mongoose = require("mongoose");

const studentSchema = new mongoose.studentSchema({
  name: {
    type: String,
    lowercase: true,
    maxLength: 15,
  },
  age: {
    type: Number,
    required: true,
  },
  average: {
    type: Number,
    min: 1,
    max: 100,
  },
  createAt: {
    type: Date,
    default: () => Date.now(),
  },
  tests: [
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Tests",
    },
  ],
});

module.exports = mongoose.model("Student", studentSchema);
