import { combineReducers, configureStore } from "@reduxjs/toolkit";
import loding from "../reducers/lodingSlice";
import authSlice from "../reducers/authSlice";

const rootReducer = combineReducers({ loding, authSlice });

const store = configureStore({
	reducer: rootReducer,
});

export default store;
