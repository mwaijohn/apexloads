import React from 'react';
import { ArrowDown, ArrowUpRight } from 'lucide-react';

const TripCard = () => {
    return (
        <div className="border rounded shadow bg-[#272627] border-[#3a3a3a]">
            <h3 className="text-sm font-medium mb-4 bg-[#3a3a3b] px-3 py-2">TRIP</h3>
            <div className="space-y-4 px-2 flex flex-row justify-between">
                <div className='px-2'>
                    <div className="flex flex-row items-start">
                        {/* Timeline */}
                        <div className="flex flex-col items-center mr-4">
                            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                            <div className="flex flex-col items-center">
                                <div className="h-4 w-px bg-gray-400"></div>
                                <div className="h-4 w-px bg-gray-400"></div>
                                <div className="h-4 w-px bg-gray-400"></div>
                                <div className="h-4 w-px bg-gray-400"></div>
                                <ArrowDown className="w-4 h-4 text-gray-400" />
                            </div>
                            <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                        </div>
                        {/* Locations */}
                        <div className="flex flex-col gap-8">
                            {/* Origin */}
                            <div>
                                <p className="font-medium">Jacksonville, FL</p>
                                <p className="text-gray-400 text-sm">Nov 16</p>
                                <p className="text-gray-400 text-sm">6am to 12 noon</p>
                            </div>
                            {/* Destination */}
                            <div>
                                <p className="font-medium">Denver, CO</p>
                                <p className="text-gray-400 text-sm">11/20 by 3am</p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-6 ml-2">
                        <h4 className="text-sm font-medium mb-3">EQUIPMENT</h4>
                        <div className="space-y-2 text-sm">
                            <div className="grid grid-cols-2 gap-2">
                                <span className="text-gray-400">Load</span>
                                <span className="text-right">Full</span>
                            </div>
                            <div className="grid grid-cols-2 gap-2">
                                <span className="text-gray-400">Truck</span>
                                <span className="text-right">Full</span>
                            </div>
                            <div className="grid grid-cols-2 gap-2">
                                <span className="text-gray-400">Length</span>
                                <span className="text-right">24 ft</span>
                            </div>
                            <div className="grid grid-cols-2 gap-2">
                                <span className="text-gray-400">Commodity</span>
                                <span className="text-right">Footballs</span>
                            </div>
                            <div className="grid grid-cols-2 gap-2">
                                <span className="text-gray-400">Weight</span>
                                <span className="text-right">42,000 lbs</span>
                            </div>
                            <div className="grid grid-cols-2 gap-2">
                                <span className="text-gray-400">Commodity</span>
                                <span className="text-right">--</span>
                            </div>
                            <div className="grid grid-cols-2 gap-2">
                                <span className="text-gray-400">Tracking</span>
                                <span className="text-right">--</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ml-5">
                    <button className="bg-[#272627] text-white font-bold text-sm rounded-full px-4 py-2 flex items-center hover:bg-red-600 transition-colors border-1 border-gray-400">
                        <ArrowUpRight className="w-4 h-4 mr-1" /> VIEW ROUTE
                    </button>
                </div>
            </div>
        </div>
    )
}

export default TripCard