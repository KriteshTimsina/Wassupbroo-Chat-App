"use client";
import React from "react";
import ChatHead from "./ChatHead";
import { useRoom } from "@/contexts/RoomContext";
import IRoom from "@/interfaces/interface";
import { RxCross2 } from "react-icons/rx";
const Sidebar = () => {
  const { rooms, expandSidebar, handleSidebarPosition } = useRoom();
  return (
    <div
      className={`${
        expandSidebar
          ? "animate-slide w-full flex bg-slate-100/50 "
          : "w-0 hidden"
      }  md:flex flex-col justify-start md:w-1/4 h-screen gap-5 p-2 pt-5 rounded-md  bg-slate-100 relative `}
    >
      <div className="">
        {expandSidebar && (
          <RxCross2
            onClick={handleSidebarPosition}
            size={30}
            className="absolute cursor-pointer text-secondary right-1"
          />
        )}
        <h1 className="text-xl font-bold">Active rooms 🟢</h1>
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
