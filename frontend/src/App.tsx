import React from 'react';
import logo from './logo.svg';
import ChatContainer from './components/ChatContainer';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="flex flex-col h-screen items-center flex-grow">
      <Navbar />
      <ChatContainer />
    </div>
  );
}

export default App;
