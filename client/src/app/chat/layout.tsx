import SocketProvider from "@/contexts/SocketContext";
import Sidebar from "../../components/shared/sidebar/Sidebar";

export const metadata = {
  title: "Rooms",
};

export default function ChatLayout({
  children, // will be a page or nested layout
}: {
  children: React.JSX.Element;
}) {
  return (
    <section className="flex">
      <Sidebar />
      <SocketProvider>{children}</SocketProvider>
    </section>
  );
}
