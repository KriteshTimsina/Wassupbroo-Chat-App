"use client";
import Image from "next/image";

import Header from "../components/home/Header";

import Form from "@/components/home/Form";
import Layers from "@/components/home/Layers";

export default function Home() {
  return (
    <div className="h-screen">
      <Header />
      <main className="flex flex-col justify-between items-center px-10 lg:flex-row">
        <div className="flex flex-col justify-start mt-10 md:mt-0">
          <div className="flex items-center">
            <h1 className="italic font-semibold text-transparent w-[290px]  text-5xl md:text-7xl bg-clip-text bg-gradient-to-r from-green-400 via-cyan-900 to-blue-500">
              Wassup
            </h1>
            <Image
              className="invisible lg:visible h-[80px] sm:h-[110px] w-[110px] sm:w-[200px] object-cover pointer-events-none "
              src="/fist.gif"
              alt="Fist"
              width={200}
              height={100}
            />
          </div>

          <div className="flex flex-col gap-3 justify-start pl-3 text-3xl">
            <h1>
              Whatsapp for <span>Bros</span>
            </h1>
            <Form />
          </div>
        </div>
        <div>
          <Image
            className="hidden dark:block"
            src="/landingdark.png"
            alt="Wassup"
            width={500}
            height={500}
          />
          <Image
            className="block dark:hidden"
            src="/landing.gif"
            alt="Wassup"
            width={500}
            height={500}
          />
        </div>
      </main>
      <section className="absolute right-0 left-0 -bottom-10 -z-10">
        <Layers />
      </section>
    </div>
  );
}
