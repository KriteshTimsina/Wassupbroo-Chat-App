"use client";
import IRoom from "@/interfaces/interface";
import { BASE_URL } from "@/utils/constants";

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
  });

  async function getAllRooms() {
    const res = await fetch(BASE_URL + "/rooms");
    const rooms = await res.json();
    setRooms(rooms.room);
  }
  function handleRoomNameChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setRoom((prevData) => ({
      ...prevData,
      [name]: value,
    }));
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
      }}
    >
      {children}
    </RoomContext.Provider>
  );
}

export default RoomProvider;
export const useRoom = () => useContext(RoomContext);
