import React from "react";
import Subtitle from "../../components/Subtitle";
import { HiHome } from "react-icons/hi";

const purpose = () => {
	return (
		<>
			<div class="px-5 2xl:px-36 xl:px-32 md:px-8 pt-8 lg:pt-16">
				<Subtitle text={"설립목적"} />
				<div class="mt-2 w-full hidden lg:flex flex-row text-sm text-gray-400 items-center">
					<div class="mr-2">
						<HiHome size={16} />
					</div>
					Home {">"} 협회소개 {">"} 설립목적
				</div>
			</div>
			<div class="px-5 2xl:px-36 xl:px-32 md:px-8 relative">
				<div class="w-full relative">
					<img
						class="w-full object-contain "
						src="/image/intro-purpose.png"
						alt="purpose"
					/>
				</div>
			</div>
		</>
	);
};

export default purpose;
