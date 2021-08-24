import { configureStore } from "@reduxjs/toolkit";
import settingReducer from "../reducer/settingSlice";

export const store = configureStore({
	reducer: {
		setting: settingReducer,
		//여기에 다른 리듀서를 추가 하면 됩니다.
	},
});
