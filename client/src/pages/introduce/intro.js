import React from "react";
import { HiHome } from "react-icons/hi";
import Subtitle from "../../components/Subtitle";

const Intro = () => {
	return (
		<div class="px-5 2xl:px-36 xl:px-32 md:px-8 py-8 lg:py-16">
			<Subtitle text={"인사말"} />
			<div class="mt-2 w-full hidden lg:flex flex-row text-sm text-gray-400 items-center">
				<div class="mr-2">
					<HiHome size={16} />
				</div>
				Home {">"} 협회소개 {">"} 인사말
			</div>
			<div class="py-4 lg:py-8 flex flex-col justify-center items-center">
				<img
					src="/image/Intro-img.png"
					class="w-full object-cover px-16"
					alt="Intro-img"
				/>
				<img
					src="/image/Intro-text.png"
					class="w-1/2 object-cover mt-8 lg:mt-4"
					alt="Intro-ext"
				/>
			</div>
		</div>
	);
};

export default Intro;
