import React, {useState} from 'react';
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
import RazorpayCheckout from 'react-native-razorpay';
import axios from 'axios';
import {useTheme} from '@react-navigation/native';
import {API} from '../../config';
import AsyncStorage from '@react-native-async-storage/async-storage';

const {width} = Dimensions.get('window');

export default function PaymentScreen({route}) {
  const navigation = useNavigation();
  const colors = useTheme();
  const {Data, name, email, number, price} = route.params;
  const [token, setToken] = useState('');
  const postData = {
    title: 'A new order has been placed',
    body: 'A new order has been placed. Enjoy your trip.',
    status: false,
  };

  const config = {
    headers: {
      Authorization: token,
    },
  };

  const _razorpay = () => {
    AsyncStorage.getItem('jwt')
      .then(res => {
        //console.log(JSON.parse(res).data.token);
        setToken(JSON.parse(res).data.token);
        console.log('Data.id', Data.id);
      })
      .catch(err => console.log(err));
    var options = {
      description: 'Payment of seat booking',
      image: '../../assets/logo.png',
      currency: 'INR',
      key: 'rzp_live_50LP3KWWzGN3e5',
      amount: Data.amount,
      name: 'Buslala',
      order_id: Data.id, //Replace this with an order_id created using Orders API.
      prefill: {
        email: email,
        contact: number,
        name: name,
      },
      theme: {color: '#969557'},
    };
    RazorpayCheckout.open(options)
      .then(async data => {
        // handle success
        // setPaymentId(data.razorpay_payment_id);
        axios
          .post(`${API}/verify-payment`, {
            payment_id: data.razorpay_payment_id,
            order_id: Data.id,
            signature: data.razorpay_signature,
            order: Data,
          })
          .then(res => {
            if (res.status == 200) {
              console.log(res.data);
              navigation.navigate('Booked Successfully', name);
              axios
                .post(`${API}/notifications`, postData, config)
                .then(console.log('Notification posted'))
                .catch(err => console.log(err));
            } else console.log(res.status);
          })
          .catch(e => console.log(e));
        // alert(`Success: ${data.razorpay_payment_id}`);
      })
      .catch(error => {
        console.log(Data.id);
        // handle failure
        console.log(`Error has occured: ${error.code} | ${error.description}`);
        alert('Payment is denied');
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
            Payment
          </Text>
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false} style={{}}>
        <View style={{marginHorizontal: 20, marginBottom: 20}}>
          <View style={{marginLeft: 10, marginTop: 20, marginBottom: 5}}>
            <View style={{}}>
              <Text style={{color: colors.colors.text}}>
                Select Payment Methods
              </Text>
            </View>
          </View>

          <View style={{marginTop: 20}}>
            <TouchableOpacity
              style={{
                elevation: 5,
                width: '100%',
                backgroundColor: 'white',
                borderRadius: 10,
                padding: 15,
              }}
              onPress={_razorpay}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View>
                  <Image
                    source={require('../../assets/icons/Razorpay.png')}
                    style={{height: 40, width: 50}}
                  />
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flex: 1,
                  }}>
                  <Text
                    style={{color: '#000', marginVertical: 10, marginLeft: 10}}>
                    Razorpay
                  </Text>
                  <MaterialIcons
                    name="done"
                    color="#000"
                    size={24}
                    style={{marginRight: 5}}
                  />
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <TouchableOpacity
        style={{
          backgroundColor: '#e66349',
          justifyContent: 'center',
          alignItems: 'center',
          marginHorizontal: 80,
          borderRadius: 10,
          paddingVertical: 12,
          elevation: 5,
          marginBottom: 10,
        }}
        onPress={_razorpay}>
        <Text style={{color: '#fff', fontSize: 16}}>Pay ₹{price}</Text>
      </TouchableOpacity>
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
});
