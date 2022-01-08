const mongoose = require("mongoose");
const Student = require("./models/Student");

const student = new Student({});
student.save().populate("tests");
const student = await Student.where("age").gt("40").where("name").equals("noam").limit(2).select("average");

// MyModel.findOne({}).then() and await MyModel.findOne({}).exec()

// query.find( { marks: { $gte: 89} } )

// Person.
//   find({
//     occupation: /host/,
//     'name.last': 'Ghost',
//     age: { $gt: 17, $lt: 66 },
//     likes: { $in: ['vaporizing', 'talking'] }
//   }).
//   limit(10).
//   sort({ occupation: -1 }).
//   select({ name: 1, occupation: 1 }).
//   exec(callback);

// Person.
//   find({ occupation: /host/ }).
//   where('name.last').equals('Ghost').
//   where('age').gt(17).lt(66).
//   where('likes').in(['vaporizing', 'talking']).
//   limit(10).
//   sort('-occupation').
//   select('name occupation').
//   exec(callback);

// resources:
//  https://www.youtube.com/watch?v=DZBGEVgL2eE
