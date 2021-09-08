import React, { useState, useEffect } from "react";
import axios from "axios";
import { Route, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import { setMenu, setSubmenu, toggleSidebar } from "../reducer/settingSlice";
import { setMenu, setSubmenu, setSidebar } from "../reducers/setting";
import Layout from "../components/Layout";
import Slider from "../components/Slider";

const Home = () => {
	const dispatch = useDispatch();
	const [photoList, setPhotoList] = useState([]);

	useEffect(() => {
		dispatch(setMenu(0));
		dispatch(setSubmenu(0));
	}, []);

	const goSubPage = (main, sub) => {
		dispatch(setMenu(main));
		dispatch(setSubmenu(sub));
		window.scrollTo(0, 0);
	};

	return (
		<Layout>
			<div class="w-full h-full">
				{/* section 1 */}
				<Slider />

				{/* section 2 */}
				<div class="flex flex-row pt-10 lg:pt-16 px-5 2xl:px-36 xl:px-32 md:px-8">
					<div class="w-full lg:w-1/2">
						<h1 class="text-xl font-semibold mb-2 lg:text-3xl">
							경북지적발달장애인복지협회 포항시지부
						</h1>
						<h1 class="text-xl font-semibold lg:text-3xl">사업소개</h1>
						<div class="text-md py-4 md:text-xl md:py-8">
							발달장애인협회에서 진행되는 사업들을 살펴보세요.
						</div>
						<div class="flex flex-wrap">
							<Link
								to="/business/base/default"
								onClick={() => goSubPage(2, 1)}
								class="lg:text-base lg:p-4 py-2 px-4 text-xs cursor-pointer mr-4 mb-4 border border-purple-700 text-purple-700 rounded-full hover:border-purple-300 hover:bg-purple-300 hover:text-white"
							>
								협회 사업
							</Link>
							<Link
								to="/business/org1/default"
								onClick={() => goSubPage(2, 2)}
								class="lg:text-base lg:p-4 py-2 px-4 text-xs cursor-pointer mr-4 mb-4 border border-purple-700 text-purple-700 rounded-full hover:border-purple-300 hover:bg-purple-300 hover:text-white"
							>
								포항시지적장애인자립지원센터
							</Link>
							<Link
								to="/business/org2/default"
								onClick={() => goSubPage(2, 3)}
								class="lg:text-base py-2 px-4 lg:p-4 text-xs cursor-pointer mr-4 mb-4 border border-purple-700 text-purple-700 rounded-full hover:border-purple-300 hover:bg-purple-300 hover:text-white"
							>
								장애인활동사업
							</Link>
							<Link
								to="/business/org3/default"
								onClick={() => goSubPage(2, 4)}
								class="lg:text-base lg:p-4 text-xs cursor-pointer mr-4 mb-4 py-2 px-4 border border-purple-700 text-purple-700 rounded-full hover:border-purple-300 hover:bg-purple-300 hover:text-white"
							>
								방과후 활동 서비스 사업
							</Link>
							<Link
								to="/organization/intro/0"
								onClick={() => goSubPage(2, 5)}
								class="lg:text-base lg:p-4 text-xs cursor-pointer mr-4 mb-4 py-2 px-4 border border-purple-700 text-purple-700 rounded-full hover:border-purple-300 hover:bg-purple-300 hover:text-white"
							>
								늘사랑주간보호센터
							</Link>
						</div>
					</div>
					<div class="flex-1 hidden flex-col justify-end items-center lg:flex">
						<img src="/image/home-img2.png" alt="main-img2" />
					</div>
				</div>
				{/* section 3 */}
				<div class="flex flex-col px-5 py-8 2xl:px-36 xl:px-32 md:px-8">
					<div class="w-full">
						<h1 class="text-xl font-semibold lg:text-3xl">소식</h1>
						<div class="text-md py-4 md:text-xl md:py-8">
							발달장애인협회에서는 어떤 일들이 있었을까요?
						</div>
					</div>
					<div class="w-full">
						<div class="flex justify-end items-center"></div>
						<div class="w-full flex flex-row flex-wrap ">
							<div class="w-1/2 px-2 md:w-1/4 md:px-4">
								<div class="cursor-pointer mb-4 h-36 object-cover border border-gray-500 md:h-48">
									<img
										class="w-full h-full"
										src="/image/noImage.png"
										alt="logo"
									/>
								</div>
								<div>
									<h1>
										<b>제목1</b>
									</h1>
									<p class="text-gray-300">21.07.01</p>
								</div>
							</div>
							<div class="w-1/2 px-2 md:w-1/4 md:px-4">
								<div class="cursor-pointer mb-4 h-36 object-cover border border-gray-500 md:h-48">
									<img
										class="w-full h-full"
										src="/image/noImage.png"
										alt="logo"
									/>
								</div>
								<div>
									<h1>
										<b>제목2</b>
									</h1>
									<p class="text-gray-300">21.07.01</p>
								</div>
							</div>
							<div class="w-1/2 px-4 md:w-1/4 hidden md:block">
								<div class="cursor-pointer mb-4 h-48  object-cover border border-gray-500">
									<img
										class="w-full h-full"
										src="/image/noImage.png"
										alt="logo"
									/>
								</div>
								<div>
									<h1>
										<b>제목3</b>
									</h1>
									<p class="text-gray-300">21.07.01</p>
								</div>
							</div>
							<div class="w-1/2 px-4 md:w-1/4 hidden md:block">
								<div class="cursor-pointer mb-4 h-48  object-cover border border-gray-500">
									<img
										class="w-full h-full"
										src="/image/noImage.png"
										alt="logo"
									/>
								</div>
								<div>
									<h1>
										<b>제목4</b>
									</h1>
									<p class="text-gray-300">21.07.01</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* section 4 */}
				<div class="flex flex-col px-5 py-16 2xl:px-36 xl:px-32 md:px-8">
					<div class="w-full">
						<h1 class="text-xl font-semibold lg:text-3xl">후원 및 자원봉사</h1>
						<div class="text-md py-4 md:text-xl md:py-8">
							더 많은 발달장애인에게 좋은 서비스를 지원할 수 있도록 후원과
							자원봉사 신청을 받습니다.
						</div>
					</div>
					<div class="w-full flex flex-col lg:flex-row">
						<div class="w-full lg:w-1/2 h-60 md:h-40 lg:h-96 mr-0 lg:mr-4 mb-8 lg:mb-0 p-8 border border-purple-300 bg-white relative">
							<div class="flex flex-row items-end justify-start lg:justify-between mb-8 ">
								<h1 class="text-xl lg:text-3xl text-purple-600 font-semibold">
									후원
								</h1>
								<h1 class="text-xs lg:text-xl text-purple-600 ml-8 lg:ml-0">
									정기후원/일시후원/물품후원
								</h1>
							</div>
							<div class="absolute bottom-0 lg:bottom-0 right-2 h-1/2 md:h-full lg:h-auto">
								<img
									class="h-full object-cover"
									src="/image/home-img3.png"
									alt="logo"
								/>
							</div>
							<Link
								to="/participation/support/0"
								onClick={() => goSubPage(4, 3)}
								class="z-50 lg:text-xl text-xs w-60 text-center cursor-pointer py-2 px-4 lg:py-3 lg:px-8 border border-purple-700 text-purple-700 rounded-full hover:border-purple-300 hover:bg-purple-300 hover:text-white"
							>
								자세히 보기
							</Link>
						</div>
						<div class="w-full lg:w-1/2 ml-0 h-60 md:h-40 lg:h-96 lg:ml-4 p-8 border border-purple-300 bg-white relative">
							<h1 class="text-xl lg:text-3xl text-purple-600 font-semibold mb-8 ">
								자원봉사
							</h1>
							<div class="absolute bottom-0 lg:bottom-0 right-2 h-2/3 md:h-full lg:h-auto">
								<img
									class="h-full object-cover"
									src="/image/home-img4.png"
									alt="logo"
								/>
							</div>
							<Link
								to="/participation/volunteer/0"
								onClick={() => goSubPage(4, 4)}
								class="z-50 lg:text-xl bg-white text-xs w-60 text-center cursor-pointer py-2 px-4 lg:py-3 lg:px-8 border border-purple-700 text-purple-700 rounded-full hover:border-purple-300 hover:bg-purple-300 hover:text-white"
							>
								자세히 보기
							</Link>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default Home;