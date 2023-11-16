import React from 'react';

interface ChatBubbleProps {
    message: string;
    isOutgoing?: boolean; // Added prop to determine message type
}

export const ChatBubble: React.FC<ChatBubbleProps> = ({ message, isOutgoing }) => {
    // Use the isOutgoing prop to set the message type
    isOutgoing = false;
    const messageType = isOutgoing ? 'outgoing' : 'incoming';

    return (
        <div className={`p-4 max-w-sm h-fit relative chat-bubble-${messageType}`}>
            <div className={`p-3 rounded-xl shadow-sm shadow-black ${isOutgoing ? 'bg-green-400' : 'bg-blue-400'} text-white`}>
                {message}
            </div>
        </div>
    );
};
