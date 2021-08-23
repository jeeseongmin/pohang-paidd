import { configureStore } from "@reduxjs/toolkit";
import baseReducer from "../reducer/baseSlice";

export const store = configureStore({
	reducer: {
		base: baseReducer,
		//여기에 다른 리듀서를 추가 하면 됩니다.
	},
});
