const mongoose = require("mongoose");

const classroomSchema = new mongoose.Schema({
  Room_Number: { type: String, required: true },
  Floor_Number: { type: Number, required: true },
  Block: { type: String, required: true },
  Available_Seats: { type: Number, required: true },
  max_allocate: { type: Number, default: 2 }
});

const Classroom = mongoose.model("Classroom", classroomSchema);

module.exports = Classroom;
