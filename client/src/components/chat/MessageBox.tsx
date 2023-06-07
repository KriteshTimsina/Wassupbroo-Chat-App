"use client";

import { useSocket } from "@/contexts/SocketContext";
import React, { useState } from "react";
import {
  MdKeyboardVoice,
  MdOutlineAttachment,
  MdOutlineEmojiEmotions,
} from "react-icons/md";
import { TbSend } from "react-icons/tb";

const MessageBox = () => {
  const { message, handleSetMessage, handleSendMessage } = useSocket();

  return (
    <div className="h-[10%] flex items-center gap-3 px-5">
      <MdOutlineEmojiEmotions
        size={30}
        title="emoji"
        className="cursor-pointer text-shaded hover:text-black"
      />
      <MdOutlineAttachment
        size={30}
        title="attach"
        className="-rotate-45 cursor-pointer text-shaded hover:text-black"
      />
      <form onSubmit={handleSendMessage} className="w-full rounded-full ">
        <input
          value={message.text}
          onChange={handleSetMessage}
          name="text"
          type="text"
          className="w-full h-10 text-lg border-none rounded-full outline-none indent-2 bg-slate-100 "
          placeholder="Aa"
        />
        <button type="submit">go</button>
      </form>
      {/* <TbSend title="send" size={30} className="cursor-pointer text-shaded hover:text-black" /> */}
      <MdKeyboardVoice
        title="hold to record "
        size={30}
        className="cursor-pointer text-shaded hover:text-black"
      />
    </div>
  );
};

export default MessageBox;
