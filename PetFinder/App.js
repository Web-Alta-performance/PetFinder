import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { View, Text } from 'react-native';
import { useCallback } from 'react';
import Router from './routes/router';

SplashScreen.preventAutoHideAsync();

const App = () => {
  const [fontsLoaded, fontError] = Font.useFonts({
    'Quicksand-Bold': require('./assets/fonts/Quicksand_Bold.otf'),
    'Quicksand-Medium': require('./assets/fonts/Quicksand_Medium.otf'),
    'Quicksand': require('./assets/fonts/Quicksand_Medium.otf'),
    'Quicksand-Light': require('./assets/fonts/Quicksand_Light.otf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
      onLayout={onLayoutRootView}>
      <Router/>
    </View>
  );
}

export default App;