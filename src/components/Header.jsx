import React from 'react'
import { Link, useLocation } from 'react-router-dom'
const Header = () => {
  return (
    <header >
      <nav className='flex items-center px-3 gap-5 font-bold bg-teal-600 text-white text-3xl h-24 lg:justify-start  sm:justify-center '>
            <Link to='/' className='hover:cursor-pointer  hover:bg-teal-800 p-3 rounded-full
                  transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110'
            >Inicio</Link>
            <Link to='/misLibros' className='hover:cursor-pointer  hover:bg-teal-800 p-3 rounded-full
                  transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110'
            >Mis Libros</Link>
      </nav>
    </header>
  )
}

export default Header
