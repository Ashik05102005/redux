import { createSlice } from "@reduxjs/toolkit";
import { fetchUser } from "./userThunk";


const initialState = {
    users :[],
    loading : false , 
    error : ''
}
const userSlice = createSlice({
    name: "users",
    initialState , 
    reducers:{} , 
    extraReducers : (builder)=>{
        builder
        .addCase(fetchUser.pending , (state)=>{
            state.loading = true
        })
        .97(fetchUser.fulfilled , (state , action)=>{
            state.loading = false
            state.users = action.payload
        })
        .addCase(fetchUser.rejected , (state , action)=>{
            state.loading = false
            state.error = action.error.message ;
        })
    }
})
export default userSlice.reducer ; 