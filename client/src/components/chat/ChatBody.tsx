import { useSocket } from "@/contexts/SocketContext";
import React from "react";

const ChatBody = () => {
  const { messages } = useSocket();

  return <div className="bg-yellow-200 h-3/4">{JSON.stringify(messages)}</div>;
};

export default ChatBody;
