import { Dumbbell } from "lucide-react";
import { Link } from "react-router-dom";

const WorkoutNotFound = () => {
  return (
    <div className='flex flex-col items-center justify-center py-16 space-y-6 max-w-md mx-auto text-center'>

      <div className='bg-primary/10 rounded-full p-8'>
        <Dumbbell className='size-10 text-primary' />
      </div>

      <h3 className='text-2xl font-bold'> No workouts yet </h3>

      <p className='text-base-content/70'>
        Ready to track your fitness? Add your first workout to FitTrack
      </p>

      <Link to='/create' className='btn btn-primary'>
        Add First workout
      </Link>

    </div>
  );
};

export default WorkoutNotFound;