import RoomProvider from "@/contexts/RoomContext";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Chats(0)",
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
      <RoomProvider>
        <body className={`${inter.className} `}>{children}</body>
      </RoomProvider>
    </html>
  );
}
