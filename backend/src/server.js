import dns from "node:dns";
dns.setServers(["8.8.8.8", "1.1.1.1"]);

import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import workoutRoutes from "./routes/workoutroutes.js";
import { connectDB } from "./config/db.js";

dotenv.config();
connectDB();

const app = express();
const port = process.env.PORT || 3001;

app.use(cors(
    {
         origin:`http://localhost:5173`
    }))
app.use(express.json());

app.use("/workout", workoutRoutes);

app.get("/", (req, res) => {
  res.send("FitTrack APP Running");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/workout`);
});
