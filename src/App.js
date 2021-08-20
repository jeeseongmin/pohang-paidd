import React from "react";
import { Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Introduce from "./pages/introduce/index";
import Business from "./pages/business/index";
import Organization from "./pages/organization/index";
import Participation from "./pages/participation/index";
import Local from "./pages/local/index";

const Routes = () => {
	return (
		<div class="h-full select-none ">
			<Navbar />
			<div class="z-30 h-auto pt-16">
				<switch>
					<Route path="/" component={Home} exact />
					<Route exact path="/introduce/:pages" component={Introduce} />
					<Route path="/business/:pages/:type" component={Business} />
					<Route path="/organization/:pages" component={Organization} />
					<Route exact path="/participation/:pages" component={Participation} />
					<Route exact path="/local" component={Local} />
				</switch>
			</div>
		</div>
	);
};

export default Routes;
