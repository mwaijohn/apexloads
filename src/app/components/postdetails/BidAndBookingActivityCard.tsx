import React from 'react';
import { MoreHorizontal, Lock, Clock } from 'lucide-react';

const BidAndBookingActivityCard = () => {
    return (
        <div className="bg-[#272627] rounded-lg">
            <div className="flex justify-between items-center px-3 py-2">
                <h2 className="text-lg font-semibold">Booking & Bidding Activity</h2>
                <button className="text-gray-400 hover:text-white">
                    <MoreHorizontal className="w-4 h-4" />
                </button>
            </div>
            <div className="border-t border-[#3a3a3a] mb-2"></div>
            <div className="flex text-left text-gray-400 text-sm pb-2 px-4">
                <div className="w-16">Age</div>
                <div className="w-48">Contact</div>
                <div className="w-32">Bids</div>
            </div>
            <div className="border-b border-[#3a3a3a] mb-2"></div>
            <div className="space-y-2 px-4 pb-3">
                <div className="flex items-start">
                    <div className="w-16 flex items-center gap-2">
                        <span className="text-sm">5d</span>
                        <Clock className="w-4 h-4 text-orange-500 fill-orange-500/50" />
                    </div>

                    <div className="w-48">
                        <p className="text-[#d21f26] text-sm">Anne k logistoc</p>
                        <p className="text-gray-400 text-sm">+254782334433</p>
                    </div>

                    <div className="w-32 flex items-start gap-2">
                        <div className="bg-gray-700 p-1 rounded">
                            <Lock className="w-3 h-3" />
                        </div>
                        <div>
                            <p className="font-medium text-sm">$2000.00</p>
                            <p className="text-gray-400 text-sm">Posted Rate</p>
                        </div>
                    </div>

                    <div className="flex-1 flex justify-end items-start gap-2">
                        <button className="bg-[#d21f26] hover:bg-red-700 text-white px-4 py-1 rounded-full text-sm font-medium transition-colors">
                            Accept
                        </button>
                        <button className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-1 rounded-full text-sm font-medium transition-colors">
                            Reject
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BidAndBookingActivityCard