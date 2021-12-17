import { useNavigation } from '@react-navigation/core';
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import AntDesign from "react-native-vector-icons/AntDesign";
import { RalewayBold, RalewayRegular } from '../assets/fonts/fonts';


const ProfileOptions = ({text, desc, btn, nav}) => {

    const navigation = useNavigation();

    return (
        <TouchableOpacity activeOpacity={0.8} style={styles.container}
        onPress={btn ? btn : nav}
        >
            <View>
                <Text style={{fontFamily:RalewayBold, fontSize:16, marginBottom:5, color:"black"}}>{text}</Text>
                {desc && <Text style={{fontSize:13, fontFamily:RalewayRegular, color:"gray"}}>{desc}</Text>}
            </View>
            <AntDesign
            name="arrowright"
            size={24}
            color="black"
            />
        </TouchableOpacity>
    )
}

export default ProfileOptions

const styles = StyleSheet.create({
    container:{
        backgroundColor:"white",
        borderRadius:10,
        elevation:5,
        padding:10,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        width:"100%",
        marginVertical:10,
        paddingVertical:15
    }
})
