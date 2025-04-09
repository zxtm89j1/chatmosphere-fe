import React from "react";
import Image from "next/image";
import mainStyles from "../../public/assets/styles/mainStyles";
mainStyles;

function Navbar() {
  return (
    <div className="flex justify-between px-5 py-5 items-center">
      <div className="flex items-center gap-5">
        <Image
          src="/assets/images/logo.svg"
          width={45}
          height={45}
          alt="Chatmosphere logo"
        />
        <div
          className={`font-roboto-condensed text-2xl font-bold text-[${mainStyles.mainColor}]`}
        >
          CHATmosphere
        </div>
      </div>

      <div className="flex gap-5 items-center">
        <button
          className={`border-1 border-solid px-4 py-2 rounded-md border-[#cccdcd] text-[#2d172f] ${mainStyles.mainFont}`}
        >
          Sign Up
        </button>
        <button
          className={`border-1 border-solid px-4 py-2 rounded-md border-[#cccdcd] text-[#2d172f] ${mainStyles.mainFont}`}
        >
          Log In
        </button>
      </div>
    </div>
  );
}

export default Navbar;
