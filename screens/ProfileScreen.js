import { useNavigation, useRoute } from '@react-navigation/core'
import axios from 'axios'
import React from 'react'
import { Dimensions, FlatList, Image, KeyboardAvoidingView, Modal, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { RalewayBold, RalewayLight, RalewayRegular } from '../assets/fonts/fonts'
import { fontColor, newColor, primary, secondary, textColor } from '../components/Colors'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import Feather from "react-native-vector-icons/Feather";
import Entypo from "react-native-vector-icons/Entypo";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useState } from 'react'
import ProfileOptions from '../components/ProfileOptions'
import DocumentPicker from 'react-native-document-picker'
import ToggleSwitch from "toggle-switch-react-native";

const {width, height} = Dimensions.get("window")

const ProfileScreen = () => {

    const navigation = useNavigation();
    const route = useRoute();
    const [isOpen, setIsOpen]=useState(false);
    const [isOpen1, setIsOpen1]=useState(false);
    const [isOpen2, setIsOpen2]=useState(false);
    const [isOpen3, setIsOpen3] = useState(false);
    const [on, setOn] = useState(false);
    const [on1, setOn1] = useState(false);
    const [on2, setOn2] = useState(false);
    const [pdfName, setPdfName] = useState("");
    const [uri, setUri] = useState("");


    const closeHandle=()=>{
        setIsOpen(false);
    }
    const closeHandle1=()=>{
        setIsOpen1(false);
    }
    const closeHandle2=()=>{
        setIsOpen2(false);
    }
    const closeHandle3=()=>{
        setIsOpen3(false);
    }


    const pdfHandler=async()=>{
        try {
            const res = await DocumentPicker.pick({
                type: DocumentPicker.types.pdf,
            });
            console.log(
                res[1]
            )    
        } catch (error) {
            if(DocumentPicker.isCancel(err)){

            }else{
                throw err;
            }
        }
    }

    return (
        <View style={styles.screen}>
            <View style={styles.view}>
                <View style={styles.heading}>
                    <View style={{flexDirection:"row", alignItems:"center", marginTop:40}}>
                        <TouchableOpacity activeOpacity={0.8} style={{}}
                        onPress={()=>navigation.goBack()}>
                            <AntDesign
                            name="arrowleft"
                            size={24}
                            color="white"
                            />
                        </TouchableOpacity>
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
            <ScrollView style={styles.view2} showsVerticalScrollIndicator={false}>
                <View style={{alignItems:"center", width:"100%"}}>
                    <ProfileOptions
                    text="Profile"
                    />
                    <ProfileOptions
                    text="Profile Settings"
                    desc="Profile, Address, Language, Security"
                    btn={()=>setIsOpen3(true)}
                    />
                    <ProfileOptions
                    text="Payment"
                    desc="UPI, Saved Cards"
                    nav={()=>navigation.navigate("PaymentScreen")}
                    />
                    <ProfileOptions
                    text="My Bookings"
                    desc="Rating, Completed, Cancelled Tickets"
                    nav={()=>navigation.navigate("Bookings")}
                    />
                    <ProfileOptions
                    text="Cowin Certificate"
                    desc="Add your cowin Certificate"
                    btn={()=>setIsOpen(true)}
                    />
                    <ProfileOptions
                    text="Call Support"
                    desc="24/7 Service"
                    btn={()=>setIsOpen1(true)}
                    />
                    <ProfileOptions
                    text="Settings"
                    desc="Deactivate, Modes, Notifications"
                    btn={()=>setIsOpen2(true)}
                    />
                    <TouchableOpacity style={styles.button} activeOpacity={0.8}>
                        <Text style={{fontFamily:RalewayBold, fontSize:18, color:"white", textAlign:"center"}}>Logout</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
            <Modal
            animationType={"slide"}
            onRequestClose={closeHandle}
            transparent={true}
            visible={isOpen}>
                <View style={{alignItems:"center", marginHorizontal:20, width:"90%", flex:1, justifyContent:"flex-end"}}>
                    <View style={styles.modal}>
                        <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between", width:"100%", marginBottom:50}}>
                            <Text style={{fontSize:15, fontFamily:RalewayBold, color:"black"}}>Cowin Certificate</Text>
                            <TouchableOpacity activeOpacity={0.8} onPress={closeHandle}>
                                <AntDesign
                                name="close"
                                size={24}
                                color="black"
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={{alignItems:"center", marginVertical:10, width:"100%"}}>
                            <View style={styles.pdf}>
                                {(!pdfName) ? <Text style={{fontSize:15, fontFamily:RalewayRegular, color:"gray"}}>Cowin.pdf</Text>:<Text style={{fontSize:15, fontFamily:RalewayRegular, color:"gray"}}>{pdfName}</Text>}
                                <TouchableOpacity activeOpacity={0.8} onPress={closeHandle}>
                                    <AntDesign
                                    name="close"
                                    size={24}
                                    color="black"
                                    />
                                </TouchableOpacity>
                            </View>
                            <Text style={{fontFamily:RalewayRegular, fontSize:16, color:"black", marginVertical:10}}>Add your cowin Certificate here</Text>
                        </View>
                        <TouchableOpacity style={styles.button} activeOpacity={0.8}
                        onPress={pdfHandler}
                        >
                            <Text style={{fontSize:15, fontFamily:RalewayBold, color:"white", textAlign:"center"}}>+ Add file</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
            <Modal
            animationType={"slide"}
            onRequestClose={closeHandle1}
            transparent={true}
            visible={isOpen1}>
                <View style={{alignItems:"center", marginHorizontal:20, width:"90%", flex:1, justifyContent:"flex-end"}}>
                    <View style={styles.modal}>
                        <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between", width:"100%", marginBottom:50}}>
                            <Text style={{fontSize:15, fontFamily:RalewayBold, color:"black"}}>Call Support</Text>
                            <TouchableOpacity activeOpacity={0.8} onPress={closeHandle1}>
                            <AntDesign
                            name="close"
                            size={24}
                            color="black"
                            />
                            </TouchableOpacity>
                        </View>
                        <View style={{alignItems:"center", marginVertical:10}}>
                            <Feather
                            name="headphones"
                            size={40}
                            color="black"
                            />
                            <Text style={{fontFamily:RalewayRegular, fontSize:15, color:"black"}}>24/7 Help Support</Text>
                        </View>
                        <TouchableOpacity style={styles.button} activeOpacity={0.8}>
                            <Text style={{fontSize:15, fontFamily:RalewayBold, color:"white", textAlign:"center"}}>Call +91 9658236500</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
            <Modal
            animationType={"slide"}
            onRequestClose={closeHandle2}
            transparent={true}
            visible={isOpen2}>
                <View style={{alignItems:"center", marginHorizontal:20, width:"90%", flex:1, justifyContent:"flex-end"}}>
                    <View style={styles.modal}>
                    <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between", width:"100%"}}>
                        <Text style={{fontSize:15, fontFamily:RalewayBold, color:"black"}}>Settings</Text>
                        <TouchableOpacity activeOpacity={0.8} onPress={closeHandle2}>
                        <AntDesign
                        name="close"
                        size={24}
                        color="black"
                        />
                        </TouchableOpacity>
                    </View>
                        <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between", width:"100%", borderBottomColor:"gray", borderBottomWidth:1, paddingVertical:10}}>
                            <Text style={{fontSize:15, fontFamily:RalewayBold, color:"black"}}>Deactivate account</Text>
                            <ToggleSwitch
                            isOn={on}
                            onColor="red"
                            offColor="gray"
                            size="small"
                            onToggle={()=>setOn(!on)}
                            />
                        </View>
                        <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between", width:"100%",  borderBottomColor:"gray", borderBottomWidth:1, paddingVertical:10}}>
                            <Text style={{fontSize:15, fontFamily:RalewayBold, color:"black"}}>Modes: Day</Text>
                            <ToggleSwitch
                            isOn={on1}
                            onColor="red"
                            offColor="gray"
                            size="small"
                            onToggle={()=>setOn1(!on1)}
                            />
                        </View>
                        <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between", width:"100%",  borderBottomColor:"gray", borderBottomWidth:1, paddingVertical:10}}>
                            <Text style={{fontSize:15, fontFamily:RalewayBold, color:"black"}}>Notifications</Text>
                            <ToggleSwitch
                            isOn={on2}
                            onColor="red"
                            offColor="gray"
                            size="small"
                            onToggle={()=>setOn2(!on2)}
                            />
                        </View>
                    </View>
                </View>
            </Modal>
            <Modal
            animationType={"slide"}
            onRequestClose={closeHandle3}
            transparent={true}
            visible={isOpen3}>
                <View style={{alignItems:"center", marginHorizontal:20, width:"90%", flex:1, justifyContent:"flex-end"}}>
                    <View style={styles.modal1}>
                        <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between", width:"100%"}}>
                            <Text style={{fontSize:15, fontFamily:RalewayBold, color:"black"}}>Edit Profile</Text>
                            <TouchableOpacity activeOpacity={0.8} onPress={closeHandle3}>
                            <AntDesign
                            name="close"
                            size={24}
                            color="black"
                            />
                            </TouchableOpacity>
                        </View>
                        <View style={{alignItems:"center", marginVertical:10}}>
                            <TouchableOpacity activeOpacity={0.8} style={styles.btn1}>
                                <MaterialCommunityIcons
                                name="account-outline"
                                size={40}
                                color="white"
                                />
                            </TouchableOpacity>
                            <View style={{alignItems:"center", flexDirection:"row",marginTop:10, backgroundColor:"lightgray", borderRadius:10, padding:5}}>
                                <FontAwesome
                                name="check-circle"
                                size={24}
                                color={primary}
                                />
                                <Text style={{color:primary, fontFamily:RalewayBold, fontSize:13, marginLeft:3}}>Vaccinated</Text>
                            </View>
                        </View>
                        <ScrollView showsVerticalScrollIndicator={false} style={{marginVertical:10}}>
                            <TextInput
                            placeholder="Your Name"
                            placeholderTextColor="gray"
                            style={{borderBottomColor:"black", borderBottomWidth:1, padding:3, marginVertical:5}}
                            />
                            <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between",borderBottomColor:"black", borderBottomWidth:1, padding:3, marginVertical:5}}>
                            <TextInput
                            placeholder="Your Number"
                            placeholderTextColor="gray"
                            keyboardType="number-pad"
                            />
                            <TouchableOpacity activeOpacity={0.8} >
                                <Text style={{fontFamily:RalewayRegular, fontSize:13, color:"red"}}>Update</Text>
                            </TouchableOpacity>
                            </View>
                            <TextInput
                            placeholder="Your Address"
                            placeholderTextColor="gray"
                            style={{borderBottomColor:"black", borderBottomWidth:1, padding:3, marginVertical:5}}
                            />
                            <Text style={{marginVertical:10, fontSize:15, fontFamily:RalewayBold, color:"black"}}>Verification</Text>
                            <View style={{alignItems:"center", marginVertical:10, width:"100%"}}>
                                <View style={styles.pdf}>
                                    {(!pdfName) ? <Text style={{fontSize:15, fontFamily:RalewayRegular, color:"gray"}}>Cowin.pdf</Text>:<Text style={{fontSize:15, fontFamily:RalewayRegular, color:"gray"}}>{pdfName}</Text>}
                                    <TouchableOpacity activeOpacity={0.8} onPress={closeHandle3}>
                                        <AntDesign
                                        name="close"
                                        size={24}
                                        color="black"
                                        />
                                    </TouchableOpacity>
                                </View>
                                <Text style={{fontFamily:RalewayRegular, fontSize:16, color:"black", marginVertical:10}}>Add your cowin Certificate here</Text>
                            </View>
                            <TouchableOpacity style={styles.button} activeOpacity={0.8}
                            onPress={pdfHandler}>
                                <Text style={{fontSize:15, fontFamily:RalewayBold, color:"white", textAlign:"center"}}>+ Add file</Text>
                            </TouchableOpacity>
                            <View style={{borderBottomWidth:1, borderBottomColor:"gray", padding:5,marginVertical:10, flexDirection:"row", alignItems:"center", justifyContent:"space-between"}}>
                                <Text style={{fontSize:16, fontFamily:RalewayBold, color:"black"}}>Language</Text>
                                <View style={{flexDirection:"row",alignItems:"center"}}>
                                    <Text style={{marginRight:5,fontFamily:RalewayRegular, fontSize:15, color:"black"}}>ENGLISH</Text>
                                    <TouchableOpacity activeOpacity={0.8}>
                                        <AntDesign
                                        name="arrowright"
                                        size={24}
                                        color="black"
                                        />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </ScrollView>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

export default ProfileScreen

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
        marginBottom:10,
        alignSelf:"center",
        width:"65%"
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
    modal1:{
        flex:1,
        width: width - 60,
        backgroundColor:"white",
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
        marginHorizontal:20,
        maxHeight: height - 100,
        elevation:5,
        padding:20,
    },
    pdf:{
        padding:10,
        borderRadius:10,
        borderWidth:1,
        borderColor:"black",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        width:"100%"
    }

})
