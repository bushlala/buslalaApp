import { useNavigation, useRoute } from '@react-navigation/core';
import React, { useState } from 'react';
import axios from "axios";
import { Alert, Image, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { RalewayBold, RalewayLight, RalewayRegular } from '../assets/fonts/fonts';
import { primary, secondary, textColor } from '../components/Colors';
import { signup, authenticate, isAuthenticated } from "../Auth/Signup";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { API } from '../config';

const OtpScreen = () => {

    const navigation = useNavigation();
    const route = useRoute();
    const { number } = route.params;
    const [error, setError] = useState(false);
    const [OTP, setOTP]= useState("");
    const [otp, setOtp] = useState(false);
    const [field, setField] = useState(true);

    const inputHandler=()=>{
        if(OTP==="" || OTP.length!==6){
            setError(true)
        }else{
            setError(false);
        }
    };

    const verificatioHandler=async()=>{

        axios.post(`${API}/signup/verify`, {
            "number": number,
            "otp": OTP
        })
        .then(async(response)=>{
            if(response.status === 200){
                setOtp(false);
                setField(false);
                try {
                    const jsonValue = JSON.stringify(response);
                    await AsyncStorage.setItem('jwt', jsonValue);
                } 
                catch (e) {
                    console.log(e);
                }
                navigation.navigate("Oneway")
            }
            else{
                Alert.alert("Invalid Otp");
                console.log("Invalid")
            }
        })
        .catch((err)=>{
            console.log(`Not Registerd ${err}`);
            setOtp(true)
        });
    };

    return (
        <View style={styles.screen}>
            <View style={styles.view1}>
                <Image
                source={require("../assets/logo.png")}
                style={{height:250, width:250, resizeMode:"contain"}}
                />
                <Text style={{fontSize:30, fontFamily:RalewayRegular, color:textColor, maxWidth:200, textAlign:"center"}}>Let's Explore The World</Text>
            </View>
            <View style={styles.view2}>
                <KeyboardAvoidingView behavior="padding" style={styles.box}>
                    <Text style={{fontFamily:RalewayBold, fontSize:20, color:"#242424", marginBottom:10}}>OTP Verification</Text>
                    <Text style={{fontFamily:RalewayRegular, fontSize:18, color:"#242424"}}>Code Sent to {route.params.number}</Text>
                    {error ? <Text style={{color:"red", fontSize:12, marginBottom:1}}>Please Enter a Valid OTP!</Text>:<Text></Text>}
                    {otp ? <Text style={{color:"red", fontSize:12, marginBottom:1}}>Invalid OTP!</Text>:<Text></Text>}
                    {
                        field ? 
                        <TextInput
                            style={styles.input}
                            placeholder="Enter OTP"
                            placeholderTextColor="gray"
                            textAlign="center"
                            value={OTP}
                            onChangeText={(text)=>setOTP(text)}
                            onBlur={inputHandler}
                            keyboardType="number-pad"
                        /> 
                        : 
                        <Image
                            source={require("../assets/check.png")}
                            style={{height:50, width:50, resizeMode:"contain", marginBottom:20}}
                        />
                    }
                    <TouchableOpacity disabled={error || !field ? true : false} activeOpacity={0.8} style={styles.button}
                    onPress={verificatioHandler}
                    >
                        <Text style={{color:"white",fontSize:18, fontFamily:RalewayRegular}}>{field?"Verify":"Verified"}</Text>
                    </TouchableOpacity>
                </KeyboardAvoidingView>
            </View>
        </View>
    )
}

export default OtpScreen

const styles = StyleSheet.create({
    screen:{
        flex:1,
        alignItems:"center",
        backgroundColor: "white",
    },
    view1:{
        backgroundColor: primary,
        borderBottomRightRadius:100,
        borderBottomLeftRadius:100,
        width:"100%",
        height:"60%",
        alignItems:"center"
    },
    view2:{
        width:"100%",
        alignItems:"center",
    },
    box:{
        backgroundColor:"white",
        elevation:5,
        borderRadius:10,
        paddingVertical:20,
        paddingHorizontal:10,
        marginTop:-20,
        width:"80%",
        alignItems:"center"
    },
    input:{
        backgroundColor:"lightgray",
        borderRadius:10,
        width:"80%",
        marginVertical:20,
        color:"black"
    },
    button:{
        backgroundColor:secondary,
        paddingHorizontal:20,
        paddingVertical:10,
        borderRadius:10,
        elevation:5,
        marginBottom:10,
        alignSelf:"center"
    }
})
