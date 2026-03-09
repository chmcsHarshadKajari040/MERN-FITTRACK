import Workout from "../models/workout.js";

export async function getAllWorkouts(req, res) {
  const workouts = await Workout.find();
  res.json(workouts);
}

export async function getWorkout(req, res) {
  const { id } = req.params;
  const workout = await Workout.findById(id);
  res.json(workout);
}

export async function createWorkout(req, res) {
  const { exerciseName, 
    bodyPart, 
    sets, 
    reps, 
    weight, 
    duration, 
    notes  } = req.body;

  const workout = await Workout.create({
    exerciseName,
    bodyPart,
    sets,
    reps,
    weight,
    duration,
    notes 
  });

  res.json(workout);
}

export async function updateWorkout(req, res) {
  const { id } = req.params;

  const workout = await Workout.findByIdAndUpdate(id, req.body, {
    new: true,
  });

  res.json(workout);
}

export async function deleteWorkout(req, res) {
  const { id } = req.params;

  await Workout.findByIdAndDelete(id);

  res.json({ message: "Deleted successfully" });
}