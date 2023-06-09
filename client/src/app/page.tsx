"use client";
import Image from "next/image";
import { TbHandRock } from "react-icons/tb";
import { MdOutlineHandshake } from "react-icons/md";
import { LuHeartHandshake } from "react-icons/lu";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { BiCircleThreeQuarter } from "react-icons/bi";
import Header from "../components/home/Header";
import { useRoom } from "@/contexts/RoomContext";
import { useEffect, useRef } from "react";
import { useSocket } from "@/contexts/SocketContext";

export default function Home() {
  const {
    handleRoomNameChange,
    room,
    setRoom,
    goToChat,
    error,
    loading,
    setLoading,
    setError,
  } = useRoom();
  useEffect(() => {
    setRoom({
      room: "",
    });
    setLoading(false);
    setError(false);
  }, []);

  return (
    <div className="h-screen ">
      <Header />
      <main className="flex flex-col items-center justify-between px-10 lg:flex-row">
        <div className="flex flex-col justify-start mt-10 md:mt-0">
          <div className="flex items-center">
            <h1 className="italic font-semibold text-transparent w-[290px]  text-5xl md:text-7xl bg-clip-text bg-gradient-to-r from-green-400 via-cyan-900 to-blue-500">
              Wassup
            </h1>
            <Image
              className="h=[80px] sm:h-[110px] w-[110px] sm:w-[200px] object-cover pointer-events-none "
              src="/fist.gif"
              alt="Fist"
              width={200}
              height={100}
            />
          </div>

          <div className="flex flex-col justify-start gap-3 pl-3 text-3xl">
            <h1>
              Whatsapp for <span>Bros</span>
            </h1>

            <form onSubmit={goToChat} className="flex flex-col gap-3 text-base">
              <div className="ml-1">
                <input
                  value={room.room}
                  onChange={handleRoomNameChange}
                  name="room"
                  className={`${
                    error
                      ? "placeholder:text-red-600 animate-pulse]"
                      : "placeholder:text-primary"
                  } border-none outline-none  caret-primary`}
                  type="text"
                  placeholder="Enter a room name..."
                />
              </div>
              <div className="ml-1">
                <input
                  value={room.username}
                  onChange={handleRoomNameChange}
                  name="username"
                  className={`${
                    error
                      ? "placeholder:text-red-600 animate-pulse]"
                      : "placeholder:text-primary"
                  } border-none outline-none  caret-primary`}
                  type="text"
                  placeholder="Enter username..."
                />
              </div>
              <div className="p-2 text-lg text-center text-white transition-transform w-fit rounded-xl bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-500 hover:scale-105">
                <button type="submit">
                  {loading ? (
                    <div className="flex items-center justify-center w-[210px]">
                      <BiCircleThreeQuarter
                        className={`${loading && "animate-spin text-white"}`}
                        size={20}
                      />
                      <p>broooo...</p>
                    </div>
                  ) : (
                    <p>Join Broom-room for bros</p>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
        <div>
          <Image src="/bros.gif" alt="Wassup" width={500} height={500} />
        </div>
      </main>
    </div>
  );
}
{
  /* <input type="file" accept="image/*" onChange={handleFileChange} />
<Image src={image} alt="image" width={50} height={50} /> */
}
