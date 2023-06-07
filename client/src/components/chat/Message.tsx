import React from "react";
import Head from "./Head";
import ChatBody from "./ChatBody";
import MessageBox from "./MessageBox";

const Message = () => {
  return (
    <div className="h-screen">
      <Head />
      <ChatBody />
      <MessageBox />
    </div>
  );
};

export default Message;
