import React from 'react'
import { Info } from 'lucide-react';

const SpotCard = () => {
    return (
        <div className="border rounded shadow bg-[#272627] border-[#3a3a3a]">
            <div className="text-sm font-medium mb-2 bg-[#3a3a3b] px-3 py-2 flex justify-between">
                <span className="text-xs text-gray-400">SPOT</span>
                <span className="text-xs text-gray-400">Mombasa, KE - Kampala, UG</span>
            </div>
            <div className="flex items-center justify-start px-3 py-1">
                <span className="text-xl font-bold text-red-500">$984</span>
                <div className="text-center ml-4">
                    <div className="flex items-center text-xs text-gray-400">
                        <span>($2.14/Kms)</span>
                        <Info className="w-3 h-3 ml-1" />
                    </div>
                    <p className="text-xs text-gray-400">447 Kms | 300 average</p>
                </div>
            </div>
            <div className="mt-1 px-3 py-2">
                <span className="text-xs text-gray-400">Range:</span>
                <span className="text-xs ml-4">$815 - $1,037 ($1.83 - $2.32/kms)</span>
            </div>
        </div>
    )
}

export default SpotCard