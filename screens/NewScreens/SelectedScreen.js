import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Dimensions, ScrollView, TouchableOpacity } from "react-native";
import ToggleSwitch  from "toggle-switch-react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import { useNavigation, useRoute } from '@react-navigation/core';


import { fontColor, newColor, primary, secondary } from '../../components/Colors';
import axios from "axios";


const { width, height } = Dimensions.get("window");



export default function SelectedScreen(){

    const navigation = useNavigation();
    const route = useRoute();
    const { src, dest, name, deptHour, arrivalHour, priceLower, priceUpper, duration, tripId, date, rDate } = route.params;
    // console.log(date);
    const [toggle, setToggle] = useState(false);
    const [selectUpper, setSelectUpper] = useState("");
    const [selectLower, setSelectLower] = useState("");
    // const [seatData, setSeatData] = useState([]);
    const [lowerSeats, setLowerSeats] = useState([]);
    const [upperSeats, setUpperSeats] = useState([]);
   
    const segmentClicked=(index)=>{
        setSelectUpper(index);        
    };
    const segmentClicked1=(index)=>{
        setSelectLower(index);        
    };
    
    const bookingApi=()=>{
        axios.get(`https://buslala-backend-api.herokuapp.com/api/user/trip/${tripId}`)
        .then(res=>{
            if(res.status===200){
                const DATA = res.data;
                const lowerBerth = DATA.trip.seat_number.lowerBerth;
                const upperBerth = DATA.trip.seat_number.upperBerth;
                // setSeatData([DATA]);
                setLowerSeats(lowerBerth);
                setUpperSeats(upperBerth);
            }else console.log(res.status);
        })
        .catch(e=>{
            console.log(e);
            alert("please try again after few minutes");
        })
    };

    useEffect(() => {
        bookingApi();
    }, []);

    const UPPER_SEAT = [[],[],[],[]];
    upperSeats.map((data,id)=>{
        const comp = (
            <TouchableOpacity 
                key={id}
                style={[styles.upperView2,
                    {backgroundColor: data.status == 1 ? "#000" 
                        : selectUpper == data.id ? "blue" : "#9ea5b0" 
                    }]} 
                active={selectUpper == data.id}
                onPress={()=>segmentClicked(data.id)}
                disabled={data.status == 0 ? false : true}
            >
            </TouchableOpacity>
        );
        const colNumber = id % 4;
        UPPER_SEAT[colNumber].push( comp );
    });

    const Upper=()=>(
        <View style={{marginVertical:20}}>
            <View style={{flexDirection:"row",justifyContent:"space-around"}}>
                <View style={{flexDirection:"row"}}>
                    <View style={{marginRight:10}}>
                        {UPPER_SEAT[0]}
                    </View>
                    <View>
                        {UPPER_SEAT[1]}
                    </View>
                </View>
                <View style={{flexDirection:"row"}}>
                    <View style={{marginRight:10}}>
                        {UPPER_SEAT[2]}
                    </View>
                    <View>
                        {UPPER_SEAT[3]}
                    </View>
                </View>
            </View>
        </View>
    );

    const LOWER_SEAT = [[],[],[],[]];
    lowerSeats.map((data,id)=>{
        const comp = (
            <TouchableOpacity 
                key={id}
                style={[styles.lowerSeat,
                    {backgroundColor: data.status == 1 ? "#000" 
                        : selectLower == data.id ? "blue" : "#9ea5b0" 
                    }]} 
                active={selectLower == data.id}
                onPress={()=>segmentClicked1(data.id)}
                disabled={data.status == 0 ? false : true}
            >
            </TouchableOpacity>
        );
        const colNumber = id % 4;
        LOWER_SEAT[colNumber].push( comp );
    });
    const Lower=()=>(
        <View style={{marginVertical:20}}>
            <View style={{flexDirection:"row",justifyContent:"space-around"}}>
                <View style={{flexDirection:"row"}}>
                    <View style={{marginRight:10}}>
                        {LOWER_SEAT[0]}
                    </View>
                    <View>
                        {LOWER_SEAT[1]}
                    </View>
                </View>
                <View style={{flexDirection:"row"}}>
                    <View style={{marginRight:10}}>
                        {LOWER_SEAT[2]}
                    </View>
                    <View>
                        {LOWER_SEAT[3]}
                    </View>
                </View>
            </View>
        </View>
    );

    const proceed=()=>{
        if(toggle===false){
            if(selectLower===""){
                alert("please select a seat");
            }else{
                navigation.navigate("UserDetails",{ 
                    "src": src, "dest": dest, "name": name, "tripId" : tripId,
                    "deptHour": deptHour, "arivHour": arrivalHour, "price": toggle === false ? priceLower : priceUpper, 
                    "duration": duration, "seats": toggle === false ? selectLower : selectUpper, "date": date
                })
            }
        }else{
            if(selectUpper===""){
                alert("please select a seat");
            }else{
                navigation.navigate("UserDetails",{ 
                    "src": src, "dest": dest, "name": name, "tripId" : tripId,
                    "deptHour": deptHour, "arivHour": arrivalHour, "price": toggle === false ? priceLower : priceUpper, 
                    "duration": duration, "seats": toggle === false ? selectLower : selectUpper, "date": date, "rDate": rDate
                })
            }
        }
    };

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
                            <Text style={{fontSize:17, color:"black"}}>{name}</Text>
                            <View style={{flexDirection:"row",marginTop:5}}>
                                <Text style={{color:"gray"}}>{date}</Text>
                                <View style={{borderWidth:0.8,backgroundColor:"#000",marginHorizontal:10}}></View>
                                <Text style={{color:"gray"}}>{deptHour}</Text>
                            </View>
                        </View>
                        <View style={{marginRight:20}}>
                            <Text style={{color:"black"}}>{src}</Text>
                            <View style={{flexDirection:"row",justifyContent:"center"}}>
                                <MaterialIcons name="import-export" color="#ed6c39" size={20} />
                            </View>
                            <Text style={{color:"black"}}>{dest}</Text>
                        </View>
                    </View>
                </View>                
            </View>
            <View style={{marginHorizontal:20,marginBottom:200}}>
                <ScrollView style={{marginBottom:100}} showsVerticalScrollIndicator={false}>
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
                                <Text style={{color:"#000",paddingHorizontal:12,paddingVertical:8}}>₹{priceLower}</Text>
                            </View>
                            <View style={{borderWidth:0.8,backgroundColor:"gray",borderColor:"gray",marginVertical:8}} />
                            <View>
                                <Text style={{color:"#000",paddingHorizontal:12,paddingVertical:8}}>₹{priceUpper}</Text>
                            </View>
                        </View>
                        <View style={{flexDirection:"row",marginTop:10}}>
                            <Text style={{color:toggle === false ? "#e66349" : "#000",marginRight:10}}>Lower</Text>
                                <ToggleSwitch isOn={toggle}
                                    onColor="#e66349"
                                    offColor="#e66349"                          
                                    size="medium"
                                    onToggle={() =>{toggle === false ? setToggle(true) : setToggle(false)}}
                                />
                            <Text style={{color:toggle === false ? "#000" : "#e66349",marginRight:10,marginLeft:10}}>Upper</Text>
                        </View>
                    </View> 
                    <View style={styles.circle}>
                        <MaterialCommunityIcons name="steering" color={"#646666"} size={38}/>
                    </View>
                    {toggle === false ? <Lower /> : <Upper />}  
                </ScrollView>
                <View style={styles.modal}>
                    <View style={{flexDirection:"row",marginLeft:10}}>
                        <View style={{alignItems:"center"}}>
                            <Text style={{color:"gray"}}>Selected seat</Text>
                            <Text style={{color:"#000"}}>{toggle === false ? selectLower : selectUpper}</Text>
                        </View>
                        <View style={{backgroundColor:"#4a4847",borderWidth:1,marginHorizontal:10,borderColor:"#4a4847"}}></View>
                        <View style={{alignItems:"center"}}>
                            <Text style={{color:"gray"}}>Price</Text>
                            {/* <Text style={{color:"#000"}}>₹{toggle === false ? priceLower: priceUpper}</Text> */}
                            <Text style={{color:"#000"}}>₹{(toggle === true) ? (selectUpper ? priceUpper : null) : (selectLower ? priceLower : null)}</Text>
                        </View>
                    </View>
                    <TouchableOpacity 
                        onPress={proceed}
                        style={styles.proceedBtn}
                    >
                        <Text style={{color:"#fff",fontSize:20}}>Proceed</Text>
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
    circle:{
        alignItems: "flex-end",
        marginRight: 60,
        marginTop: 10
    },
    modal: {
        elevation: 5,
        backgroundColor: "#fff",
        width: "100%",
        borderRadius: 10,
        marginTop: -110,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 30
    },
    upperView1: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginBottom: 10
    },
    upperView2: {
        height: 90,
        width: 40,
        borderRadius: 5,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 10,
        marginRight:5,
    },
    lowerSeat: {
        height:40,
        width:40,
        borderRadius:5,
        marginBottom:5,
    },
    proceedBtn: {
        backgroundColor:"#ed6c39",
        paddingVertical:8,
        paddingHorizontal:20,
        borderRadius:10,
        elevation:5,
        marginRight:5
    }
});