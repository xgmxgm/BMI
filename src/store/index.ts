'use client';

import { configureStore } from "@reduxjs/toolkit";
import massReducer from "./Slice/RangeSlice";
import heightReducer from "./Slice/HeightSlice";
import BMIReducer from "./Slice/BMICalcSlice";

export const store = configureStore({
    reducer: {
        mass: massReducer,
        height: heightReducer,
        BMI: BMIReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>