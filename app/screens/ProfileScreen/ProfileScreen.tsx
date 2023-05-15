import React from 'react';
import {View, Text} from 'react-native';
import {storage} from '../../navigations';
import {Logout} from '../../components';
import {LoginScreen} from '../LoginScreen/LoginScreen';
import {StackScreenProps} from '@react-navigation/stack';

type RootStackParamList = {
  Profile: undefined;
  Login: undefined;
  // Add more screen names and their corresponding parameter types if needed
};

type ProfileScreenProps = StackScreenProps<RootStackParamList, 'Profile'>;

export const ProfileScreen: React.FC<ProfileScreenProps> = ({navigation}) => {
  const user = storage.getString('@user_details');
  console.log(user, 'user');
  return (
    <View>
      {user ? <Text>Tejesh</Text> : <Text>User</Text>}
      {user ? <Logout /> : <Text>Login</Text>}
    </View>
  );
};
