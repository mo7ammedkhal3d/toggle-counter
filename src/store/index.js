import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter';
import AuthReducer from './authentication';

const store = configureStore({
    reducer: {
        counter: counterReducer,
        auth: AuthReducer
    }
});

export default store;