import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
            <h1 className="text-7xl sm:text-9xl font-black text-red-600 tracking-wider mb-4">
                404
            </h1>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
                Oops! Page Not Found
            </h2>
            <p className="text-gray-500 text-sm sm:text-base max-w-md mb-8">
                The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
            </p>
            <Link
                to="/"
                className="px-6 py-3 bg-red-600 text-white font-semibold rounded-md shadow-md hover:bg-red-700 transition text-sm sm:text-base"
            >
                Back to Home
            </Link>
        </div>
    )
}

export default NotFound