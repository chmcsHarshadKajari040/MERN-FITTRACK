import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar.jsx'
import api from '../lib/axios'
import toast from 'react-hot-toast'
import WorkoutCard from '../components/workoutCard.jsx'
import WorkoutNotFound from '../components/workoutNotFound.jsx'

const HomePage = () => {

  const [workouts, setWorkouts] = useState([])
  const [loading, setLoading] = useState(true)

  // NEW STATES (features)
  const [search, setSearch] = useState("")
  const [filter, setFilter] = useState("all")

  useEffect(() => {

    const fetchWorkouts = async () => {
      try {
        const res = await api.get('/workout')
        console.log(res.data)
        setWorkouts(res.data)

      } catch (error) {
        console.log("Error fetching workouts")
        console.log(error)
        toast.error("Failed to load workouts")

      } finally {
        setLoading(false)
      }
    }

    fetchWorkouts()

  }, [])

  // SEARCH + FILTER
  const filteredWorkouts = workouts.filter((workout) => {

    const matchSearch =
      workout.exerciseName?.toLowerCase().includes(search.toLowerCase())

    const matchFilter =
      filter === "all" || workout.bodyPart === filter

    return matchSearch && matchFilter
  })

  // AVG DURATION
  const avgDuration =
    workouts.length > 0
      ? workouts.reduce((acc, w) => acc + Number(w.duration || 0), 0) / workouts.length
      : 0

  return (
    <div className='min-h-screen'>

      <Navbar />

      <div className='max-w-7xl mx-auto p-4 mt-6'>

        {/* SMALL FEATURE BAR (does not change layout) */}
        <div className='flex flex-wrap gap-3 mb-6 items-center'>

          <input
            type='text'
            placeholder='Search workout'
            className='input input-bordered input-sm'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select
            className='select select-bordered select-sm'
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="all">All</option>
            <option value="Chest">Chest</option>
            <option value="Back">Back</option>
            <option value="Legs">Legs</option>
            <option value="Arms">Arms</option>
            <option value="Shoulders">Shoulders</option>
          </select>

          <div className='ml-auto text-sm opacity-70'>
            Avg Duration: {avgDuration.toFixed(1)} mins
          </div>

        </div>

        {loading && (
          <div className='text-center text-primary py-10'>
            Loading workouts ...
          </div>
        )}

        {filteredWorkouts.length === 0 && !loading && <WorkoutNotFound />}

        {filteredWorkouts.length > 0 && (
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>

            {filteredWorkouts.map((workout) => (
              <WorkoutCard
                key={workout._id}
                workout={workout}
                setWorkouts={setWorkouts}
              />
            ))}

          </div>
        )}

      </div>

    </div>
  )
}

export default HomePage
