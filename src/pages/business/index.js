import React, { useState, useEffect } from "react";
import { Route, Link } from "react-router-dom";
import Base from "./base";
import B1 from "./pages/b1/index";
import B2 from "./pages/b2/index";
import B3 from "./pages/b3/index";

const Index = ({ match }) => {
	const [page, setPage] = useState(1);

	useEffect(() => {
		console.log(match);
		if (match.params.pages === "base") {
			setPage(1);
		} else if (match.params.pages === "b1") {
			setPage(2);
		} else if (match.params.pages === "b2") {
			setPage(3);
		} else if (match.params.pages === "b3") {
			setPage(4);
		}
	}, [match]);

	return (
		<div class="h-full">
			<div>
				<div class="h-44 bg-purple-100 flex justify-center items-center ">
					<h1 class="text-4xl">주요사업</h1>
				</div>
				<div class="px-36 w-full cursor-pointer bottom-0 flex flex-row justify-center bg-purple-100">
					<Link
						to="/business/base/default"
						class={
							"w-1/4 max-w-xl py-4 text-center hover:bg-white hover:text-purple-700 hover:font-bold " +
							(page === 1
								? "text-purple-700 bg-white font-bold"
								: "text-white bg-purple-300")
						}
					>
						협회사업
					</Link>
					<Link
						to="/business/b1/default"
						class={
							"w-1/4 max-w-xl py-4 text-center hover:bg-white hover:text-purple-700 hover:font-bold " +
							(page === 2
								? "text-purple-700 bg-white font-bold"
								: "text-white bg-purple-300")
						}
					>
						포항시지적장애인 자립지원센터
					</Link>
					<Link
						to="/business/b2/default"
						class={
							"w-1/4 max-w-xl py-4 text-center hover:bg-white hover:text-purple-700 hover:font-bold " +
							(page === 3
								? "text-purple-700 bg-white font-bold"
								: "text-white bg-purple-300")
						}
					>
						장애인활동지원사업
					</Link>
					<Link
						to="/business/b3/default"
						class={
							"w-1/4 max-w-xl py-4 text-center hover:bg-white hover:text-purple-700 hover:font-bold " +
							(page === 4
								? "text-purple-700 bg-white font-bold"
								: "text-white bg-purple-300")
						}
					>
						방과후활동서비스사업
					</Link>
				</div>
			</div>
			<div class="w-full h-auto px-36 py-16">
				<switch>
					<Route exact path="/business/base/:type">
						<Base />
					</Route>
					<Route exact path="/business/b1/:type">
						<B1 pages={"b1"} type={match.params.type} />
					</Route>
					<Route exact path="/business/b2/:type">
						<B2 pages={"b2"} type={match.params.type} />
					</Route>
					<Route exact path="/business/b3/:type">
						<B3 pages={"b3"} type={match.params.type} />
					</Route>
				</switch>
			</div>
		</div>
	);
};

export default Index;
