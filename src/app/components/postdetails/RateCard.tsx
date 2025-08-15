import React from 'react'

const RateCard = () => {
    return (
        <div className="border rounded shadow bg-[#272627] border-[#3a3a3a]">
            <h3 className="text-sm font-medium mb-4 bg-[#3a3a3b] px-3 py-2">RATE</h3>
            <div className="space-y-2 text-sm px-3 pb-3">
                <div className="flex justify-between">
                    <span className="text-gray-400">Total</span>
                    <span>$ 3,500</span>
                </div>
                <div className="flex justify-between">
                    <span className="text-gray-400">Trip</span>
                    <span>1098 mi</span>
                </div>
                <div className="flex justify-between">
                    <span className="text-gray-400">Rate / mile</span>
                    <span>$ 2.000</span>
                </div>
            </div>

        </div>
    )
}

export default RateCard