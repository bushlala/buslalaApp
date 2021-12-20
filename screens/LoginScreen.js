import { useNavigation } from '@react-navigation/core';
import axios from 'axios';
import React, { useState } from 'react';
import { Alert, Image, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { RalewayBold, RalewayLight, RalewayRegular } from '../assets/fonts/fonts';
import { primary, secondary, textColor } from '../components/Colors';

const LoginScreen = () => {

    const navigation = useNavigation();
    const [error, setError] = useState(false);
    const [user, setUser]= useState(false);
    const [num, setNum] = useState("");
    // const [reqId, setReqId] = useState("");

    const errorHandler=()=>{
        if(num==="" | num.length!==10){
            setError(true)
        }else{
            setError(false);
        }
    }

    const clickSubmit=()=>{
        {num &&
        axios.post("https://buslala-backend-api.herokuapp.com/api/user/signup", {"number": num})
        .then((response)=>{
            if(response.status===200){
                setUser(false);
                console.log("OTP SENT")
                console.log(response.status)
                {num && navigation.navigate("Otp", {number:num})}
            }else{
                console.log(response.status)
            }
        }).catch((err)=>{
            console.log("User Already Registered")
            setUser(true);
            })
        }

        //OTP Verification Logic
        
        // axios.post("https://otp.apistack.run/v1/sendOtp",{
        //     phoneNumber: num,
        //     messageFormat: "Thanks for registering at Buslala:) Please use this ${otp} as your OTP for verification."
        // },{
        //     headers:{
        //         'x-as-apikey': '96d018bc-a7ab-4dc4-92b9-810921f1b0ce',
        //         'Content-Type': "application/json"
        //     }
        // })
        // .then((res)=>{
        //     return setReqId(res.data.requestId);
        // }).catch((err)=>{
        //     console.log(err)
        // })
        
    }

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
                    <Text style={{fontFamily:RalewayRegular, fontSize:20, color:"#242424", marginBottom:10}}>Let's Sign You In</Text>
                    <Text style={{fontFamily:RalewayBold, fontSize:18, color:"lightgray"}}>Provide Your Phone Number</Text>
                    <Text style={{fontFamily:RalewayBold, fontSize:18, color:"lightgray", marginBottom:10}}>To Continue</Text>
                    {error && <Text style={{color:"red", fontSize:12}}>Please Enter a Valid Number!</Text>}
                    {user && <Text style={{color:"red", fontSize:12, marginBottom:5}}>User Already Registered</Text>}
                    <TextInput
                    style={styles.input}
                    placeholder="Enter Phone Number"
                    placeholderTextColor="gray"
                    textAlign="center"
                    onBlur={errorHandler}
                    value={num}
                    onChangeText={(text)=>setNum(text)}
                    keyboardType="number-pad"
                    />
                    <TouchableOpacity disabled={error ? true : false} activeOpacity={0.8} style={styles.button}
                    onPress={clickSubmit}
                    >
                        <Text style={{color:"white",fontSize:18, fontFamily:RalewayRegular}}>Enter</Text>
                    </TouchableOpacity>
                </KeyboardAvoidingView>
            </View>
        </View>
    )
}

export default LoginScreen

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
        marginBottom:40
    },
    box:{
        backgroundColor:"white",
        elevation:5,
        borderRadius:10,
        alignItems:"center",
        paddingVertical:20,
        paddingHorizontal:10,
        marginTop:-20,
        width:"80%",
        marginBottom: 40
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
        marginBottom:10
    }
})
