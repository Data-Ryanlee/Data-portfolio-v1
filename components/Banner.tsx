"use client";

import React from "react";
import Image from "next/image";

const Banner: React.FC<{}> = () => {
  return (
    <div className="flex flex-row items-center justify-center px-20 mt-[100px] z-[20] ">
      <div className="flex flex-col  justify-center  text-center">
        <div className="justify-center flex ">
          <Image
            priority
            src="/Me.png"
            height={250}
            width={250}
            alt="John Lee"
          />
        </div>

        <div className="flex flex-col gap-6 mt-10 cursor-pointer animate-bounce tracking-tighter text-7xl font-semibold text-white max-w-[600px] w-auto h-auto">
        <span className="text-7xl font-semibold"> Hello!</span>
          <span className="text-7xl font-semibold">I am John</span>
        </div>
        <div className="flex justify-center">
        <p className="text-3xl font-medium tracking-tighter  text-gray-300 max-w-[600px]">
            I enjoy exploring &{" "}
            <span className="text-transparent font-semibold  bg-clip-text bg-gradient-to-r from-purple-500 to-orange-400">
              working with data
            </span>
          </p>
          <Image src="/popcorn.gif" height={50} width={50} alt="Popcorn" unoptimized />
        </div>
        <br>
        </br>

        <p className="text-md text-gray-400 my-3 text-1xl max-w-[600px]">
        Accomplished Data Analyst and Scientist with a proven track record of extracting actionable insights from extensive datasets. 
        Dedicated to enhancing data-driven decision-making and optimizing operational efficiency across various organizational contexts.     
        </p>
        <br>
        </br>
        <div className="text-md flex justify-center">
          <button
            onClick={() => window.open("https://drive.google.com/file/d/10DX9tjoWlCBG17MTIXKVJBPqycK5YIAa/view?usp=sharing")} 
            className=" z-[1] padding-20 hover:bg-white rounded-3xl text-white font-semibold hover:text-black py-3 px-10 border-[0.1px] border-white hover:border-transparent mx-4">
            Resume
          </button>
          <button
            onClick={() => window.open("mailto:asdl0320@gmail.com")}
            className=" z-[1]     padding-20  hover:bg-white rounded-3xl  text-white font-semibold hover:text-black py-3 px-10  border-[0.1px] border-white hover:border-transparent ">
            Contact Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;

