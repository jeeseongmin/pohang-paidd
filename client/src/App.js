import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Home from "./pages/Home";
import Introduce from "./pages/introduce/index";
import Business from "./pages/business/index";
import Organization from "./pages/organization/index";
import Participation from "./pages/participation/index";
import Local from "./pages/local/index";
import Admin from "./pages/admin/index";
import EditAdmin from "./pages/admin/editAdmin";
import Sidebar from "./components/Navbar/Sidebar";
import {
	setSidebar,
	setLoginToken,
	setCurrentEmail,
	setCurrentPassword,
	setMenu,
	setSubmenu,
} from "./reducers/setting";

const Routes = ({ match }) => {
	const dispatch = useDispatch();

	const sidebar = useSelector((state) => state.setting.sidebar);
	const [isIe, setIsIe] = useState(false);

	useEffect(() => {
		if (
			navigator.userAgent.indexOf("MSIE") !== -1 ||
			!!document.documentMode === true
		) {
			setIsIe(true);
			console.log("Internet Explorer");
		}
	}, []);
	
	useEffect(() => {
		dispatch(setSidebar("off"));
	}, []);

	useEffect(() => {
		let loginToken = sessionStorage.getItem("loginToken");
		if (loginToken === null || !loginToken) {
			dispatch(setLoginToken("logout"));
			dispatch(setCurrentEmail(""));
			dispatch(setCurrentPassword(""));
			dispatch(setMenu(0));
			dispatch(setSubmenu(0));
		}
	}, []);

	return isIe ? (
		<>
			<div class="h-screen">
				<div class="w-full h-full  flex flex-col justify-center items-center">
					<h1 class="font-bold text-4xl mb-4">다른 브라우저를 이용해주세요.</h1>
					<div class="w-full h-96 flex justify-center items-center mb-4">
						<img
							src="/image/home-img2.png"
							class="h-full object-contain"
							alt="main-img2"
						/>
					</div>
					<p>경북지적발달장애인협회 포항시지부 홈페이지는</p>
					<p>
						<b>Internet Explorer</b>를 지원하지 않습니다.
					</p>
					<p>
						<b>Chrome, Edge, Safari</b>를 이용해주시기 바랍니다.
					</p>
				</div>
			</div>
		</>
	) : (
		<>
			<div
				id="scrollRef"
				class={
					"z-20 h-screen select-none relative overflow-y-scroll scrollbar-hide " +
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
						<Route path="/business/:pages/:type" component={Business} />
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
