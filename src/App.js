import React from "react";
import { Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import Introduce from "./pages/introduce/index";
import Business from "./pages/business/index";
import Organization from "./pages/organization/index";
import Participation from "./pages/participation/index";
import Local from "./pages/local/index";
import Admin from "./pages/Admin";
import Footer from "./components/Footer";

const Routes = () => {
	return (
		<div class="h-full select-none">
			<Navbar />
			<div class={"z-30 h-auto pt-14 sm:pt-16"}>
				<switch>
					<Route path="/" component={Home} exact />
					<Route exact path="/local" component={Local} />
					<Route exact path="/admin" component={Admin} />
					<Route exact path="/introduce/:pages" component={Introduce} />
					<Route exact path="/business/:pages/:type" component={Business} />
					<Route exact path="/organization/:pages" component={Organization} />
					<Route exact path="/participation/:pages" component={Participation} />
				</switch>
			</div>
			<Footer />
		</div>
	);
};

export default Routes;
