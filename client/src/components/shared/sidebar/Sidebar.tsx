"use client";
import React, { useState } from "react";
import ChatHead from "./ChatHead";
import { useRoom } from "@/contexts/RoomContext";
import IRoom from "@/interfaces/interface";
import { RxCross2 } from "react-icons/rx";
import { BiCommentAdd } from "react-icons/bi";
const Sidebar = () => {
  const { rooms, expandSidebar, handleSidebarPosition } = useRoom();
  const [showJoinRoom, setShowJoinRoom] = useState<boolean>(false);
  const [roomName, setRoomName] = useState<string>();

  function joinRoom(e: any) {
    e.preventDefault();
  }
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
          <ChatHead key={room.roomId} room={room} activeStatus="0 active" />
        ))}

      <button
        onClick={() => setShowJoinRoom(true)}
        className="flex items-center gap-2 p-2 font-semibold text-white rounded-md bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-500"
      >
        <p>Create or join room</p>
        <BiCommentAdd size={20} />
      </button>
      {showJoinRoom && (
        <form className="flex flex-col items-start gap-2 p-2 bg-white shadow-lg">
          <button onClick={() => setShowJoinRoom(false)} className="self-end">
            x
          </button>
          <input
            type="text"
            placeholder="Room name.."
            className="bg-gray-100 text-black border-[1px] border-[#e4e4e4] outline-none p-2 rounded-lg "
          />
          <button
            onClick={joinRoom}
            className="p-2 font-semibold text-white rounded-md bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-500"
          >
            Join room
          </button>
        </form>
      )}
    </div>
  );
};

export default Sidebar;
