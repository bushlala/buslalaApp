import {StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {APIADMIN} from '../../config';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/core';
import {
  fontColor,
  newColor,
  primary,
  secondary,
  textColor,
} from '../../components/Colors';
import {RalewayBold, RalewayRegular} from '../../assets/fonts/fonts';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';

const busesScreen = () => {
  const navigation = useNavigation();
  const [token, setToken] = useState('');
  const [data, setData] = useState([]);

  const config = {
    headers: {
      Authorization: token,
    },
  };
  const proceed = id => {
    console.log(id);
    navigation.navigate('ShowRoutes', {
      busId: id,
    });
  };

  const getBusListAPI = () => {
    AsyncStorage.getItem('jwt')
      .then(res => {
        //console.log(JSON.parse(res).data.token);
        setToken(JSON.parse(res).data.token);
      })
      .catch(err => console.log(err));

    axios
      .get(`${APIADMIN}/busDetails`, config)
      .then(res => {
        setData(res.data.data);
        //console.log(res.data.data);
        //data.map(item => console.log(item.name));
      })
      .catch(err => console.log(err));
  };
  useEffect(() => {
    getBusListAPI();
  });

  return (
    <View style={styles.screen}>
      <View style={styles.view}>
        <View style={styles.heading}>
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
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.btn}
              onPress={() => navigation.navigate('Tickets')}>
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
      <View>
        <FlatList
          data={data}
          contentContainerStyle={{paddingBottom: 150}}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                style={{
                  padding: 20,
                  backgroundColor: 'white',
                  width: '80%',
                  height: 100,
                  alignSelf: 'center',
                  borderRadius: 30,
                  marginBottom: 10,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}
                onPress={() => proceed(item._id)}>
                <View>
                  <Text style={{color: 'black', fontWeight: '700'}}>
                    {item.name}
                  </Text>
                  <Text style={{color: 'grey', marginTop: 5}}>
                    {item.busType}
                    {`(${item.bus_model})`}
                  </Text>
                  <Text style={{color: 'grey'}}>
                    Bus Capacity: {item.busCapacity}
                  </Text>
                </View>
                <View style={{}}>
                  <Text style={{color: 'black', fontWeight: '700'}}>
                    Fare:{' '}
                  </Text>
                  <Text style={{color: 'grey'}}>
                    Upper Berth: {item.fare.upperBerth}
                  </Text>
                  <Text style={{color: 'grey'}}>
                    Lower Berth: {item.fare.lowerBerth}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          }}
          keyExtractor={item => item._id}
        />
      </View>
    </View>
  );
};

export default busesScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    // backgroundColor: "white",
  },
  view: {
    backgroundColor: primary,
    borderBottomRightRadius: 100,
    borderBottomLeftRadius: 100,
    width: '100%',
    height: '17%',
  },
  view1: {
    backgroundColor: primary,
    borderBottomRightRadius: 100,
    borderBottomLeftRadius: 100,
    width: '100%',
    height: '45%',
  },
  view2: {
    width: '100%',
  },
  box: {
    backgroundColor: 'white',
    elevation: 5,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginTop: -20,
    width: '80%',
    marginBottom: 10,
    justifyContent: 'center',
  },
  input: {
    backgroundColor: 'lightgray',
    borderRadius: 10,
    width: '80%',
    marginVertical: 20,
  },
  button: {
    backgroundColor: secondary,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    elevation: 5,
    marginBottom: 100,
  },
  heading: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 20,
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
  container: {
    width: '100%',
    alignItems: 'center',
  },
  text: {
    alignItems: 'center',
    marginTop: 30,
    marginRight: 50,
  },
  text1: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom: 1,
  },
  text2: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom: 5,
    marginLeft: 100,
  },
  tab: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  date: {
    alignSelf: 'flex-start',
    paddingHorizontal: 50,
    marginVertical: 10,
    width: '100%',
  },
  isOneWayActive: {
    backgroundColor: primary,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
  },
  isOneWayOff: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
  },
  textActive: {
    color: 'white',
    fontSize: 15,
    fontFamily: RalewayBold,
  },
  textOff: {
    color: 'black',
    fontSize: 15,
    fontFamily: RalewayBold,
  },
  pickerModal: {
    position: 'absolute',
    backgroundColor: '#fff',
    left: 20,
    right: 20,
    top: 20,
    bottom: 20,
  },
  srcData: {
    marginTop: 10,
  },
  searchField: {
    backgroundColor: 'gray',
    marginRight: 60,
    marginTop: 10,
    marginLeft: 10,
    borderRadius: 30,
    paddingLeft: 30,
  },
});
