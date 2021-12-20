import {AsyncStorage} from "react-native";
import { API } from "../config";

export const signup = user => {
    return fetch(`${API}/signup/verify`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
        .then(response => {
            return response.json();
        })
        .catch(err => {
            console.log(err);
        });
};

export const authenticate = async(data, next) => {
    if (typeof window !== 'undefined') {
        AsyncStorage.setItem('jwt', JSON.stringify(data));
        console.log(data)
        next();
    };
};

export const isAuthenticated = async() => {
    try {
        let userData = await AsyncStorage.getItem("jwt");
        // let data = JSON.parse(userData);
        console.log(JSON.parse(userData));
        return JSON.parse(userData);
        // console.log(userData);
      } catch (error) {
        console.log("Something went wrong", error);
      }
};