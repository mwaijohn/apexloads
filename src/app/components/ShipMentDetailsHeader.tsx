import React from 'react';
import { X, ArrowLeft } from 'lucide-react';

const ShipMentDetailsHeader = () => {
    return (
        <div className="flex items-center justify-between p-6 border-b border-gray-800 bg-[#1d1d1d]">
            <div className="flex items-center gap-4">
                <ArrowLeft className="w-6 h-6 cursor-pointer hover:text-gray-300" />
                <h1 className="text-xl font-semibold">Shipment Details</h1>
            </div>
            <div className="flex items-center gap-4">
                <span className="bg-[#3a3a3b] px-6 py-2 rounded-full text-xs md:text-sm font-bold">POSTED</span>
                <button className="text-gray-400 hover:text-white">
                    <X className="w-6 h-6" />
                </button>
            </div>
        </div>
    )
}

export default ShipMentDetailsHeader