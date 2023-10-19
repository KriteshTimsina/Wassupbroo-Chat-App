import React from "react";
import Image from "next/image";
import ThemeToggle from "../theme-provider/ThemeToggle";

const Header = () => {
  return (
    <div className="ml-10 flex justify-between items-center px-5">
      <Image src="/wassup-logo.png" alt="Brand Logo" width={80} height={80} />
      <ThemeToggle />
    </div>
  );
};

export default Header;
