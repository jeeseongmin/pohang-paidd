import React, { useState, useEffect } from "react";
import { Route, Link, useHistory } from "react-router-dom";
import OrgMenu from "../../components/Menu/OrgMenu";
import Business from "./components/business";
import Gallery from "./components/gallery";
import Intro from "./components/intro";
import Notice from "./components/notice/index";
import NoticeWrite from "./components/notice/writeNotice";
import NoticeDetail from "./components/notice/noticeDetail";
import Layout from "../../components/Layout";

const Index = ({ match }) => {
	const [selected, setSelected] = useState(0);
	const history = useHistory();
	const changeSelected = (num) => {
		setSelected(num);
		window.scrollTo(0, 0);
	};

	useEffect(() => {
		if (selected === 0) {
			history.push("/organization/intro/0");
		} else if (selected === 1) {
			history.push("/organization/business/0");
		} else if (selected === 2) {
			history.push("/organization/notice/0");
		} else if (selected === 3) {
			history.push("/organization/gallery/0");
		}
	}, [selected]);

	return (
		<Layout>
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
				<div class="w-full h-auto px-5 py-4 2xl:px-36 xl:px-32 md:px-8 lg:py-16">
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
						<switch>
							<Route exact path="/organization/intro/0">
								<Intro />
							</Route>
							<Route exact path="/organization/business/0">
								<Business />
							</Route>
							<Route exact path="/organization/notice/0">
								<Notice />
							</Route>
							<Route exact path="/organization/gallery/0">
								<Gallery />
							</Route>
							<Route exact path="/organization/writeNotice/0">
								<NoticeWrite />
							</Route>
							<Route exact path="/organization/noticeDetail/:id">
								<NoticeDetail id={match.params.type} />
							</Route>
						</switch>
						{/* <Content /> */}
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default Index;
