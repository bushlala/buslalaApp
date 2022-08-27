import AsyncStorage from '@react-native-async-storage/async-storage';

export const API = `https://sea-turtle-app-5sz9y.ondigitalocean.app/api/user`;
export const APIADMIN = `https://sea-turtle-app-5sz9y.ondigitalocean.app/api/admin`;

export const getUser = async () => {
  try {
    const USER_OBJ = await AsyncStorage.getItem('jwt');
    const PARSED_OBJ = JSON.parse(USER_OBJ);
    return PARSED_OBJ;
  } catch (err) {
    console.log('User_Storage error:', err);
  }
};
