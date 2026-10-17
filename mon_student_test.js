const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

before(async function () {
  this.timeout(10000);

  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/mongoTube");
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    throw error;
  }
});

beforeEach(async function () {
  const db = mongoose.connection.db;

  if (await db.listCollections({ name: "students" }).hasNext()) {
    await db.collection("students").deleteMany({});
  }
});
