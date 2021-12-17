import React, { useState } from "react";
import { View, Text, StyleSheet, Dimensions, ScrollView, TouchableOpacity, TextInput, Image } from "react-native";
import ToggleSwitch  from "toggle-switch-react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import { useNavigation } from '@react-navigation/core';


import { fontColor, newColor, primary, secondary } from '../../components/Colors';


const {width} = Dimensions.get("window");
const {height} = Dimensions.get("window");



export default function SelectedScreen(){

    const navigation = useNavigation();

    const [toggle, setToggle] = useState(false);

    const Upper=()=>(
        <View>
            <View style={{flexDirection:"row",justifyContent:"space-around",marginTop:20}}>
                <View style={{flexDirection:"row"}}>
                    <View style={{backgroundColor:"#9ea5b0",height:90,width:40,borderRadius:5}}></View>
                    <View style={{marginHorizontal:10}} />
                    <View style={{backgroundColor:"#fff",height:90,width:40,borderRadius:5}}></View>
                </View>
                <View style={{flexDirection:"row"}}>
                    <View style={{backgroundColor:"#9ea5b0",height:90,width:40,borderRadius:5}}></View>
                    <View style={{marginHorizontal:10}} />
                    <View style={{backgroundColor:"#9ea5b0",height:90,width:40,borderRadius:5}}></View>
                </View>
            </View> 
            <View style={{flexDirection:"row",justifyContent:"space-around",marginTop:20}}>
                <View style={{flexDirection:"row"}}>
                    <View style={{backgroundColor:"#9ea5b0",height:90,width:40,borderRadius:5}}></View>
                    <View style={{marginHorizontal:10}} />
                    <View style={{backgroundColor:"#9ea5b0",height:90,width:40,borderRadius:5}}></View>
                </View>
                <View style={{flexDirection:"row"}}>
                    <View style={{backgroundColor:"#9ea5b0",height:90,width:40,borderRadius:5}}></View>
                    <View style={{marginHorizontal:10}} />
                    <View style={{backgroundColor:"#9ea5b0",height:90,width:40,borderRadius:5}}></View>
                </View>
            </View>
            <View style={{flexDirection:"row",justifyContent:"space-around",marginTop:20}}>
                <View style={{flexDirection:"row"}}>
                    <View style={{backgroundColor:"#9ea5b0",height:90,width:40,borderRadius:5}}></View>
                    <View style={{marginHorizontal:10}} />
                    <View style={{backgroundColor:"#9ea5b0",height:90,width:40,borderRadius:5}}></View>
                </View>
                <View style={{flexDirection:"row"}}>
                    <View style={{backgroundColor:"#9ea5b0",height:90,width:40,borderRadius:5}}></View>
                    <View style={{marginHorizontal:10}} />
                    <View style={{backgroundColor:"#9ea5b0",height:90,width:40,borderRadius:5}}></View>
                </View>
            </View>
            <View style={{flexDirection:"row",justifyContent:"space-around",marginTop:20,marginBottom:20}}>
                <View style={{flexDirection:"row"}}>
                    <View style={{backgroundColor:"#9ea5b0",height:90,width:40,borderRadius:5}}></View>
                    <View style={{marginHorizontal:10}} />
                    <View style={{backgroundColor:"#9ea5b0",height:90,width:40,borderRadius:5}}></View>
                </View>
                <View style={{flexDirection:"row"}}>
                    <View style={{backgroundColor:"#9ea5b0",height:90,width:40,borderRadius:5}}></View>
                    <View style={{marginHorizontal:10}} />
                    <View style={{backgroundColor:"#9ea5b0",height:90,width:40,borderRadius:5}}></View>
                </View>
            </View>
        </View>
    );

    const Lower=()=>(
        <View style={{marginBottom:20}}>
            <View style={{flexDirection:"row",justifyContent:"space-around",marginTop:20}}>
                <View style={{flexDirection:"row"}}>
                    <View style={{backgroundColor:"#9ea5b0",height:70,width:40,borderRadius:5}}></View>
                    <View style={{marginHorizontal:10}} />
                    <View style={{backgroundColor:"#fff",height:70,width:40,borderRadius:5}}></View>
                </View>
                <View>
                    <View style={{flexDirection:"row"}}>
                        <View style={{backgroundColor:"#9ea5b0",height:40,width:40,borderRadius:5}}></View>
                        <View style={{marginHorizontal:10}} />
                        <View style={{backgroundColor:"#9ea5b0",height:40,width:40,borderRadius:5}}></View>
                    </View>
                    <View style={{flexDirection:"row",marginTop:10}}>
                        <View style={{backgroundColor:"#9ea5b0",height:40,width:40,borderRadius:5}}></View>
                        <View style={{marginHorizontal:10}} />
                        <View style={{backgroundColor:"#9ea5b0",height:40,width:40,borderRadius:5}}></View>
                    </View>             
                </View>        
            </View>
            <View style={{flexDirection:"row",justifyContent:"space-around"}}>
                <View style={{flexDirection:"row",marginTop:-10}}>
                    <View style={{backgroundColor:"#9ea5b0",height:70,width:40,borderRadius:5}}></View>
                    <View style={{marginHorizontal:10}} />
                    <View style={{backgroundColor:"#9ea5b0",height:70,width:40,borderRadius:5}}></View>
                </View>
                <View>
                    <View style={{flexDirection:"row",marginTop:10}}>
                        <View style={{backgroundColor:"#9ea5b0",height:40,width:40,borderRadius:5}}></View>
                        <View style={{marginHorizontal:10}} />
                        <View style={{backgroundColor:"#9ea5b0",height:40,width:40,borderRadius:5}}></View>
                    </View>
                    <View style={{flexDirection:"row",marginTop:10}}>
                        <View style={{backgroundColor:"#9ea5b0",height:40,width:40,borderRadius:5}}></View>
                        <View style={{marginHorizontal:10}} />
                        <View style={{backgroundColor:"#9ea5b0",height:40,width:40,borderRadius:5}}></View>
                    </View>             
                </View>        
            </View>
            <View style={{flexDirection:"row",justifyContent:"space-around"}}>
                <View style={{flexDirection:"row",marginTop:-30}}>
                    <View style={{backgroundColor:"#9ea5b0",height:70,width:40,borderRadius:5}}></View>
                    <View style={{marginHorizontal:10}} />
                    <View style={{backgroundColor:"#9ea5b0",height:70,width:40,borderRadius:5}}></View>
                </View>
                <View>
                    <View style={{flexDirection:"row",marginTop:10}}>
                        <View style={{backgroundColor:"#9ea5b0",height:60,width:40,borderRadius:5}}></View>
                        <View style={{marginHorizontal:10}} />
                        <View style={{backgroundColor:"#9ea5b0",height:60,width:40,borderRadius:5}}></View>
                    </View>            
                </View>        
            </View>
            <View style={{flexDirection:"row",justifyContent:"space-around"}}>
                <View style={{flexDirection:"row",marginTop:-20}}>
                    <View style={{backgroundColor:"#9ea5b0",height:70,width:40,borderRadius:5}}></View>
                    <View style={{marginHorizontal:10}} />
                    <View style={{backgroundColor:"#9ea5b0",height:70,width:40,borderRadius:5}}></View>
                </View>
                <View>
                    <View style={{flexDirection:"row",marginTop:10}}>
                        <View style={{backgroundColor:"#9ea5b0",height:60,width:40,borderRadius:5}}></View>
                        <View style={{marginHorizontal:10}} />
                        <View style={{backgroundColor:"#9ea5b0",height:60,width:40,borderRadius:5}}></View>
                    </View>            
                </View>        
            </View>
            <View style={{flexDirection:"row",justifyContent:"space-around"}}>
                <View style={{flexDirection:"row",marginTop:-10}}>
                    <View style={{backgroundColor:"#9ea5b0",height:70,width:40,borderRadius:5}}></View>
                    <View style={{marginHorizontal:10}} />
                    <View style={{backgroundColor:"#9ea5b0",height:70,width:40,borderRadius:5}}></View>
                </View>
                <View>
                    <View style={{flexDirection:"row",marginTop:10}}>
                        <View style={{backgroundColor:"#9ea5b0",height:60,width:40,borderRadius:5}}></View>
                        <View style={{marginHorizontal:10}} />
                        <View style={{backgroundColor:"#9ea5b0",height:60,width:40,borderRadius:5}}></View>
                    </View>            
                </View>        
            </View>
            <View style={{flexDirection:"row",justifyContent:"space-around"}}>
                <View style={{flexDirection:"row",marginTop:0}}>
                    <View style={{backgroundColor:"#9ea5b0",height:70,width:40,borderRadius:5}}></View>
                    <View style={{marginHorizontal:10}} />
                    <View style={{backgroundColor:"#9ea5b0",height:70,width:40,borderRadius:5}}></View>
                </View>
                <View>
                    <View style={{flexDirection:"row",marginTop:10}}>
                        <View style={{backgroundColor:"#9ea5b0",height:60,width:40,borderRadius:5}}></View>
                        <View style={{marginHorizontal:10}} />
                        <View style={{backgroundColor:"#9ea5b0",height:60,width:40,borderRadius:5}}></View>
                    </View>            
                </View>        
            </View>
        </View>
    );

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
            <View style={{marginHorizontal:20,marginBottom:200}}>
                <ScrollView style={{}} showsVerticalScrollIndicator={false}>
                    <View style={{alignItems:"center",marginTop:10}}>
                        <View>
                            <Text style={{color:"#000",marginBottom:5}}>Prices</Text>
                        </View>
                        <View style={{flexDirection:"row",borderRadius:10,backgroundColor:"#fff",elevation:5}}>
                            <View style={{backgroundColor:"#e66349",paddingHorizontal:5,borderRadius:8}}>
                                <Text style={{color:"#000",paddingHorizontal:12,paddingVertical:8}}>All</Text>
                            </View>
                            <View style={{borderWidth:0.8,backgroundColor:"gray",borderColor:"gray",marginVertical:8}} />
                            <View>
                                <Text style={{color:"#000",paddingHorizontal:12,paddingVertical:8}}>₹1199</Text>
                            </View>
                            <View style={{borderWidth:0.8,backgroundColor:"gray",borderColor:"gray",marginVertical:8}} />
                            <View>
                                <Text style={{color:"#000",paddingHorizontal:12,paddingVertical:8}}>₹2499</Text>
                            </View>
                        </View>
                        <View style={{flexDirection:"row",marginTop:10}}>
                            <Text style={{color:toggle === false ? "#e66349" : "#000",marginRight:10}}>Lower</Text>
                            {/* <View style={{marginHorizontal:10}}> */}
                                <ToggleSwitch isOn={toggle}
                                    onColor="#e66349"
                                    offColor="#e66349"                          
                                    size="medium"
                                    onToggle={() =>{toggle === false ? setToggle(true) : setToggle(false)}}
                                />
                            {/* </View> */}
                            <Text style={{color:toggle === false ? "#000" : "#e66349",marginRight:10,marginLeft:10}}>Upper</Text>
                        </View>
                    </View> 
                    {/* <ScrollView style={{marginBottom:100,marginTop:10}} showsHorizontalScrollIndicator={false}> */}
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
                        {toggle === true ? <Upper /> : <Lower />}  
                    {/* </ScrollView>                    */}
                </ScrollView>
                <View style={{elevation:5,backgroundColor:"#fff",width:"100%",borderRadius:10,marginTop:-110,flexDirection:"row",padding:10,justifyContent:"space-between",paddingVertical:30}}>
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
                        <TouchableOpacity onPress={()=>navigation.navigate("UserDetails")}
                            style={{backgroundColor:"#ed6c39",paddingVertical:8,paddingHorizontal:20,borderRadius:10,elevation:5}}
                        >
                            <View>
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
        marginRight:55,
        marginTop:10
    }
});