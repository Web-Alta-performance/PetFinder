import { NavigationContainer } from '@react-navigation/native';
import { View } from 'react-native';
import { AuthContext } from '../context/AuthContext';
import { useContext } from 'react';

// stacks
import MainStack from './MainStack';
import AuthStack from './AuthStack';

const AppNav = () => {

    const { userToken } = useContext(AuthContext);

    return (
        <View style={{ flex: 1, backgroundColor: '#333' }}>
            <NavigationContainer>
                {userToken ? <MainStack /> : <AuthStack />}
            </NavigationContainer>
        </View>
    )
};

export default AppNav;