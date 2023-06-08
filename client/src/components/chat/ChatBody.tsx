import { useRoom } from "@/contexts/RoomContext";
import { useSocket } from "@/contexts/SocketContext";
import { IMessage } from "@/interfaces/interface";
import ScrollToBottom from "react-scroll-to-bottom";
const ChatBody = () => {
  const { messages } = useSocket();
  const { room } = useRoom();

  return (
    <ScrollToBottom className="h-3/4">
      <div className="flex flex-col gap-5 p-5 ">
        {messages.map((message: IMessage) => {
          return (
            <div className="w-full ">
              <div key={message.id} className="flex items-center gap-5 ">
                {message.username === room.username ? (
                  <div className="flex items-center justify-end w-full gap-2">
                    <div className="flex flex-col">
                      <h2 className="p-2 bg-[#4c7dff] text-white">
                        {message.text}
                      </h2>
                      <h4 className="text-sm text-shaded">{message.time}</h4>
                    </div>
                    <img
                      className="w-10 h-10 rounded-full"
                      src="/diwash.jpg"
                      alt={message.id}
                    />
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <img
                      className="w-10 h-10 rounded-full"
                      src="/diwash.jpg"
                      alt={message.id}
                    />
                    <div className="flex flex-col ">
                      <h2 className="p-2 bg-slate-100">{message.text}</h2>
                      <h4 className="text-sm text-shaded">{message.time}</h4>
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </ScrollToBottom>
  );
};

export default ChatBody;
