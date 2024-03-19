import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import AppNav from './AppNav';

const Router = () => {
    return (
        <View style={{width: '100%', height: '100%'}}>
            <StatusBar style="light" animated />
            <AppNav />
        </View>
    );
};

export default Router;