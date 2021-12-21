import AsyncStorage from '@react-native-async-storage/async-storage';
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

export const authenticate = async(data) => {
    try{
        await AsyncStorage.setItem('jwt', JSON.stringify(data));
        console.log(JSON.stringify(data));
    } catch(error) {
        console.log(error);
    }
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