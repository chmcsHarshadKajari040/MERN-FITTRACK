import api from '../lib/axios';
import { ArrowLeftIcon } from 'lucide-react';
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';

const CreatePage = () => {

  const [exerciseName, setExerciseName] = useState('');
  const [bodyPart, setBodyPart] = useState('');
  const [sets, setSets] = useState('');
  const [reps, setReps] = useState('');
  const [weight, setWeight] = useState('');
  const [duration, setDuration] = useState('');
  const [notes, setNotes] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      await api.post('/workout', {
        exerciseName,
        bodyPart,
        sets,
        reps,
        weight,
        duration,
        notes
      })

      toast.success('workout created successfully!')
      navigate('/')

    } catch (error) {
      console.log('Error creating workout', error)
      toast.error('Failed to create workout.')

    } finally {
      setLoading(false)
    }
  }

  return (
    <div className='min-h-screen bg-base-200'>

      <div className='container mx-auto px-4 py-8'>

        <div className='max-w-2xl mx-auto'>

          <Link to='/' className='btn btn-ghost mb-6'>
            <ArrowLeftIcon className='size-5' /> Back to workouts
          </Link>

          <div className='card bg-base-100'>

            <div className='card-body'>

              <h2 className='card-title text-2xl mb-4'>
                Create New workout
              </h2>

              <form onSubmit={handleSubmit}>

                {/* Exercise Name */}
                <div className='form-control mb-4'>
                  <label className='label'>
                    <span className='label-text'>Exercise Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder='Exercise Name'
                    className='input input-bordered'
                    value={exerciseName}
                    onChange={(e) => setExerciseName(e.target.value)}
                    required
                  />
                </div>

                {/* Body Part */}
                <div className='form-control mb-4'>
                  <label className='label'>
                    <span className='label-text'>Body Part</span>
                  </label>
                  <input
                    type="text"
                    placeholder='e.g. Chest, Legs'
                    className='input input-bordered'
                    value={bodyPart}
                    onChange={(e) => setBodyPart(e.target.value)}
                    required
                  />
                </div>

                {/* Sets */}
                <div className='form-control mb-4'>
                  <label className='label'>
                    <span className='label-text'>Sets</span>
                  </label>
                  <input
                    type="number"
                    placeholder='e.g. 3'
                    className='input input-bordered'
                    value={sets}
                    onChange={(e) => setSets(e.target.value)}
                    required
                  />
                </div>

                {/* Reps */}
                <div className='form-control mb-4'>
                  <label className='label'>
                    <span className='label-text'>Reps</span>
                  </label>
                  <input
                    type="number"
                    placeholder='e.g. 12'
                    className='input input-bordered'
                    value={reps}
                    onChange={(e) => setReps(e.target.value)}
                    required
                  />
                </div>

                {/* Weight */}
                <div className='form-control mb-4'>
                  <label className='label'>
                    <span className='label-text'>Weight (kg)</span>
                  </label>
                  <input
                    type="number"
                    placeholder='e.g. 20'
                    className='input input-bordered'
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                  />
                </div>

                {/* Duration */}
                <div className='form-control mb-4'>
                  <label className='label'>
                    <span className='label-text'>Duration (minutes)</span>
                  </label>
                  <input
                    type="number"
                    placeholder='e.g. 30'
                    className='input input-bordered'
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                  />
                </div>

                {/* Notes */}
                <div className='form-control mb-4'>
                  <label className='label'>
                    <span className='label-text'>Notes</span>
                  </label>
                  <input
                    type="text"
                    placeholder='Optional notes'
                    className='input input-bordered'
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                  />
                </div>

                <div className='card-actions justify-end'>
                  <button
                    type='submit'
                    className='btn btn-primary'
                    disabled={loading}
                  >
                    {loading ? "Creating..." : "Create workout"}
                  </button>
                </div>

              </form>

            </div>

          </div>

        </div>

      </div>

    </div>
  )
}

export default CreatePage