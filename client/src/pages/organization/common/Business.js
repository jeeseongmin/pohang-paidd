import React, { useState, useEffect } from "react";
import Subtitle from "../../../components/Subtitle";
import { HiHome } from "react-icons/hi";

const Business = () => {
	return (
		<div>
			<Subtitle text={"주요사업"} />
			<div class="mt-1 mb-4 w-full hidden lg:flex flex-row text-sm text-gray-400 items-center">
				<div class="mr-2">
					<HiHome size={16} />
				</div>
				Home {">"} 부설기관 {">"} 늘사랑주간보호센터 {">"} 주요사업
			</div>
			<div class="w-full grid grid-flow-row grid-cols-1 grid-rows-7 md:grid-cols-2 md:grid-rows-4 lg:grid-cols-4 lg:grid-rows-2 gap-x-8 mt-8">
				<div class="w-full flex flex-col justify-start items-start shadow-lg mb-4 lg:mb-8 border border-gray-200">
					<div class="w-full h-60 bg-gray-200">
						<img
							class="w-full h-full object-cover"
							src="/image/org-p1.jpg"
							alt="img"
						/>
					</div>
					<div class="flex flex-col justify-between">
						<div>
							<div class="text-lg px-4 w-full pt-4 pb-2 text-purple-700 font-bold">
								일상생활활동
							</div>
							<div class="w-full px-4 text-base flex flex-col pt-2 pb-8">
								<div>용모관리</div>
								<div>개인위생활동</div>
								<div>식사예절 익히기</div>
							</div>
						</div>
						<div>
							<div class="w-full pt-2 pb-4 px-4">
								<div class="w-full border-t border-purple-300"></div>
							</div>
							<div class="w-full px-4 text-gray-300 text-sm pb-8">
								하루 일과 중 용모 단장 및 위생 관리와 식사 예절을 연습합니다.
							</div>
						</div>
					</div>
				</div>
				<div class="w-full flex flex-col justify-start items-start shadow-lg mb-4 lg:mb-8 border border-gray-200">
					<div class="w-full h-60 bg-gray-200">
						<img
							class="w-full h-full object-cover"
							src="/image/org-p2.jpg"
							alt="img"
						/>
					</div>
					<div class="flex flex-col justify-between">
						<div>
							<div class="text-lg px-4 w-full pt-4 pb-2 text-purple-700 font-bold">
								감수성활동
							</div>
							<div class="w-full px-4 text-base flex flex-col pt-2 pb-8">
								<div>음악활동(핸드벨/리듬악기)</div>
								<div>미술활동(만화/미술)</div>
								<div>푸드아트테라피</div>
							</div>
						</div>
						<div>
							<div class="w-full pt-2 pb-4 px-4">
								<div class="w-full border-t border-purple-300"></div>
							</div>
							<div class="w-full px-4 text-gray-300 text-sm pb-8">
								몸과 마음을 건강하게 하는 활동을 합니다.
							</div>
						</div>
					</div>
				</div>
				<div class="w-full flex flex-col justify-start items-start shadow-lg mb-4 lg:mb-8 border border-gray-200">
					<div class="w-full h-60 bg-gray-200">
						<img
							class="w-full h-full object-cover"
							src="/image/org-p3.jpg"
							alt="img"
						/>
					</div>
					<div class="flex flex-col justify-between">
						<div>
							<div class="text-lg px-4 w-full pt-4 pb-2 text-purple-700 font-bold">
								취미여가활동
							</div>
							<div class="w-full px-4 text-base flex flex-col pt-2 pb-8">
								<div>외국어배우기 (중국어,영어)</div>
								<div>브레인닥터 (인지자극활동)</div>
								<div>체육활동/노래/댄스활동/난타</div>
							</div>
						</div>
						<div>
							<div class="w-full pt-2 pb-4 px-4">
								<div class="w-full border-t border-purple-300"></div>
							</div>
							<div class="w-full px-4 text-gray-300 text-sm pb-8">
								스스로 좋아하는 활동을 선택하여 자유롭게 즐깁니다. 잔존능력을
								향상하고 유지하기 위함입니다.
							</div>
						</div>
					</div>
				</div>

				<div class="w-full flex flex-col justify-start items-start shadow-lg mb-4 lg:mb-8 border border-gray-200">
					<div class="w-full h-60 bg-gray-200">
						<img
							class="w-full h-full object-cover"
							src="/image/org-p4.jpg"
							alt="img"
						/>
					</div>
					<div class="flex flex-col justify-between">
						<div>
							<div class="text-lg px-4 w-full pt-4 pb-2 text-purple-700 font-bold">
								사회적응활동
							</div>
							<div class="w-full px-4 text-base flex flex-col pt-2 pb-8">
								<div>자치회의(민주적 의사소통활동)</div>
								<div>지역사회 누리기</div>
							</div>
						</div>
						<div>
							<div class="w-full pt-2 pb-4 px-4">
								<div class="w-full border-t border-purple-300"></div>
							</div>
							<div class="w-full px-4 text-gray-300 text-sm pb-8">
								나에게 필요한 것을 스스로 선택하여 이용하고, 다른 사람에게 나의
								생각을 잘 표현할 수 있게 연습합니다.
							</div>
						</div>
					</div>
				</div>

				<div class="w-full flex flex-col justify-start items-start shadow-lg mb-4 lg:mb-8 border border-gray-200">
					<div class="w-full h-60 bg-gray-200">
						<img
							class="w-full h-full object-cover"
							src="/image/org-p5.jpg"
							alt="img"
						/>
					</div>
					<div class="flex flex-col justify-between">
						<div>
							<div class="text-lg px-4 w-full pt-4 pb-2 text-purple-700 font-bold">
								상담 및 교육활동
							</div>
							<div class="w-full px-4 text-base flex flex-col pt-2 pb-8">
								<div>상담(개별/보호자/동료상담)</div>
								<div>인권교육</div>
								<div>성폭력예방교육</div>
								<div>생활교육</div>
							</div>
						</div>
						<div>
							<div class="w-full pt-2 pb-4 px-4">
								<div class="w-full border-t border-purple-300"></div>
							</div>
							<div class="w-full px-4 text-gray-300 text-sm pb-8">
								스스로 나의 권리를 찾을 수 있고, 보호받을 수 있도록
								교육받습니다. 교육받은 내용을 사회생활에서 적용할 수 있도록
								훈련합니다.
							</div>
						</div>
					</div>
				</div>

				<div class="w-full flex flex-col justify-start items-start shadow-lg mb-4 lg:mb-8 border border-gray-200">
					<div class="w-full h-60 bg-gray-200">
						<img
							class="w-full h-full object-cover"
							src="/image/org-p6.jpg"
							alt="img"
						/>
					</div>
					<div class="flex flex-col justify-between">
						<div>
							<div class="text-lg px-4 w-full pt-4 pb-2 text-purple-700 font-bold">
								캠프활동
							</div>
							<div class="w-full px-4 text-base flex flex-col pt-2 pb-8">
								<div>"느려도 우리가 해요"(캠프)</div>
							</div>
						</div>
						<div>
							<div class="w-full pt-2 pb-4 px-4">
								<div class="w-full border-t border-purple-300"></div>
							</div>
							<div class="w-full px-4 text-gray-300 text-sm pb-8">
								1년에 2회 이상 이곳저곳에서 다양한 경험을 합니다.이 활동은
								가족과 떨어져 동료들과 함께 며칠 지내는 것입니다. 혼자 지내는
								연습을 해 볼 수 있습니다.
							</div>
						</div>
					</div>
				</div>
				<div class="w-full flex flex-col justify-start items-start shadow-lg mb-4 lg:mb-8 border border-gray-200">
					<div class="w-full h-60 bg-gray-200">
						<img
							class="w-full h-full object-cover"
							src="/image/org-p7.jpg"
							alt="img"
						/>
					</div>
					<div class="flex flex-col justify-between">
						<div>
							<div class="text-lg px-4 w-full pt-4 pb-2 text-purple-700 font-bold">
								동아리활동
							</div>
							<div class="w-full px-4 text-base flex flex-col pt-2 pb-8">
								<div>그룹 별 동아리 활동</div>
							</div>
						</div>
						<div>
							<div class="w-full pt-2 pb-4 px-4">
								<div class="w-full border-t border-purple-300"></div>
							</div>
							<div class="w-full px-4 text-gray-300 text-sm pb-8">
								동료들과 의논하여 색다른 활동을 경험해봅니다.
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Business;
