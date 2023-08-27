import React from 'react'
import ChatBubble from './ChatBubble'
import TextArea from './TextArea'

export default function ChatContainer() {
  return (
    <div className="flex flex-col justify-end border-solid border-2 rounded-lg h-3/6 w-3/6 bg-white">
      <div className="p-10">
        <ChatBubble></ChatBubble>
      </div>
      <div>
        <TextArea></TextArea>
      </div>
    </div>
  )
}
