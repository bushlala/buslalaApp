import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/core';
import DocumentPicker from 'react-native-document-picker';
import SelectDropdown from 'react-native-select-dropdown';
import {useTheme} from '@react-navigation/native';
import storage from '@react-native-firebase/storage';
import RNFetchBlob from 'rn-fetch-blob';
import {RalewayBold, RalewayRegular} from '../../assets/fonts/fonts';
import axios from 'axios';
import {API} from '../../config';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {fontColor, newColor, primary, secondary} from '../../components/Colors';

const RoutesList = ({route}) => {
  const navigation = useNavigation();
  const colors = useTheme();
  const {busId} = route.params;
  const [token, setToken] = useState('');
  const [data, setData] = useState([]);
  const [sourceData, setSourceData] = useState([]);
  const [destData, setDestData] = useState([]);
  const [loading, setLoading] = useState(false);

  var obj = {};
  var sourceObj = {};

  const config = {
    headers: {
      Authorization: token,
    },
  };

  const getRoutesAPI = () => {
    setLoading(true);
    AsyncStorage.getItem('jwt')
      .then(res => {
        //console.log(JSON.parse(res).data.token);
        setToken(JSON.parse(res).data.token);
      })
      .catch(err => console.log(err));

    axios
      .get(`${API}/routes/${busId}`, config)
      .then(res => {
        setData(res.data[2]);
        setSourceData(res.data[1]);
        setDestData(res.data[0]);
        setLoading(false);
        //data.map(item => console.log(item.name));
      })
      .catch(err => console.log(err));
  };

  const loadObj = () => {
    destData.map(item => {
      //console.log('Dest Data: ', obj);
      obj[item[0]._id] = item[0].name;
    });
    sourceData.map(item => {
      sourceObj[item[0]._id] = item[0].name;
    });
  };

  useEffect(() => {
    if (data.length == 0) {
      getRoutesAPI();
    }
    loadObj();
  });
  const returnMonth = month => {
    if (month == '01') {
      return 'Jan';
    }
    if (month == '02') {
      return 'Feb';
    }
    if (month == '03') {
      return 'Mar';
    }
    if (month == '04') {
      return 'Apr';
    }
    if (month == '05') {
      return 'May';
    }
    if (month == '06') {
      return 'Jun';
    }
    if (month == '07') {
      return 'Jul';
    }
    if (month == '08') {
      return 'Aug';
    }
    if (month == '09') {
      return 'Sep';
    }
    if (month == '10') {
      return 'Oct';
    }
    if (month == '11') {
      return 'Nov';
    }
    if (month == '12') {
      return 'Dec';
    }
  };

  const returnDATESTRING = date => {
    const year = date.slice(0, 4);
    const month = returnMonth(date.slice(5, 7));
    const day = date.slice(8, 10);
    return `${year}-${month}-${day}`;
  };
  const [name, setName] = useState('');
  const [priceLower, setPriceLowe] = useState([]);
  const [priceUpper, setPriceUpper] = useState([]);
  const [bus_model, setBusModel] = useState('');
  const [duration, setDuration] = useState([]);
  const [deptHour, setDeptHour] = useState([]);
  const [arrivalHour, setArrivalHour] = useState([]);
  const [tripID, setTripID] = useState([]);

  const proceed = (
    tripID,
    source,
    dest,
    date,
    duration,
    deptHour,
    arrivalHour,
  ) => {
    const year = date.slice(0, 4);
    const month = date.slice(5, 7);
    const day = date.slice(8, 10);
    let compDate = `${year}-${month}-${day}`;
    console.log(compDate);
    var oneWayPostData = {
      source: source,
      destination: dest,
      date: compDate,
    };
    axios.post(`${API}/searchOneWayBus`, oneWayPostData).then(response => {
      if (response.status === 200) {
        console.log(response.data.data_false);
        response.data.data_false.map(item => {
          console.log('bus_id', item.bus._id);
          if (item.bus._id === busId) {
            axios
              .get(`${API}/trip/${tripID}`)
              .then(resp => {
                resp.data.trip.status == 'pending'
                  ? navigation.navigate('SelectedScreen', {
                      name: item.bus.name,
                      priceLower: item.bus.fare.lowerBerth,
                      priceUpper: item.bus.fare.upperBerth,
                      bus_model: item.bus.bus_model,
                      duration: duration,
                      deptHour: deptHour,
                      arrivalHour: arrivalHour,
                      src: source,
                      dest: dest,
                      tripId: tripID,
                      date: compDate,
                    })
                  : Alert.alert('Trip has already started');
              })
              .catch(err => {
                console.log('Server error', err);
              });
          }
        });
        setName(response.data.data.name);
        //console.log(name);
      } else {
        console.log('Error');
      }
    });

    // axios
    //   .get(`${API}/trip/${tripID}`)
    //   .then(resp => {
    //     resp.data.trip.status == 'pending'
    //       ? navigation.navigate('SelectedScreen', {
    //           name: name,
    //           priceLower: priceLower,
    //           priceUpper: priceUpper,
    //           bus_model: bus_model,
    //           duration: duration,
    //           deptHour: deptHour,
    //           arrivalHour: arrivalHour,
    //           src: src,
    //           dest: dest,
    //           tripId: tripID,
    //           date: date,
    //           rDate: rDate,
    //         })
    //       : Alert.alert('Trip has already started');
    //   })
    //   .catch(err => {
    //     console.log('Server error', err);
    //   });
  };
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
      {loading && <ActivityIndicator />}
      <ScrollView>
        {data.map(item => {
          loadObj();
          return (
            <TouchableOpacity
              style={{
                padding: 20,
                backgroundColor: 'white',
                width: '80%',

                alignSelf: 'center',
                borderRadius: 30,
                marginBottom: 10,
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
              key={item._id}
              onPress={() =>
                proceed(
                  item._id,
                  sourceObj[item.sourceId],
                  obj[item.destinationId],
                  item.date,
                  item.duration,
                  item.time.dept,
                  item.time.arr,
                )
              }>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View style={{flexDirection: 'row'}}>
                  <Text style={{color: 'black', fontWeight: 'bold'}}>
                    Source:
                  </Text>
                  <Text style={{color: 'black'}}>
                    {sourceObj[item.sourceId]}
                  </Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <Text style={{color: 'black', fontWeight: 'bold'}}>
                    Destination:
                  </Text>
                  <Text style={{color: 'black'}}>
                    {obj[item.destinationId]}
                  </Text>
                </View>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Text style={{color: 'black', fontWeight: 'bold'}}>
                  Departure Time:
                </Text>
                <Text style={{color: 'black'}}>{item.time.dept}</Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Text style={{color: 'black', fontWeight: 'bold'}}>
                  Arrival Time:
                </Text>
                <Text style={{color: 'black'}}>{item.time.arr}</Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Text style={{color: 'black', fontWeight: 'bold'}}>
                  Departure Date:{' '}
                </Text>
                <Text style={{color: 'black'}}>
                  {returnDATESTRING(item.date)}
                </Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default RoutesList;

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
