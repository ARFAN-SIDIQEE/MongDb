const Student = require("../app/student");
const assert = require("assert");

describe("Create record", () => {
  it("create a new user in DB", () => {
    // assert(false);
    const sam = new Student({ name: "Sam" });
    sam
      .save()
      .then(() => {
        assert(!sam.isNew);
      })
      .catch(() => {
        console.log("error");
      });
  });
});

//read test
describe("Read Test", function () {
  let reader;

  beforeEach(async function () {
    reader = new Student({ name: "Reader" });
    await reader.save();
  });

  it("Read a user: Reader", async function () {
    const student = await Student.findOne({
      _id: reader._id,
    });

    assert.ok(student, "Reader was not found in the database");

    assert.strictEqual(student._id.toString(), reader._id.toString());
  });
});
