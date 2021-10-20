import React from "react";
import { Route, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setMenu, setSubmenu } from "../../reducers/setting";

// Main Menu in Navbar
const Sub = (props) => {
	const dispatch = useDispatch();
	// selected menu in whole page
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
			"/business/org1/intro",
			"/business/org2/intro",
			"/business/org3/intro",
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
			"지적장애인자립지원센터",
			"장애인활동지원사업",
			"방과후활동서비스사업",
		],
		["늘사랑주간보호센터"],
		["공지사항", "건의 및 고충상담", "후원", "자원봉사"],
		["지역복지"],
	];

	const goSubPage = (num1, num2) => {
		dispatch(setMenu(num1));
		dispatch(setSubmenu(num2));
		window.scrollTo(0, 0);
		document.getElementById("scrollRef").scrollTo(0, 0);
	};

	return (
		<>
			<Link
				to={address[menu - 1][submenu - 1]}
				onClick={() => goSubPage(menu, submenu)}
				class={
					"text-sm pl-4 py-3 border-b transition delay-50 duration-300 border-gray-200 hover:bg-gray-100 hover:text-purple-700 " +
					(currentMenu === menu && currentSubmenu === submenu
						? "text-purple-700"
						: "text-gray-400")
				}
			>
				{title[menu - 1][submenu - 1]}
			</Link>
		</>
	);
};

export default Sub;
