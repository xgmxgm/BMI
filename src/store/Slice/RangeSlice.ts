import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
    MassValue: 0,
}

const RangeSlice = createSlice({
    name: "Range",
    initialState,
    reducers: {
        setMass(state, action: PayloadAction<number>) {
            state.MassValue = action.payload
        }
    }
});

export const { setMass } = RangeSlice.actions
export default RangeSlice.reducer;