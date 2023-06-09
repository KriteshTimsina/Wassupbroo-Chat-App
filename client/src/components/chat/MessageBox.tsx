"use client";

import { useSocket } from "@/contexts/SocketContext";
import { MdOutlineAttachment, MdOutlineEmojiEmotions } from "react-icons/md";
import { TbSend } from "react-icons/tb";
import { AiFillLike } from "react-icons/ai";

const MessageBox = () => {
  const { message, handleSetMessage, handleSendMessage, ref, sendThumpsUp } =
    useSocket();

  return (
    <div className="h-[10%] flex items-center gap-3 px-2 md:px-10 ">
      <MdOutlineEmojiEmotions
        size={30}
        title="emoji"
        className="cursor-pointer text-shaded hover:text-black"
      />

      <label className="flex flex-col items-center justify-center ">
        <MdOutlineAttachment
          size={30}
          title="attach"
          className="-rotate-45 cursor-pointer text-shaded hover:text-black"
        />
        <input id="dropzone-file" type="file" className="hidden" />
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
