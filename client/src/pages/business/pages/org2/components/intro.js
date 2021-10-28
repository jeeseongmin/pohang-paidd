import React from "react";
import Subtitle from "../../../../../components/Subtitle";
import { HiHome } from "react-icons/hi";

const Intro = () => {
	const moveUrl = function () {
		const url = "https://cafe.daum.net/phaeho";
		window.open(url, "_blank");
	};
	return (
		<div>
			<Subtitle text={"사업소개"} />
			<div class="mt-2 mb-8 w-full hidden lg:flex flex-row text-sm text-gray-400 items-center">
				<div class="mr-2">
					<HiHome size={16} />
				</div>
				Home {">"} 주요사업 {">"} 장애인활동지원사업 {">"} 사업소개
			</div>
			<div class="text-base lg:text-xl font-bold leading-9 py-2 lg:py-4">
				장애인활동지원사업
			</div>
			<div class="text-base lg:text-lg mb-8 leading-7 lg:leading-9">
				장애인활동지원사업은{" "}
				<b>
					신체적·정신적 장애 등의 사유로 혼자서 일상생활과 사회생활을 하기
					어려운 중증 장애인에게 활동지원급여를 제공
				</b>
				하면서 자립생활과 사회참여를 지원하고 그 가족의 부담을 줄임으로써
				장애인의 삶의 질 증진을 목적으로 합니다.
			</div>
			<div class="mb-16 text-sm lg:text-base">
				<div class="px-2 lg:px-8 py-3 flex flex-row justify-start items-center border-b-2 border-purple-700">
					<div class="text-xl lg:text-2xl text-purple-700">사업현황</div>
				</div>
				<div class="px-2 lg:px-8 py-3 flex flex-row justify-center items-center border-b border-gray-300">
					<div class="w-1/6 hidden md:block">
						<span class="w-20 flex justify-between">
							<span>사</span>
							<span>업</span>
							<span>명</span>
						</span>
					</div>
					<div class="w-1/6 block md:hidden">사업명</div>
					<div class="flex-1">장애인활동지원사업</div>
				</div>
				<div class="px-2 lg:px-8 py-3 flex flex-row justify-center items-center border-b border-gray-300">
					<div class="w-1/6 hidden md:block">
						<span class="w-20 flex justify-between">
							<span>관</span>
							<span>리</span>
							<span>책</span>
							<span>임</span>
							<span>자</span>
						</span>
					</div>
					<div class="w-1/6 block md:hidden">관리책임자</div>
					<div class="flex-1">김옥희</div>
				</div>
				<div class="px-2 lg:px-8 py-3 flex flex-row justify-center items-center border-b border-gray-300">
					<div class="w-1/6 hidden md:block">
						<span class="w-20 flex justify-between">
							<span>지</span>
							<span>정</span>
							<span>일</span>
						</span>
					</div>
					<div class="w-1/6 block md:hidden">지정일</div>
					<div class="flex-1">
						2007.05 “장애인활동보조지원사업 사업기관” 선정 (포항시) <br></br>
						2011.10 “장애인활동지원제도” 시행
					</div>
				</div>
				<div class="px-2 lg:px-8 py-3 flex flex-row justify-center items-center border-b border-gray-300">
					<div class="w-1/6 hidden md:block">
						<span class="w-20 flex justify-between">
							<span>전</span>
							<span>화</span>
						</span>
					</div>
					<div class="w-1/6 block md:hidden">전화</div>
					<div class="flex-1">
						<b>유선 : </b> 054-253-9500 / 253-9588 <br></br>
						<b>휴대 : </b> 010-2730-9588 / 010-8447-9500
					</div>
				</div>
				<div class="px-2 lg:px-8 py-3 flex flex-row justify-center items-center border-b border-gray-300">
					<div class="w-1/6 hidden md:block">
						<span class="w-20 flex justify-between">
							<span>팩</span>
							<span>스</span>
						</span>
					</div>
					<div class="w-1/6 block md:hidden">팩스</div>
					<div class="flex-1">054-610-9522</div>
				</div>
				<div class="px-2 lg:px-8 py-3 flex flex-row justify-center items-center border-b border-gray-300">
					<div class="w-1/6 hidden md:block">
						<span class="w-20 flex justify-between">
							<span>블</span>
							<span>로</span>
							<span>그</span>
						</span>
					</div>
					<div class="w-1/6 block md:hidden">블로그</div>
					<div
						onClick={moveUrl}
						class="flex-1 cursor-pointer hover:text-purple-300"
					>
						{/* 경북지적발달장애인복지협회 포항시지부 블로그 */}
						https://cafe.daum.net/phaeho
					</div>
				</div>
			</div>

			<div class="mb-16 text-sm lg:text-base">
				<div class="px-2 lg:px-8 py-3 flex flex-row justify-start items-center border-b-2 border-purple-700">
					<div class="text-xl lg:text-2xl text-purple-700">직원현황</div>
				</div>
				<div class="px-2 lg:px-8 py-3 flex flex-row justify-center items-center border-b-2 border-purple-700">
					<div class="w-1/6">
						<span class="w-20 flex justify-center">직위</span>
					</div>
					<div class="w-1/6 text-center">성명</div>
					<div class="w-2/6 text-center">전화번호</div>
					<div class="w-2/6 text-center">업무내용</div>
				</div>
				<div class="px-2 lg:px-8 py-3 flex flex-row justify-center items-center border-b border-gray-300">
					<div class="w-1/6 hidden md:block">
						<span class="w-20 flex justify-between">
							<span>관</span>
							<span>리</span>
							<span>책</span>
							<span>임</span>
							<span>자</span>
						</span>
					</div>
					<div class="w-1/6 block md:hidden">사업장</div>
					<div class="w-1/6 text-center">김옥희</div>
					<div class="w-2/6 text-center">054-253-9500</div>
					<div class="w-2/6">
						장애인활동지원사업 운영 총괄, <br></br>장애인활동지원사 및 수급자
						고충 민원 상담, <br></br>장애인활동지원사 모집 및 사업홍보 관리,
						<br></br>
						고충처리위원, 인사위원, 운영위원
					</div>
				</div>
				<div class="px-2 lg:px-8 py-3 flex flex-row justify-center items-center border-b border-gray-300">
					<div class="w-1/6 hidden md:block">
						<span class="w-20 flex justify-between">
							<span>팀</span>
							<span>장</span>
						</span>
					</div>
					<div class="w-1/6 block md:hidden">팀장</div>
					<div class="w-1/6 text-center">남현숙</div>
					<div class="w-2/6 text-center">070-5154-6971</div>
					<div class="w-2/6">
						장애인활동지원사업 업무 총괄, <br></br>장애인활동지원사 및 수급자
						고충 민원 상담, <br></br>장애인활동지원사 연계 및 파견, <br></br>
						고충처리위원, 인사위원, 운영위원회 운영 관리
					</div>
				</div>
				<div class="px-2 lg:px-8 py-3 flex flex-row justify-center items-center border-b border-gray-300">
					<div class="w-1/6 hidden md:block">
						<span class="w-20 flex justify-between">
							<span>대</span>
							<span>리</span>
						</span>
					</div>
					<div class="w-1/6 block md:hidden">대리</div>
					<div class="w-1/6 text-center">최미경</div>
					<div class="w-2/6 text-center">070-5154-6972</div>
					<div class="w-2/6">
						예결산 관련 회계 총괄,<br></br>
						4대보험 및 퇴직연금 관리, <br></br>
						장애인활동지원사 및 수급자 고충 민원 상담, <br></br>
						신규활동지원사 접수 및 상담
					</div>
				</div>
				<div class="px-2 lg:px-8 py-3 flex flex-row justify-center items-center border-b border-gray-300">
					<div class="w-1/6 hidden md:block">
						<span class="w-20 flex justify-between">
							<span>전</span>
							<span>담</span>
							<span>인</span>
							<span>력</span>
						</span>
					</div>
					<div class="w-1/6 block md:hidden">전담인력</div>
					<div class="w-1/6 text-center">양충숙</div>
					<div class="w-2/6 text-center">054-253-9588</div>
					<div class="w-2/6">
						장애인활동지원사 연계 및 파견, <br></br>모니터링 및 상담, <br></br>
						장애인활동지원사 보수교육 관리, <br></br>신규활동지원사 실습 관리
					</div>
				</div>
				<div class="px-2 lg:px-8 py-3 flex flex-row justify-center items-center border-b border-gray-300">
					<div class="w-1/6 hidden md:block">
						<span class="w-20 flex justify-between">
							<span>전</span>
							<span>담</span>
							<span>인</span>
							<span>력</span>
						</span>
					</div>
					<div class="w-1/6 block md:hidden">전담인력</div>
					<div class="w-1/6 text-center">정유리</div>
					<div class="w-2/6 text-center">054-253-9500</div>
					<div class="w-2/6">
						장애인활동지원사 연계 및 파견, <br></br>
						모니터링 및 상담,<br></br>수급자 교육 관리<br></br>신규 활동지원사
						접수 및 상담
					</div>
				</div>
			</div>
		</div>
	);
};

export default Intro;
