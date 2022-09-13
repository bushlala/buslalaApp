import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useTheme} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {fontColor, newColor, primary, secondary} from '../../components/Colors';
import {RalewayBold} from '../../assets/fonts/fonts';
import axios from 'axios';
import {API} from '../../config';
import {useNavigation, useRoute} from '@react-navigation/core';
import {CancellationText} from '../../components/privacyTxt';

const {width, height} = Dimensions.get('window');

export default function CancelTicket({navigation}) {
  const colors = useTheme();
  const route = useRoute();

  const {bookingId} = route.params;
  const [token, setToken] = useState('');

  const config = {
    headers: {
      Authorization: token,
    },
  };
  useEffect(() => {
    AsyncStorage.getItem('jwt')
      .then(res => {
        console.log(JSON.parse(res).data.token);
        setToken(JSON.parse(res).data.token);
      })
      .catch(err => console.log(err));
  }, []);

  const putData = {
    status: 'cancelled',
  };
  const cancelTicket = () => {
    axios
      .put(`${API}/booking/${bookingId}`, putData, config)
      .then(res => {
        console.log(res);
        navigation.navigate('Profile');
      })
      .catch(err => console.log(err));
  };
  return (
    <View style={{flex: 1}}>
      <View style={styles.view}>
        <View style={styles.heading}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.btn}
              onPress={() => navigation.navigate('Profile')}>
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
              onPress={() => navigation.navigate('Notifications')}>
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
            justifyContent: 'space-between',
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
          <Text
            style={{
              fontFamily: RalewayBold,
              fontSize: 17,
              color: 'black',
              marginRight: 30,
            }}>
            Cancellation Policy
          </Text>
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingTop: 10,
            paddingHorizontal: 5,
            paddingBottom: 400,
          }}>
          <Text style={{color: colors.colors.text}}>
            {CancellationText.text1}
          </Text>
          <Text style={{color: colors.colors.text}}>
            {CancellationText.text2}
          </Text>
          <Text style={{color: colors.colors.text}}>
            {CancellationText.text3}
          </Text>
          <Text style={{color: colors.colors.text}}>
            {CancellationText.text4}
          </Text>
          <Text style={{color: colors.colors.text}}>
            {CancellationText.text5}
          </Text>
          <Text style={{color: colors.colors.text}}>
            {CancellationText.text6}
          </Text>
          <Text style={{color: colors.colors.text}}>
            {CancellationText.text7}
          </Text>
          <Text style={{color: colors.colors.text}}>
            {CancellationText.text8}
          </Text>
          <Text style={{color: colors.colors.text}}>
            {CancellationText.text9}
          </Text>
          <Text style={{color: colors.colors.text}}>
            {CancellationText.text10}
          </Text>
          <Text style={{color: colors.colors.text}}>
            {CancellationText.text11}
          </Text>
          <Text style={{color: colors.colors.text}}>
            {CancellationText.text12}
          </Text>
        </ScrollView>
      </View>
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          right: 0,
          left: 0,
          paddingHorizontal: 20,
          paddingVertical: 10,
        }}>
        <Text
          style={{
            color: secondary,
            fontWeight: '600',
            textAlign: 'center',
            marginBottom: 10,
            fontSize: 15,
          }}>
          Are You Sure To CANCEL This Ticket?
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            style={{
              backgroundColor: secondary,
              paddingVertical: 10,
              width: width / 2.5,
              borderRadius: 5,
              alignItems: 'center',
            }}
            activeOpacity={0.8}
            onPress={() => navigation.goBack()}>
            <Text style={{color: '#fff', fontSize: 16, fontWeight: '600'}}>
              NO
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: primary,
              paddingVertical: 10,
              width: width / 2.5,
              borderRadius: 5,
              alignItems: 'center',
            }}
            onPress={() => cancelTicket()}
            activeOpacity={0.8}>
            <Text style={{color: '#fff', fontSize: 16, fontWeight: '600'}}>
              CONFIRM
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    backgroundColor: primary,
    borderBottomRightRadius: 70,
    borderBottomLeftRadius: 70,
    width: width,
    height: '25%',
  },
  heading: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 20,
    marginTop: 40,
  },
  btn: {
    padding: 8,
    borderRadius: 25,
    backgroundColor: newColor,
    marginLeft: 10,
  },
  dot: {
    backgroundColor: fontColor,
    width: 10,
    height: 10,
    borderRadius: 20,
    position: 'absolute',
    right: 3,
    top: 3,
  },
  view2: {
    marginTop: -40,
    marginHorizontal: 20,
  },
});
