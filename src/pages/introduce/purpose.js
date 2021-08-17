import React from "react";

const purpose = () => {
	return (
		<div class="w-full px-36 py-16 ">
			<h1 class="text-3xl font-bold">설립목적</h1>
			<div class="w-full my-8 object-cover relative">
				<img
					class="w-full h-full bg-opacity-100"
					src="/image/intro-img1.png"
					alt="purpose"
				/>
				<div class="absolute w-full h-full top-0 opacity-30 bg-black"></div>
				<div class="absolute w-full h-full top-0 flex flex-col justify-center items-center">
					<div class="text-white text-2xl text-center">
						<div class="text-xl leading-10">발달장애인협회는,</div>
						<div class="text-xl leading-10">
							발달장애인의 권익을 옹호하고 복지증진에 기여하고자 합니다.
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default purpose;
