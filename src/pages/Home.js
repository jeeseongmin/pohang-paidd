import React from "react";
import { Route, Link } from "react-router-dom";

const Home = () => {
	return (
		<div class="w-full h-full">
			{/* section 1 */}
			<div class="px-36 py-16 bg-purple-100 h-auto flex flex-row">
				<div class="w-1/2 flex justify-center items-center">
					<img src="/image/home-img1.png" alt="main-img1" />
				</div>
				<div class="pb-16 flex flex-col justify-end">
					<h3 class="text-pink-400 mb-6 text-2xl">RENEWAL OPEN</h3>
					<h3 class="text-3xl mb-2">안녕하세요.</h3>
					<h3 class="text-3xl mb-2">새롭게 열린</h3>
					<h3 class="text-3xl mb-2">
						<b>포항발달장애인협회</b> 입니다.
					</h3>
				</div>
			</div>

			{/* section 2 */}
			<div class="flex flex-row px-36 pt-16">
				<div class="w-1/2 ">
					<h1 class="text-3xl font-semibold mb-2">발달장애인협회</h1>
					<h1 class="text-3xl font-semibold">사업소개</h1>
					<div class="text-xl py-8">
						발달장애인협회에서 진행되는 사업들을 살펴보세요.
					</div>
					<div class="flex flex-wrap">
						<Link
							to="/business/base/default"
							onClick={() => window.scrollTo(0, 0)}
							class="cursor-pointer mr-4 mb-4 p-4 border border-purple-700 text-purple-700 rounded-full hover:border-purple-300 hover:bg-purple-300 hover:text-white"
						>
							협회 사업
						</Link>
						<Link
							to="/business/b1/default"
							onClick={() => window.scrollTo(0, 0)}
							class="cursor-pointer mr-4 mb-4 p-4 border border-purple-700 text-purple-700 rounded-full hover:border-purple-300 hover:bg-purple-300 hover:text-white"
						>
							포항시지적장애인자립지원센터
						</Link>
						<Link
							to="/business/b2/default"
							onClick={() => window.scrollTo(0, 0)}
							class="cursor-pointer mr-4 mb-4 p-4 border border-purple-700 text-purple-700 rounded-full hover:border-purple-300 hover:bg-purple-300 hover:text-white"
						>
							장애인활동사업
						</Link>
						<Link
							to="/business/b3/default"
							onClick={() => window.scrollTo(0, 0)}
							class="cursor-pointer mr-4 mb-4 p-4 border border-purple-700 text-purple-700 rounded-full hover:border-purple-300 hover:bg-purple-300 hover:text-white"
						>
							방과후 활동 서비스 사업
						</Link>
						<Link
							to="/organization/0"
							onClick={() => window.scrollTo(0, 0)}
							class="cursor-pointer mr-4 mb-4 p-4 border border-purple-700 text-purple-700 rounded-full hover:border-purple-300 hover:bg-purple-300 hover:text-white"
						>
							늘사랑주간보호센터
						</Link>
					</div>
				</div>
				<div class="flex-1 flex flex-col justify-end items-center">
					<img src="/image/home-img2.png" alt="main-img2" />
				</div>
			</div>
			{/* section 3 */}
			<div class="flex flex-col px-36 py-8">
				<div class="w-full">
					<h1 class="text-3xl font-semibold">소식</h1>
					<div class="text-xl py-8">
						발달장애인협회에서는 어떤 일들이 있었을까요?
					</div>
				</div>
				<div class="w-full">
					<div class="flex justify-end items-center"></div>
					<div class="w-full flex flex-row flex-wrap ">
						<div class="w-1/4 px-4">
							<div class="cursor-pointer mb-4 h-48 object-cover border border-gray-500">
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
						<div class="w-1/4 px-4">
							<div class="cursor-pointer mb-4 h-48  object-cover border border-gray-500">
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
						<div class="w-1/4 px-4">
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
						<div class="w-1/4 px-4">
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
			<div class="flex flex-col px-36 py-16">
				<div class="w-full">
					<h1 class="text-3xl font-semibold">후원 및 자원봉사</h1>
					<div class="text-xl py-8">
						더 많은 발달장애인에게 좋은 서비스를 지원할 수 있도록 후원과
						자원봉사 신청을 받습니다.
					</div>
				</div>
				<div class="w-full flex flex-row">
					<div class="w-1/2 h-96 mr-4 p-8 border border-purple-300 bg-purple-100 relative">
						<div class="flex flex-row items-end justify-between mb-8">
							<h1 class="text-3xl text-purple-600 font-semibold">후원</h1>
							<h1 class="text-xl text-purple-600">
								정기후원/일시후원/물품후원
							</h1>
						</div>
						<Link
							to="/participation/support"
							onClick={() => window.scrollTo(0, 0)}
							class="w-60 text-center cursor-pointer py-3 px-8 text-xl border border-purple-700 text-purple-700 rounded-full hover:border-purple-300 hover:bg-purple-300 hover:text-white"
						>
							자세히 보기
						</Link>
						<div class="absolute bottom-10 right-10 opacity-50">
							<img
								class="w-full h-full"
								src="/image/home-img3.png"
								alt="logo"
							/>
						</div>
					</div>
					<div class="z-10 w-1/2 ml-4 p-8 border border-purple-300 bg-purple-100 relative">
						<h1 class="z-20 text-3xl text-purple-600 font-semibold mb-8 ">
							자원봉사
						</h1>
						<Link
							to="/participation/volunteer"
							onClick={() => window.scrollTo(0, 0)}
							class="w-60 text-center cursor-pointer py-3 px-8 text-xl border border-purple-700 text-purple-700 rounded-full hover:border-purple-300 hover:bg-purple-300 hover:text-white"
						>
							자세히 보기
						</Link>
						<div class="absolute bottom-6 right-10 opacity-50">
							<img
								class="w-full h-full"
								src="/image/home-img4.png"
								alt="logo"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
