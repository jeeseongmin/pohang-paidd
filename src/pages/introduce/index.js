import React, { useState, useEffect } from "react";
import { Route, Link } from "react-router-dom";
import Intro from "./intro";
import Purpose from "./purpose";
import History from "./history";
import Org from "./org";
import Guide from "./guide";
import Menu from "../../components/Submenu";

const Index = ({ match }) => {
	const [page, setPage] = useState(1);

	useEffect(() => {
		console.log(match.url);
		if (match.url === "/introduce/intro") {
			setPage(1);
		} else if (match.url === "/introduce/purpose") {
			setPage(2);
		} else if (match.url === "/introduce/history") {
			setPage(3);
		} else if (match.url === "/introduce/org") {
			setPage(4);
		} else if (match.url === "/introduce/guide") {
			setPage(5);
		}
	}, [match.url]);
	return (
		<div class="h-full">
			<div>
				<div class="h-44 bg-purple-100 flex justify-center items-center">
					<h1 class="text-4xl">협회소개</h1>
				</div>
				<div class="px-36 w-full cursor-pointer bottom-0 flex flex-row justify-center bg-purple-100">
					<Menu
						text={"인사말"}
						current={page}
						page={1}
						address={"/introduce/intro"}
						count={5}
					/>
					<Menu
						text={"설립목적"}
						current={page}
						page={2}
						address={"/introduce/purpose"}
						count={5}
					/>
					<Menu
						text={"연혁"}
						current={page}
						page={3}
						address={"/introduce/history"}
						count={5}
					/>
					<Menu
						text={"조직도"}
						current={page}
						page={4}
						address={"/introduce/org"}
						count={5}
					/>
					<Menu
						text={"오시는 길"}
						current={page}
						page={5}
						address={"/introduce/guide"}
						count={5}
					/>
				</div>
			</div>

			<div class="w-full h-auto">
				<switch>
					<Route exact path="/introduce">
						<Intro />
					</Route>
					<Route exact path="/introduce/intro">
						<Intro />
					</Route>
					<Route path="/introduce/purpose">
						<Purpose />
					</Route>
					<Route path="/introduce/history">
						<History />
					</Route>
					<Route path="/introduce/org">
						<Org />
					</Route>
					<Route path="/introduce/guide">
						<Guide />
					</Route>
				</switch>
			</div>
		</div>
	);
};

export default Index;
