import React, { useState } from "react";
import MessageList from "../components/MessageList/MessageList";
import MessageForm from "../components/MessageForm/MessageForm";
import "./App.css";

function App() {
  const [messages, setMessages] = useState([]);

  const getResponse = async (message) => {
    const res = await fetch(`http://localhost:3001/message/${message}`);
    const data = await res.json();
    setMessages((messages) => [...messages, { me: false, body: data.message }]);
  };

  const onSendMessage = (message) => {
    setMessages([...messages, message]);
    getResponse(message.body);
  };

  return (
    <div className="App">
      <MessageList messages={messages} />
      <MessageForm onMessageSend={onSendMessage} />
    </div>
  );
}

export default App;
