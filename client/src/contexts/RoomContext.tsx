"use client";
import IRoom from "@/interfaces/interface";
import { BASE_URL } from "@/utils/constants";
import { useRouter } from "next/navigation";

import {
  createContext,
  useState,
  useContext,
  useEffect,
  ChangeEvent,
} from "react";

export const RoomContext = createContext<any>(null);

function RoomProvider({ children }: { children: JSX.Element }) {
  const [rooms, setRooms] = useState<IRoom[]>([]);
  const [room, setRoom] = useState<IRoom>({
    room: "",
    username: "",
  });
  const [expandSidebar, setExpandSidebar] = useState<boolean>(false);
  const router = useRouter();
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  async function getAllRooms() {
    const res = await fetch(BASE_URL + "/rooms");
    const rooms = await res.json();
    setRooms(rooms.room);
  }

  function goToChat(e: any) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      if (room.room.trim() !== "") {
        router.push("chat");
      } else {
        setLoading(false);
        setError(true);
      }
    }, 1000);
  }
  function handleRoomNameChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setRoom((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  function handleSidebarPosition() {
    setExpandSidebar(!expandSidebar);
  }

  useEffect(() => {
    getAllRooms();
  }, []);

  return (
    <RoomContext.Provider
      value={{
        rooms,
        room,
        handleRoomNameChange,
        setRoom,
        handleSidebarPosition,
        expandSidebar,
        goToChat,
        error,
        loading,
        setLoading,
        setError,
      }}
    >
      {children}
    </RoomContext.Provider>
  );
}

export default RoomProvider;
export const useRoom = () => useContext(RoomContext);
