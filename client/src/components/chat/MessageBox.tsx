import React from "react";
import {
  MdKeyboardVoice,
  MdOutlineAttachment,
  MdOutlineEmojiEmotions,
} from "react-icons/md";
import { TbSend } from "react-icons/tb";
const MessageBox = () => {
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
      <div className="w-full rounded-full ">
        <input
          type="text"
          className="w-full h-10 text-lg border-none rounded-full outline-none indent-2 bg-slate-100 "
          placeholder="Aa"
        />
      </div>
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
