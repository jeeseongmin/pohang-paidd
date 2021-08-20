import React, { useEffect, useState } from "react";
import { Route, Link } from "react-router-dom";
import OrgMenu from "../../components/orgMenu";
import Business from "./components/business";
import Gallery from "./components/gallery";
import Intro from "./components/intro";
import Notice from "./components/notice";

const Index = ({ match }) => {
	const [selected, setSelected] = useState(0);
	console.log(match.params.pages);

	useEffect(() => {
		if (match.params.pages === 0) {
			// 늘사랑주간보호센터
		}
	}, []);

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
			return <Notice />;
		} else if (selected === 3) {
			return <Gallery />;
		}
	};

	return (
		<div class="h-full z-0">
			<div class="z-0 h-56 bg-purple-100 flex justify-center items-center relative">
				<h1 class="text-4xl">늘사랑주간보호센터</h1>
				{/* 나중에 부설기관이 늘어나면 추가하기 */}
				{/* <div class="px-36 w-full cursor-pointer absolute bottom-0 flex flex-row justify-center">
					<Link
						to="/organization"
						class={
							"w-1/5 max-w-xl py-4 text-center " +
							(page === 1
								? "text-purple-700 bg-white font-bold"
								: "text-white bg-purple-300")
						}
					>
						늘사랑주간보호센터
					</Link>
					<Link
						class={
							"w-1/5 max-w-xl py-4 text-center " +
							(page === 2
								? "text-purple-700 bg-white font-bold"
								: "text-white bg-purple-300")
						}
					>
						준비중
					</Link>
				</div> */}
			</div>
			<div class="w-full h-auto px-36">
				<div class="flex flex-row justify-start items-center py-8">
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

export default Index;
