import { createStore } from "redux";

const initialState = { counter: 0, showState: true};

const counterReducer = (state= initialState, action) => {

    if( action.type === 'increment'){
        return {
            counter: state.counter + 1,
            showState: state.showState
        };
    }

    if(action.type === 'increase'){
        return {
            counter: state.counter + action.amount,
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

const store = createStore(counterReducer);

export default store;