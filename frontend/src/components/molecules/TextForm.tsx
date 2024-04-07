import React, { useState, useCallback } from 'react';
import { VscSend } from 'react-icons/vsc';
import { Socket } from 'socket.io-client';

interface TextFormProps {
    onOutgoingMessage: (message: string) => void;
    onIncomingMessage: (message: string) => void;
}

export const TextForm: React.FC<TextFormProps> = ({ onOutgoingMessage }) => {
    const [outgoingMessage, setOutgoingMessage] = useState('');

    const handleSubmit = useCallback((e: React.FormEvent) => {
        e.preventDefault();
        if (outgoingMessage.trim()) {
            onOutgoingMessage(outgoingMessage);
            setOutgoingMessage('');
        }
    }, [outgoingMessage, onOutgoingMessage]);

    const handleKeyPress = useCallback((e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSubmit(e);
        }
    }, [handleSubmit]);

    return (
        <form onSubmit={handleSubmit}>
            <div className="flex flex-col border-2 border-slate-500 shadow p-4 relative">
                <textarea 
                    id='textarea' 
                    placeholder='Send your message...' 
                    className="w-full flex-grow-2 h-20 focus:outline-none resize-none"
                    value={outgoingMessage}
                    onChange={(e) => setOutgoingMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                />
                <button 
                    type='submit' 
                    className="absolute right-0.5 bottom-0 m-2 self-end rounded-md hover:bg-teal-600">
                    <VscSend size={30}/>
                </button>
            </div>
        </form>
    );
};
