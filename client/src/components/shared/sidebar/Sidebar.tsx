"use client";
import React from "react";
import ChatHead from "./ChatHead";
import Link from "next/link";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useRoom } from "@/contexts/RoomContext";
import IRoom from "@/interfaces/interface";

const Sidebar = () => {
  const { rooms } = useRoom();
  return (
    <div className="flex flex-col justify-start w-1/4 h-screen gap-5 p-2 rounded-md bg-slate-100">
      <div>
        <Link href="/">
          <IoIosArrowRoundBack size={30} className="text-secondary" />
        </Link>
        <h1 className="text-xl font-bold">Active Brooms 🟢</h1>
      </div>
      <div className="border-[1px] rounded-full border-shaded">
        <input
          type="text"
          className="h-10 bg-transparent outline-none indent-2"
          placeholder="Search for rooms..."
        />
      </div>
      {rooms &&
        rooms.map((room: IRoom) => (
          <ChatHead
            key={room.roomId}
            room={room}
            recentMessage="recent message"
          />
        ))}
    </div>
  );
};

export default Sidebar;
