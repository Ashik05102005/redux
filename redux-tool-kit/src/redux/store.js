import { configureStore } from "@reduxjs/toolkit";
import  scoreReducer  from "./ScoreReducer";
import  inputReducer  from "./inputReducer";


export default configureStore({
    reducer: {
        scorecount : scoreReducer ,
        inputslice : inputReducer
    }
})