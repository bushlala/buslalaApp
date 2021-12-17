import { useNavigation, useRoute } from '@react-navigation/core'
import axios from 'axios'
import React from 'react'
import { Dimensions, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { RalewayBold, RalewayLight, RalewayRegular } from '../assets/fonts/fonts'
import { fontColor, newColor, primary, secondary, textColor } from '../components/Colors'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import Entypo from "react-native-vector-icons/Entypo";

const {width} = Dimensions.get("window");

const NotificationScreen = () => {

    const navigation = useNavigation();

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
                        <TouchableOpacity activeOpacity={0.8} style={styles.btn}
                        onPress={()=>navigation.navigate("Tickets")}>
                            <AntDesign
                            name="calendar"
                            size={30}
                            color="white"
                            />
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.8} style={styles.btn}>
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
                    <TouchableOpacity activeOpacity={0.8} style={{}}
                    onPress={()=>navigation.goBack()}>
                        <AntDesign
                        name="arrowleft"
                        size={24}
                        color="black"
                        />
                    </TouchableOpacity>
                    <Text style={{fontFamily:RalewayBold, fontSize:17, color:"black"}}>(1) Notifications</Text>
                </View>

                <ScrollView style={styles.notifications} showsVerticalScrollIndicator={false}>
                    <TouchableOpacity activeOpacity={0.8} style={styles.notification}>
                        <View style={{alignItems:"center"}}>
                            <View style={{padding:30, borderRadius:40, backgroundColor:"lightgray"}}></View>
                            <Text style={{fontSize:10, fontFamily:RalewayRegular, color:"gray", marginTop:3}}>3 mins ago</Text>
                        </View>
                        <View style={{alignItems:"flex-start", marginHorizontal:20}}>
                            <Text style={{fontFamily:RalewayBold, fontSize:16, color:"black"}}>Bus Service Name</Text>
                            <Text style={{fontSize:15, fontFamily:RalewayRegular, color:"gray"}} numberOfLines={2}>We are continuing this service as vaccines are generally available now.</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8} style={styles.notification}>
                        <View style={{alignItems:"center"}}>
                            <View style={{padding:30, borderRadius:40, backgroundColor:"lightgray"}}></View>
                            <Text style={{fontSize:10, fontFamily:RalewayRegular, color:"gray", marginTop:3}}>3 mins ago</Text>
                        </View>
                        <View style={{alignItems:"flex-start", marginHorizontal:20}}>
                            <Text style={{fontFamily:RalewayBold, fontSize:16, color:"black"}}>Bus Service Name</Text>
                            <Text style={{fontSize:15, fontFamily:RalewayRegular, color:"gray"}} numberOfLines={2}>We are continuing this service as vaccines are generally available now.</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8} style={styles.notification}>
                        <View style={{alignItems:"center"}}>
                            <View style={{padding:30, borderRadius:40, backgroundColor:"lightgray"}}></View>
                            <Text style={{fontSize:10, fontFamily:RalewayRegular, color:"gray", marginTop:3}}>3 mins ago</Text>
                        </View>
                        <View style={{alignItems:"flex-start", marginHorizontal:20}}>
                            <Text style={{fontFamily:RalewayBold, fontSize:16, color:"black"}}>Bus Service Name</Text>
                            <Text style={{fontSize:15, fontFamily:RalewayRegular, color:"gray"}} numberOfLines={2}>We are continuing this service as vaccines are generally available now.</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8} style={styles.notification}>
                        <View style={{alignItems:"center"}}>
                            <View style={{padding:30, borderRadius:40, backgroundColor:"lightgray"}}></View>
                            <Text style={{fontSize:10, fontFamily:RalewayRegular, color:"gray", marginTop:3}}>3 mins ago</Text>
                        </View>
                        <View style={{alignItems:"flex-start", marginHorizontal:20}}>
                            <Text style={{fontFamily:RalewayBold, fontSize:16, color:"black"}}>Bus Service Name</Text>
                            <Text style={{fontSize:15, fontFamily:RalewayRegular, color:"gray"}} numberOfLines={2}>We are continuing this service as vaccines are generally available now.</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8} style={styles.notification}>
                        <View style={{alignItems:"center"}}>
                            <View style={{padding:30, borderRadius:40, backgroundColor:"lightgray"}}></View>
                            <Text style={{fontSize:10, fontFamily:RalewayRegular, color:"gray", marginTop:3}}>3 mins ago</Text>
                        </View>
                        <View style={{alignItems:"flex-start", marginHorizontal:20}}>
                            <Text style={{fontFamily:RalewayBold, fontSize:16, color:"black"}}>Bus Service Name</Text>
                            <Text style={{fontSize:15, fontFamily:RalewayRegular, color:"gray"}} numberOfLines={2}>We are continuing this service as vaccines are generally available now.</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8} style={styles.notification}>
                        <View style={{alignItems:"center"}}>
                            <View style={{padding:30, borderRadius:40, backgroundColor:"lightgray"}}></View>
                            <Text style={{fontSize:10, fontFamily:RalewayRegular, color:"gray", marginTop:3}}>3 mins ago</Text>
                        </View>
                        <View style={{alignItems:"flex-start", marginHorizontal:20}}>
                            <Text style={{fontFamily:RalewayBold, fontSize:16, color:"black"}}>Bus Service Name</Text>
                            <Text style={{fontSize:15, fontFamily:RalewayRegular, color:"gray"}} numberOfLines={2}>We are continuing this service as vaccines are generally available now.</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8} style={styles.notification}>
                        <View style={{alignItems:"center"}}>
                            <View style={{padding:30, borderRadius:40, backgroundColor:"lightgray"}}></View>
                            <Text style={{fontSize:10, fontFamily:RalewayRegular, color:"gray", marginTop:3}}>3 mins ago</Text>
                        </View>
                        <View style={{alignItems:"flex-start", marginHorizontal:20}}>
                            <Text style={{fontFamily:RalewayBold, fontSize:16, color:"black"}}>Bus Service Name</Text>
                            <Text style={{fontSize:15, fontFamily:RalewayRegular, color:"gray"}} numberOfLines={2}>We are continuing this service as vaccines are generally available now.</Text>
                        </View>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        </View>
    )
}

export default NotificationScreen

const styles = StyleSheet.create({
    screen:{
        flex:1,
        backgroundColor: "white",
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
        width:width,
        marginTop:-10,
        paddingHorizontal:30,
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
        width:width,
        marginBottom:150
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
