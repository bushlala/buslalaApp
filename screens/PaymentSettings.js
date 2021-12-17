import { useNavigation} from '@react-navigation/core'
import axios from 'axios'
import React from 'react'
import { Modal, ScrollView, StyleSheet, Text, TouchableOpacity, View,TextInput } from 'react-native'
import { RalewayBold, RalewayLight, RalewayRegular } from '../assets/fonts/fonts'
import { fontColor, newColor, primary, secondary, textColor } from '../components/Colors'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import Entypo from "react-native-vector-icons/Entypo";
import { useState } from 'react'
import ToggleSwitch from "toggle-switch-react-native";

const PaymentSettings = () => {

    const navigation = useNavigation();
    const [isOpen, setIsOpen]=useState(false);
    const [on, setOn] = useState(false);

    const closeHandle=()=>{
        setIsOpen(false);
    }


    return (
        <View style={styles.screen}>
            <View style={styles.view}>
                <View style={styles.heading}>
                    <View style={{flexDirection:"row", alignItems:"center", marginTop:40}}>
                        <TouchableOpacity activeOpacity={0.8} style={styles.btn1}>
                            <MaterialCommunityIcons
                            name="account-outline"
                            size={40}
                            color="white"
                            />
                        </TouchableOpacity>
                        <View style={{alignItems:"center", marginLeft:10}}>
                            <Text style={{fontSize:18, fontFamily:RalewayBold, color: "white"}}>Arpit Saxena</Text>
                            <Text style={{fontSize:13, fontFamily:RalewayRegular, color: "white", marginVertical:5}}>+91 9856485236</Text>
                            <View style={{flexDirection:"row", alignItems:"center"}}>
                                <Entypo
                                name="location-pin"
                                color="white"
                                size={24}
                                />
                                <Text style={{fontSize:13, fontFamily:RalewayRegular, color: "white"}}>Noida, India</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{flexDirection:"row",alignItems:"center", justifyContent:"space-between"}}>
                        <TouchableOpacity activeOpacity={0.8} style={styles.btn}
                        onPress={()=>navigation.navigate("Tickets")}
                        >
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
                    <TouchableOpacity activeOpacity={0.8} style={{flexDirection:"row", alignItems:"center"}}
                    onPress={()=>navigation.goBack()}>
                        <AntDesign
                        name="arrowleft"
                        size={24}
                        color="black"
                        />
                        <Text style={{fontFamily:RalewayBold, fontSize:18, color:"black", marginLeft:10}}>Payment Settings</Text>
                    </TouchableOpacity>
                    <Text style={{fontFamily:RalewayBold, fontSize:16, color:"gray"}}>Profile</Text>
                </View>
                <ScrollView showsVerticalScrollIndicator={false} style={{marginVertical:20}}>
                    <Text style={{fontSize:13, fontFamily:RalewayBold, color:"black", marginBottom:5}}>UPI Accounts</Text>
                    <View style={styles.account}>
                        <View style={{flexDirection:"row", justifyContent:"space-between",
                        alignItems:"flex-start", borderBottomWidth:1, borderBottomColor:"gray", paddingBottom:10}}>
                            <View style={{alignItems:"flex-start"}}>
                                <Text style={{fontFamily:RalewayBold, fontSize:16, color:"black"}}>State Bank of India</Text>
                                <Text style={{fontSize:12, fontFamily:RalewayRegular, color:"gray",marginTop:3}}>Savings A/c: ****5845</Text>
                            </View>
                            <ToggleSwitch
                            isOn={on}
                            onColor="red"
                            offColor="gray"
                            size="small"
                            onToggle={()=>setOn(!on)}
                            />
                        </View>
                        <View style={{flexDirection:"row", alignItems:"center", justifyContent:"space-between", paddingTop:10}}>
                            <TouchableOpacity activeOpacity={0.8}>
                                <Text style={{textDecorationLine:"underline", fontFamily:RalewayRegular, fontSize:14, color:"black"}}>Check Balance</Text>
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={0.8} style={{flexDirection:"row",alignItems:"center"}}>
                                <AntDesign
                                name="delete"
                                color="red"
                                size={20}
                                />
                                <Text style={{marginLeft:3,textDecorationLine:"underline", fontFamily:RalewayRegular, fontSize:14, color:"black"}}>Remove Account</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.account}>
                        <View style={{flexDirection:"row", justifyContent:"space-between",
                        alignItems:"flex-start", borderBottomWidth:1, borderBottomColor:"gray", paddingBottom:10}}>
                            <View style={{alignItems:"flex-start"}}>
                                <Text style={{fontFamily:RalewayBold, fontSize:16, color:"black"}}>State Bank of India</Text>
                                <Text style={{fontSize:12, fontFamily:RalewayRegular, color:"gray",marginTop:3}}>Savings A/c: ****5845</Text>
                            </View>
                            <ToggleSwitch
                            isOn={on}
                            onColor="red"
                            offColor="gray"
                            size="small"
                            onToggle={()=>setOn(!on)}
                            />
                        </View>
                        <View style={{flexDirection:"row", alignItems:"center", justifyContent:"space-between", paddingTop:10}}>
                            <TouchableOpacity activeOpacity={0.8}>
                                <Text style={{textDecorationLine:"underline", fontFamily:RalewayRegular, fontSize:14, color:"black"}}>Check Balance</Text>
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={0.8} style={{flexDirection:"row",alignItems:"center"}}>
                                <AntDesign
                                name="delete"
                                color="red"
                                size={20}
                                />
                                <Text style={{marginLeft:3,textDecorationLine:"underline", fontFamily:RalewayRegular, fontSize:14, color:"black"}}>Remove Account</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <TouchableOpacity style={styles.button} activeOpacity={0.8}
                    onPress={()=>setIsOpen(true)}
                    >
                        <Text style={{fontSize:16, fontFamily:RalewayBold, color:"white", textAlign:"center"}}>+ Add Account</Text>
                    </TouchableOpacity>
                    <View style={{marginBottom:250}}>
                        <Text style={{fontFamily:RalewayBold, fontSize:16, color:"black", marginVertical:10}}>Saved Cards</Text>
                        <Text style={{fontFamily:RalewayRegular, fontSize:16, color:"gray", marginBottom:5}}>Add Debit or Credit Cards for Payments</Text>
                        <TouchableOpacity style={styles.button} activeOpacity={0.8}>
                            <Text style={{fontSize:15, fontFamily:RalewayBold, color:"white", textAlign:"center"}}>+ Add Card</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
            <Modal
            animationType={"slide"}
            onRequestClose={closeHandle}
            transparent={true}
            visible={isOpen}>
                <View style={{alignItems:"center", marginHorizontal:20, width:"90%", flex:1, justifyContent:"flex-end"}}>
                    <View style={styles.modal}>
                        <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between", width:"100%"}}>
                            <Text style={{fontSize:15, fontFamily:RalewayBold, color:"black"}}>Add UPI Account</Text>
                            <TouchableOpacity activeOpacity={0.8} onPress={closeHandle}>
                                <AntDesign
                                name="close"
                                size={24}
                                color="black"
                                />
                            </TouchableOpacity>
                        </View>
                        <Text style={{marginBottom:20,fontFamily:RalewayRegular, fontSize:14, color:"black"}}>Please enter your UPI ID here</Text>
                        <TextInput
                        placeholder="Enter UPI ID"
                        placeholderTextColor="gray"
                        style={{borderRadius:10, borderColor:"gray", backgroundColor:"white", borderWidth:1, width:"90%", elevation:3, paddingHorizontal:10}}
                        />
                        <TouchableOpacity style={styles.button} activeOpacity={0.8}>
                            <Text style={{fontSize:18, fontFamily:RalewayBold, color:"white", textAlign:"center"}}>Verify</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

export default PaymentSettings

const styles = StyleSheet.create({
    screen:{
        flex:1,
        backgroundColor: "white",
    },
    view:{
        backgroundColor: primary,
        borderBottomRightRadius:70,
        borderBottomLeftRadius:70,
        width:"100%",
        height:"30%",
    },
    view2:{
        width:"100%",
        marginTop:-10,
        paddingHorizontal:30
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
        marginVertical:10,
        width:"50%",
        alignSelf:"center"
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
    modal:{
        flex:1,
        width:"100%",
        backgroundColor:"white",
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
        marginHorizontal:20,
        maxHeight: 300,
        elevation:5,
        padding:20,
        alignItems:"center",
        justifyContent:"space-between"
    },
    account:{
        padding:15,
        borderRadius:10,
        elevation:5,
        backgroundColor:"white",
        marginVertical:5
    }

})
