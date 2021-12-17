import { useNavigation, useRoute } from '@react-navigation/core'
import React, { useState } from 'react'
import { Alert, Image, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { RalewayBold, RalewayLight, RalewayRegular } from '../assets/fonts/fonts'
import { primary, secondary, textColor } from '../components/Colors'

const BookedSuccessfullyScreen = () => {

    const navigation = useNavigation();
    const route = useRoute();

    return (
        <View style={styles.screen}>
            <View style={styles.view1}>
                <Image
                source={require("../assets/logo.png")}
                style={{height:250, width:250, resizeMode:"contain"}}
                />
            </View>
            <View style={styles.view2}>
                <KeyboardAvoidingView behavior="padding" style={styles.box}>
                    <Text style={{fontFamily:RalewayRegular, fontSize:20, color:"#242424", marginBottom:10, fontWeight:"bold"}}>Hello! {route.params.myName}</Text>
                    <Text style={{fontFamily:RalewayBold, fontSize:18, color:"black"}}>For The Ticket Confirmation Letter</Text>
                    <Text style={{fontFamily:RalewayBold, fontSize:18, color:"black", marginBottom:20}}>Please Check Your Mail Box</Text>
                    <TouchableOpacity activeOpacity={0.8} style={styles.button}
                    onPress={()=>navigation.navigate("Oneway")}
                    >
                        <Text style={{color:"white",fontSize:18, fontFamily:RalewayRegular}}>Go Back To Booking Screen</Text>
                    </TouchableOpacity>
                </KeyboardAvoidingView>
            </View>
        </View>
    )
}

export default BookedSuccessfullyScreen

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
        height:"40%",
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
    button:{
        backgroundColor:secondary,
        paddingHorizontal:20,
        paddingVertical:10,
        borderRadius:10,
        elevation:5,
        marginBottom:10
    }
})
