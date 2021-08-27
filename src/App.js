import React from "react";
import { Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import Introduce from "./pages/introduce/index";
import Business from "./pages/business/index";
import Organization from "./pages/organization/index";
import Participation from "./pages/participation/index";
import Local from "./pages/local/index";
import Admin from "./pages/Admin";
// import Footer from "./components/Footer";
import Sidebar from "./components/Navbar/Sidebar";

const Routes = () => {
	const dispatch = useDispatch();

	const sidebar = useSelector((state) => state.setting.sidebar);
	return (
		<>
			<div
				class={
					"z-20 h-screen select-none relative overflow-y-scroll " +
					(sidebar ? "" : "")
				}
			>
				<>
					<Route exact path="/" component={Home} />
					<switch>
						<Route path="/admin" component={Admin} />
						<Route path="/local" component={Local} />
						<Route path="/introduce/:pages" component={Introduce} />
						<Route exact path="/business/:pages/:type" component={Business} />
						<Route path="/organization/:pages" component={Organization} />
						<Route path="/participation/:pages" component={Participation} />
					</switch>
				</>
			</div>
			{sidebar && <Sidebar />}
		</>
	);
};

export default Routes;
