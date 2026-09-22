import React, { useState } from 'react'
import Swal from 'sweetalert2'

const ProductCard = ({ title, price, image }) => {
    const [isOpen, setIsOpen] = useState(false)
    const [formData, setFormData] = useState({ name: '', address: '', phone: '' })

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setIsOpen(false) // Close the modal

        // Trigger SweetAlert2 success message styled for your dark theme
        Swal.fire({
            title: 'Order Placed!',
            text: 'Your order successfully placed!',
            icon: 'success',
            confirmButtonColor: '#0891b2', // Cyan-600 matching your theme
            background: '#1f2937', // Gray-800 dark background
            color: '#ffffff'
        })

        // Reset form fields
        setFormData({ name: '', address: '', phone: '' })
    }

    return (
        <>
            <div className="bg-gray-800 border border-gray-700 rounded-lg p-4 text-white shadow-md hover:border-cyan-500 transition flex flex-col justify-between">
                <div>
                    <img src={image} alt={title} className="w-full h-48 object-cover rounded-md mb-4" />
                    <h3 className="text-lg font-semibold mb-1">{title}</h3>
                    <p className="text-cyan-400 font-bold mb-4">{price}</p>
                </div>

                <button
                    onClick={() => setIsOpen(true)}
                    className="w-full bg-cyan-600 hover:bg-cyan-500 text-white py-2 rounded-lg font-medium transition-colors"
                >
                    Add to Cart
                </button>
            </div>

            {/* Checkout Form Modal */}
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 px-4">
                    <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 w-full max-w-md shadow-2xl text-white">
                        <h2 className="text-xl font-bold mb-1 text-cyan-400">Checkout</h2>
                        <p className="text-xs text-gray-400 mb-4">Ordering: <span className="text-white font-medium">{title}</span></p>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-xs font-medium text-gray-300 mb-1">Full Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Enter your full name"
                                    className="w-full px-3 py-2 bg-gray-900 border border-gray-700 rounded-lg text-sm text-white focus:outline-none focus:border-cyan-500"
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-medium text-gray-300 mb-1">Shipping Address</label>
                                <input
                                    type="text"
                                    name="address"
                                    required
                                    value={formData.address}
                                    onChange={handleChange}
                                    placeholder="Enter your street address"
                                    className="w-full px-3 py-2 bg-gray-900 border border-gray-700 rounded-lg text-sm text-white focus:outline-none focus:border-cyan-500"
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-medium text-gray-300 mb-1">Phone Number</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    required
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="Enter your phone number"
                                    className="w-full px-3 py-2 bg-gray-900 border border-gray-700 rounded-lg text-sm text-white focus:outline-none focus:border-cyan-500"
                                />
                            </div>

                            <div className="flex justify-end space-x-3 pt-2">
                                <button
                                    type="button"
                                    onClick={() => setIsOpen(false)}
                                    className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-gray-300 rounded-lg text-sm font-medium transition"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="px-4 py-2 bg-cyan-600 hover:bg-cyan-500 text-white rounded-lg text-sm font-medium transition"
                                >
                                    Save & Order
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    )
}

export default ProductCard