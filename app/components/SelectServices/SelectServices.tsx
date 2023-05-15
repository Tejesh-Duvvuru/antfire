import React, {useState} from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {fontSize, height, width, totalSize} from '../../theme';
import {useTheme} from '../../hooks';
import InputDropDown from '../DropDown/DropDown';
import MeterialIcon from 'react-native-vector-icons/MaterialIcons';
import Cross from 'react-native-vector-icons/Entypo';
import Truck from 'react-native-vector-icons/Feather';
import MiniTruck from 'react-native-vector-icons/MaterialCommunityIcons';

export const SelectServices = () => {
  const {colors} = useTheme();
  const [selectServices, setselectServices] = useState('');
  const [isFocus, setIsFocus] = useState(false);

  const options = [
    {
      id: '1',
      value: 'Truck',
      icon: <MiniTruck name="truck" size={30} color={colors.borderColor} />,
    },
    {
      id: '2',
      value: 'Cargo',
      icon: (
        <MiniTruck
          name="truck-cargo-container"
          size={30}
          color={colors.borderColor}
        />
      ),
    },
    {
      id: '3',
      value: 'Mini Truck',
      icon: (
        <MiniTruck name="truck-flatbed" size={30} color={colors.borderColor} />
      ),
    },
  ];
  return (
    <View style={{marginBottom: height(0.8)}}>
      <InputDropDown
        PlaceHolder="Select Services"
        Data={options}
        value={selectServices}
        onChangeValue={item => {
          setselectServices(item);
        }}
        DropDownBoxStyles={{
          borderColor: colors.borderColor,
        }}
      />
    </View>
  );
};
