import React from 'react'
import { VscSend } from 'react-icons/vsc'

export default function TextArea() {
    return (
        <form >
            <div className="flex flex-col border-2 border-slate-500 shadow p-4 relative">
                <textarea placeholder='Send your message' className="w-full flex-grow-2 h-20 focus:outline-none resize-none" />
                <button className="absolute right-0.5 bottom-0 m-2 self-end rounded-md hover:bg-teal-600">
                    <VscSend size={30}/>
                </button>
            </div>
        </form>
    )
}
