import React from "react";

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
	];

	var dataList = [
		[
			{
				name: "(사)한국지체장애인협회 경북협회 포항시지회",
				phone: "054-277-0844",
				address: "포항시 남구 형산강북로 371",
			},
			{
				name: "(사)경북시각장애인연합회 포항지회",
				phone: "054-274-4495",
				address: "포항시 남구 중앙로 116, 2층",
			},
			{
				name: "(사)경북농아인협회 포항시지회",
				phone: "054-274-9980",
				address: "포항시 북구 죽도로 32, 3층",
			},
			{
				name: "(사)한국교통장애인협회 포항시지회",
				phone: "054-231-9700",
				address: "포항시 남구 섬안로 185",
			},
			{
				name: "(사)경북지적발달장애인복지협회 포항시지부",
				phone: "054-249-9588",
				address: "포항시 북구 새천년대로 1307, 3층",
			},
			{
				name: "(사)한국장애인부모회 포항시지부",
				phone: "054-252-3143",
				address: "포항시 북구 소티재로 126번길 4",
			},
			{
				name: "(사)경북신체장애인복지회 포항시지부",
				phone: "054-247-1335",
				address: "포항시 북구 두호로 37번길 6-4",
			},
			{
				name: "(사)경북장애인정보화협회 포항시지회",
				phone: "054-242-1335",
				address: "포항시 북구 법원로 8번길 20",
			},
			{
				name: "(사)경북뇌병변장애인인권협회 포항시지회",
				phone: "054-242-6622",
				address: "포항시 남구 중앙로 90 3층",
			},
			{
				name: "(사)경북장애인부모회 포항시지부",
				phone: "054-278-0113",
				address: "포항시 남구 상대로 152 1층",
			},
			{
				name: "(사)경북장애인부모회 포항시지부",
				phone: "054-286-4956",
				address: "포항시 북구 소티재로 151번길 9",
			},
			{
				name: "(사)한국신장장애인협회 경북협회 포항지부",
				phone: "054-274-0774",
				address: "포항시 남구 상대로 111",
			},
			{
				name: "(사)한국농어촌장애인진흥회 포항시지회",
				phone: "054-277-4400",
				address: "포항시 남구 상공로 31 섬안빌딩 4층",
			},
			{
				name: "(사)한국척수장애인협회 포항시지회",
				phone: "054-281-1574",
				address: "포항시 북구 장량로 87번길 6",
			},
			{
				name: "(사)전국산재장애인단체연합회 포항시지회",
				phone: "054-251-9370",
				address: "포항시 북구 법원로 63번길 21",
			},
			{
				name: "(사)경북시각장애인연합회",
				phone: "054-277-2551",
				address: "포항시 북구 법원로 105",
			},
			{
				name: "(사)경북장애인권익협회",
				phone: "054-274-1316",
				address: "포항시 북구 소티재로 151번길 9",
			},
			{
				name: "(사)경상북도장애인부모회",
				phone: "054-276-2023",
				address: "포항시 남구 연일중앙로 8, 2층",
			},
			{
				name: "(사)한국농어촌장애인진흥회 경북지부",
				phone: "054-281-0015",
				address: "포항시 남구 상대로 155",
			},
		],
		[],
		[],
		[],
	];

	return (
		<div>
			<div class="text-2xl my-4">{name[num]}</div>
			<div class="w-full h-auto mb-8">
				{/* 딱 10개 씩만 로드하기 */}
				<div class="w-full px-8 py-2 flex justify-end items-center border-t-2 border-b-2 border-purple-600">
					<div class="text-lg w-1/3 ">기관명</div>
					<div class="text-lg w-1/3 ">전화번호</div>
					<div class="text-lg w-1/3 ">주소</div>
				</div>

				{dataList[num].map((element, index) => {
					return (
						<div class="cursor-pointer w-full px-8 py-4 flex justify-end items-center border-b border-gray-300">
							<div class="text-base w-1/3 pr-4">{element.name}</div>
							<div class="text-base w-1/3 ">{element.phone}</div>
							<div class="text-base w-1/3 ">{element.address}</div>
						</div>
					);
				})}
			</div>
			{/* <div class="flex flex-row justify-center items-center">
				<div
					onClick={() => setPage(1)}
					class={
						"mr-2 w-8 h-8 flex justify-center items-center cursor-pointer " +
						(page === 1
							? "text-white border-2 border-purple-700 bg-purple-700  "
							: "border border-gray-300 text-gray-300")
					}
				>
					1
				</div>
				<div
					onClick={() => setPage(2)}
					class={
						"mr-2 w-8 h-8 flex justify-center items-center cursor-pointer " +
						(page === 2
							? "text-white border-2 border-purple-700 bg-purple-700  "
							: "border border-gray-300 text-gray-300")
					}
				>
					2
				</div>
				<div
					class={
						"mr-2 w-8 h-8 flex justify-center items-center cursor-pointer " +
						(page === 3
							? "text-white border-2 border-purple-700 bg-purple-700  "
							: "border border-gray-300 text-gray-300")
					}
					onClick={() => setPage(3)}
				>
					3
				</div>
			</div> */}
		</div>
	);
};

export default LocalTable;
