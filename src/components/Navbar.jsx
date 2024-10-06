import React from 'react'

const Navbar = () => {
  return (
    <nav className='sticky top-0 flex justify-around bg-blue-900 text-white p-2'>
      <div className="logo font-bold text-2xl">
      <a href="#" className="nav-link">TodoList</a>
      </div>
      <div className=" flex items-center justify-between gap-4">
        <a href="#" className="nav-link">Home</a>
        <a href="#" className="nav-link">Your Task</a>
      </div>
    </nav>
  )
}

export default Navbar
