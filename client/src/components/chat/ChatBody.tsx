import { useSocket } from "@/contexts/SocketContext";
import { IMessage } from "@/interfaces/interface";
import React from "react";

const ChatBody = () => {
  const { messages } = useSocket();

  return (
    <div className="flex flex-col gap-5 p-5 overflow-y-scroll h-3/4">
      {messages.map((message: IMessage) => {
        return (
          <div key={message.id} className="flex items-center gap-5">
            <img
              className="w-10 h-10 rounded-full"
              src="/diwash.jpg"
              alt={message.id}
            />
            <h2 className="p-2 bg-slate-100">{message.text}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default ChatBody;
