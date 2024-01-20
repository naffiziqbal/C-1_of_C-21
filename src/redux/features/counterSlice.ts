import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: 'counter',
    initialState: { count: 1 },
    reducers: {
        incrementVal: (state) => {
            state.count += 1
        },
        decrementVal: (state) => {
            if (state.count === 0) return
            state.count -= 1
        }
    }
})

export const { incrementVal, decrementVal } = counterSlice.actions

export default counterSlice.reducer
