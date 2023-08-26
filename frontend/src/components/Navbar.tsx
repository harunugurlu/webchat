import React from 'react'

export default function Navbar() {
    return (
        <div className="bg-navbar mb-10 w-full flex justify-between">
            <h1 className="font-bold text-4xl m-4 text-white">
                web-chat
            </h1>
            <div className="flex p-4">
                <button className="bg-white border-solid border-2 rounded-lg px-2 mr-4 hover:bg-gray-500">
                    Login
                </button>
                <button className="bg-white border-solid border-2 rounded-lg px-2">
                    Sign-up
                </button>
            </div>
        </div>
    )
}
