import { NavigationContainer } from '@react-navigation/native';
import { View } from 'react-native';
import LoginStack from './LoginStack';

const AppNav = () => {

    return (
        <View style={{flex: 1, backgroundColor: '#333' }}>
            <NavigationContainer>
                <LoginStack />
            </NavigationContainer>
        </View>
    )
};

export default AppNav;