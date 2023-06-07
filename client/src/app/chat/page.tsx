"use client";
import React from "react";
import Sidebar from "../components/chat/Sidebar";
import Message from "../components/chat/Message";

const page = () => {
  return (
    <div className=" h-[calc(100vh-4.4rem)] flex">
      <Sidebar />
      <Message />
    </div>
  );
};

export default page;
