import { useNavigation } from '@react-navigation/core'
import axios from 'axios'
import React from 'react'
import { Image, KeyboardAvoidingView, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { RalewayBold, RalewayLight, RalewayRegular } from '../assets/fonts/fonts'
import { fontColor, newColor, primary, secondary, textColor } from '../components/Colors'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import Entypo from "react-native-vector-icons/Entypo";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useState } from 'react';
import DatePicker from 'react-native-datepicker';

const LoginScreen = () => {

    // const [Data, setData] = useState([]);
    // console.log(Data);


    const navigation = useNavigation();
    const [isVisible1, setIsVisible1] = useState(false);
    const [isVisible2, setIsVisible2] = useState(false);
    const [deptDate, setDeptDate] = useState("");
    const [returnDate, setReturnDate] = useState("");
    const [click, setClick] = useState(false);
    const [from, setFrom] = useState("");
    const [error, setError]= useState(false);
    const [error1, setError1]= useState(false);
    const [to, setTo]= useState("");
    const [isOneWay, setIsOneWay] = useState(true);
    const [isTwoWay, setIsTwoWay] = useState(false);

    const inputHandler=()=>{
        if(from===""){
        setError1(true)}
        else{
            setError1(false);
        }
    }

    const inputHandler1=()=>{
        if(to===""){
        setError1(true)}
        else{
            setError1(false);
        }
    }

    const handleConfirm1=(date)=>{
        setDeptDate(date);
        setIsVisible1(false);
    }

    const handleConfirm2=(date)=>{
        setReturnDate(date);
        setIsVisible2(false);
    }

    const onewayHandler=()=>{
        setIsOneWay(true);
        setIsTwoWay(false);
    }

    const twowayHandler=()=>{
        setIsOneWay(false);
        setIsTwoWay(true);
    }

    const busesHandler=()=>{
        if(from==="" || to==="" || deptDate===""){
            setError(true);
            setError1(true)
        }else{
            setError(false);
            setError1(false);
            axios.post("https://buslala-backend-api.herokuapp.com/api/user/searchOneWayBus",{"source": "place1", "destination": "place2", "date": "2021-12-10"})
            .then((response)=>{
                if(response.status===200){
                    console.log(response.data);
                    navigation.navigate("Buses",{"Data": response.data,"src": from,"dest": to,"oneWay": isOneWay,"roundTrip": isTwoWay});
                }else{
                    console.log("Error");
                }
            }).catch((err)=>console.log(err));
    }};

    const busesHandler1=()=>{
        if(from==="" || to==="" || deptDate==="" || returnDate===""){
            setError(true);
            setError1(true)
        }else{
            setError(false);
            setError1(false);
            axios.post("https://buslala-backend-api.herokuapp.com/api/user/roundTrip",{"source": "place1", "destination": "place2", "deptDate": "2021-12-10", "returnDate": "2021-12-11"})
            .then((response)=>{
                if(response.status===200){
                    console.log(response.data);
                    navigation.navigate("Buses",{"Data": response.data,"src": from,"dest": to,"oneWay": isOneWay,"roundTrip": isTwoWay}) 
                }else{
                    console.log("Error");
                }
            }).catch((err)=>console.log(err));           
    }};

    return (
        <View style={styles.screen}>
            <ScrollView>
                <View style={ isOneWay ? styles.view1 : styles.view}>
                    <View style={styles.heading}>
                        <TouchableOpacity activeOpacity={0.8} style={styles.btn}
                        onPress={()=>navigation.navigate("Profile")}
                        >
                            <MaterialCommunityIcons
                                name="account-outline"
                                size={30}
                                color="white"
                            />
                        </TouchableOpacity>
                        <View style={{flexDirection:"row",alignItems:"center", justifyContent:"space-between"}}>
                            <TouchableOpacity activeOpacity={0.8} style={styles.btn}
                                onPress={()=>navigation.navigate("Tickets")}>
                                <AntDesign
                                    name="calendar"
                                    size={30}
                                    color="white"
                                />
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={0.8} style={styles.btn}
                                onPress={()=>navigation.navigate("Notifications")}
                            >
                                <View style={{flexDirection:"row", alignItems:"center"}}>
                                    <MaterialIcons
                                        name="notifications-none"
                                        size={30}
                                        color="white"
                                    />
                                    <View style={styles.dot}></View>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.text}>
                        <View style={styles.text1}>
                            <Text style={{fontSize:40, letterSpacing:2, fontFamily:RalewayRegular,color:fontColor}}>Where</Text>
                            <Text style={{fontSize:28, fontFamily:RalewayRegular,color:"white"}}> will</Text>
                        </View>
                        <View style={styles.text2}>
                            <Text style={{fontSize:28, fontFamily:RalewayRegular,color:"white"}}>you go</Text>
                            <Text style={{fontSize:40, letterSpacing:2,fontFamily:RalewayRegular,color:fontColor}}> Now?</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.view2}>
                    <View style={styles.container}>
                        {click ? <KeyboardAvoidingView behavior="padding" style={styles.box}>
                            <View style={{flexDirection:"row", alignItems:"center"}}>
                                <Ionicons
                                name="locate"
                                size={24}
                                color="black"
                                />
                                <TextInput
                                placeholder="To"
                                value={to}
                                onChangeText={(text)=>setTo(text)}
                                placeholderTextColor="gray"
                                onBlur={inputHandler}
                                style={{marginLeft:10, width:"100%", color:"black"}}
                                />
                            </View>
                            {error1 ? <Text style={{color:"red", fontSize:12}}>Please Enter The Details</Text>:<Text></Text>}
                        </KeyboardAvoidingView> :
                        <KeyboardAvoidingView behavior="padding" style={styles.box}>
                            <View style={{alignItems:"center", flexDirection:"row"}}>
                                <Entypo
                                name="location-pin"
                                color="black"
                                size={24}
                                />
                                <TextInput
                                placeholder="From"
                                placeholderTextColor="gray"
                                value={from}
                                onBlur={inputHandler1}
                                onChangeText={(text)=>setFrom(text)}
                                style={{marginLeft:10, width:"100%", color:"black"}}
                                />
                            </View>
                            {error ? <Text style={{color:"red", fontSize:12}}>Please Enter The Details</Text>: <Text></Text>}
                        </KeyboardAvoidingView>}
                        <TouchableOpacity activeOpacity={0.8} 
                        onPress={()=>setClick(!click)}
                        style={{backgroundColor:secondary, padding:5, borderRadius:20, marginBottom:25, alignSelf:"flex-end", marginRight:"20%"}}>
                            <MaterialCommunityIcons
                                name="compare-vertical"
                                size={24}
                                color="white"
                                />
                        </TouchableOpacity>
                        { click ? <KeyboardAvoidingView behavior="padding" style={styles.box}>
                            <View style={{alignItems:"center", flexDirection:"row"}}>
                                <Entypo
                                name="location-pin"
                                color="black"
                                size={24}
                                />
                                <TextInput
                                placeholder="From"
                                placeholderTextColor="gray"
                                onChangeText={(text)=>setFrom(text)}
                                style={{marginLeft:10, width:"100%"}}
                                onBlur={inputHandler1}
                                value={from}
                                style={{marginLeft:10, width:"100%", color:"black"}}
                                />
                            </View>
                            {error ? <Text style={{color:"red", fontSize:12}}>Please Enter The Details</Text>: <Text></Text>}
                        </KeyboardAvoidingView>
                        :<KeyboardAvoidingView behavior="padding" style={styles.box}>
                            <View style={{flexDirection:"row", alignItems:"center"}}>
                                <Ionicons
                                name="locate"
                                size={24}
                                color="black"
                                />
                                <TextInput
                                placeholder="To"
                                placeholderTextColor="gray"
                                onChangeText={(text)=>setTo(text)}
                                value={to}
                                onBlur={inputHandler}
                                style={{marginLeft:10, width:"100%", color:"black"}}
                                />
                            </View>
                            {error1 ? <Text style={{color:"red", fontSize:12}}>Please Enter The Details</Text>:<Text></Text>}
                        </KeyboardAvoidingView>}
                        <View style={styles.tab}>
                            <TouchableOpacity
                            onPress={onewayHandler}
                            activeOpacity={0.8} style={isOneWay ? styles.isOneWayActive : styles.isOneWayOff}>
                                <Text style={isOneWay ? styles.textActive : styles.textOff}>Oneway</Text>
                            </TouchableOpacity>
                            <TouchableOpacity 
                            onPress={twowayHandler}
                            activeOpacity={0.8} style={!isTwoWay ? styles.isOneWayOff : styles.isOneWayActive}>
                                <Text style={!isTwoWay ? styles.textOff : styles.textActive}>RoundTrip</Text>
                            </TouchableOpacity>
                        </View>
                        {isOneWay && <View style={styles.date}>
                            <Text style={{color:"black", fontFamily:RalewayBold, fontSize:16, marginBottom:4}}>Departure Date</Text>
                            <TouchableOpacity activeOpacity={0.8}
                            onPress={()=>setIsVisible1(true)}
                            style={{paddingBottom: 3,alignItems:"center", justifyContent:"space-between", flexDirection:"row", borderBottomColor:"black", borderBottomWidth:1}}>
                                {(deptDate==="") ? <Text style={{fontSize:15, color:"gray", padding:5}}>YYYY-MM-DD</Text>
                                : <Text style={{fontSize:15, color:"gray", padding:5}}>{deptDate}</Text>}
                                <DatePicker
                                mode="date"
                                onCloseModal={()=>setIsVisible1(false)}
                                format="YYYY-MM-DD"
                                hideText={true}
                                minDate={new Date()}
                                maxDate="2021-12-31"
                                onDateChange={handleConfirm1}
                                cancelBtnText="Cancel"
                                confirmBtnText="Confirm"
                                customStyles={{
                                    dateIcon:{
                                        marginLeft:100
                                    }
                                }}
                                />
                            </TouchableOpacity>
                        </View>}
                        { isTwoWay && <View style={styles.dates}>
                            <View style={styles.date}>
                                <Text style={{color:"black", fontFamily:RalewayBold, fontSize:16, marginBottom:4}}>Departure Date</Text>
                                <TouchableOpacity activeOpacity={0.8}
                                onPress={()=>setIsVisible1(true)}
                                style={{paddingBottom: 3,alignItems:"center", justifyContent:"space-between", flexDirection:"row", borderBottomColor:"black", borderBottomWidth:1}}>
                                    {(deptDate==="") ? <Text style={{fontSize:15, color:"gray", padding:5}}>YYYY-MM-DD</Text>
                                    : <Text style={{fontSize:15, color:"gray", padding:5}}>{deptDate}</Text>}
                                    <DatePicker
                                    mode="date"
                                    onCloseModal={()=>setIsVisible11(false)}
                                    format="YYYY-MM-DD"
                                    hideText={true}
                                    onDateChange={handleConfirm1}
                                    cancelBtnText="Cancel"
                                    minDate={new Date()}
                                    maxDate="2021-12-31"
                                    confirmBtnText="Confirm"
                                    customStyles={{
                                        dateIcon:{
                                            marginLeft:100
                                        }
                                    }}
                                    />
                                </TouchableOpacity>
                            </View>
                            <View style={styles.date}>
                                <Text style={{color:"black", fontFamily:RalewayBold, fontSize:16, marginBottom:4}}>Return Date</Text>
                                <TouchableOpacity activeOpacity={0.8}
                                onPress={()=>setIsVisible2(true)}
                                style={{paddingBottom: 3,alignItems:"center", justifyContent:"space-between", flexDirection:"row", borderBottomColor:"black", borderBottomWidth:1}}>
                                    {(returnDate==="") ? <Text style={{fontSize:15, color:"gray", padding:5}}>YYYY-MM-DD</Text>
                                    : <Text style={{fontSize:15, color:"gray", padding:5}}>{returnDate}</Text>}
                                    <DatePicker
                                    mode="date"
                                    onCloseModal={()=>setIsVisible2(false)}
                                    format="YYYY-MM-DD"
                                    hideText={true}
                                    minDate={new Date()}
                                    maxDate="2021-12-31"
                                    onDateChange={handleConfirm2}
                                    cancelBtnText="Cancel"
                                    confirmBtnText="Confirm"
                                    customStyles={{
                                        dateIcon:{
                                            marginLeft:100
                                        }
                                    }}
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>}
                        <TouchableOpacity  activeOpacity={0.8} style={styles.button}
                        onPress={isOneWay ? busesHandler : busesHandler1}>
                            <Text style={{color:"white",fontSize:18, fontFamily:RalewayBold}}>Find Buses</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    screen:{
        flex:1,
        backgroundColor: "white",
    },
    view:{
        backgroundColor: primary,
        borderBottomRightRadius:100,
        borderBottomLeftRadius:100,
        width:"100%",
        height:"40%",
    },
    view1:{
        backgroundColor: primary,
        borderBottomRightRadius:100,
        borderBottomLeftRadius:100,
        width:"100%",
        height:"45%",
    },
    view2:{
        width:"100%"
    },
    box:{
        backgroundColor:"white",
        elevation:5,
        borderRadius:10,
        paddingVertical:10,
        paddingHorizontal:10,
        marginTop:-20,
        width:"80%",
        marginBottom:10,
        justifyContent:"center",
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
        marginBottom:85
    },
    heading:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        paddingHorizontal:10,
        paddingVertical:20
    },
    btn:{
        padding:8,
        borderRadius:25,
        backgroundColor:newColor,
        marginLeft:10
    },
    dot:{
        backgroundColor:fontColor,
        width:10,
        height:10,
        borderRadius:20,
        position:"absolute",
        right:3,
        top:3
    },
    container:{
        width:"100%",
        alignItems:"center"
    },
    text:{
        alignItems:"center",
        marginTop:30,
        marginRight: 50
    },
    text1:{
        flexDirection:"row",
        alignItems:"flex-end",
        marginBottom:1
    },
    text2:{
        flexDirection:"row",
        alignItems:"flex-end",
        marginBottom:5,
        marginLeft:100,
    },
    tab:{
        flexDirection:"row",
        alignItems:"center",
        marginVertical:10
    },
    date:{
        alignSelf:"flex-start",
        paddingHorizontal:50,
        marginVertical:10,
        width:"100%"
    },
    isOneWayActive:{
        backgroundColor: primary,
        paddingHorizontal:15, 
        paddingVertical:10,
        borderRadius:10
    },
    isOneWayOff:{
        backgroundColor: "white",
        paddingHorizontal:15, 
        paddingVertical:10,
        borderRadius:10
    },
    textActive:{
        color: "white",
        fontSize:15,
        fontFamily: RalewayBold
    },
    textOff:{
        color: "black",
        fontSize:15,
        fontFamily: RalewayBold
    }
})
