import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

export default function Home() {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* Container */}

      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-600">Hi, my Name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Ravi Teja Mekala
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I'm a Front End Developer
        </h2>
        <p className="py-4 max-w-[700px] text-[#8892b0] text-xl">
          I'm a Front End Developer who has specialized skills in creating
          outstanding digital experiences, with occasional expertise in
          designing as well. My current focus is on developing responsive
          front-end applications with the use of popular technologies such as
          React and Redux.
        </p>

        <div>
          <button className="text-white border-2 px-6 py-3 my-2 flex items-center  hover:border-pink-600 hover:bg-pink-600">
            View Work
            <span className="hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
