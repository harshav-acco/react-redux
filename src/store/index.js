import { createSlice, configureStore } from "@reduxjs/toolkit";

const defaultState = {
    counter: 0,
    showCounter: true,
};

const authDefaultState = {
    isAuthenticated: false,
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
            state.counter = state.counter+action.payload;
        },
        decrementCounterBy5(state, action) {
            state.counter = state.counter-action.payload;
        },
        toggleCounter(state) {
            state.showCounter = !state.showCounter
        }
    }  
});

const authSlice = createSlice({
    name: "authentication",
    initialState: authDefaultState,
    reducers: {
        login(state) {
            state.isAuthenticated = true;
        },
        logout(state) {
            state.isAuthenticated = false;
        }
    }
})

const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        auth: authSlice.reducer,
    }
});

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

export default store;
