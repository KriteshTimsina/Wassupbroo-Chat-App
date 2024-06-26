import { useRoom } from "@/contexts/RoomContext";
import { useSocket } from "@/contexts/SocketContext";
import { IMessage } from "@/interfaces/interface";
import { useEffect, useRef } from "react";

const ChatBody = () => {
  const { messages} = useSocket();
  const { room } = useRoom();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  if (messages.length === 0) {
    return (
      <div className="flex items-center justify-center h-3/4">Start chat.</div>
    );
  }
  return (
    <div className="flex flex-col gap-5 p-5 overflow-y-scroll h-3/4">
      {messages.map((message: IMessage) => {
        return (
          <div className="w-full " key={message.id}>
            <div key={message.id} className="flex items-center gap-5 ">
              {message.type === "join" ? (
                <p className="flex items-center justify-center w-full">{message.username} has joined the room.</p>
              ) : (
                <>
                  {message.type === "image" ?
                    message.username === room.username ? (
                      <div className="flex items-center justify-end w-full gap-2">
                        <div className="flex flex-col" style={{maxWidth: '250px'}}>
                        <img
                            src={message.text}
                            max-width='46px'
                            height='32px'
                          />
                          <h4 className="text-sm text-shaded">{message.time}</h4>
                        </div>
                        <div className="flex items-center justify-center w-10 h-10 text-white uppercase rounded-full bg-secondary">
                          {room.username ? room.username[0] : "NN"}
                        </div>
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <div className="flex items-center justify-center w-10 h-10 text-white uppercase rounded-full bg-secondary">
                          {message.username ? message.username[0] : "NN"}
                        </div>
                        <div className="flex flex-col" style={{maxWidth: '250px'}}>
                        <img
                            src={message.text}
                            max-width='46px'
                            height='32px'
                          />
                          <h4 className="text-sm text-shaded">{message.time}</h4>
                        </div>
                      </div>)
                    : message.username === room.username ? (
                      <div className="flex items-center justify-end w-full gap-2">
                        <div className="flex flex-col">
                          <h2 className="p-2 bg-[#4c7dff] text-white rounded-lg rounded-br-none">
                            {message.text}
                          </h2>
                          <h4 className="text-sm text-shaded">{message.time}</h4>
                        </div>
                        <div className="flex items-center justify-center w-10 h-10 text-white uppercase rounded-full bg-secondary">
                          {room.username ? room.username[0] : "NN"}
                        </div>
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <div className="flex items-center justify-center w-10 h-10 text-white uppercase rounded-full bg-secondary">
                          {message.username ? message.username[0] : "NN"}
                        </div>
                        <div className="flex flex-col ">
                          <h2 className="p-2 rounded-lg rounded-bl-none bg-slate-100">
                            {message.text}
                          </h2>
                          <h4 className="text-sm text-shaded">{message.time}</h4>
                        </div>
                      </div>
                    )}
                </>
              )}
            </div>
            <div ref={ref}></div>
          </div>
        );
      })}
    </div>
  );
};

export default ChatBody;
