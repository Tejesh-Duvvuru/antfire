import React from 'react';
import {View, Text, TextStyle} from 'react-native';
import {useTheme} from '../../hooks';
import {mobileFontSize} from '../../theme';

interface HeaderContentProps {
  userName: string;
}

export const HeaderContent = (props: HeaderContentProps) => {
  const {userName} = props;
  const {colors} = useTheme();
  return (
    <View>
      <Text
        style={[WelcomeStyle, {color: colors.hightLightedColor}]}
        numberOfLines={1}>
        Welcome, {userName}
      </Text>
      <Text style={[headingTagLine, {color: colors.subHeadingText}]}>
        We make delivery will be smooth and efficent way
      </Text>
      <Text style={[headingTagLine, {color: colors.subHeadingText}]}>
        Your asset is our resposibility from pickup to delivery
      </Text>
    </View>
  );
};

const WelcomeStyle: TextStyle = {
  fontSize: mobileFontSize.heading,
  // textAlign: 'center',
};
const headingTagLine: TextStyle = {
  fontSize: mobileFontSize.subHeading,
  // textAlign: 'center',
};
