import {combineReducers} from "@reduxjs/toolkit";
import {WelcomeReducer} from "../module/welcome/core/reducer";

export const rootReducer = combineReducers({
    welcome : WelcomeReducer,
})