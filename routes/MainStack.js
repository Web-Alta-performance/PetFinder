import { createDrawerNavigator } from "@react-navigation/drawer";
import Ionicons from '@expo/vector-icons/Ionicons';

import { HomeScreen } from '../screens/HomeScreen';
import { Image } from "react-native";

const MainStack = () => {

    const Drawer = createDrawerNavigator();

    return (
        <Drawer.Navigator screenOptions={{ title: '' }}>
            <Drawer.Screen
                component={HomeScreen}
                name='Home'
                options={{
                    drawerIcon: ({ color, size }) => <Ionicons name='home' color={color} size={size} />,
                    drawerLabel: 'Início',
                }}
            />
        </Drawer.Navigator>
    );
};

export default MainStack;