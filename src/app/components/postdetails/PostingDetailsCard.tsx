import React from 'react'

const PostingDetailsCard = () => {
    return (
        <div className="border rounded shadow bg-[#272627] border-[#3a3a3a] mt-4">
            <h4 className="text-basefont-medium mb-2 bg-[#3a3a3b] px-3 py-1 rounded">POSTING DETAILS</h4>
            <div className="space-y-1 text-sm px-3">
                <div className="flex justify-start gap-4">
                    <span className="text-gray-400 w-20">Post to</span>
                    <span>Private Network</span>
                </div>
            </div>
            <div className="mt-4 px-3 pb-3">
                <div className="space-y-1 text-sm">
                    <h4 className="text-basefont-medium mb-2">BOOKING</h4>
                    <div className="flex justify-start gap-4">
                        <span className="text-gray-400 w-20">Booking</span>
                        <span>Book Instantly</span>
                    </div>
                    <div className="flex justify-start gap-4">
                        <span className="text-gray-400 w-20">Bidding</span>
                        <span>Allow for Private Network</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostingDetailsCard