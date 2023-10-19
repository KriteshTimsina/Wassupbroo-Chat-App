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
          className={`focus:border-primary focus:border-[1px] ${
            error
              ? "placeholder:text-red-600 animate-pulse]"
              : "placeholder:text-primary"
          } outline dark:outline-none p-2 rounded-full  caret-primary`}
          type="text"
          placeholder="Enter username..."
        />
      </div>
      <div className="p-2 text-lg text-center text-white transition-transform rounded-lg w-fit bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-500">
        <button type="submit">
          {loading ? (
            <div className="flex items-center justify-center w-[100px]">
              <BiCircleThreeQuarter
                className={`${loading && "animate-spin text-white"}`}
                size={20}
              />
            </div>
          ) : (
            <p>Join a chat</p>
          )}
        </button>
      </div>
    </form>
  );
};

export default Form;
