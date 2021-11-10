import React from "react";
import SlideBlock from "react-slick";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setMenu, setSubmenu, setSidebar } from "../reducers/setting";

const Slider = () => {
	const dispatch = useDispatch();

	const settings = {
		dots: false,
		fade: true,
		arrows: false,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		autoplay: false,
		autoplaySpeed: 3000,
		slidesToScroll: 1,
	};

	const goSubPage = (main, sub) => {
		dispatch(setMenu(main));
		dispatch(setSubmenu(sub));
		window.scrollTo(0, 0);
		document.getElementById("scrollRef").scrollTo(0, 0);
	};
	return (
		<>
			<SlideBlock {...settings}>
				<div class="">
					<div class="w-full h-auto lg:h-2/4 flex flex-row items-center relative">
						<img
							src="/image/slide1-img1.png"
							alt="main-img1"
							class="object-cover w-full"
						/>
						<div class="absolute right-8 md:right-16 lg:right-32 bottom-4 md:bottom-8 w-auto h-auto">
							<Link to="/business/base/default" onClick={() => goSubPage(2, 1)}>
								<img
									src="/image/slide1-img1-btn.png"
									alt="사업소개"
									class="object-cover w-32 md:w-48 lg:w-60 cursor-pointer"
								/>
							</Link>
						</div>
					</div>
				</div>
				{/* <div>
					<div class="w-full h-full lg:h-2/4 shadow-sm flex flex-row ">
						<img
							src="/image/slide2-img1.png"
							alt="main-img1"
							class="object-cover w-full h-1/2"
						/>
					</div>
				</div> */}
			</SlideBlock>
			{/* <SlideBlock {...settings}>
				<div class="">
					<div class="h-auto py-0 lg:py-8 px-10 bg-purple-100 flex flex-row items-center 2xl:px-36 xl:px-32 lg:px-10 md:py-4">
						<div class="my-8 h-96 md:h-96 w-1/2 hidden justify-center items-center md:flex">
							<img
								src="/image/home-img1.png"
								alt="main-img1"
								class="object-cover h-3/4 lg:h-full"
							/>
						</div>
						<div class="mt-4 mb-8 h-48 md:h-auto pl-8 pb-0 flex flex-col justify-end ">
							<h3 class="text-pink-400 mb-6 text-lg md:text-2xl">
								RENEWAL OPEN
							</h3>
							<h3 class="text-xl lg:text-2xl md:text-2xl mb-2 lg:mb-4">
								안녕하세요. 새롭게 열린
							</h3>
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
					<div class="h-60 md:h-96 w-full shadow-sm flex flex-row relative ">
						<img
							src="/image/slider-img2-bg.png"
							alt="main-img1"
							class="z-10 object-cover w-full h-full md:h-auto absolute"
						/>
						<div class="my-8 lg:my-16 z-40 w-1/2 h-full justify-end items-center hidden md:flex relative">
							<img
								src="/image/slider-img2-comp1.png"
								alt="slider-img2"
								class="object-cover bottom-0 mr-0 lg:mr-16 h-3/4 lg:h-full absolute"
							/>
						</div>
						<div class="my-0 md:my-8 lg:my-16 z-40 w-full md:w-1/2 h-full pl-0 md:pl-8 flex-col justify-center items-center md:items-start flex">
							<div class="w-auto h-full flex flex-col justify-center items-center">
								<h3 class="text-xl lg:text-2xl md:text-2xl mb-2 lg:mb-4">
									<b>포항시 발달장애인 분들의</b>
								</h3>
								<h3 class="text-xl lg:text-2xl md:text-2xl mb-2 lg:mb-4">
									<b>행복한 삶을 위하여</b>
								</h3>
								<h3 class="text-xl lg:text-2xl md:text-2xl lg:mb-4">
									<b>저희가 도와드리겠습니다.</b>
								</h3>
							</div>
						</div>
					</div>
				</div>
			</SlideBlock> */}
		</>
	);
};

export default Slider;
