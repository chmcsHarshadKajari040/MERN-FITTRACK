import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import api from "../lib/axios";
import toast from "react-hot-toast";
import { LoaderIcon, Trash2Icon, ArrowLeftIcon } from "lucide-react";

const workoutDetailPage = () => {
  const [workout, setWorkout] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const fetchWorkout = async () => {
      try {
        const res = await api.get(`/workout/${id}`);
        setWorkout(res.data);
      } catch (error) {
        console.error("Error fetching workout", error);
        toast.error("Failed to fetch workout");
      } finally {
        setLoading(false);
      }
    };

    fetchWorkout();
  }, [id]);

  const handleDelete = async () => {
    if (!window.confirm("Are you sure you want to delete this workout?")) return;

    try {
      await api.delete(`/workout/${id}`);
      toast.success("Workout deleted successfully");
      navigate("/");
    } catch (error) {
      console.error("Error deleting workout", error);
      toast.error("Failed to delete workout");
    }
  };

  const handleSave = async () => {
    if (!workout.exerciseName.trim()) {
      toast.error("Please add exercise name");
      return;
    }

    setSaving(true);

    try {
      await api.put(`/workout/${id}`, {
        exerciseName: workout.exerciseName,
        bodyPart: workout.bodyPart,
        sets: Number(workout.sets),
        reps: Number(workout.reps),
        weight: Number(workout.weight),
        duration: Number(workout.duration),
        notes: workout.notes
      });

      toast.success("Workout updated successfully");
      navigate("/");
    } catch (error) {
      console.error("Error updating workout", error);
      toast.error("Failed to update workout");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-base-200 flex items-center justify-center">
        <LoaderIcon className="animate-spin size-10" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-base-200">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">

          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <Link to="/" className="btn btn-ghost">
              <ArrowLeftIcon className="h-5 w-5" /> Back to workouts
            </Link>

            <button onClick={handleDelete} className="btn btn-error btn-outline">
              <Trash2Icon className="h-5 w-5" /> Delete Workout
            </button>
          </div>

          {/* FORM CARD */}
          <div className="card bg-base-100 shadow-lg">
            <div className="card-body">

              {/* Exercise */}
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text">Exercise Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Exercise name"
                  className="input input-bordered"
                  value={workout.exerciseName}
                  onChange={(e) =>
                    setWorkout({ ...workout, exerciseName: e.target.value })
                  }
                />
              </div>

              {/* Bodypart */}
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text">Body Part</span>
                </label>
                <input
                  type="text"
                  placeholder="Body part"
                  className="input input-bordered"
                  value={workout.bodyPart}
                  onChange={(e) =>
                    setWorkout({ ...workout, bodyPart: e.target.value })
                  }
                />
              </div>

              {/* Sets */}
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text">Sets</span>
                </label>
                <input
                  type="number"
                  placeholder="Sets"
                  className="input input-bordered"
                  value={workout.sets}
                  onChange={(e) =>
                    setWorkout({ ...workout, sets: e.target.value })
                  }
                />
              </div>

              {/* Reps */}
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text">Reps</span>
                </label>
                <input
                  type="number"
                  placeholder="Reps"
                  className="input input-bordered"
                  value={workout.reps}
                  onChange={(e) =>
                    setWorkout({ ...workout, reps: e.target.value })
                  }
                />
              </div>

              {/* Weight */}
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text">Weight (kg)</span>
                </label>
                <input
                  type="number"
                  placeholder="Weight"
                  className="input input-bordered"
                  value={workout.weight}
                  onChange={(e) =>
                    setWorkout({ ...workout, weight: e.target.value })
                  }
                />
              </div>

              {/* Duration */}
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text">Duration (minutes)</span>
                </label>
                <input
                  type="number"
                  placeholder="Duration"
                  className="input input-bordered"
                  value={workout.duration}
                  onChange={(e) =>
                    setWorkout({ ...workout, duration: e.target.value })
                  }
                />
              </div>

              {/* Notes */}
              <div className="form-control mb-6">
                <label className="label">
                  <span className="label-text">Notes</span>
                </label>
                <textarea
                  placeholder="Workout notes"
                  className="textarea textarea-bordered"
                  value={workout.notes}
                  onChange={(e) =>
                    setWorkout({ ...workout, notes: e.target.value })
                  }
                ></textarea>
              </div>

              {/* ACTION */}
              <div className="card-actions justify-end">
                <button
                  className="btn btn-primary"
                  disabled={saving}
                  onClick={handleSave}
                >
                  {saving ? "Saving..." : "Save Changes"}
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default workoutDetailPage;