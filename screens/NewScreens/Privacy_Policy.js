import React from "react";
import {
    View,
    Text,
    ScrollView
} from "react-native";
import { PrivacyText } from "../../components/privacyTxt";
import AntDesign from 'react-native-vector-icons/AntDesign';
import { primary } from "../../components/Colors";
import { useTheme } from "@react-navigation/native";

export default function Privacy_Policy({navigation}){
    const { colors } = useTheme();
    return(
        <View
            style={{
                flex:1,
                backgroundColor:colors.card
            }}
        >
            <View style={{alignItems:"center",paddingVertical:15,backgroundColor:primary}}>
                <Text style={{color:"#fff",fontWeight:"800",fontSize:18}}>PRIVACY & POLICY</Text>
                <View
                    style={{
                        position:"absolute",
                        left:0,
                        top:0,
                        bottom:0,
                        justifyContent:"center",
                        paddingLeft:10
                    }}
                >
                    <AntDesign name="left" color="#fff" size={24} onPress={()=>navigation.goBack()} />
                </View>
            </View>
            <ScrollView
                contentContainerStyle={{
                    paddingHorizontal:20,
                    paddingVertical:20
                }}
                showsVerticalScrollIndicator={false}
            >
                <Text style={{color:colors.text}}>{PrivacyText.text1}</Text>
                <Text style={{color:colors.text,marginTop:10}}>{PrivacyText.text2}</Text>
                <Text style={{color:colors.text,marginTop:10}}>{PrivacyText.text3}</Text>
                <Text style={{color:colors.text,marginTop:10}}>{PrivacyText.text4}</Text>
                <Text style={{color:colors.text,marginTop:10}}>{PrivacyText.text5}</Text>
                <Text style={{color:colors.text,marginTop:10}}>{PrivacyText.text6}</Text>
            </ScrollView>
        </View>
    );
};