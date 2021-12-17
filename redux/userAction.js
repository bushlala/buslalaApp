import {ActionTypes} from "./actionTypes"

export const addUser = (user)=>{
    return{
        type: ActionTypes.ADD_USER,
        payload: user
    }
}