"use client";

import { useSocket } from "@/contexts/SocketContext";
import { MdOutlineAttachment, MdOutlineEmojiEmotions } from "react-icons/md";
import { TbSend } from "react-icons/tb";
import { AiFillLike } from "react-icons/ai";

import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'
import { useState } from "react";

const MessageBox = () => {
  const { message, handleSetMessage, handleSendMessage, sendThumpsUp } =
    useSocket();
  const [emojiPickerVisible, setEmojiPickerVisible] = useState(false);

  const handleEmojiSelect = (emoji: any) => {
    message.text += emoji.native;
    handleSetMessage({ target: { name: "text", value: message.text } });
  };

  const handleEmojiPickerVisible = () => {
    setEmojiPickerVisible(!emojiPickerVisible);
  };

  return (
    <div className="h-[10%] flex items-center gap-3 px-2 md:px-10 ">
      <MdOutlineEmojiEmotions
        size={30}
        title="emoji"
        className="cursor-pointer text-shaded hover:text-black"
        onClick={handleEmojiPickerVisible}
      />
      {emojiPickerVisible && 
      <div className="z-10" id="emojiPicker"
      style={
        {
          position: 'absolute',
          top: '59%',
          zIndex: 1
        }
      }>
        <Picker 
          data={data} 
          onEmojiSelect={handleEmojiSelect}
          onClickOutside={handleEmojiPickerVisible}
          theme="light"
        /> 
      </div>}

      <label className="flex flex-col items-center justify-center ">
        <MdOutlineAttachment
          size={30}
          title="attach"
          className="-rotate-45 cursor-pointer text-shaded hover:text-black"
        />
        <input id="" type="file" className="hidden" />
      </label>

      <form
        onSubmit={handleSendMessage}
        className="flex items-center w-full rounded-full "
      >
        <input
          value={message.text}
          onChange={handleSetMessage}
          name="text"
          type="text"
          className="w-full h-10 text-lg border-none rounded-full outline-none indent-2 bg-slate-100 "
          id="messageBox"
          placeholder="Aa"
        />

        {message.text.length === 0 ? (
          <AiFillLike
            onClick={sendThumpsUp}
            title="Thumbs up "
            size={30}
            className="cursor-pointer text-shaded hover:text-red-black"
          />
        ) : (
          <button type="submit">
            <TbSend
              title="send"
              size={30}
              className="cursor-pointer text-shaded hover:text-black"
            />
          </button>
        )}
      </form>
    </div>
  );
};

export default MessageBox;
