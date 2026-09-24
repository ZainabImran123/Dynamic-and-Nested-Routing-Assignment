import React from 'react'
import { useNavigate } from 'react-router-dom'

const NavigateBtns = () => {
    const navigate = useNavigate()

    return (
        <div className="flex gap-3 my-4">
            <button
                onClick={() => navigate(-1)}
                className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600"
            >
                Back
            </button>
            <button
                onClick={() => navigate(1)}
                className="px-4 py-2 bg-cyan-600 text-white rounded hover:bg-cyan-500"
            >
                Forward
            </button>
        </div>
    )
}

export default NavigateBtns