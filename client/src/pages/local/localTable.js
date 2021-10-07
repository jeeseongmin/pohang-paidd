import React from "react";
import dataList from "./data/list";
import { HiHome } from "react-icons/hi";

const LocalTable = (props) => {
	const num = props.index;

	const name = [
		"장애인단체",
		"거주시설",
		"지역사회재활시설",
		"직업재활시설",
		"활동지원기관",
		"방문목욕기관",
		"주간활동지원기관",
		"방과후활동기관",
		"응급/긴급기관",
		"기타공공기관",
		"화재 및 재난",
		"응급 상황",
		"응급상담 및 병원",
	];

	return (
		<div class="select-text">
			<div class="text-2xl mt-0 md:mt-0 mb-4 lg:mb-0 font-bold">
				{name[num]}
			</div>
			<div class="mt-2 mb-8 w-full hidden lg:flex flex-row text-sm text-gray-400 items-center">
				<div class="mr-2">
					<HiHome size={16} />
				</div>
				Home {">"} 지역복지 {">"} {name[num]}
			</div>
			<div class="w-full h-auto mb-8 ">
				{/* 딱 10개 씩만 로드하기 */}
				<div class="w-full px-2 text-base lg:text-lg lg:px-8 py-2 flex justify-end items-center border-t-2 border-b-2 border-purple-600">
					<div class="w-2/4 text-center">기관명</div>
					<div class="w-1/4 ">전화번호</div>
					<div class="w-1/4 ">주소</div>
				</div>

				{dataList[num].map((element, index) => {
					return (
						<div class="cursor-pointer text-sm lg:text-base w-full px-2 lg:px-8 py-4 flex justify-end items-center border-b border-gray-300 hover:bg-gray-100">
							<div class="w-2/4 pr-4">{element.name}</div>
							<div class="w-1/4 ">054-{element.phone}</div>
							<div class="w-1/4 ">{element.address}</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default LocalTable;
