import React, { useState, useEffect } from "react";
import { Route, Link } from "react-router-dom";
import Base from "./base";
import B1 from "./pages/b1/index";
import B2 from "./pages/b2/index";
import B3 from "./pages/b3/index";
import Submenu from "../../components/Submenu";

const Index = ({ match }) => {
	return (
		<div class="h-full">
			<div>
				<div class="h-44 bg-purple-100 flex justify-center items-center ">
					<h1 class="text-4xl">주요사업</h1>
				</div>
				<div class="px-36 w-full cursor-pointer bottom-0 flex flex-row justify-center bg-purple-100">
					<Submenu menu={2} submenu={1} />
					<Submenu menu={2} submenu={2} />
					<Submenu menu={2} submenu={3} />
					<Submenu menu={2} submenu={4} />
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
