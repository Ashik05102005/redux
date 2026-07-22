import {createStore} from 'redux';

const initialState ={
    count: 0 ,
    input:''
}

function counterReducer(state=initialState,action){
    switch(action.type){
        case "incr":{
            return {...state ,  count: state.count+1}
        }
        case "decr":{
            return {...state ,  count: state.count-1}
        }
        case "reset":{
            return {...state ,  count: 0}
        }
        case "input":{
            return {...state ,  input: action.payload}
        }
        case "inputReset" : {
            return {...state , input : ''}
        }
        default : return state
    }
}

const store = createStore(counterReducer);
export default store