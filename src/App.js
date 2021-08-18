import React from "react";
import { Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import introduce from "./pages/introduce";
import business from "./pages/business/index";
import organization from "./pages/organization/index";
import participation from "./pages/participation";
import local from "./pages/local/index";

const Routes = () => {
	return (
		<div class="h-full select-none ">
			<Navbar />
			<div class="z-30 h-auto pt-16">
				<switch>
					<Route path="/" component={Home} exact />
					<Route exact path="/introduce/:pages" component={introduce} />
					<Route path="/business" component={business} />
					<Route path="/organization" component={organization} />
					<Route exact path="/participation/:pages" component={participation} />
					<Route exact path="/local" component={local} />
				</switch>
			</div>
		</div>
	);
};

export default Routes;
