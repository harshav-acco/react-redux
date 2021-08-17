import { createStore } from "redux";
const defaultState = {
    counter: 0,
    showCounter: true,
}

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
