import React, { useEffect } from "react";
import Subtitle from "../../../../../components/Subtitle";
import { HiHome } from "react-icons/hi";

const Intro = () => {
  const moveUrl = function () {
    const url = "https://www.youtube.com/channel/UCqfPNO_8tBFwmxHXPFkqGkA";
    window.open(url, "_blank");
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Subtitle text={"센터소개"}/>
      <div class="my-2 mb-8 w-full hidden lg:flex flex-row text-sm text-gray-400 items-center">
        <div class="mr-2">
          <HiHome size={16}/>
        </div>
        Home {">"} 주요사업 {">"} 포항시지적장애인자립지원센터 {">"} 센터소개
      </div>
      <div class="text-base lg:text-xl font-bold leading-9 py-2 lg:py-4">
        포항시지적장애인자립지원센터
      </div>
      <div class="text-base lg:text-lg mb-8 leading-7 lg:leading-9">
        포항시지적장애인자립지원센터는, 포항시에 사는 발달장애인이 스스로 자신의
        삶을 이끌어갈 수 있도록 지원합니다. <br></br>발달장애인과 가족이 다른
        사람들과 어울려 함께 살아가는 것을 돕습니다.
      </div>
      <div class="mb-16 text-sm lg:text-base">
        <div class="px-2 lg:px-8 py-3 flex flex-row justify-start items-center border-b-2 border-purple-700">
          <div class="text-xl lg:text-2xl text-purple-700">사업현황</div>
        </div>
        <div class="px-2 lg:px-8 py-3 flex flex-row justify-center items-center border-b border-gray-300">
          <div class="w-1/6 hidden md:block">
						<span class="w-20 flex justify-between">
							<span>센</span>
							<span>터</span>
							<span>명</span>
						</span>
          </div>
          <div class="w-1/6 block md:hidden">센터명</div>
          <div class="flex-1">포항시지적장애인자립지원센터</div>
        </div>
        <div class="px-2 lg:px-8 py-3 flex flex-row justify-center items-center border-b border-gray-300">
          <div class="w-1/6 hidden md:block">
						<span class="w-20 flex justify-between">
							<span>센</span>
							<span>터</span>
							<span>장</span>
						</span>
          </div>
          <div class="w-1/6 block md:hidden">센터장</div>
          <div class="flex-1">김옥희</div>
        </div>
        <div class="px-2 lg:px-8 py-3 flex flex-row justify-center items-center border-b border-gray-300">
          <div class="w-1/6 hidden md:block">
						<span class="w-20 flex justify-between">
							<span>사</span>
							<span>업</span>
							<span>개</span>
							<span>시</span>
							<span>일</span>
						</span>
          </div>
          <div class="w-1/6 block md:hidden">사업개시일</div>
          <div class="flex-1">2006.01.01</div>
        </div>
        <div class="px-2 lg:px-8 py-3 flex flex-row justify-center items-center border-b border-gray-300">
          <div class="w-1/6 hidden md:block">
						<span class="w-20 flex justify-between">
							<span>전</span>
							<span>화</span>
						</span>
          </div>
          <div class="w-1/6 block md:hidden">전화</div>
          <div class="flex-1">054-249-9588</div>
        </div>
        <div class="px-2 lg:px-8 py-3 flex flex-row justify-center items-center border-b border-gray-300">
          <div class="w-1/6 hidden md:block">
						<span class="w-20 flex justify-between">
							<span>팩</span>
							<span>스</span>
						</span>
          </div>
          <div class="w-1/6 block md:hidden">팩스</div>
          <div class="flex-1">054-244-9588</div>
        </div>
        <div class="px-2 lg:px-8 py-3 flex flex-row justify-center items-center border-b border-gray-300">
          <div class="w-1/6 hidden md:block">
						<span class="w-20 flex justify-between">
							<span>유</span>
							<span>튜</span>
							<span>브</span>
						</span>
          </div>
          <div class="w-1/6 block md:hidden">유튜브</div>
          <div
            class="flex-1 cursor-pointer hover:text-purple-300"
            onClick={moveUrl}
          >
            {/* 경북지적발달장애인복지협회 포항시지부 유튜브채널 */}
            https://www.youtube.com/channel/UCqfPNO_8tBFwmxHXPFkqGkA
          </div>
        </div>
      </div>
      <div class="mb-16 text-sm lg:text-base">
        <div class="px-2 lg:px-8 py-3 flex flex-row justify-start items-center border-b-2 border-purple-700">
          <div class="text-xl lg:text-2xl text-purple-700">이용안내</div>
        </div>
        <div class="px-2 lg:px-8 py-3 flex flex-row justify-center items-center border-b border-gray-300">
          <div class="w-1/6 hidden md:block">
						<span class="w-16 flex justify-between">
							<span>대</span>
							<span>상</span>
							<span>자</span>
						</span>
          </div>
          <div class="w-1/6 block md:hidden">대상자</div>
          <div class="flex-1">포항시 발달장애인</div>
        </div>
        <div class="px-2 lg:px-8 py-3 flex flex-row justify-center items-center border-b border-gray-300">
          <div class="w-1/6 hidden md:block">
						<span class="w-16 flex justify-between">
							<span>이</span>
							<span>용</span>
							<span>시</span>
							<span>간</span>
						</span>
          </div>
          <div class="w-1/6 block md:hidden">이용시간</div>
          <div class="flex-1">
            평일 09:00 ~ 18:00 (토, 일요일 및 공휴일 휴무)
          </div>
        </div>
        <div class="px-2 lg:px-8 py-3 flex flex-row justify-center items-center border-b border-gray-300">
          <div class="w-1/6 hidden md:block">
						<span class="w-16 flex justify-between">
							<span>이</span>
							<span>용</span>
							<span>료</span>
						</span>
          </div>
          <div class="w-1/6 block md:hidden">이용료</div>
          <div class="flex-1">프로그램별로 상이</div>
        </div>
        <div class="px-2 lg:px-8 py-3 flex flex-row justify-center items-center border-b border-gray-300">
          <div class="w-1/6 hidden md:block">
						<span class="w-16 flex justify-between">
							<span>이</span>
							<span>용</span>
							<span>절</span>
							<span>차</span>
						</span>
          </div>
          <div class="w-1/6 block md:hidden">이용절차</div>
          <div class="flex-1">
            <div class="inline-block">
              <div>접수 ＞ 초기면접 ＞ 계획수립 ＞ 프로그램 이용</div>
            </div>
          </div>
        </div>
      </div>
      <div class="mb-16 text-sm lg:text-base">
        <div class="px-2 lg:px-8 py-3 flex flex-row justify-start items-center border-b-2 border-purple-700">
          <div class="text-xl lg:text-2xl text-purple-700">직원현황</div>
        </div>
        <div class="px-2 lg:px-8 py-3 flex flex-row justify-center items-center border-b-2 border-purple-700">
          <div class="w-1/6">
            <span class="w-16 flex justify-center">직위</span>
          </div>
          <div class="w-1/6 text-center">성명</div>
          <div class="w-2/6 text-center">전화번호</div>
          <div class="w-2/6 text-center">업무내용</div>
        </div>
        <div class="px-2 lg:px-8 py-3 flex flex-row justify-center items-center border-b border-gray-300">
          <div class="w-1/6 hidden md:block">
						<span class="w-16 flex justify-between">
							<span>센</span>
							<span>터</span>
							<span>장</span>
						</span>
          </div>
          <div class="w-1/6 block md:hidden">센터장</div>
          <div class="w-1/6 text-center">김옥희</div>
          <div class="w-2/6 text-center">054-249-9588</div>
          <div class="w-2/6">자립지원센터 총괄</div>
        </div>
        <div class="px-2 lg:px-8 py-3 flex flex-row justify-center items-center border-b border-gray-300">
          <div class="w-1/6 hidden md:block">
						<span class="w-16 flex justify-between">
							<span>사</span>
							<span>무</span>
							<span>국</span>
							<span>장</span>
						</span>
          </div>
          <div class="w-1/6 block md:hidden">사무국장</div>
          <div class="w-1/6 text-center">조혜령</div>
          <div class="w-2/6 text-center">054-249-9588</div>
          <div class="w-2/6">
            직원 및 이용자 고충처리담당, <br></br>예결산 관련 회계 총괄
          </div>
        </div>
        {/*<div class="px-2 lg:px-8 py-3 flex flex-row justify-center items-center border-b border-gray-300">*/}
        {/*	<div class="w-1/6 hidden md:block">*/}
        {/*		<span class="w-16 flex justify-between">*/}
        {/*			<span>팀</span>*/}
        {/*			<span>장</span>*/}
        {/*		</span>*/}
        {/*	</div>*/}
        {/*	<div class="w-1/6 block md:hidden">팀장</div>*/}
        {/*	<div class="w-1/6 text-center">임낭기</div>*/}
        {/*	<div class="w-2/6 text-center">070-5154-6981</div>*/}
        {/*	<div class="w-2/6">*/}
        {/*		권익옹호지원사업, 이용자 고충처리,<br></br>자원봉사자 관리*/}
        {/*	</div>*/}
        {/*</div>*/}
        <div class="px-2 lg:px-8 py-3 flex flex-row justify-center items-center border-b border-gray-300">
          <div class="w-1/6 hidden md:block">
						<span class="w-16 flex justify-between">
							<span>전</span>
							<span>문</span>
							<span>요</span>
							<span>원</span>
						</span>
          </div>
          <div class="w-1/6 block md:hidden">전문요원</div>
          <div class="w-1/6 text-center">김민정</div>
          <div class="w-2/6 text-center">070-5154-6982</div>
          <div class="w-2/6">
            자립생활지원사업, 차량 및 시설물 관리,<br></br>협회후원금 관련 업무
          </div>
        </div>
        <div class="px-2 lg:px-8 py-3 flex flex-row justify-center items-center border-b border-gray-300">
          <div class="w-1/6 hidden md:block">
						<span class="w-16 flex justify-between">
							<span>전</span>
							<span>문</span>
							<span>요</span>
							<span>원</span>
						</span>
          </div>
          <div class="w-1/6 block md:hidden">전문요원</div>
          <div class="w-1/6 text-center">양수정</div>
          <div class="w-2/6 text-center">070-5154-4930</div>
          <div class="w-2/6">
            문화체육활동지원사업, 장애인일자리사업, <br></br>입회회원 관리
          </div>
        </div>
        <div class="px-2 lg:px-8 py-3 flex flex-row justify-center items-center border-b border-gray-300">
          <div class="w-1/6 hidden md:block">
						<span class="w-16 flex justify-between">
							<span>전</span>
							<span>문</span>
							<span>요</span>
							<span>원</span>
						</span>
          </div>
          <div class="w-1/6 block md:hidden">전문요원</div>
          <div class="w-1/6 text-center">백승훈</div>
          <div class="w-2/6 text-center">070-5154-6982</div>
          <div class="w-2/6">
            문화체육활동지원사업, 시설관리
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
