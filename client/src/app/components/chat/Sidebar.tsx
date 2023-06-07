import React from "react";
import ChatHead from "./ChatHead";

const Sidebar = () => {
  return (
    <div className="flex flex-col justify-start w-1/4 gap-5 p-2 rounded-md ">
      <h1 className="text-xl font-bold">Active Brooms 🟢</h1>
      <div className="border-[1px] rounded-full">
        <input
          type="text"
          className="h-10 bg-transparent outline-none indent-2"
          placeholder="Search for rooms..."
        />
      </div>
      <ChatHead image="/diwash.jpg" head="Internsathi" body="sir sorry" />
      <ChatHead image="/diwash.jpg" head="Subhakaarya" body="kaa kaa" />
      <ChatHead image="/diwash.jpg" head="MMC Techies" body="hello" />
    </div>
  );
};

export default Sidebar;
