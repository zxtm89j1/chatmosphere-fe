import React from "react";
import mainStyles from "../../public/assets/styles/mainStyles";
import Image from "next/image";

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
        <div className="bg-white border-1 border-[#9966CC] rounded-md px-6 py-4 flex gap-10 justify-center min-w-sm">
          <Image
            src="/assets/images/message.png"
            width={20}
            height={20}
            alt="message-exchange"
          />
          <div>Real-Time Messaging</div>
        </div>

        <div className="bg-white border-1 border-[#9966CC] rounded-md px-6 py-4 flex gap-10 justify-center min-w-sm">
          <Image
            src="/assets/images/group-icon.png"
            width={20}
            height={20}
            alt="message-exchange"
          />
          <div>Group Chats</div>
        </div>

        <div className="bg-white border-1 border-[#9966CC] rounded-md px-6 py-4 flex gap-10 justify-center min-w-sm">
          <Image
            src="/assets/images/bell.png"
            width={20}
            height={20}
            alt="message-exchange"
          />
          <div>Notifications</div>
        </div>
      </div>
    </div>
  );
}
