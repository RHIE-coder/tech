import {
    configureStore,
    createSlice,
    createAsyncThunk,
} from '@reduxjs/toolkit';

import
    * as forPrintAll
    from '@reduxjs/toolkit'
console.log(forPrintAll)

////////////////////////////////////////
function $(selector) {
    return document.querySelector(selector);
}

const $divToggle = $(".toggle")
const $counter = $("h1")
const $btnIncrease = $("#increase")
const $btnDecrease = $("#decrease")
const $inputAmount = $("#amount")
const $btnUpdate = $("#update")
////////////////////////////////////////
const asyncToggle = createAsyncThunk('asyncToggle', (param) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("setTimeout")
            console.log(param)
            resolve("sss")
        }, 1000)
    })
})

const asyncPlus = createAsyncThunk('asyncPlus', (param) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("sss1")
        }, 3000)
    })
})

const asyncMinus = createAsyncThunk('asyncMinus', (param) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("sss2")
        }, 2000)
    })
})

const figureSlice = createSlice({
    name: "figure",
    initialState: {
        toggle: false,
    },
    reducers: {
        switchToggle(state) {
            state.toggle = !state.toggle
        },
    },
    extraReducers: (builder) => {
        builder.addCase(asyncToggle.pending, (state, action) => {
            state.toggle = !state.toggle
            console.log("pending(state, action): " + JSON.stringify(state), " // ", JSON.stringify(action))
        })
        builder.addCase(asyncToggle.fulfilled, (state, action) => {
            state.toggle = !state.toggle
            console.log("pending(state, action): " + JSON.stringify(state), " // ", JSON.stringify(action))
        })
        builder.addCase(asyncToggle.rejected, (state, action) => {
            console.log("pending(state, action): " + JSON.stringify(state), " // ", JSON.stringify(action))
        })
    }
})

const initialState = {
    count: 0,
}

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment(state) {
            state.count += 1
        },
        decrement(state) {
            state.count -= 1
        },
        updateByAmount(state, action) {
            console.log(state)
            console.log(action)
            state.count = action.payload.amount
        },
    },
    extraReducers: (builder) => {
        builder.addCase(asyncPlus.pending, (state, action) => {
            console.log("do increase")
        })
        builder.addCase(asyncPlus.fulfilled, (state, action) => {
            state.count += 1
        })
        builder.addCase(asyncMinus.pending, (state, action) => {
            console.log("do decrease")
        })
        builder.addCase(asyncMinus.fulfilled, (state, action) => {
            state.count -= 1
        })
    }
})

const figureActions = figureSlice.actions;
const figureReducer = figureSlice.reducer;
const counterActions = counterSlice.actions;
const counterReducer = counterSlice.reducer;

const store = configureStore({
    reducer: {
        counter: counterReducer,
        figure: figureReducer,
    }
})

function render() {
    const state = store.getState();
    console.log("render(): result of getState() : " + JSON.stringify(state))

    if (state.figure.toggle) {
        $divToggle.classList.add('active');
    } else {
        $divToggle.classList.remove('active');
    }

    $counter.innerText = state.counter.count;
}

store.subscribe(render)

$divToggle.onclick = () => {
    console.log(figureSlice)
    store.dispatch(asyncToggle([23, 234, 345]))
};

$btnIncrease.onclick = () => {
    // store.dispatch(counterActions.increment())
    store.dispatch(asyncPlus())
};

$btnDecrease.onclick = () => {
    // store.dispatch(counterActions.decrement())
    store.dispatch(asyncMinus())
};

$btnUpdate.onclick = () => {
    const amount = parseInt($inputAmount.value)
    store.dispatch(counterActions.updateByAmount({ amount }));
    $inputAmount.value = 0
};