import { useNavigation } from '@react-navigation/core'
import axios from 'axios'
import React, { useEffect } from 'react'
import { Image, KeyboardAvoidingView, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { RalewayBold, RalewayLight, RalewayRegular } from '../assets/fonts/fonts'
import { fontColor, newColor, primary, secondary, textColor } from '../components/Colors'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import Entypo from "react-native-vector-icons/Entypo";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Picker } from '@react-native-picker/picker';
import { useTheme } from "@react-navigation/native";



const OnewayScreen = () => {

    const colors = useTheme();


    const navigation = useNavigation();
    const [isVisible1, setIsVisible1] = useState(false);
    const [isVisible2, setIsVisible2] = useState(false);
    const [isVisible3, setIsVisible3] = useState(false);
    const [deptDate, setDeptDate] = useState("");
    const [deptDate2, setDeptDate2] = useState("");
    const [returnDate, setReturnDate] = useState("");
    const [click, setClick] = useState(false);
    const [from, setFrom] = useState("");
    const [error, setError]= useState(false);
    const [error1, setError1]= useState(false);
    const [to, setTo]= useState("");
    const [isOneWay, setIsOneWay] = useState(true);
    const [isTwoWay, setIsTwoWay] = useState(false);
    const [date1, setDate1] = useState(new Date());
    const [date2, setDate2] = useState(new Date());
    const [date3, setDate3] = useState(new Date());
    const [srcData, setSrcData] = useState([]);
    const [destData, setDestData] = useState([]);
    
    // console.log(destData);


    // const inputHandler=()=>{
    //     if(from===""){
    //     setError1(true)}
    //     else{
    //         setError1(false);
    //     }
    // };

    // const inputHandler1=()=>{
    //     if(to===""){
    //     setError1(true)}
    //     else{
    //         setError1(false);
    //     }
    // };

    const handleConfirm1=(event,selectedDate)=>{    // ***must have to pass 'event' as a param whether it is used or not, otherwise gives error
        const currentDate = selectedDate || date1;      
        setDate1(currentDate);
        setIsVisible1(false);
        let tempDate = new Date(currentDate);
        let year = tempDate.getFullYear();
        let month = ('0' + (tempDate.getMonth()+1)).slice(-2);     // to get 0 before a single month (i.e 1 -> 01)
        // let month =tempDate.getMonth()+1; 
        let day = ('0' + tempDate.getDate()).slice(-2);             // to get 0 before a single day   (i.e 3 -> 03)
        let fDate = `${year}-${month}-${day}`;
        setDeptDate(fDate);
    };

    const handleConfirm2=(event,selectedDate)=>{    // ***must have to pass 'event' as a param whether it is used or not, otherwise gives error
        const currentDate = selectedDate || date2;      
        setDate2(currentDate);
        setIsVisible2(false);
        let tempDate = new Date(currentDate);
        let year = tempDate.getFullYear();
        let month = ('0' + (tempDate.getMonth() + 1)).slice(-2);     // to get 0 before a single month (i.e 1 -> 01)
        let day = ('0' + tempDate.getDate()).slice(-2);             // to get 0 before a single day   (i.e 3 -> 03)
        let fDate = `${year}-${month}-${day}`;
        setDeptDate2(fDate);
    };
    const handleConfirm3=(event,selectedDate)=>{    // ***must have to pass 'event' as a param whether it is used or not, otherwise gives error
        const currentDate = selectedDate || date3;      
        setDate3(currentDate);
        setIsVisible3(false);
        let tempDate = new Date(currentDate);
        let year = tempDate.getFullYear();
        let month = ('0' + (tempDate.getMonth() + 1)).slice(-2);     // to get 0 before a single month (i.e 1 -> 01)
        let day = ('0' + tempDate.getDate()).slice(-2);             // to get 0 before a single day   (i.e 3 -> 03)
        let fDate = `${year}-${month}-${day}`;
        setReturnDate(fDate);
    };

    const onewayHandler=()=>{
        setIsOneWay(true);
        setIsTwoWay(false);
    };

    const twowayHandler=()=>{
        setIsOneWay(false);
        setIsTwoWay(true);
    };

    var oneWayPostData = {
        "source": from, 
        "destination": to, 
        "date": deptDate
    };
    // console.log(oneWayPostData);

    const busesHandler=()=>{
        if(from==="" || to===""){
            setError(true);
            setError1(true)
        }else if(deptDate ===""){
            alert("please provide valid date");
        }else{
            setError(false);
            setError1(false);
            axios.post("https://buslala-backend-api.herokuapp.com/api/user/searchOneWayBus",oneWayPostData)
            .then((response)=>{
                if(response.status===200){
                    navigation.navigate("Buses",
                        {"Data": response.data, "src": from, "dest": to, 
                        "oneWay": isOneWay, "roundTrip": isTwoWay,
                        "date": deptDate
                    });
                }else{
                    console.log("Error");
                }
            }).catch((err)=>console.log(err));
        }
    };

    var roundTripPostData = {
        "source": from, 
        "destination": to, 
        "deptDate": deptDate2, 
        "returnDate": returnDate
    };
    console.log(roundTripPostData);

    const busesHandler1=()=>{
        if(from==="" || to===""){
            setError(true);
            setError1(true)
        }else if(deptDate2 > returnDate || deptDate2==="" || returnDate===""){
            alert("please provide valid date");
        }else{
            setError(false);
            setError1(false);
            axios.post("https://buslala-backend-api.herokuapp.com/api/user/roundTrip",roundTripPostData)
            .then((response)=>{
                if(response.status===200){
                    navigation.navigate("Buses",
                        {"Data": response.data,"src": from,"dest": to,
                        "oneWay": isOneWay,"roundTrip": isTwoWay,
                        "date": deptDate2,"rDate": returnDate
                    });
                }else{
                    console.log("Error");
                }
            }).catch((err)=>console.log(err));           
        }
    };

    const sourceApi=()=>{
        axios.get("https://buslala-backend-api.herokuapp.com/api/user/source")
        .then(resp=>{
            if(resp.status===200){
                const Data = resp.data;
                setSrcData(Data.data);
                // console.log(srcData);
            }else console.log(resp.status);
        })
        .catch(e=>{console.log(e);alert("please try after some time")});
    };
    const destApi=()=>{
        axios.get("https://buslala-backend-api.herokuapp.com/api/user/destination")
        .then(resp=>{
            if(resp.status===200){
                const Data = resp.data;
                setDestData(Data.data);
            }else console.log(resp.status);
        })
        .catch(e=>{
            console.log(e);
            alert("please try after some time");
        });
    };
    useEffect(() => {
        sourceApi();
        destApi();
    }, []);

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
                                <Picker 
                                    selectedValue={to}
                                    onValueChange={(val)=>setTo(val)}
                                    style={{flex:1,color:"#000"}}
                                    dropdownIconColor="#000"  
                                >
                                    <Picker.Item label='From' value="" style={{color:"#000"}} />
                                    {
                                        srcData.map(item=>{
                                            return(
                                                <Picker.Item label={item.name} value={item.name} key={item._id} />
                                            )
                                        })
                                    }
                                </Picker>
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
                                <Picker 
                                    selectedValue={from}
                                    onValueChange={(val)=>setFrom(val)}
                                    style={{flex:1,color:"#000"}}
                                    dropdownIconColor="#000"  
                                >
                                    <Picker.Item label='From' value="" style={{color:"#000"}} />
                                    {
                                        srcData.map(item=>{
                                            return(
                                                <Picker.Item label={item.name} value={item.name} key={item._id} />
                                            )
                                        })
                                    }
                                </Picker>
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
                                <Picker 
                                    selectedValue={to}
                                    onValueChange={(val)=>setTo(val)}
                                    style={{flex:1,color:"#000"}}
                                    dropdownIconColor="#000"   
                                >
                                    <Picker.Item label='To' value="" style={{color:"#000"}} />
                                    {
                                        destData.map(item=>{
                                            return(
                                                <Picker.Item label={item.name} value={item.name} key={item._id} />
                                            )
                                        })
                                    }
                                </Picker>
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
                                <Picker 
                                    selectedValue={to}
                                    onValueChange={(val)=>setTo(val)}
                                    style={{flex:1,color:"#000"}}
                                    dropdownIconColor="#000"    
                                >
                                    <Picker.Item label='To' value="" style={{color:"#000"}} />
                                    {
                                        destData.map(item=>{
                                            return(
                                                <Picker.Item label={item.name} value={item.name} key={item._id}/>
                                            )
                                        })
                                    }
                                </Picker>
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
                            style={{paddingBottom: 3,alignItems:"center", justifyContent:"space-between", flexDirection:"row", borderBottomColor:colors.colors.text, borderBottomWidth:1}}>
                                {(deptDate==="") ? <Text style={{fontSize:15, color:"gray", padding:5}}>YYYY-MM-DD</Text>
                                : <Text style={{fontSize:15, color:"gray", padding:5}}>{deptDate}</Text>}
                                {isVisible1 && (
                                <DateTimePicker
                                    testID="dateTimePicker"
                                    mode={"date"}
                                    display="calendar"
                                    value={date1}
                                    minimumDate={new Date()}
                                    onTouchCancel={()=>setIsVisible1(false)}
                                    onChange={handleConfirm1}
                                />)
                                }
                            </TouchableOpacity>
                        </View>}
                        { isTwoWay && <View style={styles.dates}>
                            <View style={styles.date}>
                                <Text style={{color:"black", fontFamily:RalewayBold, fontSize:16, marginBottom:4}}>Departure Date</Text>
                                <TouchableOpacity activeOpacity={0.8}
                                onPress={()=>setIsVisible2(true)}
                                style={{paddingBottom: 3,alignItems:"center", justifyContent:"space-between", flexDirection:"row",borderBottomColor:colors.colors.text, borderBottomWidth:1}}>
                                    {(deptDate2==="") ? <Text style={{fontSize:15, color:"gray", padding:5}}>YYYY-MM-DD</Text>
                                    : <Text style={{fontSize:15, color:"gray", padding:5}}>{deptDate2}</Text>}
                                    {isVisible2 && (
                                        <DateTimePicker
                                            testID="dateTimePicker"
                                            mode={"date"}
                                            display="calendar"
                                            value={date2}
                                            minimumDate={new Date()}
                                            onTouchCancel={()=>setIsVisible2(false)}
                                            onChange={handleConfirm2}
                                        />
                                    )}
                                </TouchableOpacity>
                            </View>
                            <View style={styles.date}>
                                <Text style={{color:"black", fontFamily:RalewayBold, fontSize:16, marginBottom:4}}>Return Date</Text>
                                <TouchableOpacity activeOpacity={0.8}
                                onPress={()=>setIsVisible3(true)}
                                style={{paddingBottom: 3,alignItems:"center", justifyContent:"space-between", flexDirection:"row", borderBottomColor:colors.colors.text, borderBottomWidth:1}}>
                                    {(returnDate==="") ? <Text style={{fontSize:15, color:"gray", padding:5}}>YYYY-MM-DD</Text>
                                    : <Text style={{fontSize:15, color:"gray", padding:5}}>{returnDate}</Text>}
                                    {isVisible3 && (
                                        <DateTimePicker
                                            testID="dateTimePicker"
                                            mode={"date"}
                                            display="calendar"
                                            value={date3}
                                            minimumDate={new Date()}
                                            onTouchCancel={()=>setIsVisible3(false)}
                                            onChange={handleConfirm3}
                                        />
                                    )}
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

export default OnewayScreen;

const styles = StyleSheet.create({
    screen:{
        flex:1,
        // backgroundColor: "white",
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
        marginBottom:100
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
