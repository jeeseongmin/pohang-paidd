import React, { useState, useEffect } from "react";
import BusinessMenu from "../../../../components/Menu/BusinessMenu";
import Business from "./components/business";

import Intro from "./components/intro";
import Notice from "../common/notice/notice";
import NoticeWrite from "../common/notice/noticeWrite";
import NoticeDetail from "../common/notice/noticeDetail";

import Gallery from "../common/gallery/gallery";
import GalleryDetail from "../common/gallery/galleryDetail";
import GalleryWrite from "../common/gallery/galleryWrite";
import { useHistory } from "react-router-dom";
import { HiHome } from "react-icons/hi";

const Index = (props, { match }) => {
	const history = useHistory();
	const [selected, setSelected] = useState(0);
	const name = ["intro", "business", "notice", "gallery"];

	const changeSelected = (num) => {
		setSelected(num);
		window.scrollTo(0, 0);
	};

	const Content = () => {
		const pathname = window.location.pathname;
		const test = "/business/org1/notice/write";
		// /business/org/intro
		if (pathname.includes("intro")) {
			setSelected(0);
			return <Intro />;
		} else if (pathname.includes("notice")) {
			setSelected(2);
			// list : /business/org/notice
			if (pathname.split("/").length === 4) {
				return <Notice pages={props.pages} />;
			}
			// write : /business/org/notice/write
			else if (pathname.includes("write")) {
				return <NoticeWrite pages={props.pages} />;
			}
			// detail : /business/org/notice/:id
			else {
				const id = pathname.split("/")[4];
				return <NoticeDetail pages={props.pages} id={id} />;
			}
		} else if (window.location.pathname.includes("gallery")) {
			setSelected(3);
			// list : /business/org/gallery
			if (pathname.split("/").length === 4) {
				return <Gallery pages={props.pages} />;
			}
			// write : /business/org/gallery/write
			else if (pathname.includes("write")) {
				return <GalleryWrite pages={props.pages} />;
			}
			// detail : /business/org/gallery/:id
			else {
				const id = pathname.split("/")[4];
				return <GalleryDetail pages={props.pages} id={id} />;
			}
		}
		// /business/org/business
		else if (pathname.includes("business")) {
			setSelected(1);
			return <Business />;
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
								type={name[index]}
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
