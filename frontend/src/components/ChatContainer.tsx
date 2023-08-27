import React from 'react'
import MessageBox from './MessageBox'

export default function ChatContainer() {
  return (
    <div className="flex flex-col justify-end p-10 border-solid border-2 rounded-lg h-3/6 w-3/6 bg-white">
      <MessageBox></MessageBox>
    </div>
  )
}
