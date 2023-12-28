import { configureStore, createSlice, } from "@reduxjs/toolkit"
import "../index.css"

//2nd we have to create CounterSlice
const counterSlice = createSlice({

    name: 'counter',
    initialState: { counterValue: 2 },
    reducers: {

        increment: (state) => {

            state.counterValue++;


        },
        decrement: (state) => {
            state.counterValue--;


        },
        add: (state, action) => {
            state.counterValue += Number(action.payload)

        },
        subtract: (state, action) => {
            state.counterValue -= Number(action.payload)

        }

    }
});


//1st we have to create CounterStore 
const CounterStore = configureStore({
    reducer: {
        counter: counterSlice.reducer
    }

});

export const counterActions = counterSlice.actions;
export default CounterStore;
