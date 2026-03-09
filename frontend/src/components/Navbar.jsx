import React from 'react'
import { Link } from 'react-router-dom'
import { PlusIcon } from 'lucide-react'
import banner from "../assets/banner.jpg"

const Navbar = () => {
  return (
    <header
      className='border-b border-base-content/10 text-white'
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${banner})`,
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      <div className='ms-auto max-w-6xl p-4'>
        <div className='flex items-center justify-between'>

          <h1 className='text-3xl font-bold font-mono tracking-tight'>
            FITTRACK
          </h1>

          <div className='flex items-center gap-4'>
            <Link to={"/create"} className="btn btn-primary">
              <PlusIcon className='size-5' />
              <span> New workout</span>
            </Link>
          </div>

        </div>
      </div>
    </header>
  )
}

export default Navbar