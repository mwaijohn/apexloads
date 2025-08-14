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

            <div className="overflow-x-auto px-3">
                <table className="w-full">
                    <thead>
                        <tr className="text-left text-gray-400 text-sm border-b border-[#3a3a3a]">
                            <th className="pb-4">AGE</th>
                            <th className="pb-4">CONTACT</th>
                            <th className="pb-4">BIDS</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="py-3">
                                <div className="flex items-center">
                                    <span className=" w-6 h-6 rounded-full flex items-center justify-center text-xs mr-3">16m</span>
                                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                                </div>
                            </td>
                            <td className="py-3">
                                <div>
                                    <p className="text-[#d21f26] text-sm">Modus Enterprises Limited</p>
                                    <p className="text-gray-400 text-xs">+254 700 000 000</p>
                                </div>
                            </td>
                            <td className="py-3">
                                <div className="flex items-center">
                                    <div className="bg-gray-700 p-2 rounded mr-3">
                                        <Lock className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <p className="font-medium">$7,230</p>
                                        <p className="text-gray-400 text-xs">Posted rate</p>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default BidAndBookingActivityCard