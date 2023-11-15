import { 
    configureStore,
    createSlice,
} from '@reduxjs/toolkit';

import * as forPrintAll from '@reduxjs/toolkit'
console.log(forPrintAll)

function $(selector) {
    return document.querySelector(selector);
}

const $divToggle = $(".toggle")
const $counter = $("h1")
const $btnIncrease = $("#increase")
const $btnDecrease = $("#decrease")

const TOGGLE_SWITCH = "TOGGLE_SWITCH";
const INCREASE = "INCREASE";
const DECREASE = "DECREASE";

const toggleSwitch = () => ({type:TOGGLE_SWITCH})
const increase = difference => ({type:INCREASE, difference})
const decrease = ()=> ({type:DECREASE})

const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0,
    },
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload;
        },
    },
})

const { 
    increment,
    decrement,
    incrementByAmount,
} = counterSlice.actions;

const incrementAsync = (amount) => (dispatch) => {
    setTimeout(()=>{
        dispatch(incrementByAmount(amount))
    },1000)
}

const selectCount = (state) => state.counter.value;
const counterSliceReducer = counterSlice.reducer;

const store = configureStore({
    reducer: {
        counter: counterSliceReducer,
    }
})