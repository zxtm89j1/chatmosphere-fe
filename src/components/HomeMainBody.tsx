import React from "react";
import mainStyles from "../../public/assets/styles/mainStyles";

export default function HomeMainBody() {
  return (
    <div
      className={`flex justify-center items-center w-full h-full flex-col gap-20`}
      style={{
        backgroundColor: mainStyles.mainColor,
      }}
    >
      <div className="flex flex-col justify-center items-center gap-10">
        <h1 className="text-5xl text-white font-roboto-condensed">
          Connect, Chat and Collaborate Instantly!
        </h1>
        <button
          className="text-lg text-white px-6 py-4 font-roboto-condensed rounded-lg"
          style={{ backgroundColor: "#4e4e64" }}
        >
          Sign Up Now
        </button>
      </div>

      <div className="flex justify-evenly w-full">
        <div>DIV 1</div>
        <div>DIV 2</div>
        <div>DIV 3</div>
      </div>
    </div>
  );
}
