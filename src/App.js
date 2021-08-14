import React from "react";
import { Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";

const Routes = () => {
	return (
		<div>
			<Navbar />
			<div>
				<switch>
					<Route path="/" component={Home} exact />
					{/* <Route path="/one" component={one} /> */}
				</switch>
			</div>
		</div>
	);
};

export default Routes;
