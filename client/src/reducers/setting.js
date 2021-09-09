export const SET_LOGIN_TOKEN = "SET_LOGIN_TOKEN";
export const SET_CURRENT_EMAIL = "SET_CURRENT_EMAIL";
export const SET_CURRENT_PASSWORD = "SET_CURRENT_PASSWORD";
export const SET_MENU = "SET_MENU";
export const SET_SUBMENU = "SET_SUBMENU";
export const SET_SIDEBAR = "SET_SIDEBAR";
export const SET_PROFILE = "SET_PROFILE";
export const SET_UID = "SET_UID";
export const SET_SELECTED = "SET_SELECTED";

export const setLoginToken = (loginToken) => ({
	type: SET_LOGIN_TOKEN,
	payload: loginToken,
});

export const setCurrentEmail = (currentEmail) => ({
	type: SET_CURRENT_EMAIL,
	payload: currentEmail,
});

export const setCurrentPassword = (currentPassword) => ({
	type: SET_CURRENT_PASSWORD,
	payload: currentPassword,
});

export const setMenu = (menu) => ({
	type: SET_MENU,
	payload: menu,
});

export const setSubmenu = (submenu) => ({
	type: SET_SUBMENU,
	payload: submenu,
});

export const setSidebar = (sidebar) => ({
	type: SET_SIDEBAR,
	payload: sidebar,
});

export const setProfile = (profile) => ({
	type: SET_PROFILE,
	payload: profile,
});

export const setUid = (uid) => ({
	type: SET_UID,
	payload: uid,
});

export const setSelected = (selected) => ({
	type: SET_SELECTED,
	payload: selected,
});

const initialState = {
	loginToken: "login",
	currentEmail: "",
	currentPassword: "",
	menu: 0,
	submenu: 0,
	sidebar: "off",
	profile: "off",
	uid: "",
	selected: 0,
};

const setting = (state = initialState, action) => {
	switch (action.type) {
		case SET_LOGIN_TOKEN: {
			return {
				...state,
				loginToken: action.payload,
			};
		}

		case SET_CURRENT_EMAIL: {
			return {
				...state,
				currentEmail: action.payload,
			};
		}

		case SET_CURRENT_PASSWORD: {
			return {
				...state,
				currentPassword: action.payload,
			};
		}

		case SET_MENU: {
			return {
				...state,
				menu: action.payload,
			};
		}

		case SET_SUBMENU: {
			return {
				...state,
				submenu: action.payload,
			};
		}

		case SET_SIDEBAR: {
			return {
				...state,
				sidebar: action.payload,
			};
		}

		case SET_PROFILE: {
			return {
				...state,
				profile: action.payload,
			};
		}

		case SET_UID: {
			return {
				...state,
				uid: action.uid,
			};
		}

		case SET_SELECTED: {
			return {
				...state,
				selected: action.selected,
			};
		}

		default:
			return state;
	}
};

export default setting;
