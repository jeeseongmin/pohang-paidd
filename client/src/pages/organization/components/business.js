import React, { useState, useEffect } from "react";
import Subtitle from "../../../components/Subtitle";

const Business = () => {
	return (
		<div>
			<Subtitle text={"주요사업"} />
			<div class="flex flex-wrap justify-start gap-x-32 mt-4">
				<div class="w-full lg:w-1/4 md:w-1/3 flex flex-col justify-between items-center p-4 shadow-lg mb-8 border border-gray-200">
					<div class="text-xl w-full text-center py-4 text-purple-700 border-b-2 border-purple-700">
						일상생활활동
					</div>
					<div class="h-48 text-center text-lg flex flex-col justify-center items-center py-8">
						<div>용모관리</div>
						<div>개인위생활동</div>
						<div>식사예절 익히기</div>
					</div>
					<div class="bg-gray-100 p-4">
						하루 일과 중 용모 단장 및 위생 관리와 식사 예절을 연습합니다.
					</div>
				</div>{" "}
				<div class="w-full lg:w-1/4 md:w-1/3 flex flex-col justify-between items-center p-4 shadow-lg mb-8 border border-gray-200">
					<div class="text-xl w-full text-center py-4 text-purple-700 border-b-2 border-purple-700">
						감수성활동
					</div>
					<div class="h-48 text-center text-lg flex flex-col justify-center items-center py-8">
						<div>음악활동(핸드벨/리듬악기)</div>
						<div>미술활동(만화/미술)</div>
						<div>푸드아트테라피</div>
					</div>
					<div class="bg-gray-100 p-4">
						몸과 마음을 건강하게 하는 활동을 합니다.
					</div>
				</div>
				<div class="w-full lg:w-1/4 md:w-1/3 flex flex-col justify-between items-center p-4 shadow-lg mb-8 border border-gray-200">
					<div class="text-xl w-full text-center py-4 text-purple-700 border-b-2 border-purple-700">
						취미여가활동
					</div>
					<div class="h-48 text-center text-lg flex flex-col justify-center items-center py-8">
						<div>외국어배우기 (중국어,영어)</div>
						<div>브레인닥터 (인지자극활동)</div>
						<div>체육활동</div>
						<div>노래/댄스활동</div>
						<div>난타</div>
					</div>
					<div class="bg-gray-100 p-4">
						스스로 좋아하는 활동을 선택하여 자유롭게 즐깁니다. 잔존능력을
						향상하고 유지하기 위함입니다.
					</div>
				</div>
				<div class="w-full lg:w-1/4 md:w-1/3 flex flex-col justify-between items-center p-4 shadow-lg mb-8 border border-gray-200">
					<div class="text-xl w-full text-center py-4 text-purple-700 border-b-2 border-purple-700">
						사회적응활동
					</div>
					<div class="h-48 text-center text-lg flex flex-col justify-center items-center py-8">
						<div>자치회의(민주적 의사소통활동)</div>
						<div>지역사회 누리기</div>
					</div>
					<div class="bg-gray-100 p-4">
						나에게 필요한 것을 스스로 선택하여 이용하고, 다른 사람에게 나의
						생각을 잘 표현할 수 있게 연습합니다.
					</div>
				</div>
				<div class="w-full lg:w-1/4 md:w-1/3 flex flex-col justify-between items-center p-4 shadow-lg mb-8 border border-gray-200">
					<div class="text-xl w-full text-center py-4 text-purple-700 border-b-2 border-purple-700">
						상담 및 교육활동
					</div>
					<div class="h-48 text-center text-lg flex flex-col justify-center items-center py-8">
						<div>상담(개별/보호자/동료상담)</div>
						<div>인권교육</div>
						<div>성폭력예방교육</div>
						<div>생활교육</div>
					</div>
					<div class="bg-gray-100 p-4">
						스스로 나의 권리를 찾을 수 있고, 보호받을 수 있도록 교육받습니다.
						교육받은 내용을 사회생활에서 적용할 수 있도록 훈련합니다.
					</div>
				</div>
				<div class="w-full lg:w-1/4 md:w-1/3 flex flex-col justify-between items-center p-4 shadow-lg mb-8 border border-gray-200">
					<div class="text-xl w-full text-center py-4 text-purple-700 border-b-2 border-purple-700">
						캠프 및 동아리 활동
					</div>
					<div class="h-48 text-center text-lg flex flex-col justify-center items-center py-8">
						<div>"느려도 우리가 해요"(캠프)</div>
					</div>
					<div class="bg-gray-100 p-4">
						1년에 2회 이상 이곳저곳에서 다양한 경험을 합니다.이 훈련은 가족과
						떨어져 동료들과 함께 며칠 지내는 것입니다. 혼자 지내는 연습을 해 볼
						수 있습니다.
					</div>
				</div>
				<div class="w-full lg:w-1/4 md:w-1/3 flex flex-col justify-between items-center p-4 shadow-lg mb-8 border border-gray-200">
					<div class="text-xl w-full text-center py-4 text-purple-700 border-b-2 border-purple-700">
						동아리활동
					</div>
					<div class=" h-48 text-center text-lg flex flex-col justify-center items-center py-8">
						<div>그룹 별 동아리 활동</div>
					</div>
					<div class="bg-gray-100 p-4">
						동료들과 의논하여 색다른 활동을 경험해봅니다.
					</div>
				</div>
			</div>
		</div>
	);
};

export default Business;
