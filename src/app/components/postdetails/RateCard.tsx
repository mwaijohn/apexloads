import React from 'react'

const RateCard = () => {
    return (
        <div className="border rounded shadow bg-[#272627] border-[#3a3a3a]">
            <h3 className="text-sm font-medium mb-2 bg-[#3a3a3b] px-1 py-1">RATE</h3>
            <div className="space-y-1 text-sm px-3 pb-3">
                <div className="flex justify-start gap-4">
                    <span className="text-gray-400 w-20">Total</span>
                    <span className='text-base font-bold'>$ 3,500</span>
                </div>
                <div className="flex justify-start gap-4">
                    <span className="text-gray-400 w-20">Trip</span>
                    <span className='text-base'>1098 mi</span>
                </div>
                <div className="flex justify-start gap-4">
                    <span className="text-gray-400 w-20">Rate / mile</span>
                    <span className='text-base'>$ 2.000</span>
                </div>
            </div>
        </div>
    )
}

export default RateCard