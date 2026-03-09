import { Link, useLocation } from "react-router-dom";
import { Dumbbell, Activity, Edit2, Trash2 } from "lucide-react";
import { formatData } from "../lib/utils";
import api from "../lib/axios";
import toast from "react-hot-toast";
import { useState } from "react";

const WorkoutCard = ({ workout, setworkouts }) => {

  const [showModal, setShowModal] = useState(false);
  const location = useLocation();

  const isActive = location.pathname === `/workout/${workout._id}`;

  const handleDelete = async () => {
    try {
      await api.delete(`/workout/${workout._id}`);
      setworkouts((prev) => prev.filter((w) => w._id !== workout._id));
      toast.success("Workout deleted successfully");

    } catch {
      toast.error("Failed to delete workout");

    } finally {
      setShowModal(false);
    }
  };

  return (
    <>
      {/* CARD */}
      <Link
        to={`/workout/${workout._id}`}
        className={`relative block rounded-xl bg-base-100 p-4 border transition-all duration-200
        ${isActive ? "border-primary shadow-lg" : "border-base-300"}
        hover:border-primary hover:shadow-xl`}
      >

        {/* Top Row */}
        <div className="flex justify-between items-start">
          <p className="text-xs text-base-content/60 truncate">
            {workout._id}
          </p>

          <span className="badge badge-secondary">
            {workout.bodyPart}
          </span>
        </div>

        {/* Workout Info */}
        <div className="mt-4 space-y-2">

          {/* Exercise Name */}
          <div className="flex items-center gap-2">
            <Dumbbell className="size-4 text-primary" />
            <p className="font-medium text-base-content line-clamp-1">
              {workout.exerciseName}
            </p>
          </div>

          {/* Sets & Reps */}
          <div className="flex items-center gap-2 text-base-content/70">
            <Activity className="size-4 text-primary" />
            <p className="text-sm">
              {workout.sets} sets × {workout.reps} reps
            </p>
          </div>

        </div>

        {/* Footer */}
        <div className="mt-6 flex justify-between items-center">

          <span className="text-xs text-base-content/60">
            {formatData(new Date(workout.createdAt))}
          </span>

          {/* Action Icons */}
          <div className="flex items-center gap-4">

            {/* EDIT */}
            <div className="tooltip tooltip-warning" data-tip="Edit workout">
              <Edit2 className="size-4 text-warning hover:scale-110 transition" />
            </div>

            {/* DELETE */}
            <div className="tooltip tooltip-error" data-tip="Delete workout">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setShowModal(true);
                }}
                className="text-error hover:scale-110 transition"
              >
                <Trash2 className="size-4" />
              </button>
            </div>

          </div>

        </div>

      </Link>

      {/* DELETE MODAL */}
      {showModal && (
        <dialog className="modal modal-open">

          <div className="modal-box">

            <h3 className="font-bold text-lg text-error flex items-center gap-2">
              <Trash2 className="size-5" /> Delete Workout
            </h3>

            <p className="py-4 text-base-content/70">
              Are you sure you want to delete
              <span className="font-semibold text-base-content">
                {" "} "{workout.exerciseName}"
              </span> ?
              <br /> This action cannot be undone.
            </p>

            <div className="modal-action">

              <button
                className="btn btn-ghost"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>

              <button
                className="btn btn-error flex items-center gap-2"
                onClick={handleDelete}
              >
                <Trash2 className="size-4" /> Delete
              </button>

            </div>

          </div>

        </dialog>
      )}
    </>
  );
};

export default WorkoutCard