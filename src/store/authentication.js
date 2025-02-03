import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = { isAuthenticated: false };

const AuthSlices = createSlice({
    name: 'authentication',
    initialState: initialAuthState,
    reducers: {
        login(state) {
            state.isAuthenticated = true;
        },
        logout(state) {
            state.isAuthenticated = false;
        },
    }
});

export const authActions = AuthSlices.actions;
export default AuthSlices.reducer; 
