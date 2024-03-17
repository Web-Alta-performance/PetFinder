import { NavigationContainer } from '@react-navigation/native';
import LoginStack from './LoginStack';

const AppNav = () => {
    return (
        <NavigationContainer>
            <LoginStack />
        </NavigationContainer>
    )
};

export default AppNav;