import React, {useState, useEffect} from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen, LoginScreen, ProfileScreen} from '../screens';
import {SelectPlaces, Logout} from '../components';
// import {HomeScreenNavigation} from './HomeScreenNavigator';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import InputDropDown from '../components/DropDown/DropDown';
import Icon from 'react-native-vector-icons/Entypo';
import User from 'react-native-vector-icons/FontAwesome';
import {useTheme} from '../hooks';
import {MMKV} from 'react-native-mmkv';

const userId = 1233466;
const USER_DIRECTORY = 'app';
export const storage = new MMKV({
  id: `user-${userId}-storage`,
  // path: `${USER_DIRECTORY}/storage`,
  encryptionKey: 'hunter2',
});

const Stack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Places"
        component={SelectPlaces}
        options={{title: 'Places'}}
      />
      {/* <Stack.Screen
        name="Dropdown"
        component={InputDropDown}
        options={{title: 'Dropdown'}}
      /> */}
    </Stack.Navigator>
  );
};

const ProfileStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="UserProfile"
        component={ProfileScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        // options={{title: 'Places'}}
      />
      {/* <Stack.Screen
        name="Dropdown"
        component={InputDropDown}
        options={{title: 'Dropdown'}}
      /> */}
    </Stack.Navigator>
  );
};

export const RootNavigation = () => {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  const {colors} = useTheme();

  let userDataLocalStringfy = storage.getString('@user_details');
  let userDataLocal =
    userDataLocalStringfy && JSON.parse(userDataLocalStringfy);

  console.log('data', userDataLocal);
  return (
    <Tabs.Navigator
      initialRouteName={'Functional'}
      screenOptions={{
        headerShown: false,
      }}>
      <Tabs.Screen
        name="Functional"
        component={HomeStack}
        options={{
          tabBarLabel: 'Home',
          tabBarActiveTintColor: colors.hightLightedColor,
          tabBarInactiveTintColor: colors.headingText,
          tabBarIcon: ({color}) => {
            return <Icon name="home" size={30} color={color} />;
          },
        }}
      />
      <Tabs.Screen
        name="Profile"
        component={ProfileStack}
        options={{
          tabBarLabel: 'Profile',
          tabBarActiveTintColor: colors.hightLightedColor,
          tabBarInactiveTintColor: colors.headingText,
          tabBarIcon: ({color}) => {
            return <User name="user" size={30} color={color} />;
          },
        }}
      />
    </Tabs.Navigator>
  );
};
