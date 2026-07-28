import { createStore } from "redux";

const initialState = {count : 0}

const counterReducer = (state = initialState , action)=>{
    switch(action.type){
        case "increment" : {
            if(state.count<10){
                return {count : state.count+1}
            }
            else{
                return state
            }
        }
        case "decrement" : {
            if(state.count>-10){
                return {count : state.count-1}
            }
            else{
                return state
            }
        }
        case "reset" : {
            return {count : 0}
        }
        case "addNum" : {
            console.log(action.payload)
            return {count : state.count+action.payload}
        }
        default : return state
    }
}

const store  = createStore(counterReducer);
export default store ;