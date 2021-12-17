import React from "react";
import { View, Text, StyleSheet, Dimensions, ScrollView, TouchableOpacity, Image } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import { useNavigation } from '@react-navigation/core';

import { fontColor, newColor, primary, secondary } from '../../components/Colors';


const {width} = Dimensions.get("window");
const {height} = Dimensions.get("window");



export default function SeatBooking_round_trip(){

    const navigation = useNavigation();

    return(
        <View style={styles.screen}>
            <View style={styles.view}>
                <View style={styles.heading}>
                    <View style={{flexDirection:"row", alignItems:"center"}}>
                        <TouchableOpacity activeOpacity={0.8} style={styles.btn}
                            onPress={()=>{navigation.navigate("Profile")}}
                        >
                            <MaterialCommunityIcons
                                name="account-outline"
                                size={30}
                                color="white"
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={{flexDirection:"row",alignItems:"center"}}>
                        <TouchableOpacity activeOpacity={0.8} style={styles.btn}
                            onPress={()=>{navigation.navigate("Tickets")}}>
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
                <View style={{flexDirection:"row",elevation:5,width:"100%", backgroundColor:"white", borderRadius:10, padding:10}}>
                    <TouchableOpacity 
                        style={{backgroundColor:"#fff",elevation:5,borderRadius:5,marginBottom:30}}
                        onPress={()=>navigation.goBack()}
                    >
                        <AntDesign
                            name="arrowleft"
                            size={24}
                            color="black"
                            style={{padding:3}}
                        />
                    </TouchableOpacity>
                    <View style={{flexDirection:"row",justifyContent:"space-between",flex:1}}>
                        <View style={{marginLeft:10}}>
                            <Text style={{fontSize:17, color:"black"}}>Company Name Travels</Text>
                            <View style={{flexDirection:"row",marginTop:5}}>
                                <Text style={{color:"gray"}}>22 Oct, Sun</Text>
                                <View style={{borderWidth:0.8,backgroundColor:"#000",marginHorizontal:10}}></View>
                                <Text style={{color:"gray"}}>09:00PM</Text>
                            </View>
                        </View>
                        <View style={{marginRight:20}}>
                            <Text style={{color:"black"}}>HYD</Text>
                            <View style={{flexDirection:"row",justifyContent:"center"}}>
                                <MaterialIcons name="import-export" color="#ed6c39" size={20} />
                            </View>
                            <Text style={{color:"black"}}>MAS</Text>
                        </View>
                    </View>
                </View>
                <ScrollView style={{height:height/1.5}}>
                    <View style={styles.circle}>
                        {/* <View style={{borderWidth:1,borderRadius:45/2,height:45,width:45,alignItems:"center",justifyContent:"center",borderColor:"gray"}}>
                            <View style={{borderWidth:1,height:13,borderColor:"gray",backgroundColor:"gray"}} />
                            <View style={{flexDirection:"row",alignItems:"center"}}>
                                <View style={{borderWidth:1,width:13,height:0,borderColor:"gray",backgroundColor:"gray"}} />
                                <View style={{borderWidth:1,borderRadius:15/2,height:15,width:15,borderColor:"gray"}} />
                                <View style={{borderWidth:1,width:13,height:0,borderColor:"gray",backgroundColor:"gray"}} />
                            </View>
                            <View style={{borderWidth:1,height:13,borderColor:"gray",backgroundColor:"gray"}} />
                        </View> */}
                        <Image source={require("../../assets/icons/steering-wheel.png")} style={{height:40,width:40}} />
                    </View>
                    <View style={{flexDirection:"row",justifyContent:"space-around",marginTop:10,marginHorizontal:20}}>
                        <View style={{flexDirection:"row"}}>                  
                            <View style={{marginRight:30}}>
                                <Text style={{color:"#000",textAlign:"center",marginBottom:10}}>A</Text>
                                <View style={{backgroundColor:"#edf5f7",paddingHorizontal:20,paddingVertical:23,borderRadius:5}}></View>
                            </View>
                            <View>
                                <Text style={{color:"#000",textAlign:"center",marginBottom:10}}>B</Text>
                                <View style={{backgroundColor:"gray", paddingHorizontal:20,paddingVertical:23,borderRadius:5}}></View>
                            </View>
                        </View>
                        <View style={{justifyContent:"center",marginHorizontal:10,marginTop:30}}>
                            <Text style={{color:"#000"}}>1</Text>
                        </View>
                        <View style={{flexDirection:"row"}}>
                            <View style={{marginRight:30}}>
                                <Text style={{color:"#000",textAlign:"center",marginBottom:10}}>C</Text>
                                <View style={{backgroundColor:"#edf5f7", paddingHorizontal:20,paddingVertical:23,borderRadius:5}}></View>
                            </View>
                            <View>
                                <Text style={{color:"#000",textAlign:"center",marginBottom:10}}>D</Text>
                                <View style={{backgroundColor:"gray", paddingHorizontal:20,paddingVertical:23,borderRadius:5}}></View>
                            </View>
                        </View>
                    </View>
                    <View style={{flexDirection:"row",justifyContent:"space-around",marginTop:20,marginHorizontal:20}}>
                        <View style={{flexDirection:"row"}}>
                            <View style={{marginRight:30}}>
                                <View style={{backgroundColor:"#edf5f7", paddingHorizontal:20,paddingVertical:23,borderRadius:5}}></View>
                            </View>
                            <View>
                                <View style={{backgroundColor:"gray", paddingHorizontal:20,paddingVertical:23,borderRadius:5}}></View>
                            </View>
                        </View>
                        <View style={{justifyContent:"center",marginHorizontal:10}}>
                            <Text style={{color:"#000"}}>2</Text>
                        </View>
                        <View style={{flexDirection:"row"}}>
                            <View style={{marginRight:30}}>
                                <View style={{backgroundColor:"#edf5f7", paddingHorizontal:20,paddingVertical:23,borderRadius:5}}></View>
                            </View>
                            <View>
                                <View style={{backgroundColor:"gray", paddingHorizontal:20,paddingVertical:23,borderRadius:5}}></View>
                            </View>
                        </View>
                    </View>
                    <View style={{flexDirection:"row",justifyContent:"space-around",marginTop:20,marginHorizontal:20}}>
                        <View style={{flexDirection:"row"}}>
                            <View style={{marginRight:30}}>
                                <View style={{backgroundColor:"#edf5f7", paddingHorizontal:20,paddingVertical:23,borderRadius:5}}></View>
                            </View>
                            <View>
                                <View style={{backgroundColor:"gray", paddingHorizontal:20,paddingVertical:23,borderRadius:5}}></View>
                            </View>
                        </View>
                        <View style={{justifyContent:"center",marginHorizontal:10}}>
                            <Text style={{color:"#000"}}>3</Text>
                        </View>
                        <View style={{flexDirection:"row"}}>
                            <View style={{marginRight:30}}>
                                <View style={{backgroundColor:"#edf5f7", paddingHorizontal:20,paddingVertical:23,borderRadius:5}}></View>
                            </View>
                            <View>
                                <View style={{backgroundColor:"gray", paddingHorizontal:20,paddingVertical:23,borderRadius:5}}></View>
                            </View>
                        </View>
                    </View>
                    <View style={{flexDirection:"row",justifyContent:"space-around",marginTop:20,marginHorizontal:20}}>
                        <View style={{flexDirection:"row"}}>
                            <View style={{marginRight:30}}>
                                <View style={{backgroundColor:"#edf5f7", paddingHorizontal:20,paddingVertical:23,borderRadius:5}}></View>
                            </View>
                            <View>
                                <View style={{backgroundColor:"gray", paddingHorizontal:20,paddingVertical:23,borderRadius:5}}></View>
                            </View>
                        </View>
                        <View style={{justifyContent:"center",marginHorizontal:10}}>
                            <Text style={{color:"#000"}}>4</Text>
                        </View>
                        <View style={{flexDirection:"row"}}>
                            <View style={{marginRight:30}}>
                                <View style={{backgroundColor:"#edf5f7", paddingHorizontal:20,paddingVertical:23,borderRadius:5}}></View>
                            </View>
                            <View>
                                <View style={{backgroundColor:"gray", paddingHorizontal:20,paddingVertical:23,borderRadius:5}}></View>
                            </View>
                        </View>
                    </View>
                    <View style={{flexDirection:"row",justifyContent:"space-around",marginTop:20,marginHorizontal:20}}>
                        <View style={{flexDirection:"row"}}>
                            <View style={{marginRight:30}}>
                                <View style={{backgroundColor:"#edf5f7", paddingHorizontal:20,paddingVertical:23,borderRadius:5}}></View>
                            </View>
                            <View>
                                <View style={{backgroundColor:"gray", paddingHorizontal:20,paddingVertical:23,borderRadius:5}}></View>
                            </View>
                        </View>
                        <View style={{justifyContent:"center",marginHorizontal:10}}>
                            <Text style={{color:"#000"}}>5</Text>
                        </View>
                        <View style={{flexDirection:"row"}}>
                            <View style={{marginRight:30}}>
                                <View style={{backgroundColor:"#edf5f7", paddingHorizontal:20,paddingVertical:23,borderRadius:5}}></View>
                            </View>
                            <View>
                                <View style={{backgroundColor:"gray", paddingHorizontal:20,paddingVertical:23,borderRadius:5}}></View>
                            </View>
                        </View>
                    </View>
                    <View style={{flexDirection:"row",justifyContent:"space-around",marginTop:20,marginHorizontal:20}}>
                        <View style={{flexDirection:"row"}}>
                            <View style={{marginRight:30}}>
                                <View style={{backgroundColor:"#edf5f7", paddingHorizontal:20,paddingVertical:23,borderRadius:5}}></View>
                            </View>
                            <View>
                                <View style={{backgroundColor:"gray", paddingHorizontal:20,paddingVertical:23,borderRadius:5}}></View>
                            </View>
                        </View>
                        <View style={{justifyContent:"center",marginHorizontal:10}}>
                            <Text style={{color:"#000"}}>6</Text>
                        </View>
                        <View style={{flexDirection:"row"}}>
                            <View style={{marginRight:30}}>
                                <View style={{backgroundColor:"#edf5f7", paddingHorizontal:20,paddingVertical:23,borderRadius:5}}></View>
                            </View>
                            <View>
                                <View style={{backgroundColor:"gray", paddingHorizontal:20,paddingVertical:23,borderRadius:5}}></View>
                            </View>
                        </View>
                    </View>
                    <View style={{flexDirection:"row",justifyContent:"space-around",marginTop:20,marginHorizontal:20}}>
                        <View style={{flexDirection:"row"}}>
                            <View style={{marginRight:30}}>
                                <View style={{backgroundColor:"#edf5f7", paddingHorizontal:20,paddingVertical:23,borderRadius:5}}></View>
                            </View>
                            <View>
                                <View style={{backgroundColor:"gray", paddingHorizontal:20,paddingVertical:23,borderRadius:5}}></View>
                            </View>
                        </View>
                        <View style={{justifyContent:"center",marginHorizontal:10}}>
                            <Text style={{color:"#000"}}>7</Text>
                        </View>
                        <View style={{flexDirection:"row"}}>
                            <View style={{marginRight:30}}>
                                <View style={{backgroundColor:"#edf5f7", paddingHorizontal:20,paddingVertical:23,borderRadius:5}}></View>
                            </View>
                            <View>
                                <View style={{backgroundColor:"gray", paddingHorizontal:20,paddingVertical:23,borderRadius:5}}></View>
                            </View>
                        </View>
                    </View>
                    <View style={{flexDirection:"row",justifyContent:"space-around",marginTop:20,marginBottom:120,marginHorizontal:20}}>
                        <View style={{flexDirection:"row"}}>
                            <View style={{marginRight:30}}>
                                <View style={{backgroundColor:"#edf5f7", paddingHorizontal:20,paddingVertical:23,borderRadius:5}}></View>
                            </View>
                            <View>
                                <View style={{backgroundColor:"gray", paddingHorizontal:20,paddingVertical:23,borderRadius:5}}></View>
                            </View>
                        </View>
                        <View style={{justifyContent:"center",marginHorizontal:10}}>
                            <Text style={{color:"#000"}}>8</Text>
                        </View>
                        <View style={{flexDirection:"row"}}>
                            <View style={{marginRight:30}}>
                                <View style={{backgroundColor:"#edf5f7", paddingHorizontal:20,paddingVertical:23,borderRadius:5}}></View>
                            </View>
                            <View>
                                <View style={{backgroundColor:"gray", paddingHorizontal:20,paddingVertical:23,borderRadius:5}}></View>
                            </View>
                        </View>
                    </View>
                </ScrollView>
                <View style={{elevation:5,width:"100%", backgroundColor:"#fff", borderRadius:10,marginTop:-110,flexDirection:"row",padding:10,justifyContent:"space-between",paddingVertical:30}}>
                    <View style={{flexDirection:"row",marginLeft:10}}>
                        <View style={{alignItems:"center"}}>
                            <Text style={{color:"gray"}}>Selected seats</Text>
                            <Text style={{color:"#000"}}>A4, B4</Text>
                        </View>
                        <View style={{backgroundColor:"#4a4847",borderWidth:1,marginHorizontal:20,borderColor:"#4a4847"}}></View>
                        <View style={{alignItems:"center"}}>
                            <Text style={{color:"gray"}}>Price</Text>
                            <Text style={{color:"#000"}}>₹2,020</Text>
                        </View>
                    </View>
                    <View>
                        <TouchableOpacity onPress={()=>navigation.navigate("UserDetails")}>
                            <View style={{backgroundColor:"#ed6c39",paddingVertical:8,paddingHorizontal:20,borderRadius:10,elevation:5}}>
                                <Text style={{color:"#fff",fontSize:20}}>Proceed</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        backgroundColor: "#fff",
        width: width
    },
    view:{
        backgroundColor: primary,
        borderBottomRightRadius: 30,
        borderBottomLeftRadius: 30,
        width: width,
        height: "20%",
    },
    view2:{
        width: width,
        marginTop: -30,
        paddingHorizontal: 20,
    },
    heading:{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 10,
        paddingVertical: 20,
        marginTop: 10
    },
    btn:{
        padding:8,
        borderRadius: 25,
        backgroundColor: newColor,
        marginLeft: 10
    }, 
    dot:{
        backgroundColor: fontColor,
        width: 10,
        height: 10,
        borderRadius: 20,
        position: "absolute",
        right: 3,
        top: 3
    },
    circle:{
        alignItems:"flex-end",
        marginRight:60,
        marginTop:10
    }

});