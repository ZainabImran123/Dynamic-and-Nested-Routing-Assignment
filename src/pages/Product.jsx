import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Product = () => {
    return (
        <div className="p-8 max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Product Categories</h1>

            {/* Sub-navigation bar */}
            <div className='flex justify-center gap-8 bg-cyan-950 py-3 px-6 rounded-lg shadow-md text-white mb-8'>
                <Link to="men" className="hover:text-cyan-400 font-medium transition-colors">Men's Collection</Link>
                <Link to="women" className="hover:text-cyan-400 font-medium transition-colors">Women's Collection</Link>
            </div>

            {/* Outlet renders the nested child component (Men or Women) */}
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <Outlet />
            </div>
        </div>
    )
}

export default Product