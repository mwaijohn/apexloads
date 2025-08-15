import React from 'react'

const PostingDetailsCard = () => {
    return (
        <div className="border rounded shadow bg-[#272627] border-[#3a3a3a] mt-6">
            <h4 className="text-sm font-medium mb-3 bg-[#3a3a3b] px-3 py-2 rounded">POSTING DETAILS</h4>
            <div className="space-y-2 text-sm px-3">
                <div className="flex justify-between">
                    <span className="text-gray-400">Post to</span>
                    <span>Private Network</span>
                </div>
            </div>
            <div className="mt-6 px-3 pb-3">
                <div className="space-y-2 text-sm">
                    <h4 className="text-sm font-medium mb-3">BOOKING</h4>
                    <div className="flex justify-between">
                        <span className="text-gray-400">Booking</span>
                        <span>Book Instantly</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-gray-400">Bidding</span>
                        <span>Allow for Private Network</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostingDetailsCard