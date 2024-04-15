import { NavigationContainer } from '@react-navigation/native';
import { View } from 'react-native';
import { AuthContext } from '../context/AuthContext';
import { useContext } from 'react';

// stacks
import MainStack from './MainStack';
import LoginStack from './LoginStack';

const AppNav = () => {

    const { userToken } = useContext(AuthContext);

    return (
        <View style={{ flex: 1, backgroundColor: '#333' }}>
            <NavigationContainer>
                {userToken ? <MainStack /> : <LoginStack />}
            </NavigationContainer>
        </View>
    )
};

export default AppNav;