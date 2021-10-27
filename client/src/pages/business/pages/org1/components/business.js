import React, { useState, useEffect } from "react";
import Subtitle from "../../../../../components/Subtitle";
import { HiHome } from "react-icons/hi";

const Business = () => {
	return (
		<div>
			<Subtitle text={"주요사업"} />
			<div class="my-2 mb-12 w-full hidden lg:flex flex-row text-sm text-gray-400 items-center">
				<div class="mr-2">
					<HiHome size={16} />
				</div>
				Home {">"} 주요사업 {">"} 포항시지적장애인자립지원센터 {">"} 주요사업
			</div>
			<div class="w-full grid grid-flow-row grid-cols-1 grid-rows-5 md:grid-cols-2 md:grid-rows-3 lg:grid-cols-4 lg:grid-rows-2 gap-x-8 mt-8">
				<div class="w-full pb-4 flex flex-col justify-start items-start shadow-lg mb-4 lg:mb-8 border border-gray-200">
					<div class="w-full h-60 bg-gray-200">
						<img
							class="w-full h-full object-cover"
							src="/image/org1-img1.jpg"
							alt="img"
						/>
					</div>
					<div class="text-lg px-4 w-full pt-4 pb-2 text-purple-700 font-bold">
						자립생활지원
					</div>
					<div class="w-full px-4 text-base flex flex-col py-2 ">
						<div>자립생활기술지원</div>
						<div>사회활동지원</div>
						<div>작업활동 및 연계지원</div>
					</div>
				</div>
				<div class="w-full pb-4 flex flex-col justify-start items-start shadow-lg mb-4 lg:mb-8 border border-gray-200">
					<div class="w-full h-60 bg-gray-200">
						<img
							class="w-full h-full object-cover"
							src="/image/org1-img2.jpg"
							alt="img"
						/>
					</div>
					<div class="text-lg px-4 w-full pt-4 pb-2 text-purple-700 font-bold">
						권익옹호
					</div>
					<div class="w-full px-4 text-base flex flex-col py-2 ">
						<div>자조모임지원</div>
						<div>자기권리 주장활동 지원</div>
						<div>서포터 양성 및 활동지원</div>
						<div>인식개선 </div>
						<div>후견활동 지원</div>
					</div>
				</div>
				<div class="w-full pb-4 flex flex-col justify-start items-start shadow-lg mb-4 lg:mb-8 border border-gray-200">
					<div class="w-full h-60 bg-gray-200">
						<img
							class="w-full h-full object-cover"
							src="/image/org1-img3.jpg"
							alt="img"
						/>
					</div>
					<div class="text-lg px-4 w-full pt-4 pb-2 text-purple-700 font-bold">
						상담과 정보제공
					</div>
					<div class="w-full px-4 text-base flex flex-col py-2 ">
						<div>상담사업</div>
						<div>정보제공 사업</div>
					</div>
				</div>
				<div class="w-full pb-4 flex flex-col justify-start items-start shadow-lg mb-4 lg:mb-8 border border-gray-200">
					<div class="w-full h-60 bg-gray-200">
						<img
							class="w-full h-full object-cover"
							src="/image/org1-img4.jpg"
							alt="img"
						/>
					</div>
					<div class="text-lg px-4 w-full pt-4 pb-2 text-purple-700 font-bold">
						문화체육활동
					</div>
					<div class="w-full px-4 text-base flex flex-col py-2 ">
						<div>문화여가활동</div>
						<div>생활체육활동</div>
					</div>
				</div>
				<div class="w-full pb-4 flex flex-col justify-start items-start shadow-lg mb-4 lg:mb-8 border border-gray-200">
					<div class="w-full h-60 bg-gray-200">
						<img
							class="w-full h-full object-cover"
							src="/image/org1-img5.jpg"
							alt="img"
						/>
					</div>
					<div class="text-lg px-4 w-full pt-4 pb-2 text-purple-700 font-bold">
						특화사업
					</div>
					<div class="w-full px-4 text-base flex flex-col py-2 ">
						<div>뷰티플러스사업</div>
						<div>특수교육대상학생 계절학교</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Business;
