import mongoose from "mongoose";

const workoutSchema = new mongoose.Schema(
  {
    exerciseName: {
      type: String,
      required: true
    },
    bodyPart: {
      type: String,
      required: true
    },
    sets: {
      type: Number,
      required: true
    },
    reps: {
      type: Number,
      required: true
    },
    weight: {
      type: Number,
      required: true
    },
    duration: {
      type: Number
    },
    notes: {
      type: String
    }
  },
  { timestamps: true }
);

const Workout = mongoose.model("Workout", workoutSchema);

export default Workout;
