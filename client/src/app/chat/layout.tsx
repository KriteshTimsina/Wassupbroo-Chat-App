"use client";
import SocketProvider from "@/contexts/SocketContext";
import Sidebar from "../../components/shared/sidebar/Sidebar";
import { useEffect } from "react";
import { useRoom } from "@/contexts/RoomContext";
import { useRouter } from "next/navigation";

export default function ChatLayout({
  children, // will be a page or nested layout
}: {
  children: React.JSX.Element;
}) {
  const { rooms } = useRoom();
  const router = useRouter();
  useEffect(() => {
    if (!rooms) {
      router.replace("/");
      return;
    }
  }, []);
  return (
    <section className="flex">
      <Sidebar />
      <SocketProvider>{children}</SocketProvider>
    </section>
  );
}
