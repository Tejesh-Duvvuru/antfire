import React, {FunctionComponent, useEffect, useState} from 'react';
import {
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  ViewStyle,
  TextStyle,
} from 'react-native';
import {totalSize, height, width, mobileFontSize} from '../../theme';
import {useTheme} from '../../hooks';
import {ServicesCards, SelectPlaces, HeaderContent} from '../../components';
import {StackScreenProps} from '@react-navigation/stack';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import userDetails from '../../stores/userStore';
import InputDropDown from '../../components/DropDown/DropDown';
// import {Maps} from '../../components/Maps/Maps';

export const HomeScreen: FunctionComponent<any> = props => {
  const {colors} = useTheme();
  return (
    <View
      style={[
        mainContainer,
        {
          backgroundColor: colors.backGroundColor,
        },
      ]}>
      <HeaderContent userName={'teja'} />
      <Text style={[servicesHeading, {color: colors.hightLightedColor}]}>
        Book below anTfire service's
      </Text>
      <View
        style={{
          borderBottomColor: 'red',
          borderBottomWidth: 2,
          // borderStyle: 'solid',
        }}
      />
      <View style={cardsContainer}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View>
            <TouchableOpacity
              // activeOpacity={0}
              onPress={() => {
                props.navigation.navigate('Places', {
                  serviceProvider: 'Logistics',
                });
              }}>
              <ServicesCards
                heading="Logistics"
                subHeading="Send"
                image={require('../../assests/images/trucke.jpeg')}
              />
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate('Places');
              }}>
              <ServicesCards
                heading="Bike"
                subHeading="Door to Door step"
                image={require('../../assests/images/trucke.jpeg')}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View>
            <ServicesCards
              heading="Packers"
              subHeading="We delivery any item"
              image={require('../../assests/images/mini.jpeg')}
            />
          </View>
          <View>
            <ServicesCards
              heading="Other Service"
              subHeading="For any other help contact us"
              image={require('../../assests/images/mini.jpeg')}
            />
          </View>
        </View>
      </View>
      {/* <Maps /> */}
      {/* <View> */}
      {/* <Text>Currently Our Services At</Text> */}
      {/* <SelectCyties /> */}
      {/* <Text>Andhra Pradesh</Text> */}
      {/* <Text>Karnataka</Text> */}
      {/* <Text>Tamil Nadu</Text> */}
      {/* <Text>Telangana</Text> */}
      {/* </View> */}
    </View>
  );
};

const mainContainer: ViewStyle = {
  minHeight: totalSize(100),
  paddingVertical: height(1),
  paddingHorizontal: width(2),
};

const cardsContainer: ViewStyle = {
  // flexDirection: 'row',
  marginTop: height(6),
  justifyContent: 'center',
};

const servicesHeading: TextStyle = {
  fontSize: mobileFontSize.heading,
};
