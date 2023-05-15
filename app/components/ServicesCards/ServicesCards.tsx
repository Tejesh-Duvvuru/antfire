import React from 'react';
import {
  View,
  Text,
  Image,
  ViewStyle,
  ImageStyle,
  TextStyle,
  ImageSourcePropType,
} from 'react-native';
import {height, width, mobileFontSize} from '../../theme';
import DeviceInfo from 'react-native-device-info';
import {useTheme} from '../../hooks';

const IsTablet = DeviceInfo.getDeviceType();

// console.log(IsTablet, 'tablets');

interface cardsProps {
  heading: string;
  subHeading?: string;
  image?: ImageSourcePropType;
  icon?: JSX.Element;
}

export const ServicesCards = (props: cardsProps) => {
  const {
    heading,
    subHeading,
    image = require('../../assests/images/Cycle.png'),
    icon,
  } = props;
  const {colors} = useTheme();
  return (
    <View
      style={[
        cardContainer,
        {
          backgroundColor: colors.backGroundColor,
          // borderColor: colors.hightLightedColor,
          ...shadowProp,
          shadowColor: colors.hightLightedColor,
        },
      ]}>
      {icon ? icon : <Image style={imageStyle} source={image} />}
      <Text
        style={[cardHeading, {color: colors.headingText}]}
        numberOfLines={1}>
        {heading}
      </Text>
      <Text
        style={[cardSubheading, {color: colors.primaryText}]}
        numberOfLines={2}>
        {subHeading}
      </Text>
    </View>
  );
};

const imageStyle: ImageStyle = {
  height: height(10),
  width: width(36),
  marginTop: height(0.5),
};

const cardContainer: ViewStyle = {
  marginVertical: height(1),
  // marginHorizontal: width(1),
  height: height(25),
  width: width(43),
  paddingHorizontal: width(2),
  paddingVertical: height(2),
  borderRadius: 10,
  borderStyle: 'solid',
  // borderColor: 'green',
  // borderWidth: 3,
};

const shadowProp: ViewStyle = {
  // shadowOffset: {width: 0, height: 0},  // ios
  // shadowOpacity: 20,   // ios
  // shadowRadius: 10,  //ios
  elevation: 5,
};

const cardHeading: TextStyle = {
  fontSize: mobileFontSize.heading,
};

const cardSubheading: TextStyle = {
  fontSize: mobileFontSize.subHeading,
};
