import React from 'react';
import { MoreHorizontal } from 'lucide-react';
import TripCard from './postdetails/TripCard';
import RateCard from './postdetails/RateCard';
import PostingDetailsCard from './postdetails/PostingDetailsCard';
import ContactCard from './postdetails/ContactCard';
import MapCard from './postdetails/MapCard';
import SpotCard from './mapsection/SpotCard';
import BidAndBookingActivityCard from './postdetails/BidAndBookingActivityCard';

export default function FreightBookingInterface() {
  return (
    <div className=" text-white min-h-screen">
      <div className="flex">
        {/* Left Panel */}
        <div className="w-2/3 p-6 space-y-6">
          {/* Post Details Card */}
          <div className="bg-[#1d1d1d] rounded-lg p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">Post Details</h2>
              <div className="flex items-center space-x-2">
                <span className="bg-[#272627] px-3 py-1 rounded-full text-sm">POSTED</span>
                <button className="text-gray-400 hover:text-white">
                  <MoreHorizontal className="w-5 h-5" />
                </button>
              </div>
            </div>

            <p className="text-gray-400 text-sm mb-6">Created 2hrs ago</p>
            <div className="grid grid-cols-2 gap-6 mb-8">
              {/* Trip Info */}
              <TripCard />
              <div>
                <RateCard />
                <PostingDetailsCard />
                <ContactCard />
              </div>
            </div>
          </div>
          {/* Bid & Booking Activity Card */}
          <BidAndBookingActivityCard />
        </div>

        {/* Right Panel - Map and Pricing */}
        <div className="w-1/3 flex flex-col space-y-6 p-6">
          {/* Map Section */}
          <MapCard />

          {/* Pricing Section */}
          <div className="">
            {/* Spot Rate */}
            <SpotCard />
            {/* Contract Rate */}
            <div className='mt-6'>
              <SpotCard />
            </div>

            {/* Related Trucks */}
            <div className="text-center mt-8">
              <button className="text-red-500 font-medium hover:underline">VIEW 11 RELATED TRUCKS</button>
              <p className="text-gray-400 text-sm mt-1">These trucks match your postings</p>
            </div>

            <button className="w-full bg-[#d21f26] hover:bg-red-700 text-white font-medium py-3 px-4 rounded-4xl transition-colors mt-6">
              Mark as Booked
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}