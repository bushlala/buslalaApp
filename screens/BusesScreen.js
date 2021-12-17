import { useNavigation, useRoute } from '@react-navigation/core'
import axios from 'axios'
import React, { createRef } from 'react'
import { Dimensions, FlatList, Image, KeyboardAvoidingView, Modal, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { RalewayBold, RalewayLight, RalewayRegular } from '../assets/fonts/fonts'
import { fontColor, newColor, primary, secondary, textColor } from '../components/Colors'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useState } from 'react'
import { dates } from '../data/dates'
import SeaterOption from '../components/SeaterOption'
import { Seats } from '../data/seatData'

const {width} = Dimensions.get("window")

const BusesScreen = () => {

    const navigation = useNavigation();
    const route = useRoute();
    const oneway = route.params.oneWay;
    const twoway = route.params.twoWay;
    const [isOpen, setIsOpen]=useState(false);
    const [click1, setClick1] = useState(false);
    const [click2, setClick2] = useState(false);
    const [click3, setClick3] = useState(false);
    const [click4, setClick4] = useState(true);
    const [click5, setClick5] = useState(false);
    const [click6, setClick6] = useState(false);
    const [click7, setClick7] = useState(false);
    const [click8, setClick8] = useState(true);

    const closeHandle=()=>{
        setIsOpen(false);
    }

    const filterHandler=()=>{
        setIsOpen(false)
    }

    const clickHandler1=()=>{
        setClick1(true);
        setClick2(false);
        setClick3(false);
        setClick4(false)
    }
    const clickHandler2=()=>{
        setClick1(false);
        setClick2(true);
        setClick3(false);
        setClick4(false)
    }
    const clickHandler3=()=>{
        setClick1(false);
        setClick2(false);
        setClick3(true);
        setClick4(false)
    }
    const clickHandler4=()=>{
        setClick1(false);
        setClick2(false);
        setClick3(false);
        setClick4(true)
    }
    const clickHandler5=()=>{
        setClick5(true);
        setClick6(false);
        setClick7(false);
        setClick8(false)
    }
    const clickHandler6=()=>{
        setClick5(false);
        setClick6(true);
        setClick7(false);
        setClick8(false)
    }
    const clickHandler7=()=>{
        setClick5(false);
        setClick6(false);
        setClick7(true);
        setClick8(false)
    }
    const clickHandler8=()=>{
        setClick5(false);
        setClick6(false);
        setClick7(false);
        setClick8(true)
    }


    return (
        <View style={styles.screen}>
            <View style={styles.view}>
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
                <TouchableOpacity activeOpacity={0.8} style={styles.destination}>
                    <TouchableOpacity activeOpacity={0.8}
                    onPress={()=>navigation.goBack()}
                    >
                    <Ionicons
                    name="arrow-back"
                    size={24}
                    color="black"
                    />
                    </TouchableOpacity>
                    <View style={{flexDirection:"row", alignItems:"center"}}>
                        <Text style={{fontSize:18, color:"black", fontFamily:RalewayBold, marginRight:10}}>{route.params?.from}</Text>
                        {twoway && <AntDesign
                        name="swap"
                        size={24}
                        color="black"
                        />}
                        {oneway &&<AntDesign
                        name="swapright"
                        color="black"
                        size={24}
                        />}
                        <Text style={{fontSize:18, color:"black", fontFamily:RalewayBold, marginLeft:10}}>{route.params?.to}</Text>
                    </View>
                    <AntDesign
                    name="down"
                    size={24}
                    color="black"
                    />
                </TouchableOpacity>
                <View style={styles.timingsContainer}>
                    <FlatList
                    data={dates}
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                    alwaysBounceHorizontasl
                    renderItem={({item, index})=>(
                        <TouchableOpacity activeOpacity={0.8} style={item.active ?  styles.active : styles.timings}
                        onPress={()=>{}}
                        key={item.id}
                        >
                            <Text style={item.active ? styles.activeText : styles.activeTextOff}>{item.date}</Text>
                        </TouchableOpacity>
                    )}
                    />
                </View>
                <View style={styles.options}>
                    <FlatList
                    showsVerticalScrollIndicator={false}
                    data={Seats}
                    renderItem={({item,index})=>(
                        <SeaterOption
                        key={item.id}
                        name={item.name}
                        hours={item.hours}
                        arrivalHour={item.arrivalTime}
                        deptHour={item.depatureTime}
                        price={item.price}
                        rating={item.rating}
                        seats={item.noOfSeats}
                        desc={item.description}
                        />
                    )}
                    />
                </View>
            </View>
            <TouchableOpacity activeOpacity={0.8} style={styles.filter}
            onPress={()=>setIsOpen(true)}
            >
                <MaterialCommunityIcons
                name="filter-plus"
                size={28}
                color="white"
                />
            </TouchableOpacity>
            <Modal
            animationType={"slide"}
            onRequestClose={closeHandle}
            transparent={true}
            visible={isOpen}
            >
                <View style={{alignItems:"center", marginHorizontal:20, width:"90%", flex:1, justifyContent:"flex-end"}}>
                    <View style={styles.modal}>
                        <View style={{flexDirection:"row", alignItems:"center", marginVertical:10, width:"100%", justifyContent:"center"}}>
                            <Text style={{fontFamily:RalewayBold, fontSize:20, color:"black"}}>Add Filters</Text>
                            <TouchableOpacity activeOpacity={0.8} onPress={closeHandle}
                            style={{position:"absolute", right:0}}
                            >
                                <AntDesign
                                name="close"
                                size={24}
                                color="black"
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.content}>
                            <Text style={{fontSize:13, fontFamily:RalewayRegular, color:"gray"}}>Departure from</Text>
                            <View>
                                <View style={{flexDirection:"row", alignItems:"center", marginVertical:10, width:"100%", justifyContent:"space-evenly"}}>
                                    <TouchableOpacity style={click1 ? styles.ActiveView4:  styles.view4} activeOpacity={0.8}
                                    onPress={clickHandler1}
                                    >
                                        <Text style={{fontSize:12, fontFamily:RalewayRegular, color:click1 ? "white": "black"}}>Early Morning</Text>
                                        <Text style={{fontSize:11, fontFamily:RalewayRegular, color:click1? "white": "gray"}}>12 AM - 6 AM</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={click2 ? styles.ActiveView4:  styles.view4} activeOpacity={0.8}
                                    onPress={clickHandler2}
                                    >
                                        <Text style={{fontSize:12, fontFamily:RalewayRegular, color:click2?"white":"black"}}>Early Morning</Text>
                                        <Text style={{fontSize:11, fontFamily:RalewayRegular, color:click2? "white": "gray"}}>12 AM - 6 AM</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={{flexDirection:"row", alignItems:"center", marginVertical:10, width:"100%", justifyContent:"space-evenly"}}>
                                    <TouchableOpacity style={click3 ? styles.ActiveView4: styles.view4} activeOpacity={0.8}
                                    onPress={clickHandler3}
                                    >
                                        <Text style={{fontSize:12, fontFamily:RalewayRegular, color:click3?"white":"black"}}>Early Morning</Text>
                                        <Text style={{fontSize:11, fontFamily:RalewayRegular, color:click3? "white": "gray"}}>12 AM - 6 AM</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={click4 ? styles.ActiveView4:styles.view4} activeOpacity={0.8}
                                    onPress={clickHandler4}
                                    >
                                        <Text style={{fontSize:12, fontFamily:RalewayRegular, color:click4?"white":"black"}}>Early Morning</Text>
                                        <Text style={{fontSize:11, fontFamily:RalewayRegular, color:click4? "white": "gray"}}>12 AM - 6 AM</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        <View style={styles.content}>
                            <Text style={{fontSize:13, fontFamily:RalewayRegular, color:"gray"}}>Bus Type</Text>
                            <View>
                                <View style={{flexDirection:"row", alignItems:"center", marginVertical:10, width:"100%", justifyContent:"space-evenly"}}>
                                    <TouchableOpacity style={click5 ? styles.ActiveView5:  styles.view5} activeOpacity={0.8}
                                    onPress={clickHandler5}
                                    >
                                        <Text style={{fontSize:12, fontFamily:RalewayRegular, color:click5 ? "white": "black"}}>AC</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={click6 ? styles.ActiveView5:  styles.view5} activeOpacity={0.8}
                                    onPress={clickHandler6}
                                    >
                                        <Text style={{fontSize:12, fontFamily:RalewayRegular, color:click6?"white":"black"}}>Non-AC</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={click7 ? styles.ActiveView5: styles.view5} activeOpacity={0.8}
                                    onPress={clickHandler7}
                                    >
                                        <Text style={{fontSize:12, fontFamily:RalewayRegular, color:click7?"white":"black"}}>Seater</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={click8 ? styles.ActiveView5:styles.view5} activeOpacity={0.8}
                                    onPress={clickHandler8}
                                    >
                                        <Text style={{fontSize:12, fontFamily:RalewayRegular, color:click8?"white":"black"}}>Sleeper</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        <TouchableOpacity activeOpacity={0.8} style={{flexDirection:"row", alignItems:"center", justifyContent:"space-between", width:"100%", marginVertical:20}}>
                            <Text style={{fontFamily:RalewayBold, fontSize:16, color:"gray"}}>Boarding Point</Text>
                            <AntDesign
                            name="down"
                            size={24}
                            color="black"
                            />
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.8} style={{flexDirection:"row", alignItems:"center", justifyContent:"space-between", width:"100%", marginVertical:20}}>
                            <Text style={{fontFamily:RalewayBold, fontSize:16, color:"gray"}}>Bus Agent</Text>
                            <AntDesign
                            name="down"
                            size={24}
                            color="black"
                            />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button} activeOpacity={0.8}
                        onPress={filterHandler}
                        >
                            <Text style={{fontSize:17, color:"white", fontFamily:RalewayBold}}>Filter</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

export default BusesScreen

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
        height:"20%",
    },
    view2:{
        width:"100%",
        alignItems:"center",
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
    destination:{
        flexDirection:"row",
        alignItems:"center",
        paddingHorizontal:10,
        paddingVertical:10,
        borderRadius:10,
        backgroundColor:"white",
        width:"100%",
        elevation:5,
        justifyContent:"space-between"
    },
    timingsContainer:{
        flexDirection:"row",
        alignItems:"center",
        marginVertical:20,
    },
    timings:{
        backgroundColor:"white",
        padding:10,
        borderRadius:10,
        elevation:5,
        marginHorizontal:10,
        marginBottom:10,
    },
    active:{
        backgroundColor: primary,
        padding:10,
        borderRadius:10,
        elevation:5,
        marginHorizontal:10,
        marginBottom:10,
    },
    activeText:{
        fontSize:15,
        fontFamily:RalewayRegular,
        color:"white"
    },
    activeTextOff:{
        fontSize:15,
        fontFamily:RalewayRegular,
        color:"black"
    },
    options:{
        alignItems:"center",
        width:width,
        marginBottom:40
    },
    filter:{
        backgroundColor:primary,
        borderRadius:40,
        padding:20,
        position:"absolute",
        bottom:"4%",
        right:"4%"
    },
    modal:{
        flex:1,
        width:"100%",
        backgroundColor:"white",
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
        marginHorizontal:20,
        maxHeight: 500,
        elevation:5,
        padding:20,
        alignItems:"center"
    },
    content:{
        width:"100%"
    },
    view4:{
        paddingHorizontal:25,
        paddingVertical:10,
        borderRadius:10,
        elevation:5,
        backgroundColor:"white",
    },ActiveView4:{
        paddingHorizontal:25,
        paddingVertical:10,
        borderRadius:10,
        elevation:5,
        backgroundColor:secondary
    },
    view5:{
        paddingHorizontal:15,
        paddingVertical:10,
        borderRadius:10,
        elevation:5,
        backgroundColor:"white",
    },ActiveView5:{
        paddingHorizontal:15,
        paddingVertical:10,
        borderRadius:10,
        elevation:5,
        backgroundColor:secondary
    }
})
