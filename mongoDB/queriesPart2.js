const mongoose = require("mongoose");
const Student = require("./models/Student");

const student = new Student({});
student.save().populate("tests");
const student = await Student.where("age").gt("40").where("name").equals("noam").limit(2).select("average");

// resources:
//  https://www.youtube.com/watch?v=DZBGEVgL2eE
