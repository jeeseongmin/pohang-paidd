import React from "react";
import { Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Index from "./pages/introduce/Index";
import business from "./pages/business/index";
import organization from "./pages/organization/index";
import participation from "./pages/participation/index";
import local from "./pages/local/index";

const Routes = () => {
	return (
		<div class="h-full">
			<Navbar />
			<div class="z-30 h-full">
				<switch>
					<Route path="/" component={Home} exact />
					<Route exact path="/introduce/:pages" component={Index} />
					<Route path="/business" component={business} />
					<Route path="/organization" component={organization} />
					<Route path="/participation" component={participation} />
					<Route path="/local" component={local} />
				</switch>
			</div>
		</div>
	);
};

export default Routes;
