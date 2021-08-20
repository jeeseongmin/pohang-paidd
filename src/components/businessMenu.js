import React from "react";
import { Route, Link } from "react-router-dom";

const businessMenu = (props) => {
	console.log("businessMenu", props);
	const num = props.index;
	const selected = props.selected;
	const changeSelected = props.changeSelected;

	const name = ["센터소개", "주요사업", "공지사항", "포토갤러리"];

	return (
		<Link
			onClick={() => changeSelected(num)}
			to={"/business/" + props.pages + "/default"}
			class={
				"cursor-pointer text-sm mr-2 mb-2 px-4 py-2 w-auto rounded-full " +
				(selected === num
					? "border border-purple-700 bg-purple-700 text-white font-bold"
					: "border border-gray-300 text-gray-300")
			}
		>
			{name[num]}
		</Link>
	);
};

export default businessMenu;
