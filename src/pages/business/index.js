import React, { useState, useEffect } from "react";
import { Route, Link } from "react-router-dom";
import Base from "./base";
import B1 from "./pages/b1/index";
import B2 from "./pages/b2/index";
import B3 from "./pages/b3/index";
import Submenu from "../../components/Submenu";
import Layout from "../../components/Layout";

const Index = ({ match }) => {
	useEffect(() => {
		console.log("match : ", match.params.type);
	}, [match]);

	return (
		<Layout>
			<div class="h-full">
				<div>
					<div class="h-44 bg-purple-100 flex justify-center items-center ">
						<h1 class="text-4xl">주요사업</h1>
					</div>
					<div class="w-full cursor-pointer bottom-0 flex flex-row justify-center bg-purple-100 px-0 2xl:px-36 xl:px-32 md:px-0">
						<Submenu menu={2} submenu={1} key={1} />
						<Submenu menu={2} submenu={2} Key={2} />
						<Submenu menu={2} submenu={3} key={3} />
						<Submenu menu={2} submenu={4} key={4} />
					</div>
				</div>
				<div class="w-full h-auto px-5 py-8 2xl:px-36 xl:px-32 md:px-8 lg:py-16">
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
		</Layout>
	);
};

export default Index;
