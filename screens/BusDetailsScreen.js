import { useNavigation, useRoute } from '@react-navigation/core'
import axios from 'axios'
import React, { useState } from 'react'
import { Alert, Image, KeyboardAvoidingView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { RalewayBold, RalewayLight, RalewayRegular } from '../assets/fonts/fonts'
import { primary, secondary, textColor } from '../components/Colors'
// import sendEmail from "react-native-email";

const BusDetailsScreen = () => {

    const navigation = useNavigation();
    const route = useRoute();
    const [error, setError] = useState(false);
    const [user, setUser]= useState(false);
    const [myName, setMyName] = useState("");
    const [emails, setEmails] = useState("");
    const [message, setMessage]= useState("");

    const errorHandler=()=>{
        if(myName==="" || emails===""){
            setError(true)
        }else{
            setError(false);
        }
    }

    const submitHandler=()=>{
        if(!myName || !emails)
        {
            setError(true);
        }else{
            axios.post("https://buslala-backend.herokuapp.com/api/user/Booking_query", {"Email": emails, "Name": myName, "BusName": route.params.name, "Price": route.params.price, "Time": route.params.deptHour})
            .then((res)=>{
                console.log(res.data);
                navigation.navigate("Booked Successfully", {"myName": myName});
            })
            .catch((err)=>console.log(err))
            // sendEmail(emails,{
            //     subject: "Ticket Confirmation Mail",
            //     cc: "Saxenaarpit52@gmail.com",
            //     body: `Hello ${myName}! You have booked a seat from Buslala App.
            //     Please find the details of the Bus Below:
            //     1. Bus Name: ${route.params.name}
            //     2. Ticket Price: ${route.params.price}
            //     3. Timings: from ${route.params.deptHour} to ${route.params.arrivalHour}` 
            // }).catch(console.error);

        }
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false} style={styles.screen}>
            <View style={{alignSelf:"center"}}>
                <Image
                source={require("../assets/logo.png")}
                style={{height:100, width:100, resizeMode:"contain"}}
                />
            </View>
            <View style={styles.view2}>
                <KeyboardAvoidingView behavior="padding" style={styles.box}>
                    <Text style={{fontFamily:RalewayRegular, fontSize:20, color:"#242424", marginBottom:10, fontWeight:"bold"}}>Bus Details</Text>
                    <Text style={{fontFamily:RalewayBold, fontSize:18, color:"lightgray"}}>Provide Your Details</Text>
                    <Text style={{fontFamily:RalewayBold, fontSize:18, color:"lightgray", marginBottom:10}}>For Confirmation</Text>
                    {error && <Text style={{color:"red", fontSize:12}}>Please Enter a Name !</Text>}
                    <TextInput
                    style={styles.input}
                    placeholder="Enter Your Name"
                    placeholderTextColor="gray"
                    textAlign="center"
                    onBlur={errorHandler}
                    value={myName}
                    onChangeText={(text)=>setMyName(text)}
                    keyboardType="default"
                    />
                    {error && <Text style={{color:"red", fontSize:12}}>Please Enter a Email Address !</Text>}
                    <TextInput
                    style={styles.input}
                    placeholder="Enter Your Email Address"
                    placeholderTextColor="gray"
                    textAlign="center"
                    onBlur={errorHandler}
                    value={emails}
                    onChangeText={(text)=>setEmails(text)}
                    keyboardType="email-address"
                    />
                    <Text style={styles.text}>{route.params.name}</Text>
                    <Text style={styles.text}>Ticket Price: Rs{route.params.price}</Text>
                    <Text style={styles.text}>From {route.params.deptHour} to {route.params.arrivalHour}</Text>
                    <TextInput
                    maxLength={100}
                    numberOfLines={2}
                    style={styles.description}
                    placeholder="Additional Information"
                    placeholderTextColor="gray"
                    textAlign="center"
                    onBlur={errorHandler}
                    value={message}
                    onChangeText={(text)=>setMessage(text)}
                    keyboardType="default"
                    />
                    <TouchableOpacity disabled={error ? true : false} activeOpacity={0.8} style={styles.button}
                    onPress={submitHandler}
                    >
                        <Text style={{color:"white",fontSize:18, fontFamily:RalewayRegular}}>Confirm Booking</Text>
                    </TouchableOpacity>
                </KeyboardAvoidingView>
            </View>
        </ScrollView>
    )
}

export default BusDetailsScreen

const styles = StyleSheet.create({
    screen:{
        flex:1,
        backgroundColor: primary,
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
        marginVertical:10,
        color:"black"
    },
    text:{
        backgroundColor:"lightgray",
        borderRadius:10,
        width:"80%",
        marginVertical:10,
        paddingVertical:15,
        color:"gray",
        textAlign:"center"
    },
    description:{
        backgroundColor:"lightgray",
        borderRadius:10,
        width:"80%",
        height:"20%",
        marginVertical:10,
        paddingVertical:15,
        color:"gray",
        textAlign:"center"
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
