import React, { useState } from "react";
import { View, Text, StyleSheet, Dimensions, ScrollView, TouchableOpacity, TextInput, Image, Modal } from "react-native";
import ToggleSwitch  from "toggle-switch-react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import { useNavigation, useRoute } from '@react-navigation/core';


import { fontColor, newColor, primary, secondary } from '../../components/Colors';
import { lowerData, upperData } from "../../data/seatData";


const { width } = Dimensions.get("window");
const { height } = Dimensions.get("window");



export default function SelectedScreen(){

    const navigation = useNavigation();
    const route = useRoute();
    const { src, dest, name, deptHour, arrivalHour } = route.params;

    const [ toggle, setToggle ] = useState(false);
    // const [ price, setPrice ] = useState("");
    const [ select, setSelect ] = useState({
        seat1: false,
        seat2: false,
        seat3: false,
        seat4: false,
        seat5: false,
        seat6: false,
        seat7: false,
        seat8: false,
        seat9: false,
        seat10: false,
        seat11: false,
        seat12: false
    });

    const { seat1, seat2, seat3, seat4, seat5, seat6, seat7, seat8, seat9, seat10, seat11, seat12 } = select;

    const handleSelect1=()=>{
        seat1 === false ? setSelect({...select, seat1: true}) : setSelect({...select, seat1: false})
    };
    const handleSelect2=()=>{
        seat2 === false ? setSelect({...select, seat2: true}) : setSelect({...select, seat2: false})
    };
    const handleSelect3=()=>{
        seat3 === false ? setSelect({...select, seat3: true}) : setSelect({...select, seat3: false})
    };
    const handleSelect4=()=>{
        seat4 === false ? setSelect({...select, seat4: true}) : setSelect({...select, seat4: false})
    };
    const handleSelect5=()=>{
        seat5 === false ? setSelect({...select, seat5: true}) : setSelect({...select, seat5: false})
    };
    const handleSelect6=()=>{
        seat6 === false ? setSelect({...select, seat6: true}) : setSelect({...select, seat6: false})
    };
    const handleSelect7=()=>{
        seat7 === false ? setSelect({...select, seat7: true}) : setSelect({...select, seat7: false})
    };
    const handleSelect8=()=>{
        seat8 === false ? setSelect({...select, seat8: true}) : setSelect({...select, seat8: false})
    };
    const handleSelect9=()=>{
        seat9 === false ? setSelect({...select, seat9: true}) : setSelect({...select, seat9: false})
    };
    const handleSelect10=()=>{
        seat10 === false ? setSelect({...select, seat10: true}) : setSelect({...select, seat10: false})
    };
    const handleSelect11=()=>{
        seat11 === false ? setSelect({...select, seat11: true}) : setSelect({...select, seat11: false})
    };
    const handleSelect12=()=>{
        seat12 === false ? setSelect({...select, seat12: true}) : setSelect({...select, seat12: false})
    };

    const Upper=()=>(
    // console.log(price),
    // console.log(select),
        <View style={{marginVertical:20}}>
            <View style={styles.upperView1}>
                <View style={{flexDirection:"row"}}>
                    <TouchableOpacity 
                
                        style={[styles.upperView2]}
                        onPress={handleSelect1}
                    >
                        {
                            seat1 === true ? <Text style={{color:"#000"}}>✓</Text> : null
                        }
                    </TouchableOpacity>
                    <View style={{marginHorizontal:10}} />
                    <TouchableOpacity 
                       
                        style={[styles.upperView2]}
                        onPress={handleSelect2}
                    >
                        {
                            seat2 === true ? <Text style={{color:"#000"}}>✓</Text> : null
                        }
                    </TouchableOpacity>
                </View>
                <View style={{flexDirection:"row"}}>
                    <TouchableOpacity 
                        
                        style={[styles.upperView2]}
                        onPress={handleSelect3}
                    >
                        {
                            seat3 === true ? <Text style={{color:"#000"}}>✓</Text> : null
                        }
                    </TouchableOpacity>
                    <View style={{marginHorizontal:10}} />
                    <TouchableOpacity 
                       
                        style={[styles.upperView2]}
                        onPress={handleSelect4}
                    >
                        {
                            seat4 === true ? <Text style={{color:"#000"}}>✓</Text> : null
                        }
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.upperView1}>
                <View style={{flexDirection:"row"}}>
                    <TouchableOpacity 
                
                        style={[styles.upperView2]}
                        onPress={handleSelect5}
                    >
                        {
                            seat5 === true ? <Text style={{color:"#000"}}>✓</Text> : null
                        }
                    </TouchableOpacity>
                    <View style={{marginHorizontal:10}} />
                    <TouchableOpacity 
                       
                        style={[styles.upperView2]}
                        onPress={handleSelect6}
                    >
                        {
                            seat6 === true ? <Text style={{color:"#000"}}>✓</Text> : null
                        }
                    </TouchableOpacity>
                </View>
                <View style={{flexDirection:"row"}}>
                    <TouchableOpacity 
                        
                        style={[styles.upperView2]}
                        onPress={handleSelect7}
                    >
                        {
                            seat7 === true ? <Text style={{color:"#000"}}>✓</Text> : null
                        }
                    </TouchableOpacity>
                    <View style={{marginHorizontal:10}} />
                    <TouchableOpacity 
                       
                        style={[styles.upperView2]}
                        onPress={handleSelect8}
                    >
                        {
                            seat8 === true ? <Text style={{color:"#000"}}>✓</Text> : null
                        }
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.upperView1}>
                <View style={{flexDirection:"row"}}>
                    <TouchableOpacity 
                
                        style={[styles.upperView2]}
                        onPress={handleSelect9}
                    >
                        {
                            seat9 === true ? <Text style={{color:"#000"}}>✓</Text> : null
                        }
                    </TouchableOpacity>
                    <View style={{marginHorizontal:10}} />
                    <TouchableOpacity 
                       
                        style={[styles.upperView2]}
                        onPress={handleSelect10}
                    >
                        {
                            seat10 === true ? <Text style={{color:"#000"}}>✓</Text> : null
                        }
                    </TouchableOpacity>
                </View>
                <View style={{flexDirection:"row"}}>
                    <TouchableOpacity 
                        
                        style={[styles.upperView2]}
                        onPress={handleSelect11}
                    >
                        {
                            seat11 === true ? <Text style={{color:"#000"}}>✓</Text> : null
                        }
                    </TouchableOpacity>
                    <View style={{marginHorizontal:10}} />
                    <TouchableOpacity 
                       
                        style={[styles.upperView2]}
                        onPress={handleSelect12}
                    >
                        {
                            seat12 === true ? <Text style={{color:"#000"}}>✓</Text> : null
                        }
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );

    const Lower=()=>(
        // <View style={{marginBottom:20}}>
        //     <View style={{flexDirection:"row",justifyContent:"space-around",marginTop:20}}>
        //         <View style={{flexDirection:"row"}}>
        //             <TouchableOpacity style={{backgroundColor:"#9ea5b0",height:70,width:40,borderRadius:5}} onPress={()=>setIsOpen(true)}></TouchableOpacity>
        //             <View style={{marginHorizontal:10}} />
        //             <View style={{backgroundColor:"#fff",height:70,width:40,borderRadius:5}}></View>
        //         </View>
        //         <View>
        //             <View style={{flexDirection:"row"}}>
        //                 <TouchableOpacity style={{backgroundColor:"#9ea5b0",height:40,width:40,borderRadius:5}}></TouchableOpacity>
        //                 <View style={{marginHorizontal:10}} />
        //                 <TouchableOpacity style={{backgroundColor:"#9ea5b0",height:40,width:40,borderRadius:5}}></TouchableOpacity>
        //             </View>
        //             <View style={{flexDirection:"row",marginTop:10}}>
        //                 <TouchableOpacity style={{backgroundColor:"#9ea5b0",height:40,width:40,borderRadius:5}}></TouchableOpacity>
        //                 <View style={{marginHorizontal:10}} />
        //                 <TouchableOpacity style={{backgroundColor:"#9ea5b0",height:40,width:40,borderRadius:5}}></TouchableOpacity>
        //             </View>             
        //         </View>        
        //     </View>
        //     <View style={{flexDirection:"row",justifyContent:"space-around"}}>
        //         <View style={{flexDirection:"row",marginTop:-10}}>
        //             <TouchableOpacity style={{backgroundColor:"#9ea5b0",height:70,width:40,borderRadius:5}}></TouchableOpacity>
        //             <View style={{marginHorizontal:10}} />
        //             <TouchableOpacity style={{backgroundColor:"#9ea5b0",height:70,width:40,borderRadius:5}}></TouchableOpacity>
        //         </View>
        //         <View>
        //             <View style={{flexDirection:"row",marginTop:10}}>
        //                 <TouchableOpacity style={{backgroundColor:"#9ea5b0",height:40,width:40,borderRadius:5}}></TouchableOpacity>
        //                 <View style={{marginHorizontal:10}} />
        //                 <TouchableOpacity style={{backgroundColor:"#9ea5b0",height:40,width:40,borderRadius:5}}></TouchableOpacity>
        //             </View>
        //             <View style={{flexDirection:"row",marginTop:10}}>
        //                 <TouchableOpacity style={{backgroundColor:"#9ea5b0",height:40,width:40,borderRadius:5}}></TouchableOpacity>
        //                 <View style={{marginHorizontal:10}} />
        //                 <TouchableOpacity style={{backgroundColor:"#9ea5b0",height:40,width:40,borderRadius:5}}></TouchableOpacity>
        //             </View>             
        //         </View>        
        //     </View>
        //     <View style={{flexDirection:"row",justifyContent:"space-around"}}>
        //         <View style={{flexDirection:"row",marginTop:-30}}>
        //             <TouchableOpacity style={{backgroundColor:"#9ea5b0",height:70,width:40,borderRadius:5}}></TouchableOpacity>
        //             <View style={{marginHorizontal:10}} />
        //             <TouchableOpacity style={{backgroundColor:"#9ea5b0",height:70,width:40,borderRadius:5}}></TouchableOpacity>
        //         </View>
        //         <View>
        //             <View style={{flexDirection:"row",marginTop:10}}>
        //                 <TouchableOpacity style={{backgroundColor:"#9ea5b0",height:60,width:40,borderRadius:5}}></TouchableOpacity>
        //                 <View style={{marginHorizontal:10}} />
        //                 <TouchableOpacity style={{backgroundColor:"#9ea5b0",height:60,width:40,borderRadius:5}}></TouchableOpacity>
        //             </View>            
        //         </View>        
        //     </View>
        //     <View style={{flexDirection:"row",justifyContent:"space-around"}}>
        //         <View style={{flexDirection:"row",marginTop:-20}}>
        //             <TouchableOpacity style={{backgroundColor:"#9ea5b0",height:70,width:40,borderRadius:5}}></TouchableOpacity>
        //             <View style={{marginHorizontal:10}} />
        //             <TouchableOpacity style={{backgroundColor:"#9ea5b0",height:70,width:40,borderRadius:5}}></TouchableOpacity>
        //         </View>
        //         <View>
        //             <View style={{flexDirection:"row",marginTop:10}}>
        //                 <TouchableOpacity style={{backgroundColor:"#9ea5b0",height:60,width:40,borderRadius:5}}></TouchableOpacity>
        //                 <View style={{marginHorizontal:10}} />
        //                 <TouchableOpacity style={{backgroundColor:"#9ea5b0",height:60,width:40,borderRadius:5}}></TouchableOpacity>
        //             </View>            
        //         </View>        
        //     </View>
        //     <View style={{flexDirection:"row",justifyContent:"space-around"}}>
        //         <View style={{flexDirection:"row",marginTop:-10}}>
        //             <TouchableOpacity style={{backgroundColor:"#9ea5b0",height:70,width:40,borderRadius:5}}></TouchableOpacity>
        //             <View style={{marginHorizontal:10}} />
        //             <TouchableOpacity style={{backgroundColor:"#9ea5b0",height:70,width:40,borderRadius:5}}></TouchableOpacity>
        //         </View>
        //         <View>
        //             <View style={{flexDirection:"row",marginTop:10}}>
        //                 <TouchableOpacity style={{backgroundColor:"#9ea5b0",height:60,width:40,borderRadius:5}}></TouchableOpacity>
        //                 <View style={{marginHorizontal:10}} />
        //                 <TouchableOpacity style={{backgroundColor:"#9ea5b0",height:60,width:40,borderRadius:5}}></TouchableOpacity>
        //             </View>            
        //         </View>        
        //     </View>
        //     <View style={{flexDirection:"row",justifyContent:"space-around"}}>
        //         <View style={{flexDirection:"row",marginTop:0}}>
        //             <TouchableOpacity style={{backgroundColor:"#9ea5b0",height:70,width:40,borderRadius:5}}></TouchableOpacity>
        //             <View style={{marginHorizontal:10}} />
        //             <TouchableOpacity style={{backgroundColor:"#9ea5b0",height:70,width:40,borderRadius:5}}></TouchableOpacity>
        //         </View>
        //         <View>
        //             <View style={{flexDirection:"row",marginTop:10}}>
        //                 <TouchableOpacity style={{backgroundColor:"#9ea5b0",height:60,width:40,borderRadius:5}}></TouchableOpacity>
        //                 <View style={{marginHorizontal:10}} />
        //                 <TouchableOpacity style={{backgroundColor:"#9ea5b0",height:60,width:40,borderRadius:5}}></TouchableOpacity>
        //             </View>            
        //         </View>        
        //     </View>
        // </View>
        <View style={{marginVertical:20}}>
            <View style={{flexDirection:"row",justifyContent:"space-around",marginBottom:5}}>
                <View style={{flexDirection:"row"}}>
                    <TouchableOpacity 
                        style={{backgroundColor:"#9ea5b0",height:40,width:40,borderRadius:5}}
                    ></TouchableOpacity>
                    <View style={{marginHorizontal:10}} />
                    <TouchableOpacity 
                    style={{backgroundColor:"#9ea5b0",height:40,width:40,borderRadius:5}}
                    ></TouchableOpacity>
                </View>
                <View style={{flexDirection:"row"}}>
                    <TouchableOpacity 
                    style={{backgroundColor:"#9ea5b0",height:40,width:40,borderRadius:5}}
                    ></TouchableOpacity>
                    <View style={{marginHorizontal:10}} />
                    <TouchableOpacity 
                    style={{backgroundColor:"#9ea5b0",height:40,width:40,borderRadius:5}}
                    ></TouchableOpacity>
                </View>
            </View>
            <View style={{flexDirection:"row",justifyContent:"space-around",marginBottom:5}}>
                <View style={{flexDirection:"row"}}>
                    <TouchableOpacity 
                    style={{backgroundColor:"#9ea5b0",height:40,width:40,borderRadius:5}}
                    ></TouchableOpacity>
                    <View style={{marginHorizontal:10}} />
                    <TouchableOpacity 
                    style={{backgroundColor:"#9ea5b0",height:40,width:40,borderRadius:5}}
                    ></TouchableOpacity>
                </View>
                <View style={{flexDirection:"row"}}>
                    <TouchableOpacity 
                    style={{backgroundColor:"#9ea5b0",height:40,width:40,borderRadius:5}}
                    ></TouchableOpacity>
                    <View style={{marginHorizontal:10}} />
                    <TouchableOpacity 
                    style={{backgroundColor:"#9ea5b0",height:40,width:40,borderRadius:5}}
                    ></TouchableOpacity>
                </View>
            </View>
            <View style={{flexDirection:"row",justifyContent:"space-around",marginBottom:5}}>
                <View style={{flexDirection:"row"}}>
                    <TouchableOpacity 
                    style={{backgroundColor:"#9ea5b0",height:40,width:40,borderRadius:5}}
                    ></TouchableOpacity>
                    <View style={{marginHorizontal:10}} />
                    <TouchableOpacity 
                    style={{backgroundColor:"#9ea5b0",height:40,width:40,borderRadius:5}}
                    ></TouchableOpacity>
                </View>
                <View style={{flexDirection:"row"}}>
                    <TouchableOpacity style={{backgroundColor:"#9ea5b0",height:40,width:40,borderRadius:5}}></TouchableOpacity>
                    <View style={{marginHorizontal:10}} />
                    <TouchableOpacity 
                    style={{backgroundColor:"#9ea5b0",height:40,width:40,borderRadius:5}}
                    ></TouchableOpacity>
                </View>
            </View>
            <View style={{flexDirection:"row",justifyContent:"space-around",marginBottom:5}}>
                <View style={{flexDirection:"row"}}>
                    <TouchableOpacity 
                    style={{backgroundColor:"#9ea5b0",height:40,width:40,borderRadius:5}}></TouchableOpacity>
                    <View style={{marginHorizontal:10}} />
                    <TouchableOpacity style={{backgroundColor:"#9ea5b0",height:40,width:40,borderRadius:5}}></TouchableOpacity>
                </View>
                <View style={{flexDirection:"row"}}>
                    <TouchableOpacity style={{backgroundColor:"#9ea5b0",height:40,width:40,borderRadius:5}}></TouchableOpacity>
                    <View style={{marginHorizontal:10}} />
                    <TouchableOpacity style={{backgroundColor:"#9ea5b0",height:40,width:40,borderRadius:5}}></TouchableOpacity>
                </View>
            </View>
            <View style={{flexDirection:"row",justifyContent:"space-around",marginBottom:5}}>
                <View style={{flexDirection:"row"}}>
                    <TouchableOpacity style={{backgroundColor:"#9ea5b0",height:40,width:40,borderRadius:5}}></TouchableOpacity>
                    <View style={{marginHorizontal:10}} />
                    <TouchableOpacity style={{backgroundColor:"#9ea5b0",height:40,width:40,borderRadius:5}}></TouchableOpacity>
                </View>
                <View style={{flexDirection:"row"}}>
                    <TouchableOpacity style={{backgroundColor:"#9ea5b0",height:40,width:40,borderRadius:5}}></TouchableOpacity>
                    <View style={{marginHorizontal:10}} />
                    <TouchableOpacity style={{backgroundColor:"#9ea5b0",height:40,width:40,borderRadius:5}}></TouchableOpacity>
                </View>
            </View>
            <View style={{flexDirection:"row",justifyContent:"space-around",marginBottom:5}}>
                <View style={{flexDirection:"row"}}>
                    <TouchableOpacity style={{backgroundColor:"#9ea5b0",height:40,width:40,borderRadius:5}}></TouchableOpacity>
                    <View style={{marginHorizontal:10}} />
                    <TouchableOpacity style={{backgroundColor:"#9ea5b0",height:40,width:40,borderRadius:5}}></TouchableOpacity>
                </View>
                <View style={{flexDirection:"row"}}>
                    <TouchableOpacity style={{backgroundColor:"#9ea5b0",height:40,width:40,borderRadius:5}}></TouchableOpacity>
                    <View style={{marginHorizontal:10}} />
                    <TouchableOpacity style={{backgroundColor:"#9ea5b0",height:40,width:40,borderRadius:5}}></TouchableOpacity>
                </View>
            </View>
            <View style={{flexDirection:"row",justifyContent:"space-around",marginBottom:5}}>
                <View style={{flexDirection:"row"}}>
                    <TouchableOpacity style={{backgroundColor:"#9ea5b0",height:40,width:40,borderRadius:5}}></TouchableOpacity>
                    <View style={{marginHorizontal:10}} />
                    <TouchableOpacity style={{backgroundColor:"#9ea5b0",height:40,width:40,borderRadius:5}}></TouchableOpacity>
                </View>
                <View style={{flexDirection:"row"}}>
                    <TouchableOpacity style={{backgroundColor:"#9ea5b0",height:40,width:40,borderRadius:5}}></TouchableOpacity>
                    <View style={{marginHorizontal:10}} />
                    <TouchableOpacity style={{backgroundColor:"#9ea5b0",height:40,width:40,borderRadius:5}}></TouchableOpacity>
                </View>
            </View>
            <View style={{flexDirection:"row",justifyContent:"space-around",marginBottom:5}}>
                <View style={{flexDirection:"row"}}>
                    <TouchableOpacity style={{backgroundColor:"#9ea5b0",height:40,width:40,borderRadius:5}}></TouchableOpacity>
                    <View style={{marginHorizontal:10}} />
                    <TouchableOpacity style={{backgroundColor:"#9ea5b0",height:40,width:40,borderRadius:5}}></TouchableOpacity>
                </View>
                <View style={{flexDirection:"row"}}>
                    <TouchableOpacity style={{backgroundColor:"#9ea5b0",height:40,width:40,borderRadius:5}}></TouchableOpacity>
                    <View style={{marginHorizontal:10}} />
                    <TouchableOpacity style={{backgroundColor:"#9ea5b0",height:40,width:40,borderRadius:5}}></TouchableOpacity>
                </View>
            </View>
            <View style={{flexDirection:"row",justifyContent:"space-around",marginBottom:5}}>
                <View style={{flexDirection:"row"}}>
                    <TouchableOpacity style={{backgroundColor:"#9ea5b0",height:40,width:40,borderRadius:5}}></TouchableOpacity>
                    <View style={{marginHorizontal:10}} />
                    <TouchableOpacity style={{backgroundColor:"#9ea5b0",height:40,width:40,borderRadius:5}}></TouchableOpacity>
                </View>
                <View style={{flexDirection:"row"}}>
                    <TouchableOpacity style={{backgroundColor:"#9ea5b0",height:40,width:40,borderRadius:5}}></TouchableOpacity>
                    <View style={{marginHorizontal:10}} />
                    <TouchableOpacity style={{backgroundColor:"#9ea5b0",height:40,width:40,borderRadius:5}}></TouchableOpacity>
                </View>
            </View>
            <View style={{flexDirection:"row",justifyContent:"space-around",marginBottom:5}}>
                <View style={{flexDirection:"row"}}>
                    <TouchableOpacity style={{backgroundColor:"#9ea5b0",height:40,width:40,borderRadius:5}}></TouchableOpacity>
                    <View style={{marginHorizontal:10}} />
                    <TouchableOpacity style={{backgroundColor:"#9ea5b0",height:40,width:40,borderRadius:5}}></TouchableOpacity>
                </View>
                <View style={{flexDirection:"row"}}>
                    <TouchableOpacity style={{backgroundColor:"#9ea5b0",height:40,width:40,borderRadius:5}}></TouchableOpacity>
                    <View style={{marginHorizontal:10}} />
                    <TouchableOpacity style={{backgroundColor:"#9ea5b0",height:40,width:40,borderRadius:5}}></TouchableOpacity>
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
                            <MaterialCommunityIcons name="steering" color={"#646666"} size={38}/>
                        </View>
                        {
                            toggle === false ? <Lower /> : <Upper />
                        }  
                    {/* </ScrollView>                    */}
                </ScrollView>
                <View style={styles.modal}>
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
                            <TouchableOpacity onPress={()=>navigation.navigate("UserDetails",{ src: src, dest: dest, name: name, deptHour: deptHour, arivHour: arrivalHour })}
                                style={{backgroundColor:"#ed6c39",paddingVertical:8,paddingHorizontal:20,borderRadius:10,elevation:5}}
                            >
                                <View>
                                    <Text style={{color:"#fff",fontSize:20}}>Proceed</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                {/* <Modal
                    animationType={"slide"}
                    onRequestClose={closeHandle}
                    transparent={true}
                    visible={isOpen}
                >
                    <View style={{alignItems:"center", marginHorizontal:20, width:"90%", flex:1, justifyContent:"flex-end"}}>
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
                </Modal> */}
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
        marginTop: -100,
        flexDirection: "row",
        padding: 10,
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
        backgroundColor: "#9ea5b0"
    }
});