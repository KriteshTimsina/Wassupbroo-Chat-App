"use client";
import { useRoom } from "@/contexts/RoomContext";
import Message from "../../components/chat/Message";

const page = () => {
  const { expandSidebar } = useRoom();

  return (
    <div className={`${expandSidebar ? "hidden" : "w-full "}`}>
      <Message />
    </div>
  );
};

export default page;
