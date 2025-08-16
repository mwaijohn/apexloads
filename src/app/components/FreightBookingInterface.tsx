import React from 'react';
import { MoreHorizontal } from 'lucide-react';
import TripCard from './postdetails/TripCard';
import RateCard from './postdetails/RateCard';
import PostingDetailsCard from './postdetails/PostingDetailsCard';
import ContactCard from './postdetails/ContactCard';
import MapCard from './mapsection/MapCard';
import SpotCard from './mapsection/SpotCard';
import BidAndBookingActivityCard from './postdetails/BidAndBookingActivityCard';
import ShipMentDetailsHeader from './ShipMentDetailsHeader';

export default function FreightBookingInterface() {
  return (
    <div className="text-white min-h-screen bg-[#121212]">
      <ShipMentDetailsHeader />
      <div className="flex flex-col lg:flex-row">
        {/* Left Panel */}
        <div className="w-full lg:w-2/3 p-4 py-2 md:p-6 space-y-4 md:space-y-6">
          {/* Post Details Card */}
          <div className="bg-[#1d1d1d] rounded-lg p-3">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-3 space-y-2 sm:space-y-0">
              <h2 className="text-base font-semibold">Post Details</h2>
              <div className="flex items-center space-x-2">
                <span className="bg-[#3a3a3b] px-4 py-1 rounded-full text-xs font-bold">POSTED</span>
                <button className="text-gray-400 hover:text-white">
                  <MoreHorizontal className="w-4 h-4" />
                </button>
              </div>
            </div>

            <p className="text-gray-400 text-xs mb-3">Created 2hrs ago</p>
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-3 mb-4">
              {/* Trip Info */}
              <div className="order-1">
                <TripCard />
              </div>
              <div className="order-2 space-y-3">
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
        <div className="w-full lg:w-1/3 flex flex-col space-y-3 p-3">
          {/* Map Section */}
          <MapCard />

          {/* Pricing Section */}
          <div className="">
            {/* Spot Rate */}
            <SpotCard />
            {/* Contract Rate */}
            <div className='mt-3'>
              <SpotCard />
            </div>

            {/* Related Trucks */}
            <div className="text-center mt-4">
              <button className="text-red-500 font-medium hover:underline text-sm">
                VIEW 11 RELATED TRUCKS
              </button>
              <p className="text-gray-400 text-xs mt-1">These trucks match your postings</p>
            </div>

            <button className="w-full bg-[#d21f26] hover:bg-red-700 text-white font-medium py-2 px-4 rounded-4xl transition-colors mt-3 text-sm">
              Mark as Booked
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}