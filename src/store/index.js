import { createSlice, configureStore } from "@reduxjs/toolkit";

const defaultState = {
    counter: 0,
    showCounter: true,
};

const counterSlice = createSlice({
    name: "counter",
    initialState: defaultState,
    reducers: {
        increment(state) {
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        },
        incrementCounterByNumber(state, action) {
            state.counter = state.counter+action.amount;
        },
        decrementCounterBy5(state, action) {
            state.counter = state.counter-action.amount;
        },
        toggleCounter(state) {
            state.showCounter = !state.showCounter
        }
    }  
});

const store = configureStore({
    reducer: counterSlice.reducer
});

export default store;
