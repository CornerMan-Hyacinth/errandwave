// screens/ChatScreen.js
import React, { useState } from "react";
import { GiftedChat } from "react-native-gifted-chat";

const ChatRoom = () => {
  const [messages, setMessages] = useState([]);

  const onSend = (newMessages = []) => {
    setMessages((prevMessages) => GiftedChat.append(prevMessages, newMessages));
  };

  return (
    <GiftedChat
      messages={messages}
      onSend={(newMessages) => onSend(newMessages)}
      user={{
        _id: 1,
      }}
    />
  );
};

export default ChatRoom;
