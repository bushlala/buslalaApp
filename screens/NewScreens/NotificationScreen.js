import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/core';
import {useTheme} from '@react-navigation/native';

import {fontColor, newColor, primary, secondary} from '../../components/Colors';
import {notificationData} from '../../data/notification';
import axios from 'axios';
import {API} from '../../config';
import AsyncStorage from '@react-native-async-storage/async-storage';

const {width} = Dimensions.get('window');

export default function NotificationScreen() {
  const navigation = useNavigation();
  const colors = useTheme();
  const [isData, setIsData] = useState(true);
  const [token, setToken] = useState('');
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const currDate = new Date();

  const config = {
    headers: {
      Authorization: token,
    },
  };

  const [count, setCount] = useState(0);

  const notificationsFetchAPI = () => {
    setLoading(true);
    AsyncStorage.getItem('jwt')
      .then(res => {
        //console.log(JSON.parse(res).data.token);
        const date1 = new Date('7/13/2010');
        const date2 = new Date('12/15/2010');
        const diffTime = Math.abs(currDate - date1);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        const diffMinutes = Math.ceil(diffTime / (1000 * 60));
        console.log(diffMinutes + ' minutes');
        console.log(diffDays + ' days');
        setToken(JSON.parse(res).data.token);
      })
      .catch(err => console.log(err));

    axios
      .get(`${API}/notifications`, config)
      .then(res => {
        console.log('res', res.data);
        setData(res.data);
        var c = 0;
        res.data.map(item => {
          if (item.status == false) {
            setCount(c + 1);
          }
        });
      })
      .catch(err => console.log(err));
    setLoading(false);
  };

  useEffect(() => {
    notificationsFetchAPI();
  }, []);
  const putData = {
    status: true,
  };
  const readNotification = id => {
    axios
      .put(`${API}/notifications/${id}`, putData, config)
      .then(res => {
        console.log('res', res);
        navigation.navigate('Oneway');
      })
      .catch(err => console.log(err));
  };

  const calculateTime = givenDate => {
    const diffTime = Math.abs(currDate - new Date(givenDate));
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    const diffMinutes = Math.ceil(diffTime / (1000 * 60));
    const diffHours = Math.ceil(diffTime / (1000 * 60 * 60));

    if (diffMinutes < 60) {
      return `${diffMinutes} minutes ago`;
    } else if (diffMinutes > 60 && diffHours < 24) {
      return `${diffHours} hours ago`;
    } else {
      return `${diffDays} days ago`;
    }
  };

  return (
    <View style={styles.screen}>
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
              onPress={() => navigation.navigate('Tickets')}>
              <AntDesign name="calendar" size={30} color="white" />
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.btn}
              opnPress={() => navigation.navigate('Notifications')}>
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
          <Text style={{fontSize: 17, color: 'black'}}>
            {count} Notifications
          </Text>
        </View>

        <ScrollView
          style={styles.notifications}
          showsVerticalScrollIndicator={false}>
          {loading === false ? (
            data.map(item => {
              if (item.status == false) {
                return (
                  <TouchableOpacity
                    activeOpacity={0.8}
                    style={styles.notification}
                    onPress={() => readNotification(item._id)}
                    key={item._id}>
                    <View
                      style={{alignItems: 'center', justifyContent: 'center'}}>
                      <Text style={{fontSize: 10, color: 'gray', marginTop: 3}}>
                        {calculateTime(item.createdAt)}
                      </Text>
                    </View>
                    <View
                      style={{alignItems: 'flex-start', marginHorizontal: 20}}
                      key={item.id}>
                      <Text style={{fontSize: 15, color: 'black'}}>
                        {item.title}
                      </Text>
                      <Text
                        style={{fontSize: 14, color: 'gray'}}
                        numberOfLines={2}>
                        {item.body}
                      </Text>
                    </View>
                  </TouchableOpacity>
                );
              }
            })
          ) : (
            <Text
              style={{color: 'gray', fontWeight: 'bold', textAlign: 'center'}}>
              You have 0 Notification
            </Text>
          )}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    // backgroundColor: "white",
    width: width,
  },
  view: {
    backgroundColor: primary,
    borderBottomRightRadius: 70,
    borderBottomLeftRadius: 70,
    width: width,
    height: '25%',
  },
  view2: {
    width: width,
    marginTop: -10,
    paddingHorizontal: 30,
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
  button: {
    backgroundColor: secondary,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    elevation: 5,
    marginBottom: 85,
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
  btn1: {
    padding: 20,
    borderRadius: 50,
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
  notifications: {
    marginVertical: 10,
    // width: width,
    marginBottom: 230,
  },
  notification: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    padding: 10,
    width: width - 80,
  },
});
