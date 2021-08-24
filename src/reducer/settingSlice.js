import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	// 로그인 여부 확인
	loginToken: false,
	currentUser: {
		email: "",
		password: "",
	},
	// 현재 어떤 메뉴인지
	menu: 0,
	submenu: 0,
	sidebar: false,
};

export const settingSlice = createSlice({
	name: "setting",
	initialState,
	reducers: {
		login: (state, action) => {
			state.loginToken = true;
			state.currentUser.email = action.payload.email;
			state.currentUser.password = action.payload.password;
		},
		logout: (state) => {
			state.loginToken = false;
			state.currentUser.email = "";
			state.currentUser.password = "";
		},
		setMenu: (state, action) => {
			state.menu = action.payload;
		},
		setSubmenu: (state, action) => {
			state.submenu = action.payload;
		},
		toggleSidebar: (state, action) => {
			state.sidebar = !action.payload;
		},
	},
});

export const { login, logout, setMenu, setSubmenu, toggleSidebar } =
	settingSlice.actions;

export default settingSlice.reducer;
