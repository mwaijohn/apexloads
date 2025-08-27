import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const TripCard = () => {
    return (
        <div className="border rounded shadow bg-[#272627] border-[#3a3a3a]">
            <h3 className="text-base font-medium mb-2 bg-[#3a3a3b] px-4 py-1">TRIP</h3>
            <div className="px-4 pb-4 flex flex-row justify-between">
                <div className='flex-1'>
                    <div className="flex flex-row items-start">
                        {/* Timeline */}
                        <div className="flex flex-col items-center mr-4 pt-1">
                            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                            <div className="flex flex-col items-center">
                                <div className="h-2 w-px bg-gray-400"></div>
                                <div className="h-2 w-px bg-gray-400"></div>
                                <div className="h-2 w-px bg-gray-400"></div>
                                <div className="h-2 w-px bg-gray-400"></div>
                                <div className="h-2 w-px bg-gray-400"></div>
                                <div className="h-2 w-px bg-gray-400"></div>
                                <div className="h-2 w-px bg-gray-400"></div>
                                <div className="h-2 w-px bg-gray-400"></div>
                                <div className="h-2 w-px bg-gray-400"></div>
                                <div className="h-2 w-px bg-gray-400"></div>

                            </div>
                            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        </div>
                        {/* Locations */}
                        <div className="flex flex-col justify-between h-full">
                            {/* Origin */}
                            <div className="mb-6">
                                <p className="font-medium text-sm">Nairobi, KE</p>
                                <p className="text-gray-400 text-sm">Nov 16</p>
                                <p className="text-gray-400 text-sm">6am to 12 noon</p>
                            </div>
                            {/* Destination */}
                            <div>
                                <p className="font-medium text-sm">Eldoret, KE</p>
                                <p className="text-gray-400 text-sm">11/20 by 3am</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-4 ml-2">
                        <h4 className="text-base font-medium mb-2">EQUIPMENT</h4>
                        <div className="space-y-1 text-sm">
                            <div className="grid grid-cols-2 gap-6">
                                <span className="text-gray-400 text-left">Load</span>
                                <span className="text-left text-white font-semibold">Full</span>
                            </div>
                            <div className="grid grid-cols-2 gap-6">
                                <span className="text-gray-400">Truck</span>
                                <span className="text-left text-white font-semibold">Full</span>
                            </div>
                            <div className="grid grid-cols-2 gap-6">
                                <span className="text-gray-400">Length</span>
                                <span className="text-left text-white font-semibold">24 ft</span>
                            </div>
                            <div className="grid grid-cols-2 gap-6">
                                <span className="text-gray-400">Commodity</span>
                                <span className="text-left text-white font-semibold">Footballs</span>
                            </div>
                            <div className="grid grid-cols-2 gap-6">
                                <span className="text-gray-400">Weight</span>
                                <span className="text-left text-white font-semibold">42,000 lbs</span>
                            </div>
                            <div className="grid grid-cols-2 gap-6">
                                <span className="text-gray-400">Commodity</span>
                                <span className="text-left">--</span>
                            </div>
                            <div className="grid grid-cols-2 gap-6">
                                <span className="text-gray-400">Tracking</span>
                                <span className="text-left">--</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ml-5 flex-shrink-0">
                    <button className="bg-[#272627] text-white font-bold text-sm rounded-full px-3 py-2 flex items-center hover:bg-red-600 transition-colors border border-red-600">
                        <ArrowUpRight className="w-3 h-3 mr-1" /> VIEW ROUTE
                    </button>
                </div>
            </div>
        </div>
    )
}

export default TripCard