import React from "react";
import { Route } from "react-router-dom";

import Notice from "./notice";
import Counseling from "./counseling";
import Support from "./support";
import Volunteer from "./volunteer";
import WriteCounsel from "./writeCounsel";
import WriteSupport from "./writeSupport";
import WriteVolunteer from "./writeVolunteer";
import Submenu from "../../components/Submenu";

const Index = () => {
	return (
		<div class="h-full z-0">
			<div>
				<div class="z-0 h-44 bg-purple-100 flex justify-center items-center ">
					<h1 class="text-4xl">참여마당</h1>
				</div>
				<div class="w-full cursor-pointer bottom-0 flex flex-row justify-center bg-purple-100 px-0 2xl:px-36 xl:px-32 md:px-8">
					<Submenu menu={4} submenu={1} />
					<Submenu menu={4} submenu={2} />
					<Submenu menu={4} submenu={3} />
					<Submenu menu={4} submenu={4} />
				</div>
			</div>
			<div class="w-full h-auto px-5 py-8 2xl:px-36 xl:px-32 md:px-8 lg:py-16">
				<switch>
					<Route exact path="/participation">
						<Notice />
					</Route>
					<Route exact path="/participation/notice">
						<Notice />
					</Route>
					<Route exact path="/participation/writeCounsel">
						<WriteCounsel />
					</Route>
					<Route exact path="/participation/counseling">
						<Counseling />
					</Route>
					<Route path="/participation/support">
						<Support />
					</Route>
					<Route path="/participation/volunteer">
						<Volunteer />
					</Route>
					<Route path="/participation/writeVolunteer">
						<WriteVolunteer />
					</Route>
					<Route path="/participation/writeSupport">
						<WriteSupport />
					</Route>
				</switch>
			</div>
		</div>
	);
};

export default Index;
