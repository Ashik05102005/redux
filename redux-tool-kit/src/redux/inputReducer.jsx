import { createSlice } from "@reduxjs/toolkit";

export const inputReducer = createSlice({
    name : "inputSlice",
    initialState : {
        data:[]
    },
    reducers : {
        datainput :(state,action)=>{
            console.log(action.payload)
            // state.data = action.payload ;
            state.data = [...state.data , action.payload ]
        }
    }
})
export const {datainput}=inputReducer.actions ; 
export default inputReducer.reducer ; 
