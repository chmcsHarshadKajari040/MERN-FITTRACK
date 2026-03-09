import express from "express";
import {
  getAllWorkouts,
  getWorkout,
  createWorkout,
  updateWorkout,
  deleteWorkout 
} from "../controllers/workoutController.js";

const router = express.Router();


router.get("/", getAllWorkouts);
router.get("/:id", getWorkout);         
router.post("/", createWorkout);        
router.put("/:id", updateWorkout);      
router.delete("/:id", deleteWorkout);   

export default router;
