import React from "react";
import Subtitle from "../../../components/Subtitle";
import { HiHome } from "react-icons/hi";
const Intro = () => {
	const moveUrl = function (url) {
		window.open(url, "_blank");
	};
	return (
		<div>
			<Subtitle text={"센터소개"} />
			<div class="mt-1 mb-4 w-full hidden lg:flex flex-row text-sm text-gray-400 items-center">
				<div class="mr-2">
					<HiHome size={16} />
				</div>
				Home {">"} 부설기관 {">"} 늘사랑주간보호센터 {">"} 센터소개
			</div>
			<div class="text-xl font-bold leading-9 py-2 md:py-4">
				늘사랑주간보호센터
			</div>
			<div class="text-base lg:text-lg mb-8 leading-7 lg:leading-9">
				<b>늘사랑주간보호센터</b>는 장애당사자의 역량강화, 자기결정권강화,
				사회통합지원을 통한 <b>발달장애인의 행복한 삶</b>을 미션으로
				발달장애인이 낮 시간 동안 다양한 활동을 하는 사회복지이용시설입니다.
			</div>
			<div class="mb-16 text-sm lg:text-base">
				<div class="px-2 lg:px-8 py-3 flex flex-row justify-start items-center border-b-2 border-purple-700">
					<div class="text-xl lg:text-2xl text-purple-700">사업현황</div>
				</div>
				<div class="px-2 lg:px-8 py-3 flex flex-row justify-center items-center border-b border-gray-300">
					<div class="w-1/6">기관명</div>
					<div class="flex-1">늘사랑보호주간센터</div>
				</div>
				<div class="px-2 lg:px-8 py-3 flex flex-row justify-center items-center border-b border-gray-300">
					<div class="w-1/6">센터장</div>
					<div class="flex-1">우숙경</div>
				</div>
				<div class="px-2 lg:px-8 py-3 flex flex-row justify-center items-center border-b border-gray-300">
					<div class="w-1/6">사업개시일</div>
					<div class="flex-1">2002.07.01</div>
				</div>
				<div class="px-2 lg:px-8 py-3 flex flex-row justify-center items-center border-b border-gray-300">
					<div class="w-1/6">전화</div>
					<div class="flex-1">054{")"}244-9577</div>
				</div>
				<div class="px-2 lg:px-8 py-3 flex flex-row justify-center items-center border-b border-gray-300">
					<div class="w-1/6">팩스</div>
					<div class="flex-1">054{")"}254-9588</div>
				</div>
				<div class="px-2 lg:px-8 py-3 flex flex-row justify-center items-center border-b border-gray-300">
					<div class="w-1/6">블로그</div>
					<div class="flex-1">
						<span
							class="cursor-pointer underline"
							onClick={() => moveUrl("https://cafe.daum.net/phaeho")}
						>
							https://cafe.daum.net/phaeho
						</span>
					</div>
				</div>
			</div>
			<div class="mb-16 text-sm lg:text-base">
				<div class="px-2 lg:px-8 py-3 flex flex-row justify-start items-center border-b-2 border-purple-700">
					<div class="text-xl lg:text-2xl text-purple-700">이용안내</div>
				</div>
				<div class="px-2 lg:px-8 py-3 flex flex-row justify-center items-center border-b border-gray-300">
					<div class="w-1/6">대상자</div>
					<div class="flex-1">
						포항시에 사는 발달장애인 (나이 : 20세~60세까지)
					</div>
				</div>
				<div class="px-2 lg:px-8 py-3 flex flex-row justify-center items-center border-b border-gray-300">
					<div class="w-1/6">이용시간</div>
					<div class="flex-1">평일 09:00 ~ 18:00</div>
				</div>
				<div class="px-2 lg:px-8 py-3 flex flex-row justify-center items-center border-b border-gray-300">
					<div class="w-1/6">이용료</div>
					<div class="flex-1">월 250,000원 (중식비/교통비 포함)</div>
				</div>
				<div class="px-2 lg:px-8 py-3 flex flex-row justify-center items-center border-b border-gray-300">
					<div class="w-1/6">이용절차</div>
					<div class="flex-1">
						<img
							src="/image/org-intro-img1.jpg"
							alt="img"
							class="h-auto xl:h-36 object-cover"
						/>
						{/* <div class="inline-block">
							<div>입소의뢰/접수 ＞ 초기면접 ＞ 입소여부 결정 및 계획</div>
							<div class="invisible">＞ 상담 및 타기관 연계</div>
						</div>
						<div class="inline-block">
							<div>＞ 적응기간 (1주) ＞ 입소 및 이용</div>
							<div>＞ 상담 및 타기관 연계</div>
						</div> */}
					</div>
				</div>
			</div>
			<div class="mb-16 text-sm lg:text-base">
				<div class="px-2 lg:px-8 py-3 flex flex-row justify-start items-center border-b-2 border-purple-700">
					<div class="text-xl lg:text-2xl text-purple-700">직원현황</div>
				</div>
				<div class="px-2 lg:px-8 py-3 flex flex-row justify-center items-center border-b-2 border-purple-700">
					<div class="w-1/6">직위</div>
					<div class="w-1/6">성명</div>
					<div class="w-2/6">전화번호</div>
					<div class="w-2/6">업무내용</div>
				</div>
				<div class="px-2 lg:px-8 py-3 flex flex-row justify-center items-center border-b border-gray-300">
					<div class="w-1/6">시설장</div>
					<div class="w-1/6">우숙경</div>
					<div class="w-2/6">054-244-9577</div>
					<div class="w-2/6">운영전반 및 조직관리 총괄</div>
				</div>
				<div class="px-2 lg:px-8 py-3 flex flex-row justify-center items-center border-b border-gray-300">
					<div class="w-1/6">팀장</div>
					<div class="w-1/6">문수영</div>
					<div class="w-2/6">054-244-9577</div>
					<div class="w-2/6">실무 총괄 / 예결산 총괄 / 프로그램 평가</div>
				</div>
				<div class="px-2 lg:px-8 py-3 flex flex-row justify-center items-center border-b border-gray-300">
					<div class="w-1/6">사회복지사</div>
					<div class="w-1/6">박은숙</div>
					<div class="w-2/6">070-5154-6983</div>
					<div class="w-2/6">프로그램 기획 / 이용자 지원 / 상담</div>
				</div>
				<div class="px-2 lg:px-8 py-3 flex flex-row justify-center items-center border-b border-gray-300">
					<div class="w-1/6">사회복지사</div>
					<div class="w-1/6">박은숙</div>
					<div class="w-2/6">070-5154-6973</div>
					<div class="w-2/6">프로그램 진행 / 이용자 지원</div>
				</div>
			</div>
		</div>
	);
};

export default Intro;
