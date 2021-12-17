import {ActionTypes} from "./actionTypes";

const initialState={
    user:[]
}
export const userReducer=(state={initialState}, action)=>{
    switch(action.type){
        case ActionTypes.ADD_USER :
            return {
                ...state,
                user: [...state.user, action.payload]
            }
        default:
            return state
    }
}
