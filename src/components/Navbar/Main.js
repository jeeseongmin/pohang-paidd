import React from "react";
import { Route, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setMenu, setSubmenu } from "../../reducers/setting";

// Main Menu in Navbar
const Main = (props) => {
	const dispatch = useDispatch();
	// selected menu in whole page
	const current = useSelector((state) => state.setting.menu);

	// array about hover menu
	const overMenu = props.overMenu;
	// this menu
	const menu = props.menu;

	// target url
	const address = [
		"/introduce/intro",
		"/business/base/default",
		"/organization/0",
		"/participation/notice",
		"/local",
	];
	const title = ["협회소개", "주요사업", "부설기관", "참여마당", "지역복지"];

	const goPage = (num) => {
		dispatch(setMenu(num));
		dispatch(setSubmenu(1));
		window.scrollTo(0, 0);
	};
	return (
		<>
			<Link
				to={address[menu - 1]}
				onClick={() => goPage(menu)}
				class={
					"pl-4 font-semibold text-lg " +
					(overMenu[menu - 1] || current === menu ? "text-purple-700" : "")
				}
			>
				{title[menu - 1]}
			</Link>
		</>
	);
};

export default Main;
