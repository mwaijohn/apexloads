import React from 'react'

const MapCard = () => {
    return (
        <div className="relative bg-gradient-to-br from-blue-100 to-green-100 rounded-lg shadow-lg overflow-hidden w-full h-60 sm:h-80 md:h-[400px]">
            {/* duMmy map */}
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-red-500 rounded-full z-10"></div>
            <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-red-500 rounded-full z-10"></div>
            <div className="absolute top-1/3 left-1/3 right-1/4 h-px bg-black opacity-30 transform rotate-12"></div>

            {/* Map labeling */}
            <div className="absolute top-1/4 left-1/4 transform -translate-y-8 -translate-x-4">
                <span className="bg-white px-2 py-1 rounded shadow text-black text-xs sm:text-sm">Kiambu, Kiambu</span>
            </div>
            <div className="absolute top-1/2 right-1/3 transform -translate-y-8 translate-x-4">
                <span className="bg-white px-2 py-1 rounded shadow text-black text-xs sm:text-sm">Naivasha, NC</span>
            </div>
            <div className="absolute bottom-2 left-2 text-xs sm:text-sm text-gray-600 bg-white px-2 py-1 rounded max-w-[90%]">
                Keyboard shortcuts | Map data ©2025 Google | Terms | Report a map error
            </div>
        </div>
    )
}

export default MapCard