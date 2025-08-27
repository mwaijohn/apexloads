import React from 'react'
import { Info } from 'lucide-react';

const SpotCard = () => {
    return (
        <div className="border rounded shadow bg-[#272627] border-[#3a3a3a]">
            <div className="text-base font-medium mb-2 bg-[#3a3a3b] px-3 py-2 flex justify-between">
                <span className="text-sm">SPOT</span>
                <span className="text-sm">Mombasa, KE - Kampala, UG</span>
            </div>
            <div className="flex items-center justify-start px-3 py-1">
                <span className="text-xl font-bold text-red-500">$984</span>
                <div className="text-center ml-4">
                    <div className="flex items-center text-sm text-gray-400">
                        <span>($2.14/Kms)</span>
                        <Info className="w-3 h-3 ml-1" />
                    </div>
                    <p className="text-sm text-gray-400">447 Kms | 300 average</p>
                </div>
            </div>
            <div className="mt-1 px-3 py-2">
                <span className="text-sm text-gray-400">Range:</span>
                <span className="text-sm ml-4">$815 - $1,037 ($1.83 - $2.32/kms)</span>
            </div>
        </div>
    )
}

export default SpotCard