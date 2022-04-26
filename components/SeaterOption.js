import { useNavigation } from '@react-navigation/core';
import axios from 'axios';
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Dimensions, Alert } from 'react-native'
import Feather from "react-native-vector-icons/Feather";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { RalewayBold, RalewayRegular } from '../assets/fonts/fonts';
import { API } from '../config';

const {width} = Dimensions.get("window");

const SeaterOption = ({name, priceLower,priceUpper, duration, 
                        rating, desc, seats, deptHour, arrivalHour, 
                        src, dest, tripID, date, rDate, bus_model
                    }) => {

    const navigation = useNavigation();

    const busHandler=()=>{
        axios.get(`${API}/trip/${tripID}`)
        .then(resp=>{
            resp.data.trip.status == "pending" 
            ? 
                navigation.navigate("SelectedScreen", 
                {"name": name, "priceLower": priceLower, "priceUpper":priceUpper, "bus_model": bus_model,
                "duration": duration, "deptHour": deptHour, "arrivalHour": arrivalHour, 
                "src": src, "dest": dest,"tripId": tripID, "date": date, "rDate": rDate
                })  
            :
            Alert.alert("Trip has already started");   
        })
        .catch(err=>{
            console.log("Server error",err);
        })
    };

    return (
        <TouchableOpacity activeOpacity={0.8} style={styles.container} 
            onPress={busHandler}
        >
            <View style={styles.view1}>
                <Text style={{fontFamily:RalewayBold, color:"black", fontSize:14, marginBottom:5}}>{name}</Text>
                <Text style={{fontSize:12, fontFamily:RalewayRegular, color:"gray",textTransform:"capitalize"}}>{desc}</Text>
                <View style={{flexDirection:"row", alignItems:"center",marginVertical:5}}>
                    <FontAwesome
                    name="bed"
                    style={{marginRight:10}}
                    size={18}
                    color="black"
                    />
                    <Feather
                    name="tv"
                    size={18}
                    color="black"
                    />
                </View>
                <View style={styles.rating}>
                    <Text style={{fontSize:10, fontFamily:RalewayRegular, textAlign:"center",color:"white"}}>{rating}</Text>
                </View>
            </View>
            <View style={styles.view2}>
                <Text style={{fontFamily:RalewayBold, fontSize:17, color:"black"}}>₹ {priceLower}</Text>
                <Text style={{color:"gray", fontSize:13, fontFamily:RalewayRegular, marginVertical:5}}>{seats} Seats left</Text>
                <View style={styles.hours}>
                    <Text style={{fontFamily:RalewayRegular, fontSize:13, color:"black"}}>{deptHour}</Text>
                    <Text style={{color:"black"}}>─</Text>
                    <Text style={{fontSize:9, color:"gray",fontFamily:RalewayRegular,marginHorizontal:2}}>{duration}</Text>
                    <Text style={{color:"black"}}>─</Text>
                    <Text  style={{fontFamily:RalewayRegular, fontSize:13, color:"gray"}}>{arrivalHour}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
};

export default SeaterOption;

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-around",
        padding:10,
        borderRadius:10,
        backgroundColor:"white",
        elevation:5,
        marginVertical:10,
        width: width - 60,
        paddingHorizontal:20,
        marginHorizontal:10
    },
    view1:{
        alignItems:"flex-start"
    },
    view2:{
        alignItems:"flex-end",
    },
    rating:{
        backgroundColor:"green",
        padding:6,
        borderRadius:20,
    },
    hours:{
        flexDirection:"row",
        alignItems:"center",
        marginTop:20,
    }
});
