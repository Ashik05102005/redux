import { createSlice } from "@reduxjs/toolkit";


const loginSlice = createSlice({
    name:"loginStatus" ,
    initialState : {login : "login out"},
    reducers :{
        login:(state)=>{
            state.login="login"
        },
        logout : (state)=>{
            state.login = "logout"
        }
    }
})

export const {login , logout} =loginSlice.actions;
export default loginSlice.reducer ;