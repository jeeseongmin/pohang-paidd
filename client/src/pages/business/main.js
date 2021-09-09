import React, { useState, useEffect } from "react";
import OrgMenu from "../../components/Menu/orgMenu";
import Business from "./components/business";
import Gallery from "./components/gallery";
import Intro from "./components/intro";
import Notice from "./pages/common/notice/notice";
import NoticeWrite from "./pages/common/notice/noticeWrite";
import NoticeDetail from "./pages/common/notice/noticeDetail";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const Main = (props) => {
	const history = useHistory();
	const [selected, setSelected] = useState(0);
	const changeSelected = (num) => {
		setSelected(num);
		window.scrollTo(0, 0);
	};

	const Content = () => {
		if (window.location.pathname.includes("notice")) {
			history.push(window.location.pathname);
			setSelected(2);
		} else if (window.location.pathname.includes("gallery")) {
			history.push(window.location.pathname);
			setSelected(3);
		} else {
			if (selected === 0) {
				return <Intro />;
			} else if (selected === 1) {
				return <Business />;
			} else if (selected === 2) {
				if (props.type === "default") {
					return <Notice />;
				} else if (props.type === "noticeWrite") {
					return <NoticeWrite />;
				} else if (props.type === "noticeDetail") {
					return <NoticeDetail />;
				}
				return <Notice />;
			} else if (selected === 3) {
				return <Gallery />;
			}
		}
	};

	return (
		<div class="h-full z-0">
			<div class="w-full h-auto">
				<div class="flex flex-row justify-start items-center pb-8">
					{[0, 1, 2, 3].map((element, index) => {
						return (
							<OrgMenu
								index={element}
								selected={selected}
								changeSelected={changeSelected}
							/>
						);
					})}
				</div>

				<div>
					<Content />
				</div>
			</div>
		</div>
	);
};

export default Main;
