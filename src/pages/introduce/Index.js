import React, { useState, useEffect } from "react";
import { Route, Link } from "react-router-dom";
import Intro from "./Intro";
import Purpose from "./purpose";
import History from "./history";
import Org from "./org";
import Guide from "./guide";

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
		<div class="h-full z-0">
			<div class="z-0 h-56 bg-purple-100 flex justify-center items-center relative">
				<h1 class="text-4xl">협회소개</h1>
				<div class="px-36 w-full cursor-pointer absolute bottom-0 flex flex-row justify-center">
					<Link
						to="/introduce/intro"
						class={
							"w-1/5 max-w-xl py-4 text-center " +
							(page === 1
								? "text-purple-700 bg-white"
								: "text-white bg-purple-300")
						}
					>
						인사말
					</Link>
					<Link
						to="/introduce/purpose"
						class={
							"w-1/5 max-w-xl py-4 text-center " +
							(page === 2
								? "text-purple-700 bg-white"
								: "text-white bg-purple-300")
						}
					>
						설립목적
					</Link>
					<Link
						to="/introduce/history"
						class={
							"w-1/5 max-w-xl py-4 text-center " +
							(page === 3
								? "text-purple-700 bg-white"
								: "text-white bg-purple-300")
						}
					>
						연혁
					</Link>
					<Link
						to="/introduce/org"
						class={
							"w-1/5 max-w-xl py-4 text-center " +
							(page === 4
								? "text-purple-700 bg-white"
								: "text-white bg-purple-300")
						}
					>
						조직도
					</Link>
					<Link
						to="/introduce/guide"
						class={
							"w-1/5 max-w-xl py-4 text-center " +
							(page === 5
								? "text-purple-700 bg-white"
								: "text-white bg-purple-300")
						}
					>
						오시는 길
					</Link>
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
					<Route path="/introduce/purpose" component={Purpose}>
						<Purpose />
					</Route>
					<Route path="/introduce/history" component={History}>
						<History />
					</Route>
					<Route path="/introduce/org" component={Org}>
						<Org />
					</Route>
					<Route path="/introduce/guide" component={Guide}>
						<Guide />
					</Route>
				</switch>
			</div>
		</div>
	);
};

export default Index;
