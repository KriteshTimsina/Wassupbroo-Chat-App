"use client";
import { createContext, useState, useContext, useEffect, useRef } from "react";
import socketIO from "socket.io-client";
import { IMessage } from "@/interfaces/interface";
import { useRoom } from "./RoomContext";

export const SocketContext = createContext<any>(null);

const socket = socketIO.connect("http://localhost:3001");

function SocketProvider({ children }: { children: JSX.Element }) {
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [message, setMessage] = useState({
    text: "",
  });
  const { room } = useRoom();

  const handleSendMessage = (e: any) => {
    e.preventDefault();
    if (message.text.trim()) {
      socket.emit("message", {
        text: message.text,
        id: `${socket.id}${Math.random()}`,
        room: room.room,
        socketID: socket.id,
        username: room.username,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
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
    socket.emit("message", {
      text: "👍🏿",
      id: `${socket.id}${Math.random()}`,
      socketID: socket.id,
      time:
        new Date(Date.now()).getHours() +
        ":" +
        new Date(Date.now()).getMinutes(),
    });
  }

  useEffect(() => {
    socket.on("messageResponse", (data: any) => {
      console.log("reply" + data);
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
