import "./globals.css";
import { Inter } from "next/font/google";
import Image from "next/image";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Wassup",
  description: "Whatsapp- but for bros",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} `}>
        <div className="mt-2 ml-10">
          <Image
            src="/wassup-logo.png"
            alt="Brand Logo"
            width={80}
            height={80}
          />
        </div>
        {children}
      </body>
    </html>
  );
}
