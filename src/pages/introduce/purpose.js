import React from "react";
import Subtitle from "../../components/Subtitle";
const purpose = () => {
	return (
		<div class="px-5 2xl:px-36 xl:px-32 md:px-8 py-8 lg:py-16">
			<Subtitle text={"설립목적"} />
			<div class="w-full my-8 relative">
				<img
					class="w-full h-32 bg-opacity-100 object-cover lg:h-56 md:h-48"
					src="/image/intro-img1.png"
					alt="purpose"
				/>
				<div class="absolute w-full h-full top-0 opacity-30 bg-black"></div>
				<div class="absolute w-full h-full top-0 flex flex-col justify-center items-center">
					<div class="text-white text-2xl text-center">
						<div class="text-xl leading-10">발달장애인협회는,</div>
						<div class="text-sm leading-7 lg:text-xl lg:leading-10">
							발달장애인의 권익을 옹호하고 <br class="block lg:hidden"></br>
							복지증진에 기여하고자 합니다.
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default purpose;
