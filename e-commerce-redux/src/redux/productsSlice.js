import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";


const productsSlice = createSlice({
    name : "products",
    initialState : {
        products:{data:[]}
    },
    reducers : {
        setProducts(state , action){
            state.products.data = (action.payload) ;
            console.log(state.products.data)
        }
    }

})
export const {setProducts} = productsSlice.actions ;
export default productsSlice.reducer