import { useRoom } from "@/contexts/RoomContext";
import React from "react";
import { BsBell } from "react-icons/bs";
import { RiDeleteBack2Line } from "react-icons/ri";
import ChatHead from "../shared/sidebar/ChatHead";
import Link from "next/link";

const Head = () => {
  const { room } = useRoom();
  return (
    <div className=" h-[15%] flex items-center px-2 justify-between">
      <ChatHead room={room} recentMessage="" />
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
