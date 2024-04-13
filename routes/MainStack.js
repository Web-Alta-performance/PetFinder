import { View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// screens
import { HomeScreen } from '../screens/HomeScreen';

const { Navigator, Screen } = createNativeStackNavigator();

const MainStack = () => {
    return (
        <View style={{ flex: 1, width: '100%', height: '100%' }}>
            <Navigator initialRouteName="SignIn" screenOptions={{ headerShown: false }}>
                <Screen name="Home" component={HomeScreen} />
            </Navigator>
        </View>
    );
};

export default MainStack;