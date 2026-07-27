import { configureStore } from "@reduxjs/toolkit";
import  scoreReducer  from "./ScoreReducer";
import  inputReducer  from "./inputReducer";
import userReducer from "./userSlice"

export default configureStore({
    reducer: {
        scorecount : scoreReducer ,
        inputslice : inputReducer,
        users : userReducer
    }
})