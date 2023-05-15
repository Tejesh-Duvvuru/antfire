import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
  Linking,
} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useTheme} from '../../hooks';
import {height, fontSize, width, totalSize} from '../../theme';
import {isTablet} from 'react-native-device-info';
import {createTransport} from 'nodemailer';
import {SelectServices} from '../SelectServices/SelectServices';
import InputDropDown from '../DropDown/DropDown';
import email from 'react-native-email';
import emailjs from '@emailjs/browser';
import {SMTPClient} from 'emailjs';
import {storage} from '../../navigations';

// import { sendGridEmail } from 'react-native-sendgrid'
// import {nodemailer} from 'nodemailer'
// import nodemailer from 'nodemailer';
// import { MailService } from '@sendgrid/mail';
// import email from 'react-native-email';

// import mail from '@sendgrid/mail';
// import { EmailJSResponseStatus, send } from '@emailjs/browser';

// console.log(isTablet(), '****************************************888');

const data = [
  {id: '1', value: 'Chennai'},
  {id: '2', value: 'Nellore'},
  {id: '3', value: 'Hyderabad'},
  {id: '4', value: 'Bangalore'},
];

const destinationData = [
  {id: '1', value: 'Chennai'},
  {id: '2', value: 'Nellore'},
  {id: '3', value: 'Hyderabad'},
  {id: '4', value: 'Bangalore'},
];

export const SelectPlaces = (props: any) => {
  const {serviceProvider} = props.route.params;
  const [fromPlace, setFromPlace] = useState('');
  const [destinationPlace, setDestinationPlace] = useState('');
  // const [isFocus, setIsFocus] = useState(false);
  const {colors} = useTheme();

  const [mobileNumber, setMobileNumber] = useState('9010932456');
  const [whatsAppMsg, setWhatsAppMsg] = useState('Please follow ');

  const serviceData = () => {
    if (fromPlace === '') {
      console.log('please select fromplace');
    } else if (destinationPlace === '') {
      console.log('please select Destination value');
    } else {
      console.log('from =', fromPlace, 'destination =', destinationPlace);

      if (!storage.getString('@user_details')) {
        props.navigation.navigate('Profile');
      }
    }
  };

  return (
    <View style={[styles.container, {backgroundColor: colors.backGroundColor}]}>
      <View style={{}}>
        <Text
          style={{
            fontSize: fontSize.subHeading,
            color: colors.headingText,
            fontWeight: '500',
          }}>
          Select the {serviceProvider} service which suites for you{' '}
        </Text>
      </View>
      <SelectServices />
      <View style={{marginTop: height(0)}}>
        <Text
          style={{
            fontSize: fontSize.minSubHeading,
            color: colors.headingText,
            fontWeight: '500',
          }}>
          * Select the place from where service you want
        </Text>
        <InputDropDown
          PlaceHolder="Select From Place"
          Data={data}
          value={fromPlace}
          onChangeValue={item => {
            console.log('item outside of the funtion', item);
            setFromPlace(item);
          }}
        />
      </View>
      <View style={{marginTop: height(2)}}>
        <Text
          style={{
            fontSize: fontSize.minSubHeading,
            color: colors.headingText,
            fontWeight: '500',
          }}>
          * Select the place where you need to delivery
        </Text>
        <InputDropDown
          PlaceHolder="Select Destination Place"
          Data={destinationData}
          value={destinationPlace}
          onChangeValue={item => {
            console.log('item outside of the funtion', item);
            setDestinationPlace(item);
          }}
        />
      </View>

      <TouchableOpacity
        onPress={() => serviceData()}
        style={[
          buttonStyle,
          {
            backgroundColor: colors.buttonBackGroundColor,
            justifyContent: 'center',
            alignItems: 'center',
          },
        ]}>
        <Text
          style={{
            fontSize: fontSize.text,
            color: colors.headingText,
            fontWeight: '500',
          }}>
          SUBMIT
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const buttonStyle: ViewStyle = {
  // paddingVertical: height(2),
  height: height(6),
  marginTop: height(4),
  borderRadius: totalSize(2),
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    minHeight: height(100),
  },
  dropdown: {
    height: height(6),
    borderWidth: 2,
    borderRadius: totalSize(1),
    borderStyle: 'solid',
    paddingHorizontal: width(2),
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: fontSize.subHeading,
    fontWeight: '500',
  },
  selectedTextStyle: {
    fontSize: fontSize.subHeading,
    fontWeight: '500',
  },
  // iconStyle: {
  //   width: 20,
  //   height: 20,
  // },
  // inputSearchStyle: {
  //   height: 40,
  //   fontSize: 16,
  // },
});
