import React from 'react';
import { X, ArrowLeft } from 'lucide-react';

const ShipMentDetailsHeader = () => {
    return (
        <div className="flex items-center justify-between px-4 py-2 border-b border-gray-800 bg-[#1d1d1d]">
            <div className="flex items-center gap-3">
                <ArrowLeft className="w-5 h-5 cursor-pointer hover:text-gray-300" />
                <h1 className="text-base font-semibold">Shipment Details</h1>
            </div>
            <div className="flex items-center gap-3">
                <span className="bg-[#3a3a3b] px-4 py-1 rounded-full text-xs font-bold">POSTED</span>
                <button className="text-gray-400 hover:text-white">
                    <X className="w-5 h-5" />
                </button>
            </div>
        </div>
    )
}

export default ShipMentDetailsHeader