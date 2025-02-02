import {createSlice, configureStore} from '@reduxjs/toolkit';

const initialState = { counter: 0, showState: true};

const counterSlices = createSlice({
       name: 'counter',
       initialState,
       reducers: {
        increment(state) {
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        },
        increase(state, action) {
            state.counter = state.counter+action.amount;
        },  
        toggleCounter(state) {
            state.showCounter = ! state.showCounter 
        },
       }
});

const counterReducer = (state= initialState, action) => {

    if( action.type === 'increment'){
        return {
            counter: state.counter + 1,
            showState: state.showState
        };
    }

    if(action.type === 'increase'){
        return {
            counter: state.counter + action.payload,
            showState: state.showState
        };
    }

    if(action.type === 'decrement'){
        return {
            counter: state.counter - 1,
            showState: state.showState
        };
    }

    if(action.type === 'toggle'){
        console.log(!state.showState);
        
        return {
            counter: state.counter,
            showState: !state.showState
        };
    }

    return state;
};


const store = configureStore({
    reducer: counterSlices.reducer
});

export const counterActions = counterSlices.actions;


export default store;