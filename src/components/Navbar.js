import React, { useState } from "react";
import { Route, Link } from "react-router-dom";

const Navbar = () => {
	const [mouseHover, setMouseHover] = useState(0);
	const hoverIn = (e) => {
		setMouseHover(1);
	};

	const hoverOut = (e) => {
		setMouseHover(0);
	};

	return (
		<div
			onMouseOver={hoverIn}
			onMouseOut={hoverOut}
			class="w-full px-36 h-16 bg-yellow-200 flex justify-start"
		>
			<div class="border border-red-500 flex justify-center items-center">
				<img src="/image/logo.png" class="h-10" alt="logo" />
			</div>
			<div class="border border-blue-500 flex-1 flex justify-end items-center">
				<Link class="font-semibold text-xl ml-16">협회소개</Link>
				<Link class="font-semibold text-xl ml-16">주요사업</Link>
				<Link class="font-semibold text-xl ml-16">부설기관</Link>
				<Link class="font-semibold text-xl ml-16">참여마당</Link>
				<Link class="font-semibold text-xl ml-16">지역복지</Link>
			</div>
		</div>
	);
};

export default Navbar;
