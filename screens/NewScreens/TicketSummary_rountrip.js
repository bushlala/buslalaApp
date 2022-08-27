import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/core';
import {useTheme} from '@react-navigation/native';
import axios from 'axios';
import {API, APIADMIN} from '../../config';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import RazorpayCheckout from 'react-native-razorpay';

const {width} = Dimensions.get('window');
const {height} = Dimensions.get('window');

export default function TicketSummaryScreen({route}) {
  const navigation = useNavigation();
  const colors = useTheme();
  const [token, setToken] = useState('');
  const config = {
    headers: {
      Authorization: token,
    },
  };
  const {
    Name,
    busName,
    deptHour,
    arivHour,
    fullName1,
    age1,
    fullName2,
    age2,
    number,
    email,
    gender1,
    reTime,
    gender2,
    price,
    tripId,
    seat_number1,
    seat_number2,
    date,
    src,
    dest,
    rDate,
    url1,
    url2,
    seats_length,
    seats,
    fullName3,
    fullName4,
    fullName5,
    age3,
    age4,
    age5,
    gender3,
    gender4,
    gender5,
    seat_id,
  } = route.params;

  const [oneSeat, setOneSeat] = useState(true);

  const seatNumHandler = () => {
    if (seats_length > 1) {
      setOneSeat(false);
    } else setOneSeat(true);
  };
  useEffect(() => {
    seatNumHandler();
  }, []);

  var postdata = {
    seat_number1: seat_number1,

    price: price,
    u1_name: fullName1,
    u1_age: age1,
    u1_gender: gender1,

    name: Name,
    ph_number: number,
    email: email,
    idproof: url1,
    cowin: url2,
  };

  // console.log(postdata);

  const ticket = () => (
    <View style={{marginVertical: 10, minHeight: 120}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}>
        <Text style={{color: '#000', fontWeight: '500'}}>{src}</Text>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={{color: '#eb8634', fontSize: 11}}>-----</Text>
          <AntDesign name="right" color="#eb8634" style={{top: 1, left: -2}} />
          <Text style={{color: '#eb8634', fontSize: 11, marginHorizontal: 5}}>
            {reTime ? 'Roundtrip' : 'Oneway'}
          </Text>
          {reTime ? (
            <>
              <AntDesign
                name="left"
                color="#eb8634"
                style={{top: 1, left: 2}}
              />
              <Text style={{color: '#eb8634', fontSize: 11}}>-----</Text>
            </>
          ) : (
            <>
              <Text style={{color: '#eb8634', fontSize: 11, left: 2}}>
                -----
              </Text>
              <AntDesign name="right" color="#eb8634" style={{top: 1}} />
            </>
          )}
        </View>
        <Text style={{color: '#000', fontWeight: '500'}}>{dest}</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
          marginTop: 10,
        }}>
        <View style={{alignItems: 'center'}}>
          <Text style={{color: '#000', fontSize: 10}}>Reporting Time</Text>
          <Text style={{color: '#000', fontSize: 14}}>{deptHour}</Text>
        </View>
        <View style={{alignItems: 'center'}}>
          <Text style={{textAlign: 'center', color: '#000', fontSize: 12}}>
            {date}
          </Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={{color: '#eb8634', fontSize: 11, left: 2}}>-----</Text>
            <AntDesign name="right" color="#eb8634" style={{top: 1}} />
          </View>
        </View>
        <View style={{alignItems: 'center'}}>
          <Text style={{color: '#000', fontSize: 10}}>Reaching Time</Text>
          <Text style={{color: '#000', fontSize: 14}}>{arivHour}</Text>
        </View>
      </View>
      {rDate && (
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            marginTop: 10,
          }}>
          <View style={{alignItems: 'center'}}>
            <Text style={{color: '#000', fontSize: 10}}>Reaching Time</Text>
            {/* <Text style={{color:"#000",fontSize:14}}>{reTime.arr}</Text> */}
          </View>
          <View style={{alignItems: 'center'}}>
            <Text style={{textAlign: 'center', color: '#000', fontSize: 12}}>
              {rDate}
            </Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <AntDesign
                name="left"
                color="#eb8634"
                style={{top: 1, left: 2}}
              />
              <Text style={{color: '#eb8634', fontSize: 11}}>-----</Text>
            </View>
          </View>
          <View style={{alignItems: 'center'}}>
            <Text style={{color: '#000', fontSize: 10}}>Reporting Time</Text>
            {/* <Text style={{color:"#000",fontSize:14}}>{reTime.dept}</Text> */}
          </View>
        </View>
      )}
      <View
        style={{
          flexDirection: 'row',
          marginTop: 10,
          justifyContent: 'space-around',
          alignItems: 'flex-end',
        }}>
        <Text style={{color: 'gray', fontSize: 10, marginBottom: 5}}>
          Payment pending
        </Text>
        {oneSeat ? (
          <Text style={{color: '#eb8634', fontSize: 20}}>{seat_number1}</Text>
        ) : (
          <Text style={{color: '#eb8634', fontSize: 20}}>
            {seats.join(',')}
          </Text>
        )}
      </View>
    </View>
  );
  // const twoSeatTicket=()=>(
  //     <View style={{marginVertical:10,height:120}}>
  //         <Text style={{textAlign:"center",color:"#000",fontSize:12}}>{date}</Text>
  //         <View style={{flexDirection:"row",justifyContent:"space-around",alignItems:"center"}}>
  //             <Text style={{color:"#000",fontWeight:"500"}}>{src}</Text>
  //             <View style={{flexDirection:"row",alignItems:"center"}}>
  //                 <Text style={{color:"#eb8634",fontSize:11,left:-10}}>-----</Text>
  //                 <AntDesign name="right" color="#eb8634" style={{top:1,left:-12}} />
  //                 <Text style={{color:"#eb8634",fontSize:11,marginHorizontal:5}}>Oneway</Text>
  //                 <Text style={{color:"#eb8634",fontSize:11,left:12}}>-----</Text>
  //                 <AntDesign name="right" color="#eb8634" style={{top:1,left:10}} />
  //             </View>
  //             <Text style={{color:"#000",fontWeight:"500"}}>{dest}</Text>
  //         </View>
  //         <View style={{flexDirection:"row",justifyContent:"space-around",alignItems:"center",marginTop:10}}>
  //             <View style={{alignItems:"center"}}>
  //                 <Text style={{color:"#000",fontSize:10}}>Reporting Time</Text>
  //                 <Text style={{color:"#000",fontSize:14}}>{deptHour}</Text>
  //             </View>
  //             <View style={{alignItems:"center"}}>
  //                 <Text style={{color:"#000",fontSize:10}}>Reaching Time</Text>
  //                 <Text style={{color:"#000",fontSize:14}}>{arivHour}</Text>
  //             </View>
  //         </View>
  //         <View style={{flexDirection:"row",marginBottom:10,justifyContent:"space-around",alignItems:"flex-end"}}>
  //             <Text style={{color:"gray",fontSize:10}}>Payment pending</Text>
  //             <Text style={{color:"#eb8634",fontSize:20}}>{seat_number1}, {seat_number2}</Text>
  //         </View>
  //         {/* <Text style={{color:"#000",textAlign:"center",fontWeight:"500"}}>{busName}</Text>
  //         <View style={{flexDirection:"row",justifyContent:"space-around",alignItems:"center",marginVertical:5}}>
  //             <View style={{alignItems:"center"}}>
  //                 <Text style={{color:"#000",fontWeight:"500"}}>{src}</Text>
  //                 <Text style={{color:"gray",fontSize:12,fontWeight:"500"}}>{deptHour}</Text>
  //             </View>
  //             <Text style={{color:"#000"}}>--------</Text>
  //             <View style={{alignItems:"center"}}>
  //                 <Text style={{color:"#000",fontWeight:"500"}}>{dest}</Text>
  //                 <Text style={{color:"gray",fontSize:12,fontWeight:"500"}}>{arivHour}</Text>
  //             </View>
  //         </View>
  //         <Text style={{color:"#000",textAlign:"center",fontWeight:"600"}}>Journey Date: {date}</Text>
  //         {
  //             rDate !== undefined ?
  //             <Text style={{color:"#000",textAlign:"center",fontWeight:"600"}}>Return Date: {rDate}</Text>
  //             :
  //             null
  //         } */}
  //         {/* <Text style={{color:"#000",textAlign:"center",fontWeight:"400"}}>P1: {fullName1}</Text>
  //         <Text style={{color:"#000",textAlign:"center",fontWeight:"600"}}>Seat number: {seat_number1}</Text>
  //         <Text style={{color:"#000",textAlign:"center",fontWeight:"400"}}>P2: {fullName2}</Text>
  //         <Text style={{color:"#000",textAlign:"center",fontWeight:"600"}}>Seat number: {seat_number2}</Text> */}
  //     </View>
  // );

  // can be remove later --------------------->

  // const _razorpay=()=>{
  //     var options = {
  //         description: 'Payment of seat booking',
  //         image: '../../assets/logo.png',
  //         currency: 'INR',
  //         key: 'rzp_test_nxRhnTn0h9BeAk',
  //         amount: Data.amount,
  //         name: "Buslala",
  //         order_id: Data.id,
  //         prefill: {
  //           email: email,
  //           contact: number,
  //           name: Name
  //         },
  //         theme: {color: '#969557'}
  //       }
  //       RazorpayCheckout.open(options).then( async data => {
  //         // handle success
  //         axios.post("https://buslala-backend-api.herokuapp.com/api/user/verify-payment",{
  //             payment_id: data.razorpay_payment_id,
  //             order_id: Data.id,
  //             signature: data.razorpay_signature,
  //             order: Data,
  //         }).then(res=>{
  //             if(res.status==200){
  //                 navigation.navigate("Booked Successfully",Name);
  //             }
  //             else console.log(res.status);
  //         }).catch(e=>console.log(e));
  //       }).catch((error) => {
  //         // handle failure
  //         alert("You have canceled the payment");
  //       });
  // };

  // <------------------------------------------------
  const proceed = () => {
    console.log(postdata);
    AsyncStorage.getItem('jwt')
      .then(res => {
        console.log(JSON.parse(res).data.token);
        setToken(JSON.parse(res).data.token);
      })
      .catch(err => console.log(err));
    axios
      .post(`${API}/book/${tripId}`, postdata, config)
      .then(res => {
        if (res.status == 200) {
          let Data = res.data;
          // console.log(Data);
          navigation.navigate('PaymentScreen', {
            Data,
            name: Name,
            email: email,
            number: number,
            price: price,
          });
          // setData(res.data);
          // _razorpay();
        } else console.log(res.status);
      })
      .catch(e => {
        alert('please try again later');
        console.log('Error is there', e);
      });
  };

  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <View style={styles.heading}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.btn}
              onPress={() => {
                navigation.navigate('Profile');
              }}>
              <MaterialCommunityIcons
                name="account-outline"
                size={30}
                color="white"
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.btn}
              onPress={() => {
                navigation.navigate('Tickets');
              }}>
              <AntDesign name="calendar" size={30} color="white" />
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.btn}
              onPress={() => {
                navigation.navigate('Notifications');
              }}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
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
        <View
          style={{
            flexDirection: 'row',
            elevation: 5,
            alignItems: 'center',
            width: '100%',
            backgroundColor: 'white',
            borderRadius: 10,
            padding: 10,
          }}>
          <TouchableOpacity
            style={{backgroundColor: '#fff', elevation: 5, borderRadius: 5}}
            onPress={() => navigation.goBack()}>
            <AntDesign
              name="arrowleft"
              size={24}
              color="black"
              style={{padding: 3}}
            />
          </TouchableOpacity>
          <Text style={{fontSize: 17, color: 'black', marginLeft: 10}}>
            Ticket summary
          </Text>
        </View>
      </View>
      <ScrollView style={{marginBottom: 0}}>
        <View style={{marginHorizontal: 20}}>
          <View
            style={{
              elevation: 5,
              backgroundColor: '#fff',
              marginHorizontal: 10,
              marginVertical: 10,
            }}>
            {ticket()}
          </View>
          <View style={{marginTop: 20}}>
            <Text style={{color: colors.colors.text, fontSize: 18}}>
              Personal Details
            </Text>
            <View style={{marginTop: 10}}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <MaterialCommunityIcons
                  name="chair-rolling"
                  color={colors.colors.text}
                  size={24}
                />
                <Text style={{color: '#e66349'}}>{seat_number1}</Text>
                <Text style={{color: colors.colors.text}}>{fullName1}</Text>
                <Text style={{color: colors.colors.text}}>{age1}</Text>
                <Text style={{color: colors.colors.text}}>{gender1} </Text>
              </View>
              <View
                style={{
                  borderWidth: 0.2,
                  borderColor: 'gray',
                  backgroundColor: 'gray',
                  marginVertical: 10,
                }}
              />
              {seats_length > 1 && (
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <MaterialCommunityIcons
                    name="chair-rolling"
                    color="#000"
                    size={24}
                  />
                  <Text style={{color: '#e66349'}}>{seats[1]}</Text>
                  <Text style={{color: '#000'}}>{fullName2}</Text>
                  <Text style={{color: '#000'}}>{age2}</Text>
                  <Text style={{color: '#000'}}>{gender2}</Text>
                </View>
              )}
              <View
                style={{
                  borderWidth: 0.2,
                  borderColor: 'gray',
                  backgroundColor: 'gray',
                  marginVertical: 10,
                }}
              />
              {seats_length > 2 && (
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <MaterialCommunityIcons
                    name="chair-rolling"
                    color="#000"
                    size={24}
                  />
                  <Text style={{color: '#e66349'}}>{seats[2]}</Text>
                  <Text style={{color: '#000'}}>{fullName3}</Text>
                  <Text style={{color: '#000'}}>{age3}</Text>
                  <Text style={{color: '#000'}}>{gender3}</Text>
                </View>
              )}
              {seats_length > 3 && (
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <MaterialCommunityIcons
                    name="chair-rolling"
                    color="#000"
                    size={24}
                  />
                  <Text style={{color: '#e66349'}}>{seats[3]}</Text>
                  <Text style={{color: '#000'}}>{fullName4}</Text>
                  <Text style={{color: '#000'}}>{age4}</Text>
                  <Text style={{color: '#000'}}>{gender4}</Text>
                </View>
              )}
              {seats_length > 4 && (
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <MaterialCommunityIcons
                    name="chair-rolling"
                    color="#000"
                    size={24}
                  />
                  <Text style={{color: '#e66349'}}>{seats[4]}</Text>
                  <Text style={{color: '#000'}}>{fullName5}</Text>
                  <Text style={{color: '#000'}}>{age5}</Text>
                  <Text style={{color: '#000'}}>{gender5}</Text>
                </View>
              )}
            </View>
          </View>
          <View style={{marginTop: 20}}>
            <Text style={{color: colors.colors.text, fontSize: 18}}>
              Contact Details
            </Text>
            <View style={{marginTop: 10}}>
              <View style={{flexDirection: 'row'}}>
                <Text style={{color: 'gray'}}>Phone number - </Text>
                <Text style={{color: colors.colors.text}}>{number}</Text>
              </View>
              <View
                style={{
                  borderWidth: 0.2,
                  borderColor: 'gray',
                  backgroundColor: 'gray',
                  marginVertical: 10,
                }}
              />
              <View style={{flexDirection: 'row'}}>
                <Text style={{color: 'gray'}}>Email - </Text>
                <Text style={{color: colors.colors.text}}>{email}</Text>
              </View>
              <View></View>
            </View>
          </View>
          <View style={{marginTop: 20}}>
            <Text style={{color: colors.colors.text, fontSize: 18}}>
              Payment Details
            </Text>
            <View style={{marginTop: 10}}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginBottom: 30,
                  alignItems: 'center',
                }}>
                <Text style={{color: colors.colors.text}}>Total pay</Text>
                <Text
                  style={{color: '#e66349', fontSize: 18, fontWeight: '800'}}>
                  ₹{price}
                </Text>
              </View>
            </View>
            <View style={{alignItems: 'center'}}>
              <TouchableOpacity style={styles.proceed} onPress={proceed}>
                <Text style={{color: '#fff', fontSize: 16}}>
                  Proceed to Payment
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    // backgroundColor: "#edf5f7",
    width: width,
  },
  container: {
    height: '16%',
    width: width,
    backgroundColor: '#969557',
    borderBottomRightRadius: 18,
    borderBottomLeftRadius: 18,
  },
  heading: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 20,
    marginTop: 10,
  },
  btn: {
    padding: 8,
    borderRadius: 25,
    backgroundColor: '#767553',
    marginLeft: 10,
  },
  dot: {
    backgroundColor: '#FCBA00',
    width: 10,
    height: 10,
    borderRadius: 20,
    position: 'absolute',
    right: 3,
    top: 3,
  },
  view2: {
    width: width,
    marginTop: -15,
    paddingHorizontal: 20,
  },
  proceed: {
    backgroundColor: '#e66349',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    paddingVertical: 12,
    elevation: 5,
    marginBottom: 40,
    width: '70%',
  },
});
