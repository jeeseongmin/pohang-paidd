import React, { useState, useEffect } from "react";
import { Route, Link } from "react-router-dom";
import Base from "./base";
import B1 from "./pages/b1/index";
import B2 from "./pages/b2/index";
import B3 from "./pages/b3/index";
import Menu from "../../components/Submenu";

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
					<Menu
						text={"협회사업"}
						current={page}
						page={1}
						address={"/business/base/default"}
						count={4}
					/>
					<Menu
						text={"포항시지적장애인 자립지원센터"}
						current={page}
						page={2}
						address={"/business/b1/default"}
						count={4}
					/>
					<Menu
						text={"장애인활동지원사업"}
						current={page}
						page={3}
						address={"/business/b2/default"}
						count={4}

					/>
					<Menu
						text={"방과후활동서비스사업"}
						current={page}
						page={4}
						address={"/business/b3/default"}
						count={4}

					/>
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
