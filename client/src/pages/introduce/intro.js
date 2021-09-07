import React from "react";
import Subtitle from "../../components/Subtitle";

const intro = () => {
	return (
		<div class="px-5 2xl:px-36 xl:px-32 md:px-8 py-8 lg:py-16">
			<Subtitle text={"인사말"} />

			<div class="py-4 lg:py-8 flex flex-col justify-center items-center">
				<img
					src="/image/intro-img.png"
					class="w-full object-cover"
					alt="intro-img"
				/>
				<img
					src="/image/intro-text.png"
					class="w-1/2 object-cover mt-8 lg:mt-16"
					alt="intro-ext"
				/>
			</div>
		</div>
	);
};

export default intro;
