import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import AppNav from './AppNav';
import { AuthProvider } from '../context/AuthContext';

const Router = () => {
    return (
        <View style={{ width: '100%', height: '100%' }}>
            <AuthProvider>
                <StatusBar style="light" animated />
                <AppNav />
            </AuthProvider>
        </View>
    );
};

export default Router;