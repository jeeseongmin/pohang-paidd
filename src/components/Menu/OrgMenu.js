import React from "react";

const orgMenu = (props) => {
	const num = props.index;
	const selected = props.selected;
	const changeSelected = props.changeSelected;

	const name = ["센터소개", "주요사업", "공지사항", "포토갤러리"];

	return (
		<div
			onClick={() => changeSelected(num)}
			class={
				"cursor-pointer text-sm mr-2 mb-2 px-4 py-2 w-auto rounded-full " +
				(selected === num
					? "border border-purple-400 text-purple-400"
					: "border border-gray-300 text-gray-300 hover:text-white hover:bg-purple-300 hover:border-purple-300")
			}
		>
			{name[num]}
		</div>
	);
};

export default orgMenu;
