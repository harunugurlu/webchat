import React from 'react'
import { ChatBubble } from '../atoms/ChatBubble'
import { TextForm } from '../molecules/TextForm'
import { Socket } from 'socket.io-client'

interface ChatContainerProps {
  io: Socket
}

export const ChatContainer: React.FC<ChatContainerProps> = ({ io }) => {
  const [incomingMessages, setIncomingMessages] = React.useState<string[]>([]);
  return (
    <div className="flex flex-col justify-end border-solid border-2 rounded-lg h-3/6 w-3/6 bg-white">
      <div className="p-10">
        <ChatBubble></ChatBubble>
      </div>
      <div>
        <TextForm io={io}></TextForm>
      </div>
    </div>
  )
}