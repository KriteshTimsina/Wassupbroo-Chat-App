import { useRoom } from "@/contexts/RoomContext";
import React from "react";
import { BsBell } from "react-icons/bs";
import { RiDeleteBack2Line } from "react-icons/ri";
import ChatHead from "../shared/sidebar/ChatHead";
import Link from "next/link";

const Head = () => {
  const { room } = useRoom();
  return (
    <div className=" h-[15%] flex items-center px-2 justify-between border-b-[1px] border-[#e4e4e4] shadow-lg">
      {/* <ChatHead room={room} recentMessage="" /> */}
      <div className="flex items-center gap-2 cursor-pointer hover:bg-slate-200">
        <img
          src={"/diwash.jpg"}
          alt={room.roomId}
          className="w-10 h-10 bg-red-600 rounded-full"
        />
        <div className="flex flex-col items-start">
          <h2 className="font-semibold text-secondary">{room.room}</h2>
          <p className="text-sm text-gray-500">active now</p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <BsBell
          title="notifications"
          size={30}
          className="transition-colors hover:text-yellow-400"
        />
        <Link href="/">
          <RiDeleteBack2Line
            title="leave room"
            size={30}
            className="transition-colors hover:text-red-500"
          />
        </Link>
      </div>
    </div>
  );
};

export default Head;
