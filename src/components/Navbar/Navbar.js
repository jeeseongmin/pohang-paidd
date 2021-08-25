import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setMenu, setSubmenu, toggleSidebar } from "../../reducer/settingSlice";
import Main from "./Main";
import Sub from "./Sub";
import { makeStyles } from "@material-ui/core/styles";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
	const dispatch = useDispatch();
	const sidebar = useSelector((state) => state.setting.sidebar);

	const [overMenu, setOverMenu] = useState([false, false, false, false, false]);

	const hoverAction = (menu, TF) => {
		const cp = [...overMenu];
		cp[menu] = TF;
		setOverMenu(cp);
	};

	const goPage = (num) => {
		dispatch(setMenu(num));
		dispatch(setSubmenu(1));
		window.scrollTo(0, 0);
	};

	const onToggleSidebar = () => {
		console.log(sidebar);
		dispatch(toggleSidebar(sidebar));
	};

	return (
		<>
			<div
				class={
					"z-20 w-full px-5 h-16 hidden justify-start shadow-2xl bg-white lg:flex 2xl:px-36 xl:px-32 lg:px-5 fixed "
				}
			>
				<div class="flex justify-center items-center cursor-pointer">
					<Link to="/" onClick={() => goPage(0)}>
						<img src="/image/logo.png" class="h-8 xl:h-10" alt="logo" />
					</Link>
				</div>
				<div class="z-30 flex-1 flex justify-end items-center">
					<div
						onMouseOver={() => hoverAction(0, true)}
						onMouseOut={() => hoverAction(0, false)}
						class="h-full relative ml-16 flex items-center"
					>
						<Main overMenu={overMenu} menu={1} />
						<div
							class={
								"border-t border-l border-r border-gray-100 w-36 absolute top-14 shadow-lg flex flex-col bg-white " +
								(overMenu[0] ? "block" : "hidden")
							}
						>
							<Sub menu={1} submenu={1} />
							<Sub menu={1} submenu={2} />
							<Sub menu={1} submenu={3} />
							<Sub menu={1} submenu={4} />
							<Sub menu={1} submenu={5} />
						</div>
					</div>
					<div
						onMouseOver={() => hoverAction(1, true)}
						onMouseOut={() => hoverAction(1, false)}
						class="h-full relative ml-16 flex items-center"
					>
						<Main overMenu={overMenu} menu={2} />
						<div
							class={
								"border-t border-l border-r border-gray-100 w-56 absolute top-14 shadow-lg flex flex-col bg-white " +
								(overMenu[1] ? "block" : "hidden")
							}
						>
							<Sub menu={2} submenu={1} />
							<Sub menu={2} submenu={2} />
							<Sub menu={2} submenu={3} />
							<Sub menu={2} submenu={4} />
						</div>
					</div>

					<div
						onMouseOver={() => hoverAction(2, true)}
						onMouseOut={() => hoverAction(2, false)}
						class="h-full relative ml-16 flex items-center"
					>
						<Main overMenu={overMenu} menu={3} />

						<div
							class={
								"border-t border-l border-r border-gray-100 w-36 absolute top-14 shadow-lg flex flex-col bg-white " +
								(overMenu[2] ? "block" : "hidden")
							}
						>
							<Sub menu={3} submenu={1} />
						</div>
					</div>
					<div
						onMouseOver={() => hoverAction(3, true)}
						onMouseOut={() => hoverAction(3, false)}
						class="h-full relative ml-16 flex items-center"
					>
						<Main overMenu={overMenu} menu={4} />
						<div
							class={
								"border-t border-l border-r border-gray-100 w-36 absolute top-14 shadow-lg flex flex-col bg-white " +
								(overMenu[3] ? "block" : "hidden")
							}
						>
							<Sub menu={4} submenu={1} />
							<Sub menu={4} submenu={2} />
							<Sub menu={4} submenu={3} />
							<Sub menu={4} submenu={4} />
						</div>
					</div>
					<div
						onMouseOver={() => hoverAction(4, true)}
						onMouseOut={() => hoverAction(4, false)}
						class="h-full relative ml-16 flex items-center"
					>
						<Main overMenu={overMenu} menu={5} />
						<div
							class={
								"border-t border-l border-r border-gray-100 w-36 absolute top-14 shadow-lg flex flex-col bg-white " +
								(overMenu[4] ? "block" : "hidden")
							}
						>
							<Sub menu={5} submenu={1} />
						</div>
					</div>
				</div>
			</div>
			<div
				class={
					"z-20 w-full px-5 h-14 flex justify-between shadow-2xl bg-white lg:hidden sm:px-10 sm:h-16 fixed "
				}
			>
				<div class="h-full flex justify-center items-center text-purple-300">
					{/* <GiHamburgerMenu
						onClick={onToggleSidebar}
						size={28}
						class="cursor-pointer"
					/> */}
					<div class="h-full flex justify-center items-center">
						<img
							onClick={onToggleSidebar}
							src="/image/hamburger.png"
							alt="hamburger"
							class="object-cover"
						/>
					</div>
				</div>
				<div class="flex justify-center items-center cursor-pointer">
					<Link to="/" onClick={() => goPage(0)}>
						<img src="/image/logo.png" class="h-5 sm:h-8" alt="logo" />
					</Link>
				</div>
			</div>
		</>
	);
};

// 반응형 xl부터 시작
// 기존에 px-10이고, xl:px-36이다.
//

export default Navbar;
