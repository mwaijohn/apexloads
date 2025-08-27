import React from 'react'

const ContactCard = () => {
    return (
        <div className="border rounded shadow bg-[#272627] border-[#3a3a3a] mt-4">
            <h4 className="text-sm font-medium mb-2 bg-[#3a3a3b] px-3 py-1">CONTACT</h4>
            <div className="text-sm px-3 pb-3 space-y-2">
                <p className="font-medium text-white">Technical Support</p>

                <div className="space-y-1">
                    <div className="flex items-start gap-2">
                        <span className="text-gray-400 min-w-[60px]">Email:</span>
                        <span className="text-white font-medium">support@techsupport.co.ke</span>
                    </div>

                    <div className="flex items-start gap-2">
                        <span className="text-gray-400 min-w-[60px]">Phone:</span>
                        <span className="text-white font-medium">+254 700 123 456</span>
                    </div>

                    <div className="flex items-start gap-2">
                        <span className="text-gray-400 min-w-[60px]">Address:</span>
                        <span className="text-white font-medium">
                            Westlands Road, Nairobi<br />
                            Kenya, 00100
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactCard