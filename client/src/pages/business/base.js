import React from "react";
import Subtitle from "../../components/Subtitle";
import { HiHome } from "react-icons/hi";

const Base = () => {
	return (
		<div>
			<Subtitle text={"협회사업"} />
			<div class="mt-2 w-full hidden lg:flex flex-row text-sm text-gray-400 items-center">
				<div class="mr-2">
					<HiHome size={16} />
				</div>
				Home {">"} 주요사업 {">"} 협회사업
			</div>
			<div class="w-full flex justify-center items-center mt-8">
				<div class="w-full grid grid-flow-row grid-cols-1 grid-rows-5 md:grid-cols-2 md:grid-rows-3 lg:grid-cols-4 lg:grid-rows-2 gap-x-8 mt-8">
					<div class="w-full pb-4 flex flex-col justify-between items-center shadow-lg mb-4 lg:mb-8 border border-gray-200">
						<div class="w-full h-60 bg-gray-200">
							<img
								class="w-full h-full object-cover"
								src="/image/base-img1.jpg"
								alt="img"
							/>
						</div>
						<div class="text-lg px-4 w-full pt-4 pb-2 text-purple-700 font-bold">
							장애인복지 일자리사업
						</div>
						<div class="w-full px-4 text-base flex flex-col py-2 ">
							<div>발달장애인에게 일자리 제공</div>
						</div>
					</div>

					<div class="w-full pb-4 flex flex-col justify-between items-center shadow-lg mb-4 lg:mb-8 border border-gray-200">
						<div class="w-full h-60 bg-gray-200">
							<img
								class="w-full h-full object-cover"
								src="/image/base-img2.jpg"
								alt="img"
							/>
						</div>
						<div class="text-lg px-4 w-full pt-4 pb-2 text-purple-700 font-bold">
							가족지원사업
						</div>
						<div class="w-full px-4 text-base flex flex-col py-2 ">
							<div>가족상담, 교육</div>
						</div>
					</div>

					<div class="w-full pb-4 flex flex-col justify-between items-center shadow-lg mb-4 lg:mb-8 border border-gray-200">
						<div class="w-full h-60 bg-gray-200">
							<img
								class="w-full h-full object-cover"
								src="/image/base-img3.jpg"
								alt="img"
							/>
						</div>
						<div class="text-lg px-4 w-full pt-4 pb-2 text-purple-700 font-bold">
							교육연수사업
						</div>
						<div class="w-full px-4 text-base flex flex-col py-2 ">
							<div>사회복지 전문가 역량강화 연수</div>
						</div>
					</div>

					<div class="w-full pb-4 flex flex-col justify-between items-center shadow-lg mb-4 lg:mb-8 border border-gray-200">
						<div class="w-full h-60 bg-gray-200">
							<img
								class="w-full h-full object-cover"
								src="/image/base-img4.jpg"
								alt="img"
							/>
						</div>
						<div class="text-lg px-4 w-full pt-4 pb-2 text-purple-700 font-bold">
							단체교류 및 연계사업
						</div>
						<div class="w-full px-4 text-base flex flex-col py-2 ">
							<div>단체 협력 사업</div>
						</div>
					</div>
					<div class="w-full pb-4 flex flex-col justify-between items-center shadow-lg mb-4 lg:mb-8 border border-gray-200">
						<div class="w-full h-60 bg-gray-200">
							<img
								class="w-full h-full object-cover"
								src="/image/base-img5.jpg"
								alt="img"
							/>
						</div>
						<div class="text-lg px-4 w-full pt-4 pb-2 text-purple-700 font-bold">
							지역사회자원개발사업
						</div>
						<div class="w-full px-4 text-base flex flex-col py-2 ">
							<div>후원자 및 자원봉사자 개발</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Base;
