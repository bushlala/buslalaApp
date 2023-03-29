import React, {useState, useEffect} from 'react';
import {View, Text, Dimensions} from 'react-native';
import MapView, {Marker, Polyline} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {API} from '../../config';
import axios from 'axios';

const {height} = Dimensions.get('window');
const {width} = Dimensions.get('window');

export default function MapViewScreen({route}) {
  const preData = route.params;

  const ASPECT_RATIO = width / height;
  const LATITUDE_DELTA = 0.0922;
  const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
  let mapView = null;
  const [region, setRegion] = useState({
    latitude: preData.latitude,
    longitude: preData.longitude,
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA,
  });
  const [currentLoc, setCurrentLoc] = useState({
    latitude: preData.latitude,
    longitude: preData.longitude,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      getBusDetails();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const getBusDetails = async () => {
    const user = await AsyncStorage.getItem('jwt');
    const userToken = JSON.parse(user);
    let axiosConfig = {
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        Authorization: userToken.data.token,
      },
    };
    console.log('bus id', preData._id);
    axios
      .get(`${API}/bus/${preData._id}`, axiosConfig)
      .then(res => {
        if (res.status === 200) {
          setCurrentLoc({
            ...currentLoc,
            latitude: res.data.latitude,
            longitude: res.data.longitude,
          });
          console.log('latitude', res.data.longitude);
          setRegion({
            ...region,
            latitude: res.data.latitude,
            longitude: res.data.longitude,
          });
        } else console.log(res.status);
      })
      .catch(e => {
        console.log(e);
        alert('please try again later');
      });
  };

  return (
    <View style={{flex: 1}}>
      <MapView
        style={{
          height: height,
          width: width,

          // zIndex:-1,
          // position:"absolute"
        }}
        initialRegion={region}
        ref={c => (mapView = c)}>
        {Object.keys(currentLoc).length > 0 && (
          <Marker coordinate={currentLoc} />
        )}
      </MapView>
    </View>
  );
}
