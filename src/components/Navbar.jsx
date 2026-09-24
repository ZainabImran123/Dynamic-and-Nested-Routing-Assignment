import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    const activeStyle = "underline font-bold text-cyan-200 decoration-cyan-400 underline-offset-4"
    const defaultStyle = "m-3 text-cyan-100 hover:text-white transition-colors duration-200"

    return (
        <nav className='flex justify-between items-center px-8 py-4 bg-cyan-900 text-white shadow-md'>
            <h2 className='text-2xl font-extrabold tracking-wide text-cyan-100'>Smit</h2>

            <div className='flex items-center text-sm md:text-base'>
                <NavLink className={({ isActive }) => isActive ? activeStyle : defaultStyle} to="/">Home</NavLink>
                <NavLink className={({ isActive }) => isActive ? activeStyle : defaultStyle} to="/about">About</NavLink>
                <NavLink className={({ isActive }) => isActive ? activeStyle : defaultStyle} to="/product">Product</NavLink>
            </div>
        </nav>
    )
}

export default Navbar