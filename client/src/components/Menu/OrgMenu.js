import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

const OrgMenu = (props) => {
	const history = useHistory();
	const num = props.index;
	const selected = props.selected;
	const changeSelected = props.changeSelected;

	const name = ["센터소개", "주요사업", "공지사항", "포토갤러리"];
	const url = [
		"/organization/intro/0",
		"/organization/business/0",
		"/organization/notice/0",
		"/organization/gallery/0",
	];
	const onChange = (num) => {
		changeSelected(num);
		history.push(url[num]);
		document.getElementById("scrollRef").scrollTo(0, 0);
	};

	return (
		<div
			onClick={() => onChange(num)}
			class={
				"cursor-pointer text-xs lg:text-sm mr-2 mb-2 px-2 md:px-4 py-2 w-auto rounded-full " +
				(selected === num
					? "border border-purple-400 text-purple-400"
					: "border border-gray-300 text-gray-300 hover:text-white hover:bg-purple-300 hover:border-purple-300")
			}
		>
			{name[num]}
		</div>
	);
};

export default OrgMenu;
