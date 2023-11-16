import React, { useEffect, useState } from 'react';
import { socket } from './socket'
import { ChatContainer } from './components/organisms/ChatContainer';
import Navbar from './components/Navbar';


function App() {
  const [isConnected, setIsConnected] = useState(socket.connected);
  
  useEffect(() => {
    socket.connect();
  }, []);

  return (
    <div className="flex flex-col h-screen items-center flex-grow">
      <Navbar />
      <ChatContainer io={socket}/>
    </div>
  );
}

export default App;
