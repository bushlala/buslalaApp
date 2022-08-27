import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Picker,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/core';
import DocumentPicker from 'react-native-document-picker';
import SelectDropdown from 'react-native-select-dropdown';
import {useTheme} from '@react-navigation/native';
import storage from '@react-native-firebase/storage';
import RNFetchBlob from 'rn-fetch-blob';

import {fontColor, newColor, primary, secondary} from '../../components/Colors';

const {width, height} = Dimensions.get('window');

export default function UserDetails_11_2({route}) {
  const navigation = useNavigation();
  const colors = useTheme();
  const {
    name,
    src,
    dest,
    deptHour,
    arivHour,
    price,
    duration,
    tripId,
    seats,
    date,
    rDate,
    seat_number1,
    seat_number2,
    reTime,
    seats_length,
    seat_id,
  } = route.params;

  const [values, setValues] = useState({
    fullName1: '',
    age1: '',
    fullName2: '',
    age2: '',
    number: '',
    email: '',
    gender1: '',
    gender2: '',
    fullName3: '',
    fullName4: '',
    fullName5: '',
    age3: '',
    age4: '',
    age5: '',
    gender3: '',
    gender4: '',
    gender5: '',
  });
  const {
    fullName1,
    age1,
    fullName2,
    fullName3,
    fullName4,
    fullName5,
    age2,
    age3,
    age4,
    age5,
    number,
    email,
    gender1,
    gender2,
    gender3,
    gender4,
    gender5,
  } = values;
  const Gender = ['Male', 'Female', 'Others'];
  const [select1, setSelect1] = useState(false);
  const [select2, setSelect2] = useState(false);
  const [process1, setProcess1] = useState('');
  const [process2, setProcess2] = useState('');
  const [url1, setUrl1] = useState('');
  const [url2, setUrl2] = useState('');
  const [onePerson, setOnePerson] = useState(true);

  useEffect(() => {
    personHandler();
  }, []);

  const personHandler = () => {
    if (seats_length > 1) {
      setOnePerson(false);
    } else setOnePerson(true);
  };

  const selectFile1 = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.pdf],
      });
      res.map(async item => {
        const path = await RNFetchBlob.fs.readFile(item.uri, 'base64');
        try {
          const task = storage()
            .ref('Passenger/ID_Proof/' + item.name)
            .putString(path, 'base64');
          task.on(
            'state_changed',
            function (snapshot) {
              const rate = Math.floor(
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100,
              );
              setProcess1(`${rate}%`);
            },
            function (err) {
              console.log(err);
            },
            function () {
              task.snapshot.ref.getDownloadURL().then(function (url) {
                setUrl1(url);
              });
            },
          );
          task.then(() => {
            console.log('PDF uploaded to the bucket!');
            setSelect1(true);
          });
        } catch (e) {
          console.log(e);
        }
      });
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        alert('Canceled');
      } else {
        throw err;
      }
    }
  };
  const selectFile2 = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.pdf],
      });
      res.map(async item => {
        const path = await RNFetchBlob.fs.readFile(item.uri, 'base64');
        try {
          const task = storage()
            .ref('Passenger/COWIN_Certificate/' + item.name)
            .putString(path, 'base64');
          task.on(
            'state_changed',
            function (snapshot) {
              const rate = Math.floor(
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100,
              );
              setProcess2(`${rate}%`);
            },
            function (err) {
              console.log(err);
            },
            function () {
              task.snapshot.ref.getDownloadURL().then(function (url) {
                setUrl2(url);
              });
            },
          );
          task.then(() => {
            console.log('PDF uploaded to the bucket!');
            setSelect2(true);
          });
        } catch (e) {
          console.log(e);
        }
      });
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        alert('Canceled');
      } else {
        throw err;
      }
    }
  };

  const person1 = () => (
    <>
      <View
        style={{flexDirection: 'row', justifyContent: 'center', marginTop: 20}}>
        <Text style={{color: colors.colors.text}}>Person 1</Text>
        <View
          style={{
            borderWidth: 0.8,
            marginHorizontal: 20,
            borderColor: colors.colors.text,
          }}></View>
        <Text style={{color: colors.colors.text}}>{seats[0]}</Text>
      </View>
      <View
        style={{
          elevation: 5,
          width: '100%',
          backgroundColor: 'white',
          borderRadius: 10,
          padding: 10,
          marginTop: 10,
        }}>
        <TextInput
          style={{paddingLeft: 10, color: '#000', borderRadius: 10}}
          placeholder="Full Name "
          placeholderTextColor="gray"
          onChangeText={text => setValues({...values, fullName1: text})}
        />
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View
          style={{
            flexDirection: 'row',
            elevation: 5,
            backgroundColor: 'white',
            borderRadius: 10,
            padding: 10,
            marginTop: 10,
          }}>
          <TextInput
            style={{color: '#000', paddingLeft: 10, width: width / 3}}
            placeholder="Age"
            placeholderTextColor="gray"
            keyboardType="number-pad"
            onChangeText={text => setValues({...values, age1: text})}
          />
        </View>
        <View
          style={{
            elevation: 5,
            backgroundColor: 'white',
            borderRadius: 10,
            padding: 10,
            marginTop: 10,
          }}>
          <SelectDropdown
            data={Gender}
            defaultButtonText={'Gender'}
            onSelect={selectedItem => {
              setValues({...values, gender1: selectedItem});
            }}
            buttonTextAfterSelection={selectedItem => {
              return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
              return item;
            }}
            buttonStyle={styles.dropdown2BtnStyle}
            renderDropdownIcon={isOpened => {
              return (
                <MaterialIcons
                  name={isOpened ? 'expand-less' : 'expand-more'}
                  color={'#000'}
                  size={24}
                />
              );
            }}
            dropdownIconPosition={'right'}
            dropdownStyle={styles.DropdownStyle}
            rowStyle={styles.rowStyle}
          />
        </View>
      </View>
    </>
  );
  const person2 = () => (
    <>
      <View
        style={{flexDirection: 'row', justifyContent: 'center', marginTop: 20}}>
        <Text style={{color: '#000'}}>Person 2</Text>
        <View
          style={{
            borderWidth: 0.8,
            marginHorizontal: 20,
            backgroundColor: '#000',
          }}></View>
        <Text style={{color: '#000'}}>{seats[1]}</Text>
      </View>
      <View
        style={{
          elevation: 5,
          width: '100%',
          backgroundColor: 'white',
          borderRadius: 10,
          padding: 10,
          marginTop: 10,
        }}>
        <TextInput
          style={{color: '#000', width: '100%', paddingLeft: 10}}
          placeholder="Full Name"
          placeholderTextColor="gray"
          onChangeText={text => setValues({...values, fullName2: text})}
        />
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View
          style={{
            flexDirection: 'row',
            elevation: 5,
            backgroundColor: 'white',
            borderRadius: 10,
            padding: 10,
            marginTop: 10,
          }}>
          <TextInput
            style={{color: '#000', paddingLeft: 10, width: width / 3}}
            placeholder="Age"
            placeholderTextColor="gray"
            keyboardType="number-pad"
            onChangeText={text => setValues({...values, age2: text})}
          />
        </View>
        <View
          style={{
            elevation: 5,
            backgroundColor: 'white',
            borderRadius: 10,
            padding: 10,
            marginTop: 10,
          }}>
          <SelectDropdown
            data={Gender}
            defaultButtonText={'Gender'}
            onSelect={selectedItem => {
              setValues({...values, gender2: selectedItem});
            }}
            buttonTextAfterSelection={selectedItem => {
              return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
              return item;
            }}
            buttonStyle={styles.dropdown2BtnStyle}
            renderDropdownIcon={isOpened => {
              return (
                <MaterialIcons
                  name={isOpened ? 'expand-less' : 'expand-more'}
                  color={'#000'}
                  size={24}
                />
              );
            }}
            dropdownIconPosition={'right'}
            dropdownStyle={styles.DropdownStyle}
            rowStyle={styles.rowStyle}
          />
        </View>
      </View>
    </>
  );
  const person3 = () => (
    <>
      <View
        style={{flexDirection: 'row', justifyContent: 'center', marginTop: 20}}>
        <Text style={{color: colors.colors.text}}>Person 3</Text>
        <View
          style={{
            borderWidth: 0.8,
            marginHorizontal: 20,
            borderColor: colors.colors.text,
          }}></View>
        <Text style={{color: colors.colors.text}}>{seats[2]}</Text>
      </View>
      <View
        style={{
          elevation: 5,
          width: '100%',
          backgroundColor: 'white',
          borderRadius: 10,
          padding: 10,
          marginTop: 10,
        }}>
        <TextInput
          style={{paddingLeft: 10, color: '#000', borderRadius: 10}}
          placeholder="Full Name "
          placeholderTextColor="gray"
          onChangeText={text => setValues({...values, fullName3: text})}
        />
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View
          style={{
            flexDirection: 'row',
            elevation: 5,
            backgroundColor: 'white',
            borderRadius: 10,
            padding: 10,
            marginTop: 10,
          }}>
          <TextInput
            style={{color: '#000', paddingLeft: 10, width: width / 3}}
            placeholder="Age"
            placeholderTextColor="gray"
            keyboardType="number-pad"
            onChangeText={text => setValues({...values, age3: text})}
          />
        </View>
        <View
          style={{
            elevation: 5,
            backgroundColor: 'white',
            borderRadius: 10,
            padding: 10,
            marginTop: 10,
          }}>
          <SelectDropdown
            data={Gender}
            defaultButtonText={'Gender'}
            onSelect={selectedItem => {
              setValues({...values, gender3: selectedItem});
            }}
            buttonTextAfterSelection={selectedItem => {
              return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
              return item;
            }}
            buttonStyle={styles.dropdown2BtnStyle}
            renderDropdownIcon={isOpened => {
              return (
                <MaterialIcons
                  name={isOpened ? 'expand-less' : 'expand-more'}
                  color={'#000'}
                  size={24}
                />
              );
            }}
            dropdownIconPosition={'right'}
            dropdownStyle={styles.DropdownStyle}
            rowStyle={styles.rowStyle}
          />
        </View>
      </View>
    </>
  );
  const person4 = () => (
    <>
      <View
        style={{flexDirection: 'row', justifyContent: 'center', marginTop: 20}}>
        <Text style={{color: colors.colors.text}}>Person 4</Text>
        <View
          style={{
            borderWidth: 0.8,
            marginHorizontal: 20,
            borderColor: colors.colors.text,
          }}></View>
        <Text style={{color: colors.colors.text}}>{seats[3]}</Text>
      </View>
      <View
        style={{
          elevation: 5,
          width: '100%',
          backgroundColor: 'white',
          borderRadius: 10,
          padding: 10,
          marginTop: 10,
        }}>
        <TextInput
          style={{paddingLeft: 10, color: '#000', borderRadius: 10}}
          placeholder="Full Name "
          placeholderTextColor="gray"
          onChangeText={text => setValues({...values, fullName4: text})}
        />
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View
          style={{
            flexDirection: 'row',
            elevation: 5,
            backgroundColor: 'white',
            borderRadius: 10,
            padding: 10,
            marginTop: 10,
          }}>
          <TextInput
            style={{color: '#000', paddingLeft: 10, width: width / 3}}
            placeholder="Age"
            placeholderTextColor="gray"
            keyboardType="number-pad"
            onChangeText={text => setValues({...values, age4: text})}
          />
        </View>
        <View
          style={{
            elevation: 5,
            backgroundColor: 'white',
            borderRadius: 10,
            padding: 10,
            marginTop: 10,
          }}>
          <SelectDropdown
            data={Gender}
            defaultButtonText={'Gender'}
            onSelect={selectedItem => {
              setValues({...values, gender4: selectedItem});
            }}
            buttonTextAfterSelection={selectedItem => {
              return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
              return item;
            }}
            buttonStyle={styles.dropdown2BtnStyle}
            renderDropdownIcon={isOpened => {
              return (
                <MaterialIcons
                  name={isOpened ? 'expand-less' : 'expand-more'}
                  color={'#000'}
                  size={24}
                />
              );
            }}
            dropdownIconPosition={'right'}
            dropdownStyle={styles.DropdownStyle}
            rowStyle={styles.rowStyle}
          />
        </View>
      </View>
    </>
  );
  const person5 = () => (
    <>
      <View
        style={{flexDirection: 'row', justifyContent: 'center', marginTop: 20}}>
        <Text style={{color: colors.colors.text}}>Person 5</Text>
        <View
          style={{
            borderWidth: 0.8,
            marginHorizontal: 20,
            borderColor: colors.colors.text,
          }}></View>
        <Text style={{color: colors.colors.text}}>{seats[4]}</Text>
      </View>
      <View
        style={{
          elevation: 5,
          width: '100%',
          backgroundColor: 'white',
          borderRadius: 10,
          padding: 10,
          marginTop: 10,
        }}>
        <TextInput
          style={{paddingLeft: 10, color: '#000', borderRadius: 10}}
          placeholder="Full Name "
          placeholderTextColor="gray"
          onChangeText={text => setValues({...values, fullName5: text})}
        />
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View
          style={{
            flexDirection: 'row',
            elevation: 5,
            backgroundColor: 'white',
            borderRadius: 10,
            padding: 10,
            marginTop: 10,
          }}>
          <TextInput
            style={{color: '#000', paddingLeft: 10, width: width / 3}}
            placeholder="Age"
            placeholderTextColor="gray"
            keyboardType="number-pad"
            onChangeText={text => setValues({...values, age5: text})}
          />
        </View>
        <View
          style={{
            elevation: 5,
            backgroundColor: 'white',
            borderRadius: 10,
            padding: 10,
            marginTop: 10,
          }}>
          <SelectDropdown
            data={Gender}
            defaultButtonText={'Gender'}
            onSelect={selectedItem => {
              setValues({...values, gender5: selectedItem});
            }}
            buttonTextAfterSelection={selectedItem => {
              return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
              return item;
            }}
            buttonStyle={styles.dropdown2BtnStyle}
            renderDropdownIcon={isOpened => {
              return (
                <MaterialIcons
                  name={isOpened ? 'expand-less' : 'expand-more'}
                  color={'#000'}
                  size={24}
                />
              );
            }}
            dropdownIconPosition={'right'}
            dropdownStyle={styles.DropdownStyle}
            rowStyle={styles.rowStyle}
          />
        </View>
      </View>
    </>
  );
  const twoPerson = () => (
    <>
      {person1()}
      {person2()}
    </>
  );
  const threePerson = () => (
    <>
      {person1()}
      {person2()}
      {person3()}
    </>
  );
  const fourPerson = () => (
    <>
      {person1()}
      {person2()}
      {person3()}
      {person4()}
    </>
  );
  const fivePerson = () => (
    <>
      {person1()}
      {person2()}
      {person3()}
      {person4()}
      {person5()}
    </>
  );
  const proceed = () => {
    console.log('Full name3 : ', seat_id);

    if (onePerson === true) {
      if (
        fullName1 === '' ||
        age1 === '' ||
        gender1 === '' ||
        number === '' ||
        email === '' ||
        number.length != 10
      ) {
        alert('please enter all the details');
      } else {
        navigation.navigate('BusDetails', {
          busName: name,
          deptHour: deptHour,
          arivHour: arivHour,
          tripId: tripId,
          fullName1: fullName1,
          age1: age1,
          fullName2: fullName2,
          age2: age2,
          number: number,
          email: email,
          gender1: gender1,
          gender2: gender2,
          seat_number1: seat_number1,
          price: price,
          date: date,
          src: src,
          reTime: reTime,
          dest: dest,
          rDate: rDate,
          url1: url1,
          url2: url2,
          seat_number2: seat_number2,
          seats: seats,
          seats_length: seats_length,
          seat_id: seat_id,
        });
      }
    } else {
      if (seats_length == 2) {
        if (
          fullName1 === '' ||
          age1 === '' ||
          gender1 === '' ||
          fullName2 === '' ||
          age2 === '' ||
          gender2 === '' ||
          number === '' ||
          email === '' ||
          number.length != 10
        ) {
          alert('please enter all the details');
        } else {
          console.log('Seats length 2222');
          navigation.navigate('BusDetails', {
            busName: name,
            deptHour: deptHour,
            arivHour: arivHour,
            tripId: tripId,
            fullName1: fullName1,
            age1: age1,
            fullName2: fullName2,
            age2: age2,
            number: number,
            email: email,
            gender1: gender1,
            gender2: gender2,
            reTime: reTime,
            seat_number1: seat_number1,
            seat_number2: seat_number2,
            price: price,
            date: date,
            src: src,
            dest: dest,
            rDate: rDate,
            url1: url1,
            url2: url2,
            seats_length: seats_length,
            seats: seats,
          });
        }
      } else if (seats_length === 3) {
        if (
          fullName1 === '' ||
          age1 === '' ||
          gender1 === '' ||
          fullName2 === '' ||
          age2 === '' ||
          gender2 === '' ||
          fullName3 === '' ||
          gender3 === '' ||
          age3 === '' ||
          number === '' ||
          email === '' ||
          number.length != 10
        ) {
          alert('please enter all the details');
        } else {
          console.log('Seats length 33');
          navigation.navigate('BusDetails', {
            busName: name,
            deptHour: deptHour,
            arivHour: arivHour,
            tripId: tripId,
            fullName1: fullName1,
            age1: age1,
            fullName2: fullName2,
            age2: age2,
            fullName3: fullName3,
            age3: age3,
            gender3: gender3,
            number: number,
            email: email,
            gender1: gender1,
            gender2: gender2,
            reTime: reTime,
            seat_number1: seat_number1,
            seat_number2: seat_number2,
            price: price,
            date: date,
            src: src,
            dest: dest,
            rDate: rDate,
            url1: url1,
            url2: url2,
            seats_length: seats_length,
            seats: seats,
          });
        }
      }
      if (seats_length === 4) {
        if (
          fullName1 === '' ||
          age1 === '' ||
          gender1 === '' ||
          fullName2 === '' ||
          age2 === '' ||
          gender2 === '' ||
          fullName3 === '' ||
          gender3 === '' ||
          age3 === '' ||
          fullName4 === '' ||
          age4 === '' ||
          gender4 === '' ||
          number === '' ||
          email === '' ||
          number.length != 10
        ) {
          alert('please enter all the details');
        } else {
          console.log('Seats length 44');
          navigation.navigate('BusDetails', {
            busName: name,
            deptHour: deptHour,
            arivHour: arivHour,
            tripId: tripId,
            fullName1: fullName1,
            age1: age1,
            fullName2: fullName2,
            age2: age2,
            fullName3: fullName3,
            age3: age3,
            gender3: gender3,
            fullName4: fullName4,
            age4: age4,
            gender4: gender4,
            number: number,
            email: email,
            gender1: gender1,
            gender2: gender2,
            reTime: reTime,
            seat_number1: seat_number1,
            seat_number2: seat_number2,
            price: price,
            date: date,
            src: src,
            dest: dest,
            rDate: rDate,
            url1: url1,
            url2: url2,
            seats_length: seats_length,
            seats: seats,
          });
        }
      }
      if (seats_length === 5) {
        if (
          fullName1 === '' ||
          age1 === '' ||
          gender1 === '' ||
          fullName2 === '' ||
          age2 === '' ||
          gender2 === '' ||
          fullName3 === '' ||
          gender3 === '' ||
          age3 === '' ||
          fullName4 === '' ||
          age4 === '' ||
          gender4 === '' ||
          fullName5 === '' ||
          gender5 === '' ||
          age5 === '' ||
          number === '' ||
          email === '' ||
          number.length != 10
        ) {
          alert('please enter all the details');
        } else {
          console.log('Seats length 55');
          navigation.navigate('BusDetails', {
            busName: name,
            deptHour: deptHour,
            arivHour: arivHour,
            tripId: tripId,
            fullName1: fullName1,
            age1: age1,
            fullName2: fullName2,
            age2: age2,
            fullName3: fullName3,
            age3: age3,
            gender3: gender3,
            fullName4: fullName4,
            age4: age4,
            gender4: gender4,
            fullName5: fullName5,
            gender5: gender5,
            age5: age5,
            number: number,
            email: email,
            gender1: gender1,
            gender2: gender2,
            reTime: reTime,
            seat_number1: seat_number1,
            seat_number2: seat_number2,
            price: price,
            date: date,
            src: src,
            dest: dest,
            rDate: rDate,
            url1: url1,
            url2: url2,
            seats_length: seats_length,
            seats: seats,
          });
        }
      }
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
            <View style={{marginRight: 20, alignItems: 'center'}}>
              <Text style={{color: 'black'}}>{src}</Text>
              <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                <MaterialIcons name="import-export" color="#ed6c39" size={20} />
              </View>
              <Text style={{color: 'black'}}>{dest}</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={{paddingHorizontal: 30, marginBottom: 0}}>
        <ScrollView style={{}} showsVerticalScrollIndicator={false}>
          <View style={{marginHorizontal: 5}}>
            <Text style={{color: colors.colors.text, marginTop: 40}}>
              Personal Detials
            </Text>
            {seats_length === 1 && person1()}
            {seats_length === 2 && twoPerson()}
            {seats_length === 3 && threePerson()}
            {seats_length === 4 && fourPerson()}
            {seats_length === 5 && fivePerson()}
            <Text style={{color: colors.colors.text, marginTop: 40}}>
              Contact Detials
            </Text>
            <Text style={{color: 'gray', marginTop: 10}}>
              Your ticket will be sent here
            </Text>
            <View
              style={{
                elevation: 5,
                backgroundColor: 'white',
                borderRadius: 10,
                padding: 5,
                marginTop: 10,
              }}>
              <TextInput
                style={{color: '#000', paddingLeft: 10, borderRadius: 10}}
                placeholder="Phone number"
                placeholderTextColor="gray"
                keyboardType="number-pad"
                onChangeText={text => setValues({...values, number: text})}
                maxLength={10}
              />
            </View>
            <View
              style={{
                elevation: 5,
                backgroundColor: 'white',
                borderRadius: 10,
                padding: 5,
                marginTop: 10,
              }}>
              <TextInput
                style={{color: '#000', paddingLeft: 10}}
                placeholder="Email"
                placeholderTextColor="gray"
                onChangeText={text => setValues({...values, email: text})}
              />
            </View>
            <View style={{marginVertical: 10}}>
              <TouchableOpacity
                style={{flexDirection: 'row', alignItems: 'center'}}
                onPress={selectFile1}>
                <MaterialCommunityIcons
                  name={select1 === true ? 'check-box-outline' : 'crop-square'}
                  color={'gray'}
                  size={22}
                />
                <Text style={{color: '#66645f', marginLeft: 10}}>
                  Upload ID Proof (Optional)
                </Text>
                <Text style={{color: '#66645f', marginLeft: 10, fontSize: 12}}>
                  {process1}
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{marginVertical: 10}}>
              <TouchableOpacity
                style={{flexDirection: 'row', alignItems: 'center'}}
                onPress={selectFile2}>
                <MaterialCommunityIcons
                  name={select2 === true ? 'check-box-outline' : 'crop-square'}
                  color={'gray'}
                  size={22}
                />
                <Text style={{color: '#66645f', marginLeft: 10}}>
                  Cowin Certificate (Optional)
                </Text>
                <Text style={{color: '#66645f', marginLeft: 10, fontSize: 12}}>
                  {process2}
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                elevation: 5,
                width: '100%',
                backgroundColor: '#fff',
                borderRadius: 10,
                padding: 10,
                alignItems: 'center',
                flexDirection: 'row',
                marginBottom: 200,
                marginTop: 20,
              }}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View style={{alignItems: 'center'}}>
                  <Text style={{color: 'gray'}}>Selected seats</Text>
                  <Text style={{color: '#000'}}>{seats.join(',')}</Text>
                </View>
                <View
                  style={{
                    borderWidth: 0.9,
                    borderColor: '#000',
                    backgroundColor: '#000',
                    marginHorizontal: 5,
                  }}
                />
                <View style={{alignItems: 'center'}}>
                  <Text style={{color: 'gray'}}>Price</Text>
                  <Text style={{color: '#000'}}>₹{price}</Text>
                </View>
              </View>
              <TouchableOpacity
                style={{
                  elevation: 5,
                  backgroundColor: '#ed6c39',
                  borderRadius: 10,
                  padding: 10,
                  alignItems: 'center',
                  marginVertical: 10,
                  marginLeft: 10,
                }}
                onPress={proceed}>
                <Text style={{color: '#fff', fontSize: 18}}>Proceed</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
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
  textStyle: {
    color: '#000',
    textAlign: 'center',
  },
  fileStyle: {
    color: '#3b3b38',
  },
  dropdown2BtnStyle: {
    backgroundColor: '#fff',
    borderRadius: 10,
    width: width / 3,
  },
  DropdownStyle: {
    backgroundColor: '#fff',
    borderRadius: 5,
  },
  rowStyle: {
    backgroundColor: '#fff',
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
  },
});
