import React from "react";
import { Route } from "react-router-dom";
import Intro from "./intro";
import Purpose from "./purpose";
import History from "./history";
import Org from "./org";
import Guide from "./guide";
import Submenu from "../../components/Submenu";

const Index = () => {
	return (
		<div class="h-full">
			<div>
				<div class="h-44 bg-purple-100 flex justify-center items-center">
					<h1 class="text-4xl">협회소개</h1>
				</div>
				<div class="px-36 w-full cursor-pointer bottom-0 flex flex-row justify-center bg-purple-100">
					<Submenu menu={1} submenu={1} />
					<Submenu menu={1} submenu={2} />
					<Submenu menu={1} submenu={3} />
					<Submenu menu={1} submenu={4} />
					<Submenu menu={1} submenu={5} />
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
