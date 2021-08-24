import React from "react";
import { Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import Introduce from "./pages/introduce/index";
import Business from "./pages/business/index";
import Organization from "./pages/organization/index";
import Participation from "./pages/participation/index";
import Local from "./pages/local/index";
import Admin from "./pages/Admin";
import Footer from "./components/Footer";
import Sidebar from "./components/Navbar/Sidebar";
import { setMenu, setSubmenu, toggleSidebar } from "./reducer/settingSlice";

const Routes = () => {
	const dispatch = useDispatch();

	const sidebar = useSelector((state) => state.setting.sidebar);
	const onToggleSidebar = () => {
		console.log("onToggleSidebar");
		dispatch(toggleSidebar(sidebar));
	};

	return (
		<>
			<div
				class={
					"z-20 h-screen select-none relative overflow-y-scroll " +
					(sidebar ? "" : "")
				}
			>
				<Navbar />
				<div class={"z-20 h-full pt-14 lg:pt-16 flex flex-col"}>
					<switch>
						<Route path="/" component={Home} exact />
						<Route exact path="/local" component={Local} />
						<Route exact path="/admin" component={Admin} />
						<Route exact path="/introduce/:pages" component={Introduce} />
						<Route exact path="/business/:pages/:type" component={Business} />
						<Route exact path="/organization/:pages" component={Organization} />
						<Route
							exact
							path="/participation/:pages"
							component={Participation}
						/>
					</switch>
					<Footer />
				</div>
			</div>
			{sidebar && <Sidebar />}
		</>
	);
};

export default Routes;
