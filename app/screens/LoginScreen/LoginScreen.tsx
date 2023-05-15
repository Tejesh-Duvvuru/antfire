import React, {useState, useRef, FunctionComponent, useEffect} from 'react';
import {InputField} from '../../components';
import {
  View,
  TouchableOpacity,
  Text,
  TextInput,
  ActivityIndicator,
  Appearance,
  ViewStyle,
} from 'react-native';
import Toast from 'react-native-simple-toast';
import {StackScreenProps} from '@react-navigation/stack';
import {useTheme} from '../../hooks';
import {fontSize, height, totalSize, width} from '../../theme';
import {storage} from '../../navigations';

export const LoginScreen: FunctionComponent<StackScreenProps<any>> = props => {
  console.log('props', props);
  const {colors} = useTheme();
  const inputRef = useRef<TextInput>(null);
  const [mobileNumber, setMObileNUmber] = useState('');
  const [userName, changeUserName] = useState('');
  const [userEmail, changeUserEmail] = useState('');

  const [getName, ChangeGetUserName] = useState('');

  const handleButtonClick = async () => {
    const expr = /^(0|91)?[6-9][0-9]{9}$/;
    if (inputRef.current) {
      inputRef.current.blur();
    }
    if (userName === '') {
      Toast.show('Please enter user name', Toast.LONG);
      // console.log('please enter your name');
    } else if (!expr.test(mobileNumber)) {
      // Toast.show('Phone Number is not valid', 1000);
      Toast.show('Phone number is not valid', Toast.LONG);
      // console.log('not correct');
    } else {
      // console.log('Welcome ', userName);
      const userDetails = {
        userName: userName,
        phoneNumber: mobileNumber,
        userEmail,
      };
      storage.set('@user_details', JSON.stringify(userDetails));
      props.navigation.navigate('UserProfile');
    }
  };

  return (
    <View
      style={{
        paddingVertical: height(1),
        paddingHorizontal: width(2),
        backgroundColor: colors.backGroundColor,
      }}>
      {/* {getName === '' ? ( */}
      <View
        style={[
          {backgroundColor: colors.backGroundColor, minHeight: totalSize(100)},
        ]}>
        <View style={{paddingVertical: height(1)}}>
          <InputField
            lableText="User Name"
            onTextChange={user => {
              changeUserName(String(user));
            }}
            fieldIsrequired={true}
            inputRef={inputRef}
            keyboardType={'default'}
          />
        </View>
        <View style={{paddingVertical: height(1)}}>
          <InputField
            lableText="Phone Number"
            fieldIsrequired={true}
            onTextChange={phoneno => {
              setMObileNUmber(String(phoneno));
            }}
            inputRef={inputRef}
            keyboardType={'numeric'}
          />
        </View>
        <View style={{paddingVertical: height(1)}}>
          <InputField
            lableText="Email Id"
            fieldIsrequired={false}
            onTextChange={message => {
              console.log(message, 'message');
            }}
            inputRef={inputRef}
            keyboardType={'email-address'}
          />
        </View>
        <TouchableOpacity
          onPress={() => handleButtonClick()}
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
            CONTINUE
          </Text>
        </TouchableOpacity>
      </View>
      {/* ) : ({ props.navigation.navigate('Home');})} */}
    </View>
  );
};

const buttonStyle: ViewStyle = {
  // paddingVertical: height(2),
  height: height(6),
  marginTop: height(4),
  borderRadius: totalSize(2),
};
