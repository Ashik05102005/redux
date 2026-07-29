import { configureStore } from "@reduxjs/toolkit";
import loginSlice from './loginSlice'

const store = configureStore({
    reducer :{
        loginStatus : loginSlice
    }
})
export default store;