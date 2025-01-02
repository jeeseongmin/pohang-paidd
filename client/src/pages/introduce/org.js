import React from "react";
import Subtitle from "../../components/Subtitle";
import { HiHome } from "react-icons/hi";

const Org = () => {
  return (
    <div class="px-5 2xl:px-36 xl:px-32 md:px-8 py-8 lg:py-16">
      <Subtitle text={"조직도"} />
      <div class="mt-2 w-full hidden lg:flex flex-row text-sm text-gray-400 items-center">
        <div class="mr-2">
          <HiHome size={16} />
        </div>
        Home {">"} 협회소개 {">"} 조직도
      </div>
      <div class="w-full flex flex-row justify-center items-center my-8">
        <img
          class="object-cover w-2/3"
          src="/image/intro-img3.png"
          alt="history"
        />
      </div>
    </div>
  );
};

export default Org;
