import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {storage} from '../../navigations';
import {StackScreenProps} from '@react-navigation/stack';

type RootStackParamList = {
  Profile: undefined;
  Login: undefined;
  // Add more screen names and their corresponding parameter types if needed
};

type LogoutProps = StackScreenProps<RootStackParamList, 'Profile'>;

export const Logout: React.FC = () => {
  const removeValue = () => {
    storage.delete('@user_details');
    console.log('Done.');
  };
  return (
    <View>
      <TouchableOpacity onPress={removeValue}>
        <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};
