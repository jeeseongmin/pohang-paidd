import React from "react";
import Subtitle from "../../../../../components/Subtitle";

const Business = () => {
	return (
		<div>
			<Subtitle text={"주요사업"} />

			<div class="flex flex-wrap justify-start gap-x-32 py-2 lg:py-4 mt-4 lg:mt-0">
				<div class="w-full lg:w-1/4 md:w-1/3 flex flex-col justify-between items-center p-4 shadow-lg mb-8 border border-gray-200">
					<div class="text-xl w-full text-center py-4 text-purple-700 border-b-2 border-purple-700">
						취미여가활동
					</div>
					<div class="h-48 text-center text-lg flex flex-col justify-center items-center py-8">
						<div>음악활동</div>
						<div>체육활동</div>
						<div>배움활동</div>
						<div>힐링활동</div>
					</div>
				</div>
				<div class="w-full lg:w-1/4 md:w-1/3 flex flex-col justify-between items-center p-4 shadow-lg mb-8 border border-gray-200">
					<div class="text-xl w-full text-center py-4 text-purple-700 border-b-2 border-purple-700">
						직업탐구활동
					</div>
					<div class="h-48 text-center text-lg flex flex-col justify-center items-center py-8">
						<div>직업이해활동</div>
						<div>직업체험활동</div>
						<div>직업탐색활동</div>
					</div>
				</div>
				<div class="w-full lg:w-1/4 md:w-1/3 flex flex-col justify-between items-center p-4 shadow-lg mb-8 border border-gray-200">
					<div class="text-xl w-full text-center py-4 text-purple-700 border-b-2 border-purple-700">
						자립준비활동
					</div>
					<div class="h-48 text-center text-lg flex flex-col justify-center items-center py-8">
						<div>지역사회이해활동</div>
						<div>관계형성활동</div>
						<div>자기표현활동</div>
						<div>미래계획활동</div>
					</div>
				</div>
				<div class="w-full lg:w-1/4 md:w-1/3 flex flex-col justify-between items-center p-4 shadow-lg mb-8 border border-gray-200">
					<div class="text-xl w-full text-center py-4 text-purple-700 border-b-2 border-purple-700">
						관람체험활동
					</div>
					<div class="h-48 text-center text-lg flex flex-col justify-center items-center py-8">
						<div>관람활동</div>
						<div>체험활동</div>
					</div>
				</div>
				<div class="w-full lg:w-1/4 md:w-1/3 flex flex-col justify-between items-center p-4 shadow-lg mb-8 border border-gray-200">
					<div class="text-xl w-full text-center py-4 text-purple-700 border-b-2 border-purple-700">
						자조활동
					</div>
					<div class="h-48 text-center text-lg flex flex-col justify-center items-center py-8">
						<div>직접 활동 계획을 세우고 </div>
						<div>추진하는 활동</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Business;
