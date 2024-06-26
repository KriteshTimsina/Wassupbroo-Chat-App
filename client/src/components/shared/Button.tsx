import React from "react";

const Button = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex justify-center items-center w-40">
      <div className="inline-flex relative group">
        <div className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#3ae095] via-[#2720f7] to-[#5eccff] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
        <button
          title="Join"
          className="inline-flex relative justify-center items-center px-8 py-4 text-lg font-bold text-white bg-gray-900 rounded-xl transition-all duration-200 font-pj focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-gray-900"
          type="submit"
        >
          {children}
        </button>
      </div>
    </div>
  );
};

export default Button;
