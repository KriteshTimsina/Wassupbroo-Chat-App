"use client";
import { useRoom } from "@/contexts/RoomContext";
import React from "react";
import { BsBell } from "react-icons/bs";
import { RiDeleteBack2Line } from "react-icons/ri";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
const Head = () => {
  const { rooms, handleSidebarPosition } = useRoom();

  return (
    rooms.length > 0 && (
      <div className=" h-[15%] flex items-center px-2 justify-between border-b-[1px] border-[#e4e4e4] shadow-lg ">
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="flex md:hidden">
            <RxHamburgerMenu size={25} onClick={handleSidebarPosition} />
          </div>
          <img
            loading="lazy"
            src={rooms[0].imageUrl}
            alt={rooms[0].roomId}
            className="w-10 h-10 rounded-full"
          />
          <div className="flex flex-col items-start">
            <h2 className="font-semibold text-secondary">{rooms[0].room}</h2>
            <p className="text-sm text-gray-500">active now</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <BsBell
            title="notifications"
            size={25}
            className="transition-colors hover:text-yellow-400"
          />
          <Link href="/">
            <RiDeleteBack2Line
              title="leave room"
              size={25}
              className="transition-colors hover:text-red-500"
            />
          </Link>
        </div>
      </div>
    )
  );
};

export default Head;
