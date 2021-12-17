import { useNavigation, useRoute } from '@react-navigation/core'
import axios from 'axios'
import React, { useState } from 'react'
import { Alert, Image, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { RalewayBold, RalewayLight, RalewayRegular } from '../assets/fonts/fonts'
import { primary, secondary, textColor } from '../components/Colors'
import {addUser} from "../redux/userAction";
const DetailsScreen = () => {

    const navigation = useNavigation();
    const route = useRoute()
    const [error, setError] = useState(false);
    const [user, setUser]= useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const num = route.params.number;
    const dispatch = useDispatch();
    const detail = useSelector((state)=>state.user?.user)

    const errorHandler=()=>{
        if(num==="" || email==="" || address===""){
            setError(true)
        }else{
            setError(false);
        }
    }

    const submitHandler=()=>{
        dispatch(addUser({
            name: name,
            number: num,
            address: address,
            email: email
        }))
        console.log(detail);
        navigation.navigate("Oneway")
        // axios.post("", {"number": num, "Email": email, "address": address, "name": name})
        // .then((response)=>{http://192.168.29.21:3001/api/user/profile
        //     if(response.status===200){
        //         console.log(response);
        //         {num||name||email||address && navigation.navigate("Oneway", {number:num, name: name, address: address, email: email})}
        //     }else{
        //         console.log(response.status)
        //     }
        // }).catch((err)=>{
        //     console.log("Error in filling details")
        //     setUser(true);
        //     })
    }

    return (
        <View style={styles.screen}>
            <View style={styles.view1}>
                <Image
                source={require("../assets/logo.png")}
                style={{height:150, width:150, resizeMode:"contain"}}
                />
            </View>
            <View style={styles.view2}>
                <KeyboardAvoidingView behavior="padding" style={styles.box}>
                    <Text style={{fontWeight:"bold",fontFamily:RalewayRegular, fontSize:20, color:"#242424", marginBottom:10}}>Profile Details</Text>
                    <Text style={{fontFamily:RalewayBold, fontSize:18, color:"lightgray"}}>Provide Your Details</Text>
                    <Text style={{fontFamily:RalewayBold, fontSize:18, color:"lightgray", marginBottom:10}}>For Further Verification</Text>
                    {error && <Text style={{color:"red", fontSize:12}}>Please Enter a Valid Name!</Text>}
                    <TextInput
                    style={styles.input}
                    placeholder="Enter Your Name"
                    placeholderTextColor="gray"
                    textAlign="center"
                    onBlur={errorHandler}
                    value={name}
                    onChangeText={(text)=>setName(text)}
                    keyboardType="default"
                    />
                    <TextInput
                    style={styles.input}
                    placeholder="Enter Your Email Address"
                    placeholderTextColor="gray"
                    textAlign="center"
                    onBlur={errorHandler}
                    value={email}
                    onChangeText={(text)=>setEmail(text)}
                    keyboardType="email-address"
                    />
                    <TextInput
                    style={styles.input}
                    placeholder="Enter Your Address"
                    placeholderTextColor="gray"
                    textAlign="center"
                    onBlur={errorHandler}
                    value={address}
                    onChangeText={(text)=>setAddress(text)}
                    keyboardType="default"
                    />
                    <TouchableOpacity disabled={error ? true : false} activeOpacity={0.8} style={styles.button}
                    onPress={submitHandler}
                    >
                        <Text style={{color:"white",fontSize:18, fontFamily:RalewayRegular}}>Submit</Text>
                    </TouchableOpacity>
                </KeyboardAvoidingView>
            </View>
        </View>
    )
}

export default DetailsScreen

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
        height:"25%",
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
