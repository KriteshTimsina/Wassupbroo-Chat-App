"use client";
import { useRoom } from "@/contexts/RoomContext";
import Message from "../../components/chat/Message";
import { useEffect } from "react";
import { useSocket } from "@/contexts/SocketContext";

const page = () => {
  const { expandSidebar, room } = useRoom();
  const { socket } = useSocket();

  return (
    <div className={`${expandSidebar ? "hidden" : "w-full "}`}>
      <Message />
    </div>
  );
};

export default page;
