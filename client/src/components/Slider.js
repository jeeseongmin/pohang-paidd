import React, { useState, useEffect } from "react";
import SlideBlock from "react-slick";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setMenu, setSubmenu, setSidebar } from "../reducers/setting";

const Slider = () => {
	const dispatch = useDispatch();
	const [hoverBtn, setHoverBtn] = useState(false);

	const settings = {
		dots: false,
		fade: true,
		arrows: false,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		autoplay: false,
		autoplaySpeed: 3000,
		slidesToScroll: 1,
	};

	const goSubPage = (main, sub) => {
		dispatch(setMenu(main));
		dispatch(setSubmenu(sub));
		window.scrollTo(0, 0);
		document.getElementById("scrollRef").scrollTo(0, 0);
	};
	return (
		<>
			<div class="">
				<div class="w-full h-auto lg:h-2/4 flex flex-row items-center relative">
					<img
						src={"/image/slide1-img1.png"}
						alt="main-img1"
						class={"object-cover " + (hoverBtn ? "w-0 " : "w-full ")}
					/>
					<img
						src={"/image/slide1-img1-hover.png"}
						alt="main-img1"
						class={"object-cover " + (hoverBtn ? "w-full " : "w-0 ")}
					/>
					<div class="absolute right-0 bottom-0 w-1/2 h-1/2 grid z-50 grid-cols-3">
						<div></div>
						<Link to="/business/base/default" onClick={() => goSubPage(2, 1)}>
							<div
								onMouseOver={() => setHoverBtn(true)}
								onMouseLeave={() => setHoverBtn(false)}
								class="w-full h-full rounded-full"
							></div>
						</Link>
						<div></div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Slider;
