import {createSlice, configureStore} from '@reduxjs/toolkit';

const initialCounterState = { counter: 0, showCounter: true};

const counterSlices = createSlice({
       name: 'counter',
       initialState: initialCounterState,
       reducers: {
        increment(state) {
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        },
        increase(state, action) {
            state.counter = state.counter + action.payload;
        },  
        toggleCounter(state) {
            state.showCounter = !state.showCounter 
        },
       }
});

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

const store = configureStore({
    reducer: {
        counter: counterSlices.reducer,
        auth: AuthSlices.reducer
    }
});

export const counterActions = counterSlices.actions;
export const authActions = AuthSlices.actions;


export default store;