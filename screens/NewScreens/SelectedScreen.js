import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import ToggleSwitch from 'toggle-switch-react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation, useRoute} from '@react-navigation/core';
import {useTheme} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {fontColor, newColor, primary, secondary} from '../../components/Colors';
import axios from 'axios';
import {API} from '../../config';

const {width, height} = Dimensions.get('window');

export default function SelectedScreen() {
  const navigation = useNavigation();
  const colors = useTheme();
  const route = useRoute();
  const {
    src,
    dest,
    name,
    deptHour,
    arrivalHour,
    priceLower,
    priceUpper,
    priceLowerSleeper,
    duration,
    tripId,
    date,
    rDate,
    bus_model,
  } = route.params;
  const [toggle, setToggle] = useState(false);
  const [lowerSeats, setLowerSeats] = useState([]);
  const [upperSeats, setUpperSeats] = useState([]);
  const [reTime, setReTime] = useState(null);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [selectLower, setSelectLower] = useState([]);
  const [selectUpper, setSelectUpper] = useState([]);
  const [token, setToken] = useState('');
  const [selectedSeatsNumber, setSelectedSeatsNumber] = useState([]);
  const [sleeperNumber, setSleeperNumber] = useState(0);
  const [upperSeatsSLA, setUpperSeatsSLA] = useState([]);
  const [upperSeatsSLB, setUpperSeatsSLB] = useState([]);
  const [loading, setLoading] = useState(true);
  const [lowerSeatsSA, setLowerSeatsSA] = useState([]);
  const [lowerSeatsSB, setLowerSeatsSB] = useState([]);

  const config = {
    headers: {
      Authorization: token,
    },
  };

  // const [price, setPrice] = useState(null);

  //   if(selectLower.length == 0){
  //     var seat1 = selectUpper[0];
  //     var seat2 = selectUpper[1];
  //   }
  //  else if(selectUpper.length == 0){
  //     var seat1 = selectLower[0];
  //     var seat2 = selectLower[1];
  //   }
  //   else if(selectLower.length == 1 && selectUpper.length == 1){
  //     var seat1 = selectLower[0];
  //     var seat2 = selectUpper[1];
  //   }
  var seat1 = selectLower[0];
  var seat2 = selectedSeats.slice(1).toString();

  var seats = selectLower.concat(selectUpper);

  let price =
    selectLower.length == 0 && selectUpper.length == 0
      ? null
      : selectLower.length !== 0 && selectUpper.length === 0
      ? selectLower.length === 1
        ? priceLower
        : priceLower * selectLower.length
      : selectLower.length === 0 && selectUpper.length !== 0
      ? selectUpper.length === 1
        ? priceUpper
        : priceUpper * selectUpper.length
      : priceLower * selectLower.length + priceUpper * selectUpper.length;

  const [price1, setPrice1] = useState(0);

  const segmentClicked1 = data => {
    console.log('price1', price1);
    //console.log(selectLower.length);
    if (
      !selectLower.includes(`${data.number}`) ||
      !selectedSeats.includes(`${data._id}`)
    ) {
      if (selectedSeats.length < 5) {
        setSelectedSeats([...selectedSeats, `${data._id}`]);
        setSelectLower([...selectLower, `${data.number}`]);
        if (data.type === 'sleeper') {
          setPrice1(price1 + priceLowerSleeper);
        } else {
          setPrice1(price1 + priceLower);
        }
        console.log('Selected id', selectedSeats);
      } else alert('Max number is reached');
    } else {
      setSelectedSeats(selectedSeats.filter(item => item !== `${data._id}`));
      setSelectLower(selectLower.filter(item => item !== `${data.number}`));
      if (data.type == 'sleeper') {
        setPrice1(price1 - priceLowerSleeper);
      } else {
        setPrice1(price1 - priceLower);
      }
    }
  };

  const segmentClicked2 = data => {
    // console.log(upperSeats[13]);
    if (
      !selectUpper.includes(`${data.number}`) ||
      !selectedSeats.includes(`${data._id}`)
    ) {
      if (selectedSeats.length < 5) {
        setSelectedSeats([...selectedSeats, `${data._id}`]);
        setSelectUpper([...selectUpper, `${data.number}`]);
        setPrice1(price1 + priceUpper);
      } else alert('Max number is reached');
    } else {
      setSelectedSeats(selectedSeats.filter(item => item !== `${data._id}`));
      setSelectUpper(selectUpper.filter(item => item !== `${data.number}`));
      setPrice1(price1 - priceUpper);
    }
  };

  const bookingApi = () => {
    setLoading(true);
    AsyncStorage.getItem('jwt')
      .then(res => {
        //console.log(JSON.parse(res).data.token);
        setToken(JSON.parse(res).data.token);
      })
      .catch(err => console.log(err));
    console.log(tripId);
    axios
      .get(`${API}/trip/${tripId}`, config)
      .then(res => {
        const DATA = res.data;

        const lowerBerth = [];
        const upperBerth = [];

        //console.log(DATA.trip.seats);
        DATA.trip.seats.map(data => {
          if (data.place == 'upperBirthA' || data.place == 'upperBirthB') {
            upperBerth.push(data);
            //console.log(upperBerth);
          } else {
            if (data.type == 'sleeper') {
              setSleeperNumber(1);
            }
            lowerBerth.push(data);
          }
        });
        //console.log(upperBerth.length);
        setReTime(DATA.trip.duration);
        setLowerSeats(lowerBerth);
        setUpperSeats(upperBerth);
      })
      .catch(e => {
        console.log('error', e);
        alert('please try again after few minutes');
      });
    setLoading(false);
  };

  const [sleepers, setSleepers] = useState(0);

  useEffect(() => {
    bookingApi();
    lowerSeats.map((data, id) => {
      let count = 0;
      if (data.type == 'sleeper') {
        count += 1;
        setSleepers(1);
        return;
      }
    });
  }, []);

  const [track, setTrack] = useState(0);

  function compare(a, b) {
    if (parseInt(a.number.slice(2)) < parseInt(b.number.slice(2))) {
      return -1;
    }
    if (parseInt(a.number.slice(2)) > parseInt(b.number.slice(2))) {
      return 1;
    }
    return 0;
  }
  if (bus_model == '2+1') {
    upperSeats.sort(compare);
    // var text = 'SU1';
    // console.log('hello', typeof parseInt(text.slice(2)));
  }

  const UPPER_SEAT = [[], [], [], []];
  // if (track == 0) {
  //   upperSeats.splice(1, 0, {status: 'empty'});
  //   console.log('sup', upperSeats);
  // }
  // console.log('upperSeats', upperSeats);

  if (
    upperSeats.length > 0 &&
    upperSeats[0].number.length == 4 &&
    loading == false
  ) {
    //console.log('USLA LENGTH', upperSeats.length);
    const uSLA = [];
    const uSLB = [];

    upperSeats.map(data => {
      if (data.number.startsWith('SLA')) {
        uSLA.push(data);
      } else {
        uSLB.push(data);
      }
    });
    setUpperSeatsSLA(uSLA);
    setUpperSeatsSLB(uSLB);
    setLoading(true);
  }

  if (upperSeats.length > 0 && upperSeats[0].number.length < 4) {
    upperSeats.map((data, id) => {
      // var totalSeats = upperSeats.length;
      // var seatsPerCol = totalSeats / 4;
      //console.log(input);
      if (
        id == 1 &&
        track == 0 &&
        bus_model == '2+2' &&
        data.number.length < 4
      ) {
        upperSeats.splice(1, 0, {status: 'empty'});

        setTrack(1);
      }
      //console.log('sup', upperSeats[0].number.length);
      const colNumber = id % 4;

      const comp = (
        <TouchableOpacity
          key={id}
          style={[
            styles.upperView2,
            {
              backgroundColor:
                data.status == true
                  ? '#000'
                  : data.status == 'empty'
                  ? null
                  : selectedSeats.includes(`${data._id}`)
                  ? '#ed6c39'
                  : '#9ea5b0',
            },
          ]}
          onPress={() => segmentClicked2(data)}
          disabled={data.status}>
          {colNumber == 0 || colNumber == 1 ? (
            <Text style={{color: '#fff', fontSize: 12, fontWeight: '500'}}>
              {data.number}
            </Text>
          ) : (
            <Text style={{color: '#fff', fontSize: 12, fontWeight: '500'}}>
              {data.number}
            </Text>
          )}
        </TouchableOpacity>
      );

      UPPER_SEAT[colNumber].push(comp);
    });
  } else {
    upperSeatsSLA.map((data, id) => {
      const colNumber = (id % 2) + 2;
      //console.log(data);
      const comp = (
        <TouchableOpacity
          key={id}
          style={[
            styles.upperView2,
            {
              backgroundColor:
                data.status == true
                  ? '#000'
                  : data.status == 'empty'
                  ? null
                  : selectedSeats.includes(`${data._id}`)
                  ? '#ed6c39'
                  : '#9ea5b0',
            },
          ]}
          onPress={() => segmentClicked2(data)}
          disabled={data.status}>
          {colNumber == 0 || colNumber == 1 ? (
            <Text style={{color: '#fff', fontSize: 12, fontWeight: '500'}}>
              {data.number}
            </Text>
          ) : (
            <Text style={{color: '#fff', fontSize: 12, fontWeight: '500'}}>
              {data.number}
            </Text>
          )}
        </TouchableOpacity>
      );
      UPPER_SEAT[colNumber].push(comp);
    });

    upperSeatsSLB.map((data, id) => {
      const colNumber = id % 2;
      //console.log(data);
      const comp = (
        <TouchableOpacity
          key={id}
          style={[
            styles.upperView2,
            {
              backgroundColor:
                data.status == true
                  ? '#000'
                  : data.status == 'empty'
                  ? null
                  : selectedSeats.includes(`${data._id}`)
                  ? '#ed6c39'
                  : '#9ea5b0',
            },
          ]}
          onPress={() => segmentClicked2(data)}
          disabled={data.status}>
          {colNumber == 0 || colNumber == 1 ? (
            <Text style={{color: '#fff', fontSize: 12, fontWeight: '500'}}>
              {data.number}
            </Text>
          ) : (
            <Text style={{color: '#fff', fontSize: 12, fontWeight: '500'}}>
              {data.number}
            </Text>
          )}
        </TouchableOpacity>
      );
      UPPER_SEAT[colNumber].push(comp);
    });
  }

  const UPPER_SEAT_1 = [[], [], []];
  upperSeats.map((data, id) => {
    const comp = (
      <TouchableOpacity
        key={id}
        style={[
          styles.upperView2,
          {
            backgroundColor:
              data.status == true
                ? '#000'
                : selectedSeats.includes(`${data._id}`)
                ? '#ed6c39'
                : '#9ea5b0',
          },
        ]}
        onPress={() => segmentClicked2(data)}
        disabled={data.status}>
        <Text style={{color: '#fff', fontSize: 12, fontWeight: '500'}}>
          {data.number}
        </Text>
      </TouchableOpacity>
    );
    const colNumber = id % 3;
    UPPER_SEAT_1[colNumber].push(comp);
  });

  const Upper = () => {
    if (bus_model == '2+2') {
      return (
        <View style={{marginVertical: 20}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <View style={{flexDirection: 'row'}}>
              <View style={{marginRight: 10}}>{UPPER_SEAT[0]}</View>
              <View>{UPPER_SEAT[1]}</View>
            </View>
            <View style={{flexDirection: 'row'}}>
              <View style={{marginRight: 10}}>{UPPER_SEAT[2]}</View>
              <View>{UPPER_SEAT[3]}</View>
            </View>
          </View>
        </View>
      );
    } else if (bus_model == '2+1') {
      return (
        <View style={{marginVertical: 20}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <View>{UPPER_SEAT_1[0]}</View>
            <View style={{flexDirection: 'row'}}>
              <View style={{marginRight: 10}}>{UPPER_SEAT_1[1]}</View>
              <View>{UPPER_SEAT_1[2]}</View>
            </View>
          </View>
        </View>
      );
    } else return null;
  };

  const LOWER_SEAT = [[], [], [], []];

  if (
    lowerSeats.length > 0 &&
    lowerSeats[0].number.length == 3 &&
    loading == false
  ) {
    console.log('USLA LENGTH', upperSeats.length);
    const uSA = [];
    const uSB = [];

    lowerSeats.map(data => {
      if (data.number.startsWith('SA')) {
        uSA.push(data);
      } else {
        uSB.push(data);
      }
    });
    setLowerSeatsSA(uSA);
    setLowerSeatsSB(uSB);
    setLoading(true);
  }
  if (lowerSeats.length > 0 && bus_model == '2+2') {
    if (
      lowerSeats[0].number.startsWith('SA') ||
      lowerSeats[0].number.startsWith('SB')
    ) {
      lowerSeatsSA.map((data, id) => {
        const colNumber = (id % 2) + 2;
        const comp = (
          <TouchableOpacity
            key={id}
            style={[
              data.type == 'sleeper' ? styles.upperView2 : styles.lowerSeat,
              {
                backgroundColor:
                  data.status == true
                    ? '#000'
                    : selectedSeats.includes(`${data._id}`)
                    ? '#ed6c39'
                    : '#9ea5b0',
              },
            ]}
            onPress={() => {
              segmentClicked1(data);
            }}
            disabled={data.status}>
            <Text style={{color: '#fff', fontSize: 12, fontWeight: '500'}}>
              {data.number}
            </Text>
          </TouchableOpacity>
        );

        LOWER_SEAT[colNumber].push(comp);
      });
      lowerSeatsSB.map((data, id) => {
        const colNumber = id % 2;
        const comp = (
          <TouchableOpacity
            key={id}
            style={[
              data.type == 'sleeper' ? styles.upperView2 : styles.lowerSeat,
              {
                backgroundColor:
                  data.status == true
                    ? '#000'
                    : selectedSeats.includes(`${data._id}`)
                    ? '#ed6c39'
                    : '#9ea5b0',
              },
            ]}
            onPress={() => {
              segmentClicked1(data);
            }}
            disabled={data.status}>
            <Text style={{color: '#fff', fontSize: 12, fontWeight: '500'}}>
              {data.number}
            </Text>
          </TouchableOpacity>
        );

        LOWER_SEAT[colNumber].push(comp);
      });
    } else {
      lowerSeats.map((data, id) => {
        const comp = (
          <TouchableOpacity
            key={id}
            style={[
              data.type == 'sleeper' ? styles.upperView2 : styles.lowerSeat,
              {
                backgroundColor:
                  data.status == true
                    ? '#000'
                    : selectedSeats.includes(`${data._id}`)
                    ? '#ed6c39'
                    : '#9ea5b0',
              },
            ]}
            onPress={() => {
              segmentClicked1(data);
            }}
            disabled={data.status}>
            <Text style={{color: '#fff', fontSize: 12, fontWeight: '500'}}>
              {data.number}
            </Text>
          </TouchableOpacity>
        );

        if (sleeperNumber == 1) {
          const colNumber = data.type == 'sleeper' ? (id % 2) + 2 : id % 2;
          LOWER_SEAT[colNumber].push(comp);
        } else {
          const colNumber = id % 4;
          LOWER_SEAT[colNumber].push(comp);
        }

        // LOWER_SEAT[colNumber].push(comp);
      });
    }
  }

  const LOWER_SEAT_1 = [[], [], []];
  lowerSeats.map((data, id) => {
    const comp = (
      <TouchableOpacity
        key={id}
        style={[
          data.type == 'sleeper' ? styles.upperView2 : styles.lowerSeat,
          {
            backgroundColor:
              data.status == true
                ? '#000'
                : selectedSeats.includes(`${data._id}`)
                ? '#ed6c39'
                : '#9ea5b0',
          },
        ]}
        onPress={() => segmentClicked1(data)}
        disabled={data.status}>
        <Text style={{color: '#fff', fontSize: 12, fontWeight: '500'}}>
          {data.number}
        </Text>
      </TouchableOpacity>
    );
    const colNumber = id % 3;
    LOWER_SEAT_1[colNumber].push(comp);
  });
  const Lower = () => {
    if (bus_model == '2+2') {
      return (
        <View style={{marginVertical: 20}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <View style={{flexDirection: 'row'}}>
              <View style={{marginRight: 10}}>{LOWER_SEAT[0]}</View>
              <View>{LOWER_SEAT[1]}</View>
            </View>
            <View style={{flexDirection: 'row'}}>
              <View style={{marginRight: 10}}>{LOWER_SEAT[2]}</View>
              <View>{LOWER_SEAT[3]}</View>
            </View>
          </View>
        </View>
      );
    } else if (bus_model == '2+1') {
      return (
        <View style={{marginVertical: 20}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <View>{LOWER_SEAT_1[0]}</View>
            <View style={{flexDirection: 'row'}}>
              <View style={{marginRight: 10}}>{LOWER_SEAT_1[1]}</View>
              <View>{LOWER_SEAT_1[2]}</View>
            </View>
          </View>
        </View>
      );
    } else return null;
  };

  const proceed = () => {
    if (selectedSeats.length === 0) {
      alert('please select a seat');
    } else {
      console.log('seats', seats);
      navigation.navigate('UserDetails', {
        src: src,
        dest: dest,
        name: name,
        tripId: tripId,
        deptHour: deptHour,
        reTime: reTime,
        arivHour: arrivalHour,
        duration: duration,
        date: date,
        rDate: rDate,
        seats: seats,
        seat_number1: seats[0],
        seat_number2: seats[1],
        seat_id: selectedSeats[0],
        price: price1,
        seats_length: seats.length,
      });
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
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
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
            width: '100%',
            backgroundColor: 'white',
            borderRadius: 10,
            padding: 10,
          }}>
          <TouchableOpacity
            style={{
              backgroundColor: '#fff',
              elevation: 5,
              borderRadius: 5,
              marginBottom: 30,
            }}
            onPress={() => navigation.goBack()}>
            <AntDesign
              name="arrowleft"
              size={24}
              color="black"
              style={{padding: 3}}
            />
          </TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              flex: 1,
            }}>
            <View style={{marginLeft: 10}}>
              <Text style={{fontSize: 17, color: 'black'}}>{name}</Text>
              <View style={{flexDirection: 'row', marginTop: 5}}>
                <Text style={{color: 'gray'}}>{date}</Text>
                <View
                  style={{
                    borderWidth: 0.8,
                    backgroundColor: '#000',
                    marginHorizontal: 10,
                  }}></View>
                <Text style={{color: 'gray'}}>{deptHour}</Text>
              </View>
            </View>
            <View style={{marginRight: 20}}>
              <Text style={{color: 'black'}}>{src}</Text>
              <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                <MaterialIcons name="import-export" color="#ed6c39" size={20} />
              </View>
              <Text style={{color: 'black'}}>{dest}</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={{marginHorizontal: 20, marginBottom: 200}}>
        <ScrollView
          style={{marginBottom: 100}}
          showsVerticalScrollIndicator={false}>
          <View style={{alignItems: 'center', marginTop: 10}}>
            <View>
              <Text style={{color: '#000', marginBottom: 5}}>Prices</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                borderRadius: 10,
                backgroundColor: '#fff',
                elevation: 5,
              }}>
              <View
                style={{
                  backgroundColor: '#e66349',
                  paddingHorizontal: 5,
                  borderRadius: 8,
                }}>
                <Text
                  style={{
                    color: '#000',
                    paddingHorizontal: 12,
                    paddingVertical: 8,
                  }}>
                  All
                </Text>
              </View>
              <View
                style={{
                  borderWidth: 0.8,
                  backgroundColor: 'gray',
                  borderColor: 'gray',
                  marginVertical: 8,
                }}
              />
              <View>
                <Text
                  style={{
                    color: '#000',
                    paddingHorizontal: 12,
                    paddingVertical: 8,
                  }}>
                  ₹{priceLower}
                </Text>
              </View>
              <View
                style={{
                  borderWidth: 0.8,
                  backgroundColor: 'gray',
                  borderColor: 'gray',
                  marginVertical: 8,
                }}
              />
              <View>
                <Text
                  style={{
                    color: '#000',
                    paddingHorizontal: 12,
                    paddingVertical: 8,
                  }}>
                  ₹{priceUpper}
                </Text>
              </View>
            </View>
            <View style={{flexDirection: 'row', marginTop: 10}}>
              <Text
                style={{
                  color: toggle === false ? '#e66349' : 'gray',
                  marginRight: 10,
                }}>
                Lower
              </Text>
              <ToggleSwitch
                isOn={toggle}
                onColor="#e66349"
                offColor="#e66349"
                size="medium"
                onToggle={() => {
                  toggle === false ? setToggle(true) : setToggle(false);
                }}
              />
              <Text
                style={{
                  color: toggle === false ? 'gray' : '#e66349',
                  marginRight: 10,
                  marginLeft: 10,
                }}>
                Upper
              </Text>
            </View>
          </View>
          <View style={styles.circle}>
            <MaterialCommunityIcons
              name="steering"
              color={'#646666'}
              size={38}
            />
          </View>
          {toggle === false ? <Lower /> : <Upper />}
        </ScrollView>
        <View style={styles.modal}>
          <View style={{flexDirection: 'row', marginLeft: 10}}>
            <View style={{alignItems: 'center'}}>
              <Text style={{color: 'gray'}}>Selected seat</Text>
              <Text style={{color: '#000'}}>
                {seats.length > 0 ? seats.join(',') : null}
              </Text>
            </View>
            <View
              style={{
                backgroundColor: '#4a4847',
                borderWidth: 1,
                marginHorizontal: 10,
                borderColor: '#4a4847',
              }}></View>
            <View style={{alignItems: 'center'}}>
              <Text style={{color: 'gray'}}>Price</Text>
              <Text style={{color: '#000'}}>₹{price1}</Text>
            </View>
          </View>
          <TouchableOpacity onPress={proceed} style={styles.proceedBtn}>
            <Text style={{color: '#fff', fontSize: 20}}>Proceed</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#edf5f7',
    width: width,
  },
  view: {
    backgroundColor: primary,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    width: width,
    height: '20%',
  },
  view2: {
    width: width,
    marginTop: -30,
    paddingHorizontal: 20,
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
  circle: {
    alignItems: 'flex-end',
    marginRight: 60,
    marginTop: 10,
  },
  modal: {
    elevation: 5,
    backgroundColor: '#edf5f7',
    width: '100%',
    borderRadius: 10,
    marginTop: -110,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 30,
  },
  upperView1: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  upperView2: {
    height: 90,
    width: 40,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    marginRight: 5,
  },
  lowerSeat: {
    height: 40,
    width: 40,
    borderRadius: 5,
    marginBottom: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  proceedBtn: {
    backgroundColor: '#ed6c39',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 10,
    elevation: 5,
    marginRight: 5,
  },
  upperView3: {
    height: 90,
    width: 40,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    marginRight: 5,
  },
});
