import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { RalewayLight, RalewayRegular } from '../assets/fonts/fonts'
import { fontColor, primary, secondary, textColor } from '../components/Colors'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useTheme } from "@react-navigation/native";

const WelcomeScreen = () => {

    const navigation= useNavigation();
    const colors = useTheme();
    
    const getStarted=async()=>{
        try {
            let userData = await AsyncStorage.getItem('jwt')
            let data = JSON.parse(userData);
            data != null ? navigation.navigate("Oneway") : navigation.navigate("Login");
          } catch(e) {
            console.log(e);
          }
    };


    return (
        <View style={styles.screen}>
            <Image
            source={require("../assets/logo.png")}
            style={{height:250, width:250, resizeMode:"contain"}}
            />
            <View style={styles.container}>
                <View style={styles.heading}>
                    <Text style={{fontSize:35, color:fontColor,  fontFamily:RalewayRegular, letterSpacing:6}}>Welcome To</Text>
                    <View style={{flexDirection:"row",paddingHorizontal:3, alignSelf:"center"}}>
                        <Text style={{fontSize:35, color:secondary, fontFamily:RalewayRegular, letterSpacing:15}}>B</Text>
                        <Text style={{fontSize:35, color:fontColor, fontFamily:RalewayRegular, letterSpacing:15}}>uslala</Text>
                    </View>
                </View>
                <View style={styles.view1}>
                    <Text style={{color:textColor, maxWidth:400, fontSize:18, textAlign:"center", fontFamily:RalewayLight}}>Book your tickets online with your best preferences</Text>
                </View>
                <TouchableOpacity activeOpacity={0.8} style={styles.button}
                onPress={getStarted}
                >
                    <Text style={{color:textColor, fontFamily:RalewayRegular, fontSize:18}}>Get Started</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default WelcomeScreen

const styles = StyleSheet.create({
    screen:{
        flex:1,
        alignItems:"center",
        backgroundColor: primary,
        paddingTop:20,
    },
    container:{
        alignItems:"center",
        marginTop:80
    },
    heading:{
        marginVertical:20
    },
    view1:{
        marginBottom:25,
    },
    button:{
        backgroundColor:secondary,
        paddingHorizontal:25,
        paddingVertical:10,
        borderRadius:10,
        elevation:5,
    }

})
