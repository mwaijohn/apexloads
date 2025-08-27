import React, { useState } from 'react';

const BookingArea = () => {
    const [showBookingModal, setShowBookingModal] = useState(true);
    const [isBooked, setIsBooked] = useState(false);
    const handleMarkAsBooked = () => {
        setShowBookingModal(true);
    };

    const handleBookingConfirm = () => {
        setIsBooked(true);
        setShowBookingModal(false);
    };

    const handleBookingCancel = () => {
        setShowBookingModal(false);
    };
    return (
        <div>
            {!showBookingModal && !isBooked && (
                <button
                    onClick={handleMarkAsBooked}
                    className="w-full bg-[#d21f26] hover:bg-red-700 text-white font-medium py-2 px-4 rounded-4xl transition-colors mt-8 text-sm"
                >
                    Mark as Booked
                </button>
            )}
            {showBookingModal && !isBooked && (
                <div className="mt-8">
                    <div className="bg-[#272627] rounded-lg p-4 border border-[#3a3a3a]">
                        <div className="text-center">
                            <h3 className="text-base font-semibold text-white mb-2">Have you booked this load?</h3>
                            <div className="mb-4">
                                <p className="text-xs text-gray-400 mb-1">RATE</p>
                                <p className="text-white font-bold text-sm">$2000.00 <span className="text-gray-400 font-normal">$2.02 per/km</span></p>
                            </div>
                            <div className="flex gap-2">
                                <button
                                    onClick={handleBookingCancel}
                                    className="flex-1 bg-gray-600 hover:bg-gray-700 text-white py-1 px-3 rounded-full text-sm font-medium transition-colors"
                                >
                                    No
                                </button>
                                <button
                                    onClick={handleBookingConfirm}
                                    className="flex-1 bg-[#d21f26] hover:bg-red-700 text-white py-1 px-3 rounded-full text-sm font-medium transition-colors"
                                >
                                    Yes
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default BookingArea