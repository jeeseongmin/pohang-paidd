import React from "react";
import SlideBlock from "react-slick";

const Slider = () => {
	const settings = {
		dots: false,
		fade: true,
		arrows: false,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		// autoplay: true,
		// autoplaySpeed: 3000,
		slidesToScroll: 1,
	};
	return (
		<>
			<SlideBlock {...settings}>
				<div class="">
					<div class="h-48 md:h-96 py-0 lg:py-8 px-10 bg-purple-100 flex flex-row items-center 2xl:px-36 xl:px-32 lg:px-10 md:py-4">
						<div class=" h-full w-1/2 hidden justify-center items-center md:flex">
							<img
								src="/image/home-img1.png"
								alt="main-img1"
								class="object-cover h-3/4 lg:h-full"
							/>
						</div>
						<div class="pl-8 pb-0 flex flex-col justify-end ">
							<h3 class="text-pink-400 mb-6 text-lg md:text-2xl">
								RENEWAL OPEN
							</h3>
							<h3 class="text-xl lg:text-2xl md:text-2xl mb-2 lg:mb-4">
								안녕하세요. 새롭게 열린
							</h3>
							{/* <h3 class="text-xl lg:text-2xl md:text-2xl mb-2 lg:mb-4"></h3> */}
							<h3 class="text-xl lg:text-2xl md:text-2xl mb-2 lg:mb-4">
								<b>경북지적발달장애인복지협회</b>
							</h3>
							<h3 class="text-xl lg:text-2xl md:text-2xl mb-2 lg:mb-4">
								<b>포항시지부</b> 입니다.
							</h3>
						</div>
					</div>
				</div>
				<div>
					<div class="px-10 py-10 bg-purple-100 h-auto flex flex-row 2xl:px-36 xl:px-32 lg:px-10 lg:py-16 md:py-4"></div>
				</div>
			</SlideBlock>
		</>
	);
};

export default Slider;
