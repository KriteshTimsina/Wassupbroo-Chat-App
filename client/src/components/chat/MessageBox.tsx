"use client";

import { useSocket } from "@/contexts/SocketContext";
import { MdOutlineAttachment, MdOutlineEmojiEmotions } from "react-icons/md";
import { TbSend } from "react-icons/tb";
import { AiFillLike } from "react-icons/ai";
import { useTheme } from "next-themes";

import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import { useState } from "react";

const MessageBox = () => {
  const {
    message,
    handleSetMessage,
    handleSendMessage,
    sendThumpsUp,
    sendImage,
  } = useSocket();
  const [emojiPickerVisible, setEmojiPickerVisible] = useState(false);
  const { resolvedTheme } = useTheme();

  const handleEmojiSelect = (emoji: any) => {
    message.text += emoji.native;
    handleSetMessage({ target: { name: "text", value: message.text } });
  };

  const handleEmojiPickerVisible = () => {
    setEmojiPickerVisible(!emojiPickerVisible);
  };

  return (
    <div className="h-[10%] flex items-center gap-3 px-2 md:px-10 relative ">
      <MdOutlineEmojiEmotions
        size={30}
        title="emoji"
        className="cursor-pointer text-shaded dark:hover:text-white hover:text-black"
        onClick={handleEmojiPickerVisible}
      />
      {emojiPickerVisible && (
        <div
          className="absolute left-0 bottom-full z-10 mr-2 mb-2"
          style={{ maxHeight: "400px", overflowY: "hidden" }}
        >
          <Picker
            data={data}
            onEmojiSelect={handleEmojiSelect}
            onClickOutside={handleEmojiPickerVisible}
            previewPosition="none"
            theme={resolvedTheme}
          />
        </div>
      )}

      <label className="flex flex-col justify-center items-center">
        <MdOutlineAttachment
          size={30}
          title="attach"
          className="-rotate-45 cursor-pointer text-shaded dark:hover:text-white hover:text-black"
        />
        <input
          id="file"
          name="file"
          type="file"
          accept="image/gif, image/jpeg, image/png"
          className="hidden"
          onChange={(e: any) => {
            const file = e.target.files[0];
            console.log(file, "H");
            if (file) {
              const reader = new FileReader();
              reader.onloadend = () => {
                sendImage(reader.result);
              };
              reader.readAsDataURL(file);
            }
          }}
        />
      </label>

      <form
        onSubmit={handleSendMessage}
        className="flex items-center w-full rounded-full"
      >
        <input
          value={message.text}
          onChange={handleSetMessage}
          name="text"
          type="text"
          className="w-full h-10 text-lg rounded-full border-none outline-none indent-2 bg-slate-100 dark:bg-slate-900"
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
              className="cursor-pointer text-shaded hover:text-black dark:hover:text-white"
            />
          </button>
        )}
      </form>
    </div>
  );
};

export default MessageBox;
