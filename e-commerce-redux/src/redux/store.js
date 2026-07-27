import { configureStore } from "@reduxjs/toolkit";
import themeReducer from './themeSlice'
import productReducer from './productsSlice'


const store = configureStore({
    reducer :{
        theme : themeReducer , 
        products : productReducer 
    }
})
export default store ;