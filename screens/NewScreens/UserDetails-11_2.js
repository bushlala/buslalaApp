import React from "react";
import { View, Text, StyleSheet, Dimensions, ScrollView, TouchableOpacity, TextInput } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import { useNavigation } from '@react-navigation/core'

import { fontColor, newColor, primary, secondary } from '../../components/Colors';


const {width} = Dimensions.get("window");
const {height} = Dimensions.get("window");



export default function UserDetails_11_2(){

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
                
            </View>
            <View style={{paddingHorizontal:30,marginBottom:200}}>
            <ScrollView style={{}} showsVerticalScrollIndicator={false}>
                    <View style={{marginHorizontal:5}}>
                        <Text style={{color:"#000",marginTop:40}}>Personal Detials</Text>
                        <View style={{flexDirection:"row",justifyContent:"center",marginTop:20}}>
                            <Text style={{color:"#000"}}>Person 1</Text>
                            <View style={{borderWidth:0.8,marginHorizontal:20}}></View>
                            <Text style={{color:"#000"}}>A4</Text>
                        </View>
                        <View style={{elevation:5,width:"100%", backgroundColor:"white", borderRadius:10, padding:10,marginTop:10}}>
                            <TextInput style={{width:"100%",paddingLeft:10}} placeholder="Full Name" placeholderTextColor="gray" />
                        </View>
                        <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                            <View style={{flexDirection:"row",elevation:5, backgroundColor:"white", borderRadius:10, padding:10,marginTop:10}}>
                                <TextInput style={{paddingLeft:10,width:width/3}} placeholder="Age" placeholderTextColor="gray" />
                            </View>
                            <View style={{elevation:5, backgroundColor:"white", borderRadius:10, padding:10,marginTop:10,flexDirection:'row',alignItems:"center"}}>
                                <Text style={{color:"gray"}}>Gender</Text>
                                <View style={{paddingHorizontal:20}}></View>
                                <MaterialIcons name="expand-more" color="#000" size={24} />
                            </View>
                        </View>
                        <View style={{flexDirection:"row",justifyContent:"center",marginTop:20}}>
                            <Text style={{color:"#000"}}>Person 2</Text>
                            <View style={{borderWidth:0.8,marginHorizontal:20}}></View>
                            <Text style={{color:"#000"}}>B4</Text>
                        </View>
                        <View style={{elevation:5,width:"100%", backgroundColor:"white", borderRadius:10, padding:10,marginTop:10}}>
                            <TextInput style={{width:"100%",paddingLeft:10}} placeholder="Full Name" placeholderTextColor="gray" />
                        </View>
                        <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                            <View style={{flexDirection:"row",elevation:5, backgroundColor:"white", borderRadius:10, padding:10,marginTop:10}}>
                                <TextInput style={{paddingLeft:10,width:width/3}} placeholder="Age" placeholderTextColor="gray" />
                            </View>
                            <View style={{elevation:5, backgroundColor:"white", borderRadius:10, padding:10,marginTop:10,flexDirection:'row',alignItems:"center"}}>
                                <Text style={{color:"gray"}}>Gender</Text>
                                <View style={{paddingHorizontal:20}}></View>
                                <MaterialIcons name="expand-more" color="#000" size={24} />
                            </View>
                        </View>
                        <Text style={{color:"#000",marginTop:40}}>Contact Detials</Text>
                        <Text style={{color:"gray",marginLeft:20}}>Your ticket will be sent here</Text>
                        <View style={{elevation:5, backgroundColor:"white", borderRadius:10, padding:5,marginTop:10}}>
                            <TextInput style={{paddingLeft:10,width:width/3}} placeholder="Phone number" placeholderTextColor="gray" />
                        </View>
                        <View style={{elevation:5, backgroundColor:"white", borderRadius:10, padding:5,marginTop:10}}>
                            <TextInput style={{paddingLeft:10,width:width/3}} placeholder="Email" placeholderTextColor="gray" />
                        </View>
                        <View style={{flexDirection:"row",alignItems:"center",marginVertical:10}}>
                            <View style={{height:15,width:15,borderWidth:1,borderColor:"gray",borderRadius:2}}></View>
                            <Text style={{color:"#66645f",marginLeft:10}}>Upload ID Proof (Optional)</Text>
                        </View>
                        <View style={{flexDirection:"row",alignItems:"center"}}>
                            <View style={{height:15,width:15,borderWidth:1,borderColor:"gray",borderRadius:2}}></View>
                            <Text style={{color:"#66645f",marginLeft:10}}>Upload Cowin Certificate (Optional)</Text>
                        </View>
                        <TouchableOpacity style={{elevation:5, backgroundColor:"#ed6c39", borderRadius:10, padding:15,marginTop:20,alignItems:"center",marginHorizontal:90,marginBottom:250}}>
                            <Text style={{color:"#fff"}}>+ Add file</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
                <View style={{elevation:5,width:"100%", backgroundColor:"#fff", borderRadius:10,marginTop:-100,padding:10,alignItems:"center",flexDirection:"row"}}>
                    <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                        <View style={{alignItems:"center"}}>
                            <Text style={{color:"gray"}}>Selected seats</Text>
                            <Text style={{color:"#000"}}>A4, B4</Text>
                        </View>
                        <View style={{borderWidth:0.9,borderColor:"#000",backgroundColor:"#000",marginHorizontal:15}} />
                        <View style={{alignItems:"center"}}>
                            <Text style={{color:"gray"}}>Price</Text>
                            <Text style={{color:"#000"}}>₹2,020</Text>
                        </View>
                    </View>
                    <TouchableOpacity 
                        style={{elevation:5, backgroundColor:"#ed6c39", borderRadius:10, padding:10,alignItems:"center",marginVertical:10,marginLeft:10,paddingHorizontal:20}}
                        onPress={()=>navigation.navigate("BusDetails")}
                        >
                        <Text style={{color:"#fff",fontSize:18}}>Proceed</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        backgroundColor: "#edf5f7",
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
    

});