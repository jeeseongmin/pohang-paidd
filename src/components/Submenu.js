import React, { useState, useEffect } from "react";
import { Route, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setMenu, setSubmenu } from "../reducers/setting";

const Submenu = (props) => {
	const dispatch = useDispatch();

	const currentMenu = useSelector((state) => state.setting.menu);
	const currentSubmenu = useSelector((state) => state.setting.submenu);

	// this menu
	const menu = props.menu;
	const submenu = props.submenu;

	// target url
	const address = [
		[
			"/introduce/intro",
			"/introduce/purpose",
			"/introduce/history",
			"/introduce/org",
			"/introduce/guide",
		],
		[
			"/business/base/default",
			"/business/org1/default",
			"/business/org2/default",
			"/business/org3/default",
		],
		["/organization/intro/0"],
		[
			"/participation/notice/0",
			"/participation/counseling/0",
			"/participation/support/0",
			"/participation/volunteer/0",
		],
		["/local"],
	];

	const title = [
		["인사말", "설립목적", "연혁", "조직도", "오시는 길"],
		[
			"협회사업",
			"지적장애인 지원센터",
			"장애인활동 지원사업",
			"방과후활동 지원사업",
		],
		["늘사랑주간보호센터"],
		["공지사항", "건의 및 고충상담", "후원", "자원봉사"],
		["지역복지"],
	];
	const count = "w-1/" + title[menu - 1].length;

	const goSubPage = (num1, num2) => {
		dispatch(setMenu(num1));
		dispatch(setSubmenu(num2));
		window.scrollTo(0, 0);
	};

	return (
		<>
			<Link
				to={address[menu - 1][submenu - 1]}
				onClick={() => goSubPage(menu, submenu)}
				class={
					count +
					" max-w-xl py-4 text-center text-sm lg:text-base bg-purple-white flex justify-center items-center " +
					(currentSubmenu === submenu
						? "text-purple-700 bg-white"
						: "text-white bg-purple-400 hover:bg-purple-300")
				}
			>
				<span class="hidden md:inline-block">
					{title[menu - 1][submenu - 1]}
				</span>
				{menu !== 2 && menu !== 4 && (
					<span class="inline-block md:hidden">
						{title[menu - 1][submenu - 1].substr(0, 5)}
						<br></br>
						{title[menu - 1][submenu - 1].substr(6, 10)}
					</span>
				)}
				{menu === 2 && (
					<span class="inline-block md:hidden">
						{title[menu - 1][submenu - 1].substr(0, 5)}
						<br></br>
						{title[menu - 1][submenu - 1].substr(6, 10)}
					</span>
				)}
				{menu === 4 && (
					<span class="inline-block md:hidden">
						{title[menu - 1][submenu - 1].substr(0, 4)}
						<br></br>
						{title[menu - 1][submenu - 1].substr(5, 10)}
					</span>
				)}
			</Link>
		</>
	);
};

export default Submenu;
