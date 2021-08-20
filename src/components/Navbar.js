import React, { useState, useRef, useEffect } from "react";
import { Route, Link } from "react-router-dom";

const Navbar = () => {
	console.log("url", window.location.pathname);
	const [overMenu, setOverMenu] = useState([false, false, false, false, false]);
	const [page, setPage] = useState(0);
	const [subPage, setSubPage] = useState(0);

	useEffect(() => {
		let arr = window.location.pathname.split("/");
		if (arr[1] === "introduce") {
			setPage(1);
			if (arr[2] === "intro") {
				setSubPage(1);
			} else if (arr[2] === "purpose") {
				setSubPage(2);
			} else if (arr[2] === "history") {
				setSubPage(3);
			} else if (arr[2] === "org") {
				setSubPage(4);
			} else if (arr[2] === "guide") {
				setSubPage(5);
			}
		} else if (arr[1] === "business") {
			setPage(2);
			if (arr[2] === "base") {
				setSubPage(1);
			} else if (arr[2] === "b1") {
				setSubPage(2);
			} else if (arr[2] === "b2") {
				setSubPage(3);
			} else if (arr[2] === "b3") {
				setSubPage(4);
			}
		} else if (arr[1] === "organization") {
			setPage(3);
			setSubPage(1);
		} else if (arr[1] === "participation") {
			setPage(4);
			if (arr[2] === "notice") {
				setSubPage(1);
			} else if (arr[2] === "counseling") {
				setSubPage(2);
			} else if (arr[2] === "support") {
				setSubPage(3);
			} else if (arr[2] === "volunteer") {
				setSubPage(4);
			}
		} else if (arr[1] === "local") {
			setPage(5);
			setSubPage(1);
		}
	}, [window.location.pathname]);

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

	const goPage = (num) => {
		setPage(num);
		window.scrollTo(0, 0);
	};

	const goSubPage = (num1, num2) => {
		setPage(num1);
		setSubPage(num2);
		window.scrollTo(0, 0);
	};

	return (
		<div class="z-40 w-full px-36 h-16 flex justify-start shadow-lg fixed bg-white ">
			<div class="flex justify-center items-center cursor-pointer">
				<Link to="/" onClick={() => goPage(0)}>
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
						onClick={() => goPage(1)}
						class={
							"pl-4 font-semibold text-lg " +
							(overMenu[0] || page === 1 ? "text-purple-700" : "")
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
							onClick={() => goSubPage(1, 1)}
							class={
								"text-xs pl-4 py-3 border-b border-gray-200 hover:bg-gray-100 hover:text-purple-700 " +
								(page === 1 && subPage === 1
									? "text-purple-700"
									: "text-gray-400")
							}
						>
							인사말
						</Link>
						<Link
							to="/introduce/purpose"
							onClick={() => goSubPage(1, 2)}
							class={
								"text-xs pl-4 py-3 border-b border-gray-200 hover:bg-gray-100 hover:text-purple-700 " +
								(page === 1 && subPage === 2
									? "text-purple-700"
									: "text-gray-400")
							}
						>
							설립목적
						</Link>
						<Link
							to="/introduce/history"
							onClick={() => goSubPage(1, 3)}
							class={
								"text-xs pl-4 py-3 border-b border-gray-200 hover:bg-gray-100 hover:text-purple-700 " +
								(page === 1 && subPage === 3
									? "text-purple-700"
									: "text-gray-400")
							}
						>
							연혁
						</Link>
						<Link
							to="/introduce/org"
							onClick={() => goSubPage(1, 4)}
							class={
								"text-xs pl-4 py-3 border-b border-gray-200 hover:bg-gray-100 hover:text-purple-700 " +
								(page === 1 && subPage === 4
									? "text-purple-700"
									: "text-gray-400")
							}
						>
							조직도
						</Link>
						<Link
							to="/introduce/guide"
							onClick={() => goSubPage(1, 5)}
							class={
								"text-xs pl-4 py-3 border-b border-gray-200 hover:bg-gray-100 hover:text-purple-700 " +
								(page === 1 && subPage === 5
									? "text-purple-700"
									: "text-gray-400")
							}
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
							(overMenu[1] || page === 2 ? "text-purple-700" : "")
						}
						onClick={() => goPage(2)}
						to="/business/base/default"
					>
						주요사업
					</Link>
					<div
						class={
							"border border-gray-100 w-56 absolute top-14 shadow-lg flex flex-col bg-white " +
							(overMenu[1] ? "block" : "hidden")
						}
					>
						<Link
							onClick={() => goSubPage(2, 1)}
							to="/business/base/default"
							class={
								"text-xs pl-4 py-3 border-b border-gray-200 hover:bg-gray-100 hover:text-purple-700 " +
								(page === 2 && subPage === 1
									? "text-purple-700"
									: "text-gray-400")
							}
						>
							협회사업
						</Link>
						<Link
							onClick={() => goSubPage(2, 2)}
							to="/business/b1/default"
							class={
								"text-xs pl-4 py-3 border-b border-gray-200 hover:bg-gray-100 hover:text-purple-700 " +
								(page === 2 && subPage === 2
									? "text-purple-700"
									: "text-gray-400")
							}
						>
							포항시지적장애인 자립지원센터
						</Link>
						<Link
							onClick={() => goSubPage(2, 3)}
							to="/business/b2/default"
							class={
								"text-xs pl-4 py-3 border-b border-gray-200 hover:bg-gray-100 hover:text-purple-700 " +
								(page === 2 && subPage === 3
									? "text-purple-700"
									: "text-gray-400")
							}
						>
							장애인활동 지원사업
						</Link>
						<Link
							onClick={() => goSubPage(2, 4)}
							to="/business/b3/default"
							class={
								"text-xs pl-4 py-3 border-b border-gray-200 hover:bg-gray-100 hover:text-purple-700 " +
								(page === 2 && subPage === 4
									? "text-purple-700"
									: "text-gray-400")
							}
						>
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
						onClick={() => goPage(3)}
						to="/organization/0"
						class={
							"pl-4 font-semibold text-lg " +
							(overMenu[2] || page === 3 ? "text-purple-700" : "")
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
						<Link
							onClick={() => goSubPage(3, 1)}
							to="/organization/0"
							class={
								"text-xs pl-4 py-3 border-b border-gray-200 hover:bg-gray-100 hover:text-purple-700 " +
								(page === 3 && subPage === 1
									? "text-purple-700"
									: "text-gray-400")
							}
						>
							늘사랑주간보호센터
						</Link>
					</div>
				</div>
				<div
					onMouseOver={() => hoverIn(3)}
					onMouseOut={() => hoverOut(3)}
					class="h-full relative ml-16 flex items-center"
				>
					<Link
						to="/participation/notice"
						onClick={() => goPage(4)}
						class={
							"pl-4 font-semibold text-lg " +
							(overMenu[3] || page === 4 ? "text-purple-700" : "")
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
						<Link
							onClick={() => goSubPage(4, 1)}
							to="/participation/notice"
							class={
								"text-xs pl-4 py-3 border-b border-gray-200 hover:bg-gray-100 hover:text-purple-700 " +
								(page === 4 && subPage === 1
									? "text-purple-700"
									: "text-gray-400")
							}
						>
							공지사항
						</Link>
						<Link
							onClick={() => goSubPage(4, 2)}
							to="/participation/counseling"
							class={
								"text-xs pl-4 py-3 border-b border-gray-200 hover:bg-gray-100 hover:text-purple-700 " +
								(page === 4 && subPage === 2
									? "text-purple-700"
									: "text-gray-400")
							}
						>
							건의 및 고충상담
						</Link>
						<Link
							onClick={() => goSubPage(4, 3)}
							to="/participation/support"
							class={
								"text-xs pl-4 py-3 border-b border-gray-200 hover:bg-gray-100 hover:text-purple-700 " +
								(page === 4 && subPage === 3
									? "text-purple-700"
									: "text-gray-400")
							}
						>
							후원
						</Link>
						<Link
							onClick={() => goSubPage(4, 4)}
							to="/participation/volunteer"
							class={
								"text-xs pl-4 py-3 border-b border-gray-200 hover:bg-gray-100 hover:text-purple-700 " +
								(page === 4 && subPage === 4
									? "text-purple-700"
									: "text-gray-400")
							}
						>
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
						onClick={() => goPage(5)}
						to="/local"
						class={
							"pl-4 font-semibold text-lg " +
							(overMenu[4] || page === 5 ? "text-purple-700" : "")
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
						<Link
							onClick={() => goSubPage(5, 1)}
							to="/local"
							class={
								"text-xs pl-4 py-3 border-b border-gray-200 hover:bg-gray-100 hover:text-purple-700 " +
								(page === 5 && subPage === 1
									? "text-purple-700"
									: "text-gray-400")
							}
						>
							지역복지
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
