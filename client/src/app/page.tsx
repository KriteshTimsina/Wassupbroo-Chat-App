"use client";
import Image from "next/image";
import { TbHandRock } from "react-icons/tb";
import { MdOutlineHandshake } from "react-icons/md";
import { LuHeartHandshake } from "react-icons/lu";
import { AiOutlineWhatsApp } from "react-icons/ai";
// import { ChangeEvent, useState } from "react";

export default function Home() {
  // const [image, setImage] = useState<any>();

  // const handleFileChange = (e: ChangeEvent<HTMLInputElement>): void => {
  //   setImage(URL.createObjectURL(e.target.files![0]));
  // };

  return (
    <main className=" flex items-center justify-between h-[calc(100vh-4.4rem)] ml-10">
      <div className="">
        <h1 className="w-[500px] italic font-semibold text-transparent text-7xl bg-clip-text bg-gradient-to-r from-green-400 via-cyan-900 to-blue-500">
          Wassup
        </h1>

        <div className="flex flex-col gap-3 pl-3 text-3xl">
          <h1>
            Whatsapp for <span>Bros</span>
          </h1>
          <div className="p-2 text-lg text-center text-white w-fit rounded-xl bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-500">
            <button>Join Broom-room for bros</button>
          </div>
        </div>
      </div>
      <div>
        <Image src="/landing-image.gif" alt="Wassup" width={500} height={500} />
      </div>
    </main>
  );
}
{
  /* <input type="file" accept="image/*" onChange={handleFileChange} />
<Image src={image} alt="image" width={50} height={50} /> */
}
