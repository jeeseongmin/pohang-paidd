import React from "react";
import Subtitle from "../../components/Subtitle";
import { HiHome } from "react-icons/hi";

const History = () => {
  return (
    <div class="px-5 2xl:px-36 xl:px-32 md:px-8 py-8 lg:py-16">
      <Subtitle text={"연혁"} />
      <div class="mt-2 w-full hidden lg:flex flex-row text-sm text-gray-400 items-center">
        <div class="mr-2">
          <HiHome size={16} />
        </div>
        Home {">"} 협회소개 {">"} 연혁
      </div>
      <div class="flex flex-col justify-center items-center my-8">
        <div class="w-full flex flex-row justify-center">
          <img
            src="/image/intro-img2.png"
            alt="history"
            class="w-full mx-8 md:w-2/3 md:mx-0 lg:w-1/2"
          />
        </div>
      </div>
    </div>
  );
};

export default History;
