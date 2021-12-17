import {createStore} from "redux"
import reducers from "./userReducer"

export const store = createStore(reducers,{})