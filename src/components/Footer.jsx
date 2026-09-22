import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 border-t border-gray-800 pt-12 pb-8 px-8 mt-auto">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">

                {/* Brand Column */}
                <div>
                    <h2 className="text-2xl font-bold tracking-wide text-cyan-400 mb-4">SMIT</h2>
                    <p className="text-sm text-gray-400">
                        Elevate your everyday wardrobe with our modern, premium clothing collections designed for style and comfort.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Quick Links</h3>
                    <ul className="space-y-2 text-sm">
                        <li><Link to="/" className="hover:text-cyan-400 transition-colors">Home</Link></li>
                        <li><Link to="/about" className="hover:text-cyan-400 transition-colors">About Us</Link></li>
                        <li><Link to="/product" className="hover:text-cyan-400 transition-colors">Collections</Link></li>
                    </ul>
                </div>

                {/* Categories */}
                <div>
                    <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Shop Categories</h3>
                    <ul className="space-y-2 text-sm">
                        <li><Link to="/product/men" className="hover:text-cyan-400 transition-colors">Men's Apparel</Link></li>
                        <li><Link to="/product/women" className="hover:text-cyan-400 transition-colors">Women's Apparel</Link></li>
                        <li><Link to="/product" className="hover:text-cyan-400 transition-colors">New Arrivals</Link></li>
                    </ul>
                </div>

                {/* Newsletter / Contact */}
                <div>
                    <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Stay Connected</h3>
                    <p className="text-sm text-gray-400 mb-4">Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.</p>
                    <div className="flex">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="bg-gray-800 text-sm px-4 py-2 rounded-l-lg focus:outline-none focus:ring-1 focus:ring-cyan-500 text-white w-full border border-gray-700"
                        />
                        <button className="bg-cyan-600 hover:bg-cyan-500 text-white px-4 py-2 text-sm font-medium rounded-r-lg transition-colors">
                            Join
                        </button>
                    </div>
                </div>

            </div>

            {/* Bottom Copyright bar */}
            <div className="max-w-7xl mx-auto pt-6 border-t border-gray-800 text-center text-xs text-gray-500">
                <p>&copy; {new Date().getFullYear()} SMIT Clothing. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer