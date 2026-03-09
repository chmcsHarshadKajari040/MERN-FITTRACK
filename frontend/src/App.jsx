import React from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import CreateworkoutPage from "./pages/createworkoutPage";
import WorkoutDetailPage from "./pages/workoutDetailPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/create" element={<CreateworkoutPage />} />
      <Route path="/workout/:id" element={<WorkoutDetailPage />} />
    </Routes>
  );
};

export default App;