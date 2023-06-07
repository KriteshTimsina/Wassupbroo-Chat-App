import React from "react";
import Image from "next/image";
const Header = () => {
  return (
    <div className="ml-10 ">
      <Image src="/wassup-logo.png" alt="Brand Logo" width={80} height={80} />
    </div>
  );
};

export default Header;
