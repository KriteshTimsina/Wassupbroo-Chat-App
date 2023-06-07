"use client";
import { createContext, useState, useContext, useEffect } from "react";
import socketIO from "socket.io-client";
export const SocketContext = createContext<any>(null);

function SocketProvider({ children }: { children: JSX.Element }) {
  const [messages, setMessages] = useState<any>([]);
  const [message, setMessage] = useState({
    text: "",
  });
  const socket = socketIO.connect("http://localhost:3001");

  const handleSendMessage = (e: any) => {
    e.preventDefault();
    if (message.text.trim()) {
      socket.emit("message", {
        text: message.text,
        id: `${socket.id}${Math.random()}`,
        socketID: socket.id,
      });
    }
    setMessage({ text: "" });
  };
  function handleSetMessage(e: any) {
    const { name, value } = e.target;
    setMessage((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  useEffect(() => {
    socket.on("messageResponse", (data: any) => {
      console.log(data);

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
      }}
    >
      {children}
    </SocketContext.Provider>
  );
}

export default SocketProvider;
export const useSocket = () => useContext(SocketContext);
