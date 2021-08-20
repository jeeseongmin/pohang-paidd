import React from "react";

const Intro = () => {
	return (
		<div>
			<h1 class="text-3xl mb-8 font-bold">센터소개</h1>
			<div class="text-xl font-bold leading-9">방과후활동서비스사업</div>
			<div class="text-lg mb-8 leading-9">
				방과후활동서비스사업의 목적은,<br></br>
				발달장애학생에게 그룹형 활동서비스를 제공하여 의미 있는 여가활동 및
				성인기 자립준비를 지원합니다.<br></br>
				또한 다양한 참여 프로그램으로 방과후 돌봄 사각지대를 해소하고 부모의
				원활한 사회 및 경제적 활동을 지원합니다.
			</div>
			<div class="mb-16">
				<div class="px-8 py-3 flex flex-row justify-start items-center border-b-2 border-purple-700">
					<div class="text-2xl text-purple-700">사업현황</div>
				</div>
				<div class="px-8 py-3 flex flex-row justify-center items-center border-b border-gray-300">
					<div class="w-1/6">센터명</div>
					<div class="flex-1">청소년발달장애학생 방과후활동서비스</div>
				</div>
				<div class="px-8 py-3 flex flex-row justify-center items-center border-b border-gray-300">
					<div class="w-1/6">센터장</div>
					<div class="flex-1">김옥희</div>
				</div>
				<div class="px-8 py-3 flex flex-row justify-center items-center border-b border-gray-300">
					<div class="w-1/6">사업개시일</div>
					<div class="flex-1">2019.09.01</div>
				</div>
				<div class="px-8 py-3 flex flex-row justify-center items-center border-b border-gray-300">
					<div class="w-1/6">전화</div>
					<div class="flex-1">070-5154-5600</div>
				</div>
				<div class="px-8 py-3 flex flex-row justify-center items-center border-b border-gray-300">
					<div class="w-1/6">팩스</div>
					<div class="flex-1">054-244-9588</div>
				</div>
			</div>
			<div class="mb-16">
				<div class="px-8 py-3 flex flex-row justify-start items-center border-b-2 border-purple-700">
					<div class="text-2xl text-purple-700">이용안내</div>
				</div>
				<div class="px-8 py-3 flex flex-row justify-center items-center border-b border-gray-300">
					<div class="w-1/6">대상자</div>
					<div class="flex-1">포항시 발달장애인 (만 6세 ~ 만 18세 미만)</div>
				</div>
				<div class="px-8 py-3 flex flex-row justify-center items-center border-b border-gray-300">
					<div class="w-1/6">이용시간</div>
					<div class="flex-1">평일 09:00 ~ 18:00 (그룹별 상이)</div>
				</div>
				<div class="px-8 py-3 flex flex-row justify-center items-center border-b border-gray-300">
					<div class="w-1/6">이용료</div>
					<div class="flex-1">무료</div>
				</div>
				<div class="px-8 py-3 flex flex-row justify-center items-center border-b border-gray-300">
					<div class="w-1/6">신청절차</div>
					<div class="flex-1">
						<div class="inline-block">
							<div>
								서비스 신청(해당 행정복지센터) ＞ 신청접수 ＞ 결과 통지 ＞
								선정통보서 수령
							</div>
						</div>
					</div>
				</div>
				<div class="px-8 py-3 flex flex-row justify-center items-center border-b border-gray-300">
					<div class="w-1/6">이용절차</div>
					<div class="flex-1">
						<div class="inline-block">
							<div>
								방과후활동 서비스 이용자 선정 ＞ 기관에 전화 또는 방문접수 ＞
								초기 상담(그룹지정)
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="mb-16">
				<div class="px-8 py-3 flex flex-row justify-start items-center border-b-2 border-purple-700">
					<div class="text-2xl text-purple-700">직원현황</div>
				</div>
				<div class="px-8 py-3 flex flex-row justify-center items-center border-b-2 border-purple-700">
					<div class="w-1/6">직위</div>
					<div class="w-1/6">성명</div>
					<div class="w-2/6">전화번호</div>
					<div class="w-2/6">업무내용</div>
				</div>
				<div class="px-8 py-3 flex flex-row justify-center items-center border-b border-gray-300">
					<div class="w-1/6">센터장</div>
					<div class="w-1/6">김옥희</div>
					<div class="w-2/6">054-5154-5600</div>
					<div class="w-2/6">방과후활동서비스 총괄</div>
				</div>
				<div class="px-8 py-3 flex flex-row justify-center items-center border-b border-gray-300">
					<div class="w-1/6">전담인력</div>
					<div class="w-1/6">임현숙</div>
					<div class="w-2/6">070-5154-5600</div>
					<div class="w-2/6">
						이용자 모집 및 상담, 사례관리 <br></br>협력기관 연계 및 관리,
						프로그램 계획 및 운영
					</div>
				</div>
				<div class="px-8 py-3 flex flex-row justify-center items-center border-b border-gray-300">
					<div class="w-1/6">제공인력</div>
					<div class="w-1/6">손해경</div>
					<div class="w-2/6">070-5154-5600</div>
					<div class="w-2/6">
						이용자 모집 및 상담,<br></br>프로그램 계획 및 진행
					</div>
				</div>
			</div>
		</div>
	);
};

export default Intro;
