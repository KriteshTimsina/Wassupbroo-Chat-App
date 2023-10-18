import RoomProvider from "@/contexts/RoomContext";
import "./globals.css";
import { Inter } from "next/font/google";

import { ThemeProvider } from "../components/theme-provider/ThemeProvider";

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
      <RoomProvider>
        <body className={`${inter.className} `}>
          <ThemeProvider attribute="class">
            {children}
          </ThemeProvider>
        </body>
      </RoomProvider>
    </html>
  );
}
