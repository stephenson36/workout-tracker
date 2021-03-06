const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: "Enter a name for the workout",
  },
  value: {
    type: Number,
    required: "Enter a weight",
  },
  value: {
    type: String,
    trim: true,
    required: "Enter workout length",
  },
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
