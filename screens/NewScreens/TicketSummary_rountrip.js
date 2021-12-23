import React from "react";
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Image, ScrollView } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
// import Entypo from "react-native-vector-icons/Entypo";
import { useNavigation } from '@react-navigation/core';


const { width } = Dimensions.get("window");
const { height } = Dimensions.get("window");

export default function TicketSummaryScreen({route}){

    const navigation = useNavigation();
    const {Name,busName, deptHour, arivHour, fullName1, age1, fullName2, age2, number, email, gender1, gender2, price} = route.params;
    // console.log(route.params);

    return(
        <View style={styles.screen}>
            <View style={styles.container}>
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
                    <View style={{flexDirection:"row",alignItems:"center", justifyContent:"space-between"}}>
                        <TouchableOpacity activeOpacity={0.8} style={styles.btn}
                            onPress={()=>{navigation.navigate("Tickets")}}
                        >
                            <AntDesign
                                name="calendar"
                                size={30}
                                color="white"
                            />
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.8} style={styles.btn}
                        onPress={()=>{navigation.navigate("Notifications")}}
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
                <View style={{flexDirection:"row",elevation:5,alignItems:"center", width:"100%", backgroundColor:"white", borderRadius:10, padding:10}}>
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
                    <Text style={{fontSize:17, color:"black",marginLeft:10}}>Ticket summary</Text>
                </View>
            </View>
            <ScrollView style={{marginBottom:0}}>
                <View style={{marginHorizontal:20}}>
                    <View style={{elevation:5,alignItems:"center",backgroundColor:"#fff",height:height/4.5,marginTop:15}}></View>
                    <View style={{marginTop:20}}>
                        <Text style={{color:"#000",fontSize:18}}>Personal Details</Text>
                        <View style={{marginTop:10}}>
                            <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                                <MaterialCommunityIcons name="chair-rolling" color="#000" size={24} />
                                <Text style={{color:"#e66349"}}>A4</Text>
                                <Text style={{color:"#000"}}>{fullName1}</Text>
                                <Text style={{color:"#000"}}>{age1}</Text>
                                <Text style={{color:"#000"}}>{gender1}  </Text>
                            </View>
                            <View style={{borderWidth:0.2,borderColor:"gray",backgroundColor:"gray",marginVertical:10}} />
                            <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                                <MaterialCommunityIcons name="chair-rolling" color="#000" size={24} />
                                <Text style={{color:"#e66349"}}>B4</Text>
                                <Text style={{color:"#000"}}>{fullName2}</Text>
                                <Text style={{color:"#000"}}>{age2}</Text>
                                <Text style={{color:"#000"}}>{gender2}</Text>
                            </View>
                            <View></View>
                        </View>
                    </View>
                    <View style={{marginTop:20}}>
                        <Text style={{color:"#000",fontSize:18}}>Contact Details</Text>
                        <View style={{marginTop:10}}>
                            <View style={{flexDirection:"row"}}>
                                <Text style={{color:"gray"}}>Phone number - </Text>
                                <Text style={{color:"#000"}}>{number}</Text>
                            </View>
                            <View style={{borderWidth:0.2,borderColor:"gray",backgroundColor:"gray",marginVertical:10}} />
                            <View style={{flexDirection:"row"}}>
                                <Text style={{color:"gray"}}>Email - </Text>
                                <Text style={{color:"#000"}}>{email}</Text>
                            </View>
                            <View></View>
                        </View>
                    </View>
                    <View style={{marginTop:20}}>
                        <Text style={{color:"#000",fontSize:18}}>Payment Details</Text>
                        <View style={{marginTop:10}}>
                            <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                                <Text style={{color:"gray"}}>Ticket Fare</Text>
                                <Text style={{color:"gray"}}>₹2,020.00</Text>
                            </View>
                            <View style={{flexDirection:"row",justifyContent:"space-between",marginVertical:5}}>
                                <Text style={{color:"gray"}}>GST</Text>
                                <Text style={{color:"gray"}}>₹50.00</Text>
                            </View>
                            <View style={{flexDirection:"row",justifyContent:"space-between",marginBottom:30}}>
                                <Text style={{color:"#000"}}>Total pay</Text>
                                <Text style={{color:"#000"}}>₹2,070.00</Text>
                            </View>
                        </View>
                        <View style={{alignItems:"center"}}>
                            <TouchableOpacity 
                                style={styles.proceed}
                                onPress={()=>navigation.navigate("PaymentScreen")}
                            >
                                <Text style={{color:"#fff",fontSize:16}}>Proceed to Payment</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: "#edf5f7",
        width: width
    },
    container: {
        height: "16%",
        width: width,
        backgroundColor: "#969557",
        borderBottomRightRadius: 18,
        borderBottomLeftRadius: 18
    },
    heading: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 10,
        paddingVertical: 20,
        marginTop: 10
    },
    btn:{
        padding: 8,
        borderRadius: 25,
        backgroundColor: "#767553",
        marginLeft: 10
    },
    dot:{
        backgroundColor: "#FCBA00",
        width: 10,
        height: 10,
        borderRadius: 20,
        position: "absolute",
        right: 3,
        top: 3
    },
    view2:{
        width: width,
        marginTop: -15,
        paddingHorizontal: 20,
    },
    proceed: {
        backgroundColor:"#e66349",
        justifyContent:"center",
        alignItems:"center",
        borderRadius:10,
        paddingVertical:12,
        elevation:5,
        marginBottom:40,
        width:"70%"
    }
});