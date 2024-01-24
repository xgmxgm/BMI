import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
    HeightValue: 0,
}

const HeightSlice = createSlice({
    name: "Height",
    initialState,
    reducers: {
        setHeight(state, action: PayloadAction<number>) {
            state.HeightValue = action.payload;
        }
    }
})

export const { setHeight } = HeightSlice.actions;
export default HeightSlice.reducer;