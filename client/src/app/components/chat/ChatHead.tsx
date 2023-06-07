import React from "react";

const ChatHead = ({
  image,
  head,
  body,
}: {
  image: string;
  head: string;
  body: string;
}) => {
  return (
    <div className="flex items-center gap-2 cursor-pointer hover:bg-slate-100">
      <img src={image} alt="" className="w-10 h-10 bg-red-600 rounded-full" />
      <div className="flex flex-col items-start">
        <h2 className="font-semibold text-secondary">{head}</h2>
        <p className="text-gray-500">{body}</p>
      </div>
    </div>
  );
};

export default ChatHead;
