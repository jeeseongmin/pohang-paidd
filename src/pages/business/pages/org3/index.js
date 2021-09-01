import React, { useEffect, useState } from "react";
import { Route, Link } from "react-router-dom";
import BusinessMenu from "../../../../components/Menu/BusinessMenu";
import Business from "./components/business";
import Gallery from "./components/gallery";
import Intro from "./components/intro";
import Notice from "../common/notice/notice";
import NoticeWrite from "../common/notice/noticeWrite";
import NoticeDetail from "../common/notice/noticeDetail";

const Index = (props) => {
	const [selected, setSelected] = useState(0);

	const changeSelected = (num) => {
		setSelected(num);
		window.scrollTo(0, 0);
	};

	const Content = () => {
		if (selected === 0) {
			return <Intro />;
		} else if (selected === 1) {
			return <Business />;
		} else if (selected === 2) {
			if (props.type === "default") {
				return <Notice pages={props.pages} />;
			} else if (props.type === "noticeWrite") {
				return <NoticeWrite pages={props.pages} />;
			} else {
				return <NoticeDetail pages={props.pages} id={props.type} />;
			}
		} else if (selected === 3) {
			return <Gallery />;
		}
	};

	return (
		<div class="h-full z-0">
			<div class="w-full h-auto">
				<div class="flex flex-row justify-start items-center pb-8">
					{[0, 1, 2, 3].map((element, index) => {
						return (
							<BusinessMenu
								index={element}
								selected={selected}
								pages={props.pages}
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

export default Index;
