import React from "react";
import Image from "next/image";
import ThemeToggle from "../theme-provider/ThemeToggle";

const Header = () => {
  return (
    <div className="flex justify-between items-center p-2 px-5">
      <Image src="/wassup-logo.png" alt="Brand Logo" width={200} height={120} />
      <ThemeToggle />
    </div>
  );
};

export default Header;
