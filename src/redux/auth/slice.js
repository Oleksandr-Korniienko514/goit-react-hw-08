import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { login, logout, refresh, register } from "./operations";

const initialState = {
    user: {
        name: null,
        email: null,
    },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
};

const slice = createSlice({
    name: "auth",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(register.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.token = action.payload.token;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.token = action.payload.token;
            })
            .addCase(logout.fulfilled, () => initialState)
            .addCase(refresh.fulfilled, (state, action) => {
                state.user.email = action.payload.email;
                state.user.name = action.payload.name;
            })
            .addCase(refresh.pending, (state) => {
                state.isRefreshing = true;
            })
            .addMatcher(
                isAnyOf(register.fulfilled, login.fulfilled, refresh.fulfilled),
                (state) => {
                    state.isLoggedIn = true;
                }
            )
            .addMatcher(isAnyOf(refresh.rejected, refresh.fulfilled), (state) => {
                state.isRefreshing = false;
            });
    },
});

export const authSlice = slice.reducer;