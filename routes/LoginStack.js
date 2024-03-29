import { View, Image, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// screens
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';

const { Navigator, Screen } = createNativeStackNavigator();

const LoginStack = () => {
    return (
        <View style={{flex: 1, width: '100%', height: '100%'}}>
            <Navigator initialRouteName="SignIn" screenOptions={{headerShown: false}}>
                <Screen name="SignIn" component={SignIn}/>
                <Screen name="SignUp" component={SignUp}/>
            </Navigator>
        </View>
    );
};

export default LoginStack;