import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { View } from 'react-native';
import { useCallback } from 'react';
import Router from './routes/router';
import 'react-native-gesture-handler';

SplashScreen.preventAutoHideAsync();

const App = () => {
  const [fontsLoaded, fontError] = Font.useFonts({
    'Quicksand-Bold': require('./assets/fonts/Quicksand-Bold.ttf'),
    'Quicksand-Medium': require('./assets/fonts/Quicksand-Medium.ttf'),
    'Quicksand': require('./assets/fonts/Quicksand-Regular.ttf'),
    'Quicksand-Light': require('./assets/fonts/Quicksand-Light.ttf'),
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
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
      onLayout={onLayoutRootView}>
      <Router />
    </View>
  );
}

export default App;