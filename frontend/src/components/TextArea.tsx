import React from 'react'

export default function TextArea() {
    return (
        <form>
            <div className="flex flex-col border-t-2 border-slate-500 shadow">
                <input type="text" className="w-full h-20" />
                <button className="w-32 m-2 self-end rounded-md bg-teal-500 hover:bg-teal-600">Send</button>
            </div>
        </form>
    )
}
