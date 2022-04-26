import AsyncStorage from "@react-native-async-storage/async-storage";

export const API = `http://139.59.74.159/api/user`;

export const getUser=async()=>{
    try{
      const USER_OBJ = await AsyncStorage.getItem('jwt');
      const PARSED_OBJ = JSON.parse(USER_OBJ);
      return PARSED_OBJ;
    }
    catch(err){
      console.log("User_Storage error:", err);
    }
};