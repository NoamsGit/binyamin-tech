// npm install mongoose --save
const mongoose = require("mongoose");
const key = require("./secret").MONGO_KEY;
const {studentSchema} = require("./models/Student");
const {testsSchema} = require("./models/Tests");

async function getConnection() {
  try {
    return await mongoose.connect(`mongodb+srv://noam:${key}@cluster0.yb05h.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`);
  } catch (e) {
    console.log(e);
  }
}

async function createTest() {
  try {
    const connection = await getConnection();
    const Test = connection.model("Test", testsSchema);
    const test = new Test({score: 85, category: "math"});
    console.log(test);

    test
      .save()
      .then(() => connection.disconnect())
      .then(console.log("Done!"));
  } catch (e) {
    console.log(e);
  }
}

async function create() {
  try {
    const connection = await getConnection();
    const Student = connection.model("Student", studentSchema);
    const student = new Student({name: "Ynon", age: 20, test: "61db258f8f1a042130eec117"});
    console.log(student);

    student
      .save()
      .then((res) => connection.disconnect())
      .then(console.log("Done!"));
  } catch (e) {
    console.log(e);
  }
}

async function find() {
  try {
    const connection = await mongoose.connect(
      `mongodb+srv://noam:${key}@cluster0.yb05h.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
    );
    const Cat = connection.model("Cat", {name: String});
    const cats = await Cat.find();
    console.log(cats);
    const ans = await connection.disconnect();
  } catch (e) {
    console.log(e);
  }
}
async function findOneAndUpdate() {
  try {
    const connection = await mongoose.connect(
      `mongodb+srv://noam:${key}@cluster0.yb05h.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
    );
    const Cat = connection.model("Cat", {name: String});
    const cats = await Cat.findOneAndUpdate({name: "Zildjian 4"}, {name: "Zildjian 4 new"});
    console.log(cats);
    const ans = await connection.disconnect();
  } catch (e) {
    console.log(e);
  }
}
async function findStudent() {
  try {
    const nameKuku = "Ynon";
    const connection = await getConnection();
    const Student = connection.model("Student", studentSchema);
    const students = await Student.find({name: "ynon"}).populate("test");
    const students2 = await Student.where(nameKuku).equals("Ynon").populate("test").limit(2);
    const students3 = await Student.where("age").gt("40").where("name").equals("noam").limit(2).select("date");

    console.log(students);
    await connection.disconnect();
    console.log("Done!");
  } catch (e) {
    console.log(e);
  }
}
// createTest();
// create();
// find();
// findOneAndUpdate();
findStudent();
