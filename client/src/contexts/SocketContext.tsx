"use client";
import { createContext, useState, useContext, useEffect, useRef } from "react";
import * as socketIO from "socket.io-client";
import { IMessage } from "@/interfaces/interface";
import { useRoom } from "./RoomContext";
import useSound from "use-sound";
import { useRouter } from "next/navigation";
import messageSent from "../../public/sent.mp3";
import { BASE_URL } from "@/utils/constants";

export const SocketContext = createContext<any>(null);

function SocketProvider({ children }: { children: JSX.Element }) {
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [message, setMessage] = useState({
    text: "",
  });
  const { room } = useRoom();
  const router = useRouter();
  const [playSound] = useSound(messageSent, { volume: 0.8 });
  const [socket, setSocket] = useState<socketIO.Socket>();

  const handleSendMessage = (e: any) => {
    e.preventDefault();
    playSound();
    if (message.text.trim()) {
      socket?.emit("message", {
        text: message.text,
        id: `${socket.id}${Math.random()}`,
        room: room.room,
        socketID: socket.id,
        username: room.username,
        time: new Date().toLocaleString(navigator.language, {
          hour: "2-digit",
          minute: "2-digit",
          hourCycle: "h12",
        }),
      });
    }
    setMessage({ text: "" });
  };
  //onchange on message input
  function handleSetMessage(e: any) {
    const { name, value } = e.target;
    setMessage((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }
  function sendThumpsUp() {
    socket?.emit("message", {
      text: "👍",
      id: `${socket.id}${Math.random()}`,
      socketID: socket.id,
      room: room.room,
      username: room.username,
      time: new Date().toLocaleString(navigator.language, {
        hour: "2-digit",
        minute: "2-digit",
        hourCycle: "h12",
      }),
    });
  }

  useEffect(() => {
    if (!room.username) {
      router.replace("/");
      return;
    }
    const socket = socketIO.connect(BASE_URL);
    setSocket(socket);
  }, []);

  useEffect(() => {
    socket?.on("messageResponse", (data: any) => {
      setMessages([...messages, data]);
    });
  }, [socket, messages]);

  return (
    <SocketContext.Provider
      value={{
        socket,
        messages,
        setMessages,
        message,
        setMessage,
        handleSetMessage,
        handleSendMessage,
        sendThumpsUp,
      }}
    >
      {children}
    </SocketContext.Provider>
  );
}

export default SocketProvider;
export const useSocket = () => useContext(SocketContext);
