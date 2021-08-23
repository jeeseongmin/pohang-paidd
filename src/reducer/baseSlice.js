import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	value: 0,
	arr: [],
};

export const baseSlice = createSlice({
	name: "base",
	initialState,
	reducers: {
		increment: (state) => {
			state.value += 1;
		},
		decrement: (state) => {
			state.value -= 1;
		},
		incrementByAmount: (state, action) => {
			state.value += action.payload;
		},
		updateArr: (state, action) => {
			state.arr = action.payload;
		},
	},
});

console.log(baseSlice);

export const { increment, decrement, incrementByAmount, updateArr } =
	baseSlice.actions;

export default baseSlice.reducer;
