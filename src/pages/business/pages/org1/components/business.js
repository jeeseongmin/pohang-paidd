import React, { useState, useEffect } from "react";
import Subtitle from "../../../../../components/Subtitle";

const Business = () => {
	return (
		<div>
			<Subtitle text={"주요사업"} />

			<div class="flex flex-wrap justify-start gap-x-32 py-2 lg:py-4 mt-4 lg:mt-0">
				<div class="w-full lg:w-1/4 md:w-1/3 flex flex-col justify-between items-center p-4 shadow-lg mb-8 border border-gray-200">
					<div class="text-xl w-full text-center py-4 text-purple-700 border-b-2 border-purple-700">
						자립생활지원
					</div>
					<div class="h-48 text-center text-lg flex flex-col justify-center items-center py-8">
						<div>자립생활기술지원</div>
						<div>사회활동지원</div>
						<div>작업활동 및 연계지원</div>
					</div>
				</div>
				<div class="w-full lg:w-1/4 md:w-1/3 flex flex-col justify-between items-center p-4 shadow-lg mb-8 border border-gray-200">
					<div class="text-xl w-full text-center py-4 text-purple-700 border-b-2 border-purple-700">
						권익옹호
					</div>
					<div class="h-48 text-center text-lg flex flex-col justify-center items-center py-8">
						<div>자조모임지원</div>
						<div>자기권리 주장활동 지원</div>
						<div>서포터 양성 및 활동지원</div>
						<div>인식개선 </div>
						<div>후견활동 지원</div>
					</div>
				</div>
				<div class="w-full lg:w-1/4 md:w-1/3 flex flex-col justify-between items-center p-4 shadow-lg mb-8 border border-gray-200">
					<div class="text-xl w-full text-center py-4 text-purple-700 border-b-2 border-purple-700">
						상담과 정보제공
					</div>
					<div class="h-48 text-center text-lg flex flex-col justify-center items-center py-8">
						<div>상담사업</div>
						<div>정보제공 사업</div>
					</div>
				</div>
				<div class="w-full lg:w-1/4 md:w-1/3 flex flex-col justify-between items-center p-4 shadow-lg mb-8 border border-gray-200">
					<div class="text-xl w-full text-center py-4 text-purple-700 border-b-2 border-purple-700">
						문화체육활동
					</div>
					<div class="h-48 text-center text-lg flex flex-col justify-center items-center py-8">
						<div>문화여가활동</div>
						<div>생활체육활동</div>
					</div>
				</div>
				<div class="w-full lg:w-1/4 md:w-1/3 flex flex-col justify-between items-center p-4 shadow-lg mb-8 border border-gray-200">
					<div class="text-xl w-full text-center py-4 text-purple-700 border-b-2 border-purple-700">
						특화사업
					</div>
					<div class="h-48 text-center text-lg flex flex-col justify-center items-center py-8">
						<div>뷰티플러스사업</div>
						<div>특수교육대상학생 계절학교</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Business;
