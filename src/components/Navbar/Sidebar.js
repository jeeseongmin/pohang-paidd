import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMenu, setSubmenu, toggleSidebar } from "../../reducer/settingSlice";

const Sidebar = () => {
	const dispatch = useDispatch();

	const sidebar = useSelector((state) => state.setting.sidebar);
	const onToggleSidebar = () => {
		console.log("onToggleSidebar");
		dispatch(toggleSidebar(sidebar));
	};
	return (
		<div
			class={
				"z-40 w-full h-full absolute top-0 left-0 flex flex-row justify-start items-center "
			}
		>
			<div class="w-2/3 h-full bg-white"></div>
			<div
				onClick={onToggleSidebar}
				class={"cursor-pointer flex-1 w-full h-full bg-black opacity-50"}
			></div>
		</div>
	);
};

export default Sidebar;
