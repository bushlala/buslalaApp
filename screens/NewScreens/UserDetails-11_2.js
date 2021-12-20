import React, { useState } from "react";
import { View, Text, StyleSheet, Dimensions, ScrollView, TouchableOpacity, TextInput, Picker } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import { useNavigation } from '@react-navigation/core';
import DocumentPicker from 'react-native-document-picker';
import SelectDropdown from 'react-native-select-dropdown';

import { fontColor, newColor, primary, secondary } from '../../components/Colors';


const {width} = Dimensions.get("window");
const {height} = Dimensions.get("window");



export default function UserDetails_11_2({route}){

    const navigation = useNavigation();
    const { name, src, dest, deptHour, arivHour } = route.params;
    const [ values, setValues ] = useState({
        fullName1: "",
        age1: "",
        fullName2: "",
        age2: "",
        number: "",
        email: "",
        gender1: "",
        gender2: ""
    });
    const { fullName1, age1, fullName2, age2, number, email, gender1, gender2 } = values;
    const [select1, setSelect1] = useState(false);
    const [select2, setSelect2] = useState(false);
    const Gender = ["Male", "Female", "Others"];
    const [idProof, setIdProof] = useState(null);

    const optionalClick1 =()=>{
        select1 === false ? setSelect1(true) : setSelect1(false);
    }
    const optionalClick2 =()=>{
        select2 === false ? setSelect2(true) : setSelect2(false);
    }
    const selectFile = async () => {
        //Opening Document Picker for selection of one file
        try {
          const res = await DocumentPicker.pick({
            type: [DocumentPicker.types.images,DocumentPicker.types.pdf],
            //There can me more options as well
            // DocumentPicker.types.allFiles
            // DocumentPicker.types.images
            // DocumentPicker.types.plainText
            // DocumentPicker.types.audio
            // DocumentPicker.types.pdf
          });
          //Printing the log realted to the file
        //   console.log('res : ' + JSON.stringify(res));
        //   console.log('URI : ' + res.uri);
        //   console.log('Type : ' + res.type);
        //   console.log('File Name : ' + res.name);
        //   console.log('File Size : ' + res.size);
          //Setting the state to show single file attributes
          res.map(item=>(setIdProof(item.name)));
        } catch (err) {
          //Handling any exception (If any)
          if (DocumentPicker.isCancel(err)) {
            //If user canceled the document selection
            alert('Canceled');
          } else {
            //For Unknown Error
            alert('Unknown Error: ' + JSON.stringify(err));
            throw err;
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
                                <Text style={{color:"gray"}}>22 Oct, Sun</Text>
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
            <View style={{paddingHorizontal:30,marginBottom:0}}>
            <ScrollView style={{}} showsVerticalScrollIndicator={false}>
                    <View style={{marginHorizontal:5}}>
                        <Text style={{color:"#000",marginTop:40}}>Personal Detials</Text>
                        <View style={{flexDirection:"row",justifyContent:"center",marginTop:20}}>
                            <Text style={{color:"#000"}}>Person 1</Text>
                            <View style={{borderWidth:0.8,marginHorizontal:20}}></View>
                            <Text style={{color:"#000"}}>A4</Text>
                        </View>
                        <View style={{elevation:5,width:"100%", backgroundColor:"white", borderRadius:10, padding:10,marginTop:10}}>
                            <TextInput 
                                style={{paddingLeft:10,color:"#000",borderRadius:10}} 
                                placeholder="Full Name" 
                                placeholderTextColor="gray" 
                                onChangeText={(text)=>setValues({...values, fullName1: text})}
                            />
                        </View>
                        <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                            <View style={{flexDirection:"row",elevation:5, backgroundColor:"white", borderRadius:10, padding:10,marginTop:10}}>
                                <TextInput 
                                    style={{color:"#000",paddingLeft:10,width:width/3}} 
                                    placeholder="Age" 
                                    placeholderTextColor="gray" 
                                    keyboardType="number-pad" 
                                    onChangeText={(text)=>setValues({...values, age1: text})}
                                />
                            </View>
                            <View style={{elevation:5, backgroundColor:"white", borderRadius:10, padding:10,marginTop:10,}}>
                                <SelectDropdown
                                    data={Gender}
                                    defaultButtonText={"Gender"}
                                    onSelect={(selectedItem) => {
                                        setValues({...values,gender1: selectedItem})
                                    }}
                                    buttonTextAfterSelection={(selectedItem) => {
                                        return selectedItem;
                                    }}
                                    rowTextForSelection={(item, index) => {
                                        return item;
                                    }}
                                    buttonStyle={styles.dropdown2BtnStyle}
                                    renderDropdownIcon={(isOpened) => {
                                        return (
                                          <MaterialIcons
                                            name={isOpened ? "expand-less" : "expand-more"}
                                            color={"#000"}
                                            size={24}
                                          />
                                        );
                                      }}
                                    dropdownIconPosition={"right"}
                                    dropdownStyle={styles.DropdownStyle}
                                    rowStyle={styles.rowStyle}
                                />
                            </View>
                        </View>
                        <View style={{flexDirection:"row",justifyContent:"center",marginTop:20}}>
                            <Text style={{color:"#000"}}>Person 2</Text>
                            <View style={{borderWidth:0.8,marginHorizontal:20,backgroundColor:"#000"}}></View>
                            <Text style={{color:"#000"}}>B4</Text>
                        </View>
                        <View style={{elevation:5,width:"100%", backgroundColor:"white", borderRadius:10, padding:10,marginTop:10}}>
                            <TextInput 
                                style={{color:"#000",width:"100%",paddingLeft:10}} 
                                placeholder="Full Name" 
                                placeholderTextColor="gray" 
                                onChangeText={(text)=>setValues({...values, fullName2: text})}
                            />
                        </View>
                        <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                            <View style={{flexDirection:"row",elevation:5, backgroundColor:"white", borderRadius:10,padding:10,marginTop:10}}>
                                <TextInput 
                                    style={{color:"#000",paddingLeft:10,width:width/3}} 
                                    placeholder="Age" 
                                    placeholderTextColor="gray"
                                    keyboardType="number-pad" 
                                    onChangeText={(text)=>setValues({...values, age2: text})}
                                />
                            </View>
                            <View style={{elevation:5, backgroundColor:"white", borderRadius:10, padding:10,marginTop:10,}}>
                                <SelectDropdown
                                    data={Gender}
                                    defaultButtonText={"Gender"}
                                    onSelect={(selectedItem) => {
                                        setValues({...values,gender2: selectedItem})
                                    }}
                                    buttonTextAfterSelection={(selectedItem) => {
                                        return selectedItem;
                                    }}
                                    rowTextForSelection={(item, index) => {
                                        return item;
                                    }}
                                    buttonStyle={styles.dropdown2BtnStyle}
                                    renderDropdownIcon={(isOpened) => {
                                        return (
                                          <MaterialIcons
                                            name={isOpened ? "expand-less" : "expand-more"}
                                            color={"#000"}
                                            size={24}
                                          />
                                        );
                                      }}
                                      dropdownIconPosition={"right"}
                                      dropdownStyle={styles.DropdownStyle}
                                      rowStyle={styles.rowStyle}
                                />
                            </View>
                        </View>
                        <Text style={{color:"#000",marginTop:40}}>Contact Detials</Text>
                        <Text style={{color:"gray",marginTop:10}}>Your ticket will be sent here</Text>
                        <View style={{elevation:5, backgroundColor:"white", borderRadius:10, padding:5,marginTop:10}}>
                            <TextInput 
                                style={{color:"#000",paddingLeft:10,borderRadius:10}} 
                                placeholder="Phone number" 
                                placeholderTextColor="gray" 
                                keyboardType="number-pad" 
                                onChangeText={(text)=>setValues({...values, number: text})}
                            />
                        </View>
                        <View style={{elevation:5, backgroundColor:"white", borderRadius:10, padding:5,marginTop:10}}>
                            <TextInput 
                                style={{color:"#000",paddingLeft:10}} 
                                placeholder="Email"
                                 placeholderTextColor="gray" 
                                 onChangeText={(text)=>setValues({...values, email: text})}
                            />
                        </View>
                        <View style={{marginVertical:10}}>
                            <TouchableOpacity style={{flexDirection:"row",alignItems:"center"}} 
                                onPress={optionalClick1}
                            >
                                <MaterialCommunityIcons name={select1===true?"check-box-outline":"crop-square"} color={"#000"} size={22} />
                                <Text style={{color:"#66645f",marginLeft:10}}>Upload ID Proof (Optional)</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{marginVertical:10}}>
                            <TouchableOpacity style={{flexDirection:"row",alignItems:"center"}} 
                                onPress={optionalClick2}
                            >
                                <MaterialCommunityIcons name={select2===true?"check-box-outline":"crop-square"} color={"#000"} size={22} />
                                <Text style={{color:"#66645f",marginLeft:10}}>Upload Cowin Certificate (Optional)</Text>
                            </TouchableOpacity>
                        </View>
                        {
                            idProof !== null ? 
                                <View style={{marginTop:10,flexDirection:"row"}}>
                                    <Text style={styles.textStyle}>File Name: </Text>
                                    <Text style={styles.fileStyle}>{idProof}</Text>
                                </View> 
                                : 
                                null
                        }
                        <TouchableOpacity 
                            disabled={select1 === true || select2 === true ? false : true}
                            onPress={selectFile}
                            style={{elevation:5, backgroundColor:"#ed6c39", borderRadius:10, padding:15,marginTop:20,alignItems:"center",marginHorizontal:90}}>
                            <Text style={{color:"#fff"}}>+ Add file</Text>
                        </TouchableOpacity>
                        <View style={{elevation:5,width:"100%", backgroundColor:"#fff", borderRadius:10,padding:10,alignItems:"center",flexDirection:"row",marginBottom:200,marginTop:20}}>
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
                                onPress={()=>navigation.navigate("BusDetails",{ 
                                    busName: name, deptHour: deptHour, arivHour: arivHour,
                                    fullName1: fullName1, age1: age1, fullName2: fullName2, 
                                    age2: age2, number: number, Email: email, gender1: gender1, gender2: gender2
                                })}
                                >
                                <Text style={{color:"#fff",fontSize:18}}>Proceed</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
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
    textStyle: {
        color:"#000",
        textAlign:"center"
    },
    fileStyle: {
        color:"#3b3b38"
    },
    dropdown2BtnStyle: {
        backgroundColor: "#fff",
        borderRadius: 10,
        width: width/3
    },
    DropdownStyle: {
        backgroundColor: "#fff",
        borderRadius: 5
    },
    rowStyle: {
        backgroundColor: "#fff",
        borderBottomEndRadius: 20,
        borderBottomStartRadius: 20
    }
});