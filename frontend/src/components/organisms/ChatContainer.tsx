import React, { useState, useEffect, useCallback } from 'react';
import { ChatBubble } from '../atoms/ChatBubble';
import { TextForm } from '../molecules/TextForm';
import { Socket } from 'socket.io-client';

interface ChatContainerProps {
  io: Socket;
}

export const ChatContainer: React.FC<ChatContainerProps> = ({ io }) => {
  const [messages, setMessages] = useState<string[]>([]);

  const handleOutgoingMessage = useCallback((newMessage: string) => {
    setMessages((prevMessages) => [...prevMessages, newMessage]);
    // Emit the message to the server
    io.emit('chat message', newMessage);
    console.log("outgoing message: ", newMessage)
  }, [io]);

  // useEffect(() => {
  //   io.on('chat message', (incomingMessage: string) => {
  //     setMessages((prevMessages) => [...prevMessages, incomingMessage]);
  //     console.log("incoming message: ", incomingMessage)
  //   });
  // }, [io]);

  useCallback((incomingMessage: string) => {
    io.on('chat message', (incomingMessage: string) => {
      setMessages((prevMessages) => [...prevMessages, incomingMessage]);
    })
  }, [io])

  return (
    <div className="flex flex-col justify-end border-solid border-2 rounded-lg h-3/6 w-3/6 bg-white">
      <div className="p-6 flex flex-col">
        {messages.map((message, index) => (
          <ChatBubble key={index} message={message}/>
        ))}
      </div>
      <TextForm onNewMessage={handleOutgoingMessage} />
    </div>
  );
};
