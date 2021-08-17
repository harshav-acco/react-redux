import { createStore } from "redux";
import { createSlice } from "@reduxjs/toolkit";

const defaultState = {
    counter: 0,
    showCounter: true,
};

createSlice({
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
})

const counterReducer = (state = defaultState, action) => {
    if (action.type === "increment") {
        return {
            ...state,
            counter: state.counter + 1
        }
    }
    if (action.type === "decrement") {
        return {
            ...state,
            counter: state.counter - 1
        }
    }
    if (action.type === "incrementCounterByNumber") {
        return {
            ...state,
            counter: state.counter + action.amount
        }
    }
    if (action.type === "decrementCounterBy5") {
        return {
            ...state,
            counter: state.counter - action.amount
        }
    }
    if (action.type === "toggleCounter") {
        return {
            ...state,
            showCounter: action.toggleCounterVal
        }
    }
    return state;
}

const store = createStore(counterReducer);

export default store;
