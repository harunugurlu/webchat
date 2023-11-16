import React from 'react'

interface ChatBubbleProps {
    messageTypeProp?: "incoming" | "outgoing"
}

export const ChatBubble: React.FC<ChatBubbleProps> = ({ messageTypeProp = "incoming" }) => {
    const [messageType, setMessageType] = React.useState<"incoming" | "outgoing">("incoming")

    React.useEffect(() => {
        setMessageType(messageTypeProp)
    }, [])

    return (
        <div className={`p-4 max-w-sm  h-fit relative chat-bubble-${messageType}`}>
            <div className="p-3 rounded-xl shadow-sm shadow-black bg-blue-400 text-white">
                Hello, how can I help you?
            </div>
        </div>
    )
}
