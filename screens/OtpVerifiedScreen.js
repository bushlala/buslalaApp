import { useNavigation, useRoute } from '@react-navigation/core'
import React, { useState } from 'react'
import { Image, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { RalewayBold, RalewayLight, RalewayRegular } from '../assets/fonts/fonts'
import { primary, secondary, textColor } from '../components/Colors'

const OtpVerifiedScreen = () => {

    const navigation = useNavigation();
    const route = useRoute();

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
                    <Image
                    source={require("../assets/check.png")}
                    style={{height:50, width:50, resizeMode:"contain", marginVertical:20}}
                    />
                    <TouchableOpacity activeOpacity={0.8} style={styles.button}
                    onPress={()=>{navigation.navigate("Oneway", {number: route.params.number})}}
                    >
                        <Text style={{color:"white",fontSize:18, fontFamily:RalewayRegular}}>Verified</Text>
                    </TouchableOpacity>
                </KeyboardAvoidingView>
            </View>
        </View>
    )
}

export default OtpVerifiedScreen

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
        marginVertical:20
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
