"use client";
import IRoom from "@/interfaces/interface";
import * as socketIO from "socket.io-client";
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
    username: "",
  });
  const [expandSidebar, setExpandSidebar] = useState<boolean>(false);
  const router = useRouter();
  const [socket, setSocket] = useState<socketIO.Socket>();
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  function goToChat(e: SubmitEvent) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      if (room.username!.trim() !== "") {
        router.push("chat");
        socket?.emit("user_join_room", {
          text: "",
          id: `${room.room}${Math.random()}`,
          username: room.username,
          room: room.room,
          type: "join",
          time: new Date().toLocaleString(navigator.language, {
            hour: "2-digit",
            minute: "2-digit",
            hourCycle: "h12",
          }),
        });
      } else {
        setLoading(false);
        setError(true);
      }
    }, 1000);
  }

  useEffect(() => {
    const socket = socketIO.connect(BASE_URL);
    setSocket(socket);
  }, []);

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
    async function fetchData() {
      const rooms = await getAllRooms();
      setRooms(rooms);
    }
    fetchData();
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

export async function getAllRooms() {
  const res = await fetch(BASE_URL + "/rooms");
  const rooms = await res.json();
  return rooms;
}
