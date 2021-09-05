import React from "react";
import Subtitle from "../../components/Subtitle";
const purpose = () => {
	return (
		<>
			<div class="px-5 2xl:px-36 xl:px-32 md:px-8 pt-8 lg:pt-16">
				<Subtitle text={"설립목적"} />
			</div>
			<div class="px-5 2xl:px-36 xl:px-32 md:px-8 relative">
				<div class="w-full relative">
					<img
						class="w-full object-contain "
						src="/image/intro-purpose.png"
						alt="purpose"
					/>
					<div class="absolute w-full h-full top-0 flex flex-col justify-center items-center">
						<div class="text-green-800 text-center">
							<div class="text-xs md:text-sm lg:text-xl leading-7 md:leading-10 mb-0 lg:mb-2">
								경북지적발달장애인복지협회<br class="block md:hidden"></br>{" "}
								포항시지부는
							</div>
							<div class="text-xs md:text-sm lg:text-xl leading-7 md:leading-10 mb-0 lg:mb-2">
								발달장애인의 권익을 옹호하고
							</div>
							<div class="text-xs md:text-sm lg:text-xl leading-7 md:leading-10">
								복지증진에 기여하고자 합니다.
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default purpose;
