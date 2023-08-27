import React from 'react'

interface ChatBubbleProps {
    messageType?: "incoming" | "outgoing"
}

export default function ChatBubble(props: ChatBubbleProps) {

    const [messageType, setMessageType] = React.useState<"incoming" | "outgoing">('incoming')

    return (
        <div className={`p-4 max-w-sm  h-fit relative chat-bubble-${messageType}`}>
            <div className="p-3 rounded-xl shadow-sm shadow-black bg-blue-400 text-white">
                Hello, how can I help you?
            </div>
        </div>
    )
}
