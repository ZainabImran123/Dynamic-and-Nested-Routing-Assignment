import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
    const location = useLocation()

    // Helper function to keep active link styling clean and reusable
    const isActive = (path) => location.pathname === path

    return (
        <nav className="flex items-center justify-between px-8 py-4 bg-gray-900 text-gray-100 shadow-md border-b border-gray-800">
            {/* Brand / Logo */}
            <div className="flex items-center space-x-2">
                <h2 className="text-2xl font-bold tracking-wide text-cyan-400">SMIT</h2>
            </div>

            {/* Navigation Links */}
            <div className="flex items-center space-x-2 text-sm font-medium">
                <Link
                    to="/"
                    className={`px-4 py-2 rounded-lg transition-colors duration-200 ${isActive('/home') ? 'bg-cyan-600 text-white shadow-sm' : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                        }`}
                >
                    Home
                </Link>
                <Link
                    to="/about"
                    className={`px-4 py-2 rounded-lg transition-colors duration-200 ${isActive('/about') ? 'bg-cyan-600 text-white shadow-sm' : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                        }`}
                >
                    About Us
                </Link>
                <Link
                    to="/product"
                    className={`px-4 py-2 rounded-lg transition-colors duration-200 ${isActive('/product') ? 'bg-cyan-600 text-white shadow-sm' : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                        }`}
                >
                    Product
                </Link>
            </div>
        </nav>
    )
}

export default Navbar