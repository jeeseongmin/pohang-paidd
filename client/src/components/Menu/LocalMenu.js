import React, { useState } from "react";

const LocalMenu = (props) => {
	const num = props.index;
	const selected = props.selected;
	const changeSelected = props.changeSelected;

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

	const onChange = (num) => {
		changeSelected(num);

		document.getElementById("scrollRef").scrollTo(0, 0);
	};

	return (
		<div
			onClick={() => onChange(num)}
			class={
				"cursor-pointer text-xs md:text-sm mr-2 mb-2 px-2 md:px-4 py-1 md:py-2 w-auto rounded-full " +
				(selected === num
					? "border border-purple-400 bg-purple-400 text-white"
					: "border border-gray-300 text-gray-300 hover:border-purple-300 hover:bg-purple-300 hover:text-white")
			}
		>
			{name[num]}
		</div>
	);
};

export default LocalMenu;
