import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {userInfo} from "./model";

interface WelcomeModel {
    user: userInfo;
}

const WelcomeInitState: WelcomeModel = {
    user: {name: ""}
}

export const WelcomeReducer = createSlice({
    name: "WelcomeReducer",
    initialState: WelcomeInitState,
    reducers: {
        setUsername : (state, action:PayloadAction<string>) => {
            state.user.name = action.payload;
        }
    }
})