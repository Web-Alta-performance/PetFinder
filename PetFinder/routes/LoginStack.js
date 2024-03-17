import { createNativeStackNavigator } from '@react-navigation/native-stack';

// screens
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';

const { Navigator, Screen } = createNativeStackNavigator();

const LoginStack = () => {
    return (
        <Navigator initialRouteName="SignIn" screenOptions={{headerShown: false}}>
            <Screen name="SignIn" component={SignIn}/>
            <Screen name="SignUp" component={SignUp}/>
        </Navigator>
    );
};

export default LoginStack;