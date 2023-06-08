import RoomProvider from "@/contexts/RoomContext";
import "./globals.css";
import { Inter } from "next/font/google";
import SocketProvider from "@/contexts/SocketContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Wassup",
  description: "Whatsapp- but for bros",
  icons: { icon: "wassup-logo.png" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <SocketProvider>
        <RoomProvider>
          <body className={`${inter.className} `}>{children}</body>
        </RoomProvider>
      </SocketProvider>
    </html>
  );
}
