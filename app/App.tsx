import React from 'react';
import {Text, View, ViewStyle, Appearance} from 'react-native';
// import {lightMode} from './theme';
import {AntFireThemeProvider} from './context';
// import {ServicesSCards, SelectCyties} from './components';
import {totalSize} from './theme';
import {NavigationContainer} from '@react-navigation/native';
// import {HomeScreenNavigation} from './navigations/HomeScreenNavigator';
import {RootNavigation} from './navigations';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const App = () => {
  const colorScheme = Appearance.getColorScheme();
  return (
    <AntFireThemeProvider theme={colorScheme ? colorScheme : 'light'}>
      <SafeAreaProvider>
        <NavigationContainer>
          <RootNavigation />
        </NavigationContainer>
      </SafeAreaProvider>
    </AntFireThemeProvider>
  );
};
export default App;

const cardsContainer: ViewStyle = {
  // flexDirection: 'row',
  justifyContent: 'center',
};
