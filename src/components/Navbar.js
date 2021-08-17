import React, { useState } from "react";
import { Route, Link } from "react-router-dom";

const Navbar = () => {
	const [overMenu, setOverMenu] = useState([false, false, false, false, false]);
	const hoverIn = (menu) => {
		const cp = [...overMenu];
		cp[menu] = true;
		setOverMenu(cp);
	};

	const hoverOut = (menu) => {
		const cp = [...overMenu];
		cp[menu] = false;
		setOverMenu(cp);
	};

	return (
		<div class="w-full px-36 h-16 flex justify-start shadow-xl">
			<div class="flex justify-center items-center cursor-pointer">
				<Link to="/">
					<img src="/image/logo.png" class="h-10" alt="logo" />
				</Link>
			</div>
			<div class="z-30 flex-1 flex justify-end items-center">
				<div
					onMouseOver={() => hoverIn(0)}
					onMouseOut={() => hoverOut(0)}
					class="h-full relative ml-16 flex items-center"
				>
					<Link
						to="/introduce/intro"
						class={
							"pl-4 font-semibold text-lg " +
							(overMenu[0] ? "text-purple-700" : "")
						}
					>
						협회소개
					</Link>
					<div
						class={
							"border border-gray-100 w-36 absolute top-14 shadow-lg flex flex-col bg-white " +
							(overMenu[0] ? "block" : "hidden")
						}
					>
						<Link
							to="/introduce/intro"
							class="text-xs text-gray-400 pl-4 py-3 border-b border-gray-200 hover:bg-gray-100 hover:text-purple-700"
						>
							인사말
						</Link>
						<Link
							to="/introduce/purpose"
							class="text-xs text-gray-400 pl-4 py-3 border-b border-gray-200 hover:bg-gray-100 hover:text-purple-700"
						>
							설립목적
						</Link>
						<Link
							to="/introduce/history"
							class="text-xs text-gray-400 pl-4 py-3 border-b border-gray-200 hover:bg-gray-100 hover:text-purple-700"
						>
							연혁
						</Link>
						<Link
							to="/introduce/org"
							class="text-xs text-gray-400 pl-4 py-3 border-b border-gray-200 hover:bg-gray-100 hover:text-purple-700"
						>
							조직도
						</Link>
						<Link
							to="/introduce/guide"
							class="text-xs text-gray-400 pl-4 py-3 hover:bg-gray-100 hover:text-purple-700"
						>
							오시는 길
						</Link>
					</div>
				</div>
				<div
					onMouseOver={() => hoverIn(1)}
					onMouseOut={() => hoverOut(1)}
					class="h-full relative ml-16 flex items-center"
				>
					<Link
						class={
							"pl-4 font-semibold text-lg " +
							(overMenu[1] ? "text-purple-700" : "")
						}
					>
						주요사업
					</Link>
					<div
						class={
							"border border-gray-100 w-56 absolute top-14 shadow-lg flex flex-col bg-white " +
							(overMenu[1] ? "block" : "hidden")
						}
					>
						<Link class="text-xs text-gray-400 pl-4 py-3 border-b border-gray-200 hover:bg-gray-100 hover:text-purple-700">
							협회사업
						</Link>
						<Link class="text-xs text-gray-400 pl-4 py-3 border-b border-gray-200 hover:bg-gray-100 hover:text-purple-700">
							포항시지적장애인 자립지원센터
						</Link>
						<Link class="text-xs text-gray-400 pl-4 py-3 border-b border-gray-200 hover:bg-gray-100 hover:text-purple-700">
							장애인활동 지원사업
						</Link>
						<Link class="text-xs text-gray-400 pl-4 py-3 hover:bg-gray-100 hover:text-purple-700">
							방과후활동 지원사업
						</Link>
					</div>
				</div>

				<div
					onMouseOver={() => hoverIn(2)}
					onMouseOut={() => hoverOut(2)}
					class="h-full relative ml-16 flex items-center"
				>
					<Link
						class={
							"pl-4 font-semibold text-lg " +
							(overMenu[2] ? "text-purple-700" : "")
						}
					>
						부설기관
					</Link>
					<div
						class={
							"border border-gray-100 w-36 absolute top-14 shadow-lg flex flex-col bg-white " +
							(overMenu[2] ? "block" : "hidden")
						}
					>
						<Link class="text-xs text-gray-400 pl-4 py-3  hover:bg-gray-100 hover:text-purple-700">
							부설기관
						</Link>
					</div>
				</div>
				<div
					onMouseOver={() => hoverIn(3)}
					onMouseOut={() => hoverOut(3)}
					class="h-full relative ml-16 flex items-center"
				>
					<Link
						class={
							"pl-4 font-semibold text-lg " +
							(overMenu[3] ? "text-purple-700" : "")
						}
					>
						참여마당
					</Link>
					<div
						class={
							"border border-gray-100 w-36 absolute top-14 shadow-lg flex flex-col bg-white " +
							(overMenu[3] ? "block" : "hidden")
						}
					>
						<Link class="text-xs text-gray-400 pl-4 py-3 border-b border-gray-200 hover:bg-gray-100 hover:text-purple-700">
							공지사항
						</Link>
						<Link class="text-xs text-gray-400 pl-4 py-3 border-b border-gray-200 hover:bg-gray-100 hover:text-purple-700">
							건의 및 고충상담
						</Link>
						<Link class="text-xs text-gray-400 pl-4 py-3 border-b border-gray-200 hover:bg-gray-100 hover:text-purple-700">
							후원
						</Link>
						<Link class="text-xs text-gray-400 pl-4 py-3 hover:bg-gray-100 hover:text-purple-700">
							자원봉사
						</Link>
					</div>
				</div>
				<div
					onMouseOver={() => hoverIn(4)}
					onMouseOut={() => hoverOut(4)}
					class="h-full relative ml-16 flex items-center"
				>
					<Link
						class={
							"pl-4 font-semibold text-lg " +
							(overMenu[4] ? "text-purple-700" : "")
						}
					>
						지역복지
					</Link>
					<div
						class={
							"border border-gray-100 w-36 absolute top-14 shadow-lg flex flex-col bg-white " +
							(overMenu[4] ? "block" : "hidden")
						}
					>
						<Link class="text-xs text-gray-400 pl-4 py-3 hover:bg-gray-100 hover:text-purple-700">
							지역복지
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
