import React from "react";
import { Route, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const BusinessMenu = (props) => {
	const menu = useSelector((state) => state.setting.menu);
	const submenu = useSelector((state) => state.setting.submenu);

	const num = props.index;
	const selected = props.selected;
	const changeSelected = props.changeSelected;

	const name = ["센터소개", "주요사업", "공지사항", "포토갤러리"];
	const name2 = ["사업소개", "주요사업", "공지사항", "포토갤러리"];

	return (
		<Link
			onClick={() => changeSelected(num)}
			to={"/business/" + props.pages + "/default"}
			class={
				"cursor-pointer text-xs lg:text-sm mr-2 mb-2 px-2 md:px-4 py-2 w-auto rounded-full " +
				(selected === num
					? "border border-purple-400 text-purple-400"
					: "border border-gray-300 text-gray-300 hover:text-white hover:bg-purple-300 hover:border-purple-300")
			}
		>
			{menu === 2 && (submenu === 3 || submenu === 4) ? name2[num] : name[num]}
		</Link>
	);
};

export default BusinessMenu;
