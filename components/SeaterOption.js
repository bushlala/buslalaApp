import { useNavigation } from '@react-navigation/core';
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Dimensions } from 'react-native'
import Feather from "react-native-vector-icons/Feather";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { RalewayBold, RalewayRegular } from '../assets/fonts/fonts';

const {width} = Dimensions.get("window");

const SeaterOption = ({name, price, hours, rating, desc, seats, deptHour, arrivalHour}) => {

    const navigation = useNavigation();

    const busHandler=()=>{
        navigation.navigate("BusDetails", {"name": name, "price": price, "hours": hours, "deptHour": deptHour, "arrivalHour": arrivalHour})
    }

    return (
        <TouchableOpacity activeOpacity={0.8} style={styles.container}
        onPress={busHandler}
        >
            <View style={styles.view1}>
                <Text style={{fontFamily:RalewayBold, color:"black", fontSize:14, marginBottom:5}}>{name}</Text>
                <Text style={{fontSize:10, fontFamily:RalewayRegular, color:"gray"}}>{desc}</Text>
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
                <Text style={{fontFamily:RalewayBold, fontSize:17, color:"black"}}>₹ {price}</Text>
                <Text style={{color:"gray", fontSize:13, fontFamily:RalewayRegular, marginVertical:5}}>{seats} Seats left</Text>
                <View style={styles.hours}>
                    <Text style={{fontFamily:RalewayRegular, fontSize:13, color:"black"}}>{deptHour}</Text>
                    <Text style={{color:"black"}}>─</Text>
                    <Text style={{fontSize:9, color:"gray",fontFamily:RalewayRegular}}>{hours}hrs</Text>
                    <Text style={{color:"black"}}>─</Text>
                    <Text  style={{fontFamily:RalewayRegular, fontSize:13, color:"gray"}}>{arrivalHour}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default SeaterOption

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
        width: width -60,
        paddingHorizontal:10,
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
})
