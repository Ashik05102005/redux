import { createSlice } from "@reduxjs/toolkit";

export const scoreReducer = createSlice({
    name : "scorecount",
    initialState : {
        score : 0
    },
    reducers :{
        increment : (state)=>{
            state.score +=1
        },
        decrement : (state)=>{
            state.score-=1
        },
        incrementByScore : (state,action)=>{
            state.score +=action.payload
        },
        reset : (state)=>{
            state.score = 0
        }
    }

});
export const {increment , decrement ,incrementByScore ,reset } = scoreReducer.actions ;
export default scoreReducer.reducer ;