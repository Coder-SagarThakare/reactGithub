import { combineReducers } from "redux";
import { reducer } from "./reducer";


export const rootReducer  = combineReducers({
    updatedNumber : reducer,
    check : check()             // this call foe only checking purpose. it not make any sense.
})

function check(){
    
    console.log('in rootreducer');
    return 111;
}