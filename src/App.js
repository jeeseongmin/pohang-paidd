import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import Introduce from "./pages/introduce/index";
import Business from "./pages/business/index";
import Organization from "./pages/organization/index";
import Participation from "./pages/participation/index";
import Local from "./pages/local/index";
import Admin from "./pages/admin/index";
import EditAdmin from "./pages/admin/editAdmin";
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
						<Route exact path="/admin" component={Admin} />
						<Route exact path="/admin/edit" component={EditAdmin} />
						<Route path="/local" component={Local} />
						<Route path="/introduce/:pages" component={Introduce} />
						<Route exact path="/business/:pages/:type" component={Business} />
						<Route path="/organization/:pages/:type" component={Organization} />
						<Route
							exact
							path="/participation/:pages/:type"
							component={Participation}
						/>
					</switch>
				</>
			</div>
			{sidebar === "on" ? <Sidebar /> : null}
		</>
	);
};

export default Routes;
