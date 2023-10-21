"use client";
import React from "react";
import { useRoom } from "@/contexts/RoomContext";
import { useEffect } from "react";
import { BiCircleThreeQuarter } from "react-icons/bi";

const Form = () => {
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
      username: "",
    });
    setLoading(false);
    setError(false);
  }, []);
  return (
    <form onSubmit={goToChat} className="flex flex-col gap-3 text-base">
      <div className="ml-1">
        <input
          value={room.username}
          onChange={handleRoomNameChange}
          name="username"
          className={` focus:outline-primary focus:outline-[1px] ${
            error
              ? "placeholder:text-red-600 animate-pulse]"
              : "placeholder:text-primary"
          }  dark:outline-none p-2 rounded-full  caret-primary`}
          type="text"
          placeholder="Enter username..."
        />
      </div>
      <div className="flex gap-5 items-center ">
        <button
          type="submit"
          className="rounded-full p-2 text-white flex justify-center items-center w-40 bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-500"
        >
          {loading ? (
            <BiCircleThreeQuarter className="animate-spin" color="white" size={20} />
          ) : (
            "Join a chat"
          )}
        </button>
      </div>
    </form>
  );
};

export default Form;
