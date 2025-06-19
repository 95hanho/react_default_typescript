import { createSlice } from "@reduxjs/toolkit";
import { setCookie } from "../cookies";

const authSlice = createSlice({
	name: "auth",
	initialState: {
		access_token: "",
		refresh_token: "",
	},
	reducers: {
		LOGIN_SUCCESS(state, action: { payload: { access_token: string; refresh_token: string } }): void {
			state.access_token = action.payload.access_token;
			state.refresh_token = action.payload.refresh_token;
			setCookie("access_token", action.payload.access_token, 10);
			setCookie("refresh_token", action.payload.refresh_token, 60);
		},
		LOGOUT(state) {
			state.access_token = "";
			state.refresh_token = "";
		},
	},
});

export default authSlice.reducer;
