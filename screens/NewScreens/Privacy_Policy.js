import React from 'react';
import {View, Text, ScrollView, Linking} from 'react-native';
import {PrivacyText} from '../../components/privacyTxt';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {primary} from '../../components/Colors';
import {useTheme} from '@react-navigation/native';

export default function Privacy_Policy({navigation}) {
  const {colors} = useTheme();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.card,
      }}>
      <View
        style={{
          alignItems: 'center',
          paddingVertical: 15,
          backgroundColor: primary,
        }}>
        <Text style={{color: '#fff', fontWeight: '800', fontSize: 18}}>
          PRIVACY & POLICY
        </Text>
        <View
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            bottom: 0,
            justifyContent: 'center',
            paddingLeft: 10,
          }}>
          <AntDesign
            name="left"
            color="#fff"
            size={24}
            onPress={() => navigation.goBack()}
          />
        </View>
      </View>
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 20,
          paddingVertical: 20,
        }}
        showsVerticalScrollIndicator={false}>
        <Text
          style={{
            color: colors.text,
            fontWeight: 'bold',
            fontSize: 20,
            alignSelf: 'center',
          }}>
          FAQ
        </Text>
        <Text style={{color: colors.text, fontWeight: '700'}}>
          {'\u25CF'} How do I buy a ticket on Buslala app or site?
        </Text>
        <Text style={{color: colors.text}}>{PrivacyText.text3}</Text>
        <Text style={{color: colors.text, fontWeight: '700', marginTop: 10}}>
          {'\u25CF'} What happens when my schedule/service is cancelled?
        </Text>
        <Text style={{color: colors.text}}>{PrivacyText.text4}</Text>

        <Text style={{color: colors.text, fontWeight: '700', marginTop: 10}}>
          {'\u25CF'} Do I have to pay extra when compared to buying the tickets
          offline?
        </Text>
        <Text style={{color: colors.text, marginTop: 10}}>
          {PrivacyText.text5}
        </Text>
        <Text style={{color: colors.text, fontWeight: '700', marginTop: 10}}>
          {'\u25CF'} How does your boarding process work?
        </Text>
        <Text style={{color: colors.text, marginTop: 10}}>
          {PrivacyText.text6}
        </Text>
        <Text style={{color: colors.text, fontWeight: '700', marginTop: 10}}>
          {'\u25CF'} Why are different seats priced differently in the same bus?
        </Text>
        <Text style={{color: colors.text, marginTop: 10}}>
          {PrivacyText.text7}
        </Text>
        <Text style={{color: colors.text, fontWeight: '700', marginTop: 10}}>
          {'\u25CF'} I've lost my ticket printout. What do I do now?
        </Text>
        <Text style={{color: colors.text, marginTop: 10}}>
          {PrivacyText.text8}
        </Text>
        <Text style={{color: colors.text, fontWeight: '700', marginTop: 10}}>
          {'\u25CF'} Why is it mandatory to provide my mobile number during
          booking the ticket(s)?
        </Text>
        <Text style={{color: colors.text, marginTop: 10}}>
          {PrivacyText.text9}
        </Text>
        <Text style={{color: colors.text, fontWeight: '700', marginTop: 10}}>
          {'\u25CF'} I have not received the tickets to my email id, what do I
          do?
        </Text>
        <Text style={{color: colors.text, marginTop: 10}}>
          {PrivacyText.text10}
        </Text>
        <Text style={{color: colors.text, fontWeight: '700', marginTop: 10}}>
          {'\u25CF'} I did not receive my SMS Ticket confirmation on mobile. Can
          you re-send it?
        </Text>
        <Text style={{color: colors.text, marginTop: 10}}>
          {PrivacyText.text12}
        </Text>
        <Text style={{color: colors.text, fontWeight: '700', marginTop: 10}}>
          {'\u25CF'} Is it mandatory to carry the required identity proofs along
          with the e-ticket?
        </Text>
        <Text style={{color: colors.text, marginTop: 10}}>
          {PrivacyText.text13}
        </Text>
        <Text
          style={{
            color: colors.text,
            fontWeight: 'bold',
            fontSize: 20,
            alignSelf: 'center',
            marginTop: 10,
          }}>
          Cancellation Related
        </Text>
        <Text style={{color: colors.text, fontWeight: '700', marginTop: 10}}>
          {'\u25CF'} Can I cancel my bus ticket?
        </Text>
        <Text style={{color: colors.text}}>{PrivacyText.text14}</Text>
        <Text style={{color: colors.text, fontWeight: '700', marginTop: 10}}>
          {'\u25CF'} How can I cancel my ticket, if I need to?
        </Text>
        <Text style={{color: colors.text}}>{PrivacyText.text15}</Text>
        <Text style={{color: colors.text, fontWeight: '700', marginTop: 10}}>
          {'\u25CF'} Can I partially cancel my ticket?
        </Text>
        <Text style={{color: colors.text}}>
          {PrivacyText.text16}
          <Text
            style={{color: 'blue'}}
            onPress={() => Linking.openURL('http://www.buslala.com')}>
            http://www.buslala.com
          </Text>
          {` `}to cancel your tickets.
        </Text>
        <Text
          style={{
            color: colors.text,
            fontWeight: 'bold',
            fontSize: 20,
            alignSelf: 'center',
            marginTop: 10,
          }}>
          Payments Related
        </Text>

        <Text style={{color: colors.text, fontWeight: '700', marginTop: 10}}>
          {'\u25CF'} What Payment types do you accept?
        </Text>
        <Text style={{color: colors.text}}>{PrivacyText.text17}</Text>
        <Text style={{color: colors.text, fontWeight: '700', marginTop: 10}}>
          {'\u25CF'} Is there any other option to book tickets from Buslala?
        </Text>
        <Text style={{color: colors.text}}>{PrivacyText.text18}</Text>
        <Text style={{color: colors.text, fontWeight: '700', marginTop: 10}}>
          {'\u25CF'} How safe are online transactions on Buslala.com?
        </Text>
        <Text style={{color: colors.text}}>{PrivacyText.text19}</Text>
        <Text style={{color: colors.text, fontWeight: '700', marginTop: 10}}>
          {'\u25CF'} Can I pay for someone else?
        </Text>
        <Text style={{color: colors.text}}>{PrivacyText.text20}</Text>
        <Text style={{color: colors.text, fontWeight: '700', marginTop: 10}}>
          {'\u25CF'} Is Phone booking of bus tickets available?
        </Text>
        <Text style={{color: colors.text}}>{PrivacyText.text21}</Text>
        <Text style={{color: colors.text, fontWeight: '700', marginTop: 10}}>
          {'\u25CF'} Is Home Delivery / Cash on Delivery of tickets available?
        </Text>
        <Text style={{color: colors.text}}>{PrivacyText.text22}</Text>
        <Text style={{color: colors.text, fontWeight: '700', marginTop: 10}}>
          {'\u25CF'} How fast should I complete the online payment?
        </Text>
        <Text style={{color: colors.text}}>{PrivacyText.text23}</Text>

        <Text
          style={{
            color: colors.text,
            fontWeight: 'bold',
            fontSize: 20,
            alignSelf: 'center',
            marginTop: 10,
          }}>
          Refunds Related
        </Text>

        <Text style={{color: colors.text, fontWeight: '700', marginTop: 10}}>
          {'\u25CF'} I missed the bus, am I eligible for a refund?
        </Text>
        <Text style={{color: colors.text}}>{PrivacyText.text24}</Text>
        <Text style={{color: colors.text, fontWeight: '700', marginTop: 10}}>
          {'\u25CF'} I have cancelled my booking and when can I get the refund
          amount?
        </Text>
        <Text style={{color: colors.text}}>{PrivacyText.text25}</Text>
        <Text style={{color: colors.text, fontWeight: '700', marginTop: 10}}>
          {'\u25CF'} Would I get a full refund?
        </Text>
        <Text style={{color: colors.text}}>{PrivacyText.text26}</Text>

        <Text
          style={{
            color: colors.text,
            fontWeight: 'bold',
            fontSize: 20,
            alignSelf: 'center',
            marginTop: 10,
          }}>
          Bus Partner Related
        </Text>

        <Text style={{color: colors.text, fontWeight: '700', marginTop: 10}}>
          {'\u25CF'} What are the rules on luggage?
        </Text>
        <Text style={{color: colors.text}}>{PrivacyText.text27}</Text>

        <Text
          style={{
            color: colors.text,
            fontWeight: 'bold',
            fontSize: 20,
            alignSelf: 'center',
            marginTop: 10,
          }}>
          Other Information
        </Text>

        <Text style={{color: colors.text, fontWeight: '700', marginTop: 10}}>
          {'\u25CF'} What if I have additional questions?
        </Text>
        <Text style={{color: colors.text}}>{PrivacyText.text28}</Text>

        <Text
          style={{
            color: colors.text,
            fontWeight: 'bold',
            fontSize: 20,
            alignSelf: 'center',
            marginTop: 10,
          }}>
          Buslala- Privacy and Policy
        </Text>

        <Text style={{color: colors.text, fontSize: 15, fontWeight: '500'}}>
          Privacy Notice:{' '}
        </Text>

        <Text style={{color: colors.text}}>{PrivacyText.text1}</Text>

        <Text style={{color: colors.text, marginTop: 10}}>
          {PrivacyText.text2}
        </Text>

        <Text
          style={{
            color: colors.text,
            fontWeight: 'bold',
            fontSize: 20,
            alignSelf: 'center',
            marginTop: 10,
          }}>
          INFORMATION YOU PROVIDE AND WE COLLECT
        </Text>
        <Text
          style={{
            color: colors.text,
            fontSize: 15,
            fontWeight: '500',
            marginTop: 10,
          }}>
          1.General{' '}
        </Text>
        <Text style={{color: colors.text, marginTop: 10}}>
          {PrivacyText.text29}
        </Text>
        <Text
          style={{
            color: colors.text,
            fontSize: 15,
            fontWeight: '500',
            marginTop: 10,
          }}>
          2. INFORMATION YOU PROVIDE TO US AND ITS USE AND SHARING
        </Text>
        <Text style={{color: colors.text, marginTop: 10}}>
          {PrivacyText.text30}
        </Text>
        <Text style={{color: colors.text, marginTop: 10}}>
          {PrivacyText.text31}
        </Text>

        <Text
          style={{
            color: colors.text,
            fontWeight: 'bold',
            fontSize: 20,
            alignSelf: 'center',
            marginTop: 10,
          }}>
          B. PERMISSIONS REQUIRED FOR USING OUR MOBILE APPLICATIONS
        </Text>
        <Text
          style={{
            color: colors.text,
            fontSize: 15,
            fontWeight: '500',
            marginTop: 10,
          }}>
          ANDROID PERMISSIONS{' '}
        </Text>
        <Text style={{color: colors.text, marginTop: 10}}>
          {PrivacyText.text32}
        </Text>
        <Text
          style={{
            color: colors.text,
            fontWeight: 'bold',
            fontSize: 20,
            alignSelf: 'center',
            marginTop: 10,
          }}>
          C. COOKIES:-
        </Text>
        <Text style={{color: colors.text, marginTop: 10}}>
          {PrivacyText.text33}
        </Text>

        <Text
          style={{
            color: colors.text,
            fontWeight: 'bold',
            fontSize: 20,
            alignSelf: 'center',
            marginTop: 10,
          }}>
          D. SECURITY OF YOUR INFORMATION
        </Text>
        <Text style={{color: colors.text, marginTop: 10}}>
          {PrivacyText.text34}
        </Text>

        <Text
          style={{
            color: colors.text,
            fontWeight: 'bold',
            fontSize: 20,
            alignSelf: 'center',
            marginTop: 10,
          }}>
          E. PERSONS WHO ARE ELIGIBLE TO USE THE WEBSITE, MOBILE SITE AND MOBILE
          APPS
        </Text>
        <Text style={{color: colors.text, marginTop: 10}}>
          {PrivacyText.text35}
        </Text>

        <Text
          style={{
            color: colors.text,
            fontWeight: 'bold',
            fontSize: 20,
            alignSelf: 'center',
            marginTop: 10,
          }}>
          F. MODIFY YOUR PRIVACY PREFERENCES
        </Text>
        <Text style={{color: colors.text, marginTop: 10}}>
          {PrivacyText.text36}
        </Text>

        <Text
          style={{
            color: colors.text,
            fontWeight: 'bold',
            fontSize: 20,
            alignSelf: 'center',
            marginTop: 10,
          }}>
          G. NOTICES AND REVISIONS
        </Text>
        <Text style={{color: colors.text, marginTop: 10}}>
          {PrivacyText.text37}
        </Text>

        <Text
          style={{
            color: colors.text,
            fontWeight: 'bold',
            fontSize: 20,
            alignSelf: 'center',
            marginTop: 10,
          }}>
          Buslala- Term & conditions
        </Text>
        <Text
          style={{
            color: colors.text,
            fontSize: 15,
            fontWeight: '500',
            marginTop: 10,
          }}>
          General Terms and Conditions
        </Text>
        <Text style={{color: colors.text, marginTop: 10}}>
          {PrivacyText.text38}
        </Text>
        <Text
          style={{
            color: colors.text,
            fontSize: 15,
            fontWeight: '500',
            marginTop: 10,
          }}>
          Buslala Responsibility
        </Text>
        <Text style={{color: colors.text, marginTop: 10}}>
          {PrivacyText.text39}
        </Text>
        <Text
          style={{
            color: colors.text,
            fontSize: 15,
            fontWeight: '500',
            marginTop: 10,
          }}>
          Are Not Buslala Responsibility
        </Text>
        <Text style={{color: colors.text, marginTop: 10}}>
          {PrivacyText.text40}
        </Text>
        <Text
          style={{
            color: colors.text,
            fontSize: 15,
            fontWeight: '500',
            marginTop: 10,
          }}>
          Failure Transactions
        </Text>
        <Text style={{color: colors.text, marginTop: 10}}>
          {PrivacyText.text41}
        </Text>
        <Text
          style={{
            color: colors.text,
            fontSize: 15,
            fontWeight: '500',
            marginTop: 10,
          }}>
          Cancellation policy
        </Text>
        <Text style={{color: colors.text, marginTop: 10}}>
          {PrivacyText.text42}
        </Text>
        <Text
          style={{
            color: colors.text,
            fontSize: 15,
            fontWeight: '500',
            marginTop: 10,
          }}>
          Refund Policy
        </Text>
        <Text style={{color: colors.text, marginTop: 10}}>
          {PrivacyText.text43}
        </Text>
      </ScrollView>
    </View>
  );
}
