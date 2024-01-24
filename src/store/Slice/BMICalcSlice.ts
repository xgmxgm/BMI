import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IBMI {
    infoBMI: string,
    BMINumber: number,
}

interface IPayload {
    Mass: number,
    Height: number
}

const initialState: IBMI = {
    infoBMI: '',
    BMINumber: 0,
}

const BMISlice = createSlice({
    name: "Height",
    initialState,
    reducers: {
        calcBMI(state, action: PayloadAction<IPayload>) {

            let BMI = Number((action.payload.Mass / (action.payload.Height / 100) ** 2).toFixed(2));


            if (Object.is(BMI, NaN) || Object.is(BMI, Infinity)) {
                state.BMINumber = 0;
                state.infoBMI = '';
            } else {
                state.BMINumber = BMI;
            }

            if (BMI < 18.5) {
                state.infoBMI = 'Underweight';
            } if (BMI >= 18.5) {
                state.infoBMI = 'Normal body weight';
            } if (BMI >= 25.0) {
                state.infoBMI = 'Obesity';
            } if (BMI >= 30.0) {
                state.infoBMI = 'Obesity I degree';
            } if (BMI >= 35.0) {
                state.infoBMI = 'Obesity II degree';
            } if (BMI >= 40.0) {
                state.infoBMI = 'Obesity III degree';
            };
        }
    }
})

export const { calcBMI } = BMISlice.actions;
export default BMISlice.reducer;