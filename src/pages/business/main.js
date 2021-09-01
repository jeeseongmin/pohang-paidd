import React, { useState } from "react";
import OrgMenu from "../../components/Menu/orgMenu";
import Business from "./components/business";
import Gallery from "./components/gallery";
import Intro from "./components/intro";
import Notice from "./pages/common/notice/notice";
import NoticeWrite from "./pages/common/notice/noticeWrite";
import NoticeDetail from "./pages/common/notice/noticeDetail";

const Main = (props) => {
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
