import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className="px-3 pt-3">
      <nav className='flex flex-col gap-4 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 shadow-md md:flex-row md:items-center md:justify-between'>
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/20 text-xl">
          📝
        </div>
        <div>
          <h1 className="text-lg font-bold text-white md:text-xl">Notes Manager</h1>
          <p className="text-xs text-white/85 md:text-sm">Capture ideas and manage tasks</p>
        </div>
      </div>
      <div className="flex flex-wrap items-center gap-2 md:gap-3">
        <Link to='/' className="rounded-md bg-white/20 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/30">Home</Link>
        <Link to='/register' className="rounded-md bg-white/20 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/30">Register</Link>
        <Link to='/login' className="rounded-md bg-white/20 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/30">Login</Link>
        <Link to='/addnote' className="rounded-md bg-white/20 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/30">Add Note</Link>
      </div>
      </nav>
    </div>
  )
}

export default Nav