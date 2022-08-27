import React, {useEffect, useState} from 'react';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {EventRegister} from 'react-native-event-listeners';
import messaging from '@react-native-firebase/messaging';
import AsyncStorage from '@react-native-async-storage/async-storage';

import WelcomeScreen from './screens/WelcomeScreen';
import LoginScreen from './screens/LoginScreen';
import OtpScreen from './screens/OtpScreen';
import OtpVerifiedScreen from './screens/OtpVerifiedScreen';
import OnewayScreen from './screens/OnewayScreen';
import BusesScreen from './screens/BusesScreen';
import ProfileScreen from './screens/ProfileScreen';
import PaymentSettings from './screens/PaymentSettings';
import TicketScreen from './screens/TicketScreen';
import BookingsScreen from './screens/BookingsScreen';
import DetailsScreen from './screens/DetailsScreen';
import BusDetailsScreen from './screens/BusDetailsScreen';
import BookedSuccessfullyScreen from './screens/BookedSuccessfullyScreen';
import PaymentScreen from './screens/NewScreens/PaymentScreen';
import TicketSummaryScreen from './screens/NewScreens/TicketSummary_rountrip';
import UserDetails_11_2 from './screens/NewScreens/UserDetails-11_2';
import SelectedScreen from './screens/NewScreens/SelectedScreen';
import SeatBooking_round_trip from './screens/NewScreens/SeatBookingRoundTrip';
import NotificationScreen from './screens/NewScreens/NotificationScreen';
import Privacy_Policy from './screens/NewScreens/Privacy_Policy';
import MapViewScreen from './screens/NewScreens/MapViewScreen';
import CancelTicket from './screens/NewScreens/CancelTicket';
import BusDetailsList from './screens/NewScreens/busesScreen';
import RoutesList from './screens/NewScreens/RoutesList';

const Stack = createNativeStackNavigator();

const App = () => {
  const [darkApp, setDarkApp] = useState(false);
  const [token, setToken] = useState(null);
  const [appIsReady, setAppIsReady] = useState(false);

  console.log(appIsReady);

  const appTheme = darkApp ? DarkTheme : DefaultTheme;

  //......check if user or not............................
  const isUser = async () => {
    try {
      let userData = await AsyncStorage.getItem('jwt');
      let data = JSON.parse(userData);
      data != null ? setToken(data) : setToken(null);
    } catch (e) {
      console.log(e);
    }
  };

  //..........get mode from asynstorage......................
  const getModeStatus = async () => {
    try {
      await AsyncStorage.getItem('mode').then(val => {
        console.log(val);
        if (val === '1') {
          setDarkApp(true);
        } else {
          setDarkApp(false);
        }
      });
    } catch (e) {
      console.log(e);
    }
  };
  // ...........change theme using eventRegister.............
  const themeEvent = () => {
    let eventListener = EventRegister.addEventListener(
      'changeThemeEvent',
      data => {
        setDarkApp(data);
      },
    );
    return () => {
      EventRegister.removeEventListener(eventListener);
    };
  };
  //........ permission for push notification for IOS only.........
  const cloudMessage = async () => {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;
    if (enabled) {
      console.log('auth status: ', authStatus);
    }
  };
  //.........get fcm token from firebase............
  const getFCM = async () => {
    let fcmToken = await messaging().getToken();
    if (fcmToken) {
      //      console.log("token: ",fcmToken);  // send token to server
      messaging().subscribeToTopic('topic');
    } else {
      console.log('token not found');
    }
  };
  //......................................
  useEffect(() => {
    cloudMessage();
    isUser();
    themeEvent();
    getFCM();
    getModeStatus();
    messaging().onMessage(async remoteMessage => {
      console.log('A new FCM message arrived :', remoteMessage);
    });
    setTimeout(() => {
      setAppIsReady(true);
    }, 3000);
  }, []);
  //..............render splash screen while checking user or not....................
  if (!appIsReady) {
    return <WelcomeScreen />;
  }

  //.........main return will be triggered after 3 sec / 3000 ms.......................

  return (
    <NavigationContainer theme={appTheme}>
      <Stack.Navigator
        initialRouteName={token ? 'Oneway' : 'Login'}
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Otp" component={OtpScreen} />
        <Stack.Screen name="OtpVerified" component={OtpVerifiedScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Oneway" component={OnewayScreen} />
        <Stack.Screen name="Buses" component={BusesScreen} />
        <Stack.Screen name="BusDetails" component={BusDetailsScreen} />
        <Stack.Screen
          name="Booked Successfully"
          component={BookedSuccessfullyScreen}
        />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="PaymentSettings" component={PaymentSettings} />
        <Stack.Screen name="Privacy_Policy" component={Privacy_Policy} />
        <Stack.Screen name="Tickets" component={TicketScreen} />
        <Stack.Screen name="Bookings" component={BookingsScreen} />
        <Stack.Screen name="PaymentScreen" component={PaymentScreen} />
        <Stack.Screen name="TicketSummary" component={TicketSummaryScreen} />
        <Stack.Screen name="UserDetails" component={UserDetails_11_2} />
        <Stack.Screen name="SelectedScreen" component={SelectedScreen} />
        <Stack.Screen name="MapView" component={MapViewScreen} />
        <Stack.Screen name="CancelTicket" component={CancelTicket} />
        <Stack.Screen name="BusDetailsList" component={BusDetailsList} />
        <Stack.Screen name="ShowRoutes" component={RoutesList} />
        <Stack.Screen
          name="SeatBookingRoundTrip"
          component={SeatBooking_round_trip}
        />
        <Stack.Screen name="Notifications" component={NotificationScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
