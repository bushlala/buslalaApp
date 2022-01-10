import { useNavigation, useRoute } from '@react-navigation/core'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Dimensions, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { RalewayBold, RalewayLight, RalewayRegular } from '../assets/fonts/fonts'
import { fontColor, newColor, primary, secondary, textColor } from '../components/Colors'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
// import Entypo from "react-native-vector-icons/Entypo";
import { useTheme } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';

const {width,height} = Dimensions.get("window");

const TicketScreen = () => {

    const navigation = useNavigation();
    const colors = useTheme();
    const [data, setData] = useState([]);
    const [isData, setIsData] = useState(false);
    const[token, setToken] = useState("");
    const [date, setDate] = useState(new Date());
    let tempDate = new Date(date);
    let year = tempDate.getFullYear();
    let month = ('0' + (tempDate.getMonth()+1)).slice(-2);
    let day = ('0' + tempDate.getDate()).slice(-2); 
    let fDate = `${year}-${month}-${day}`;

    const getData=()=>{
        AsyncStorage.getItem("jwt").then(res=>{
            if(res!=null){
                const value = JSON.parse(res);
                setToken(value.data.token);
            }
        })
    };
    let axiosConfig = {
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            "Authorization": token,
        }
    };

    const ticketApi=()=>{
        axios.get("https://buslala-backend-api.herokuapp.com/api/user/booking",axiosConfig)
        .then(res=>{
            if(res.status===200){
                const Data = res.data;
                console.log(res.status);
                setData(Data.data);
                setData(Data.data);
                data.forEach(x=>setDate(x.date));
            }else console.log(res.status);
        })
        .catch(e=>{
            console.log(e);
            alert("please try again later");
        })
    };
    
    // const checkData=()=>{
    //     data.length !== 0 ? setIsData(true) : setIsData(false)
    // }
    useEffect(() => {
        ticketApi();
        getData();
        // checkData();
    },[]);

    return (
        <View style={styles.screen}>
            <View style={styles.view}>
                <View style={styles.heading}>
                    <View style={{flexDirection:"row", alignItems:"center"}}>
                        <TouchableOpacity activeOpacity={0.8} style={styles.btn}
                        onPress={()=>navigation.navigate("Profile")}
                        >
                            <MaterialCommunityIcons
                            name="account-outline"
                            size={30}
                            color="white"
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={{flexDirection:"row",alignItems:"center", justifyContent:"space-between"}}>
                        <TouchableOpacity activeOpacity={0.8} style={styles.btn}>
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
            </View>
            <View style={styles.view2}>
                <View style={{flexDirection:"row",elevation:5,alignItems:"center", width:"100%", backgroundColor:"white", justifyContent:"space-between", borderRadius:10, padding:10}}>
                    <TouchableOpacity 
                        style={{backgroundColor:"#fff",elevation:5,borderRadius:5}}
                        onPress={()=>navigation.goBack()}
                    >
                        <AntDesign
                            name="arrowleft"
                            size={24}
                            color="black"
                            style={{padding:3}}
                        />
                    </TouchableOpacity>
                    <Text style={{fontFamily:RalewayBold, fontSize:17, color:"black",marginRight:30}}>Your Tickets</Text>
                </View>

                <ScrollView style={styles.notifications} showsVerticalScrollIndicator={false}>
                    {
                        // isData === true ? 
                        data.map((item,index)=>(
                            <View style={{elevation:5,backgroundColor:"#e9f7f7",borderRadius:20,marginHorizontal:10,marginVertical:10}} key={index}>
                                <View style={{marginVertical:10}}>
                                    <Text style={{color:"#000",textAlign:"center",fontWeight:"bold"}}>{item.tripId.busId.name}</Text>
                                    <View style={{flexDirection:"row",justifyContent:"space-around",alignItems:"center",marginVertical:5}}>
                                        <View style={{alignItems:"center"}}>
                                            <Text style={{color:"#000",fontWeight:"500"}}>{item.tripId.sourceId.name}</Text>
                                            <Text style={{color:"#000",fontSize:12}}>{item.tripId.time.dept}</Text>
                                        </View>
                                        <View style={{alignItems:"center"}}>
                                            <Text style={{color:"#000"}}>{fDate}</Text>
                                            <Text style={{color:"#000",fontSize:12}}>{item.tripId.duration}</Text>
                                        </View>
                                        <View style={{alignItems:"center"}}>
                                            <Text style={{color:"#000",fontWeight:"500"}}>{item.tripId.destinationId.name}</Text>
                                            <Text style={{color:"#000",fontSize:12}}>{item.tripId.time.arr}</Text>
                                        </View>
                                    </View>
                                    <Text style={{color:"#000",textAlign:"center",fontWeight:"400"}}>Name: {item.u1_name}</Text>
                                    <Text style={{color:"#000",textAlign:"center",fontWeight:"600"}}>Seat number: {item.seat_number1}</Text>
                                    {/* <Text style={{color:"#000",textAlign:"center",fontWeight:"600"}}>Ticket number: 012345687788</Text> */}
                                </View>
                            </View> 
                        ))
                        // :
                        // <Text style={{color:"gray",textAlign:"center",fontWeight:"bold"}}>You have no Tickets</Text>
                    }
                </ScrollView>
            </View>
        </View>
    )
}

export default TicketScreen

const styles = StyleSheet.create({
    screen:{
        flex:1,
        // backgroundColor: "white",
        width:width
    },
    view:{
        backgroundColor: primary,
        borderBottomRightRadius:70,
        borderBottomLeftRadius:70,
        width:width,
        height:"25%",
    },
    view2:{
        // width:width,
        marginTop:-10,
        marginHorizontal:20
        // paddingHorizontal:30,
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
        paddingVertical:20,
        marginTop:40
    },
    btn:{
        padding:8,
        borderRadius:25,
        backgroundColor:newColor,
        marginLeft:10
    },
    btn1:{
        padding:20,
        borderRadius:50,
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
    notifications:{
        marginVertical:10,
        marginBottom:height/3.2
    },
    notification:{
        flexDirection:"row",
        alignItems:"flex-start",
        borderBottomColor:"gray",
        borderBottomWidth:1,
        padding:10,
        width:width-60,
    }

})
