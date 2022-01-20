import { BackHandler } from "react-native";

const backAction=()=>{
    return true;
};
export const funcBackHandler=()=>{
    BackHandler.addEventListener('hardwareBackPress',backAction);
    return ()=> {
        BackHandler.removeEventListener('hardwareBackPress',backAction);
    }
};