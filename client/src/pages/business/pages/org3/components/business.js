import React from "react";
import Subtitle from "../../../../../components/Subtitle";
import { HiHome } from "react-icons/hi";

const Business = () => {
	return (
		<div>
			<Subtitle text={"주요사업"} />
			<div class="mt-2 mb-12 w-full hidden lg:flex flex-row text-sm text-gray-400 items-center">
				<div class="mr-2">
					<HiHome size={16} />
				</div>
				Home {">"} 주요사업 {">"} 방과후활동지원서비스사업 {">"} 주요사업
			</div>
			<div class="w-full grid grid-flow-row grid-cols-1 grid-rows-5 md:grid-cols-2 md:grid-rows-3 lg:grid-cols-4 lg:grid-rows-2 gap-x-8 mt-8">
				<div class="w-full pb-4 flex flex-col justify-start items-start shadow-lg mb-4 lg:mb-8 border border-gray-200">
					<div class="w-full h-60 bg-gray-200">
						<img
							class="w-full h-full object-cover"
							src="/image/noImage.png"
							alt="img"
						/>
					</div>
					<div class="text-lg px-4 w-full pt-4 pb-2 text-purple-700 font-bold">
						취미여가활동
					</div>
					<div class="w-full px-4 text-base flex flex-col py-2 ">
						<div>음악활동</div>
						<div>체육활동</div>
						<div>배움활동</div>
						<div>힐링활동</div>
					</div>
				</div>
				<div class="w-full pb-4 flex flex-col justify-start items-start shadow-lg mb-4 lg:mb-8 border border-gray-200">
					<div class="w-full h-60 bg-gray-200">
						<img
							class="w-full h-full object-cover"
							src="/image/noImage.png"
							alt="img"
						/>
					</div>
					<div class="text-lg px-4 w-full pt-4 pb-2 text-purple-700 font-bold">
						직업탐구활동
					</div>
					<div class="w-full px-4 text-base flex flex-col py-2 ">
						<div>직업이해활동</div>
						<div>직업체험활동</div>
						<div>직업탐색활동</div>
					</div>
				</div>
				<div class="w-full pb-4 flex flex-col justify-start items-start shadow-lg mb-4 lg:mb-8 border border-gray-200">
					<div class="w-full h-60 bg-gray-200">
						<img
							class="w-full h-full object-cover"
							src="/image/noImage.png"
							alt="img"
						/>
					</div>
					<div class="text-lg px-4 w-full pt-4 pb-2 text-purple-700 font-bold">
						자립준비활동
					</div>
					<div class="w-full px-4 text-base flex flex-col py-2 ">
						<div>지역사회이해활동</div>
						<div>관계형성활동</div>
						<div>자기표현활동</div>
						<div>미래계획활동</div>
					</div>
				</div>
				<div class="w-full pb-4 flex flex-col justify-start items-start shadow-lg mb-4 lg:mb-8 border border-gray-200">
					<div class="w-full h-60 bg-gray-200">
						<img
							class="w-full h-full object-cover"
							src="/image/noImage.png"
							alt="img"
						/>
					</div>
					<div class="text-lg px-4 w-full pt-4 pb-2 text-purple-700 font-bold">
						관람체험활동
					</div>
					<div class="w-full px-4 text-base flex flex-col py-2 ">
						<div>관람활동</div>
						<div>체험활동</div>
					</div>
				</div>
				<div class="w-full pb-4 flex flex-col justify-start items-start shadow-lg mb-4 lg:mb-8 border border-gray-200">
					<div class="w-full h-60 bg-gray-200">
						<img
							class="w-full h-full object-cover"
							src="/image/noImage.png"
							alt="img"
						/>
					</div>
					<div class="text-lg px-4 w-full pt-4 pb-2 text-purple-700 font-bold">
						자조활동
					</div>
					<div class="w-full px-4 text-base flex flex-col py-2 ">
						<div>직접 활동 계획을 세우고 </div>
						<div>추진하는 활동</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Business;
