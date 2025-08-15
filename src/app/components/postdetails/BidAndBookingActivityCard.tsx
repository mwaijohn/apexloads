import React from 'react';
import { MoreHorizontal, Lock } from 'lucide-react';

const BidAndBookingActivityCard = () => {
    return (
        <div className="bg-[#272627] rounded-lg">
            <div className="flex justify-between items-center px-3 py-2">
                <h2 className="text-xl font-semibold">Bid & Booking Activity</h2>
                <button className="text-gray-400 hover:text-white">
                    <MoreHorizontal className="w-5 h-5" />
                </button>
            </div>
            <div className="border-t border-[#3a3a3a] mb-4"></div>

            <div className="space-y-4 px-4">
                <div className="flex text-left text-gray-400 text-sm border-b border-[#3a3a3a] pb-4">
                    <div className="w-16">AGE</div>
                    <div className="w-48">CONTACT</div>
                    <div className="w-32">BIDS</div>
                </div>

                <div className="flex items-start">
                    <div className="w-16 flex items-center gap-3">
                        <span className="text-sm">16m</span>
                        <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    </div>

                    <div className="w-48">
                        <p className="text-[#d21f26] text-sm">Modus Enterprises Limited</p>
                        <p className="text-gray-400 text-xs">+254 700 000 000</p>
                    </div>

                    <div className="w-32 flex items-start gap-3">
                        <div className="bg-gray-700 p-2 rounded">
                            <Lock className="w-4 h-4" />
                        </div>
                        <div>
                            <p className="font-medium">$7,230</p>
                            <p className="text-gray-400 text-xs">Posted rate</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BidAndBookingActivityCard