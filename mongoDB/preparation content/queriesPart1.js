// npm install mongoose --save
const mongoose = require("mongoose");
const key = require("./secret").MONGO_KEY;

async function conn() {
  try {
    const connection = await mongoose.connect(
      `mongodb+srv://noam:${key}@cluster0.yb05h.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
    );
    const Cat = connection.model("Cat", {name: String});
    const kitty = new Cat({name: "Zildjian 4"});

    kitty
      .save()
      .then(() => connection.disconnect())
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
// conn();
find();
findOneAndUpdate();
