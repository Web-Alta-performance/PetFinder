import { createDrawerNavigator } from '@react-navigation/drawer';
import { CustomDrawer } from '../components/CustomDrawer';

// Screens
import { Home } from '../screens/Home';
import { Settings } from '../screens/Settings';
import { Chats } from '../screens/Chats';
import { Account } from '../screens/Account';
import { Support } from '../screens/Support';
import { About } from '../screens/About';

const MainStack = () => {

    const Drawer = createDrawerNavigator();

    return (
        <Drawer.Navigator
            screenOptions={{ headerShown: false }}
            drawerContent={props => <CustomDrawer {...props} />}>
            <Drawer.Screen name='Home' component={Home} />
            <Drawer.Screen name='Settings' component={Settings} />
            <Drawer.Screen name='Chats' component={Chats} />
            <Drawer.Screen name='Account' component={Account} />
            <Drawer.Screen name='Support' component={Support} />
            <Drawer.Screen name='About' component={About} />
        </Drawer.Navigator>
    );
};

export default MainStack;