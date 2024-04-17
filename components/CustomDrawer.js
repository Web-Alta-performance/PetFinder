import { DrawerItem } from "@react-navigation/drawer";
import { Pressable, Text, View } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import { useState } from "react";
import { contentTable } from "../services/localization";

const CustomDrawer = (props) => {

    const [infoVisible, setInfoVisible] = useState(false);

    return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
            <Pressable
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    marginLeft: 15,
                    marginTop: 15
                }}
                onPress={() => {
                    props.navigation.closeDrawer();
                }}>
                <Ionicons name='menu-outline' size={32} />
            </Pressable>

            <Pressable
                style={{
                    position: 'absolute',
                    bottom: 0,
                    alignSelf: 'center',
                    marginBottom: 20
                }}
                onPress={() => {
                    props.navigation.navigate('About');
                }}>
                <Text style={{
                    fontFamily: 'Quicksand-Medium',
                    fontSize: 15
                }}>
                    Petfinder v0.0
                </Text>
            </Pressable>

            {/* ITEMS */}
            <DrawerItem
                label={contentTable.homeScreen}
                icon={({ color, size }) => <Ionicons name='home-outline' color={color} size={size + 10} />}
                focused={props.state.index === 0}
                onPress={() => props.navigation.navigate('Home')}
                labelStyle={{ marginLeft: -20, fontSize: 18, fontFamily: 'Quicksand-Bold', }}
                activeBackgroundColor='transparent'
                inactiveBackgroundColor='transparent'
                inactiveTintColor='#000'
                activeTintColor='#000'
                style={{
                    borderLeftWidth: props.state.index === 0 ? 2.5 : 0,
                    borderRadius: 0,
                }}
            />
            <DrawerItem
                label={contentTable.settingsScreen}
                icon={({ color, size }) => <Ionicons name='settings-outline' color={color} size={size + 10} />}
                focused={props.state.index === 1}
                onPress={() => props.navigation.navigate('Settings')}
                labelStyle={{ marginLeft: -20, fontSize: 18, fontFamily: 'Quicksand-Bold', }}
                activeBackgroundColor='transparent'
                inactiveBackgroundColor='transparent'
                inactiveTintColor='#000'
                activeTintColor='#000'
                style={{
                    borderLeftWidth: props.state.index === 1 ? 2.5 : 0,
                    borderRadius: 0,
                }}
            />
            <DrawerItem
                label={contentTable.chatsScreen}
                icon={({ color, size }) => <Ionicons name='chatbubbles-outline' color={color} size={size + 10} />}
                focused={props.state.index === 2}
                onPress={() => props.navigation.navigate('Chats')}
                labelStyle={{ marginLeft: -20, fontSize: 18, fontFamily: 'Quicksand-Bold', }}
                activeBackgroundColor='transparent'
                inactiveBackgroundColor='transparent'
                inactiveTintColor='#000'
                activeTintColor='#000'
                style={{
                    borderLeftWidth: props.state.index === 2 ? 2.5 : 0,
                    borderRadius: 0,
                }}
            />
            <DrawerItem
                label={contentTable.accountScreen}
                icon={({ color, size }) => <Ionicons name='person-outline' color={color} size={size + 10} />}
                focused={props.state.index === 3}
                onPress={() => props.navigation.navigate('Account')}
                labelStyle={{ marginLeft: -20, fontSize: 18, fontFamily: 'Quicksand-Bold', }}
                activeBackgroundColor='transparent'
                inactiveBackgroundColor='transparent'
                inactiveTintColor='#000'
                activeTintColor='#000'
                style={{
                    borderLeftWidth: props.state.index === 3 ? 2.5 : 0,
                    borderRadius: 0,
                }}
            />
            <DrawerItem
                label={contentTable.supportScreen}
                icon={({ color, size }) => <Ionicons name='information-circle-outline' color={color} size={size + 10} />}
                focused={props.state.index === 4}
                onPress={() => props.navigation.navigate('Support')}
                labelStyle={{ marginLeft: -20, fontSize: 18, fontFamily: 'Quicksand-Bold', }}
                activeBackgroundColor='transparent'
                inactiveBackgroundColor='transparent'
                inactiveTintColor='#000'
                activeTintColor='#000'
                style={{
                    borderLeftWidth: props.state.index === 4 ? 2.5 : 0,
                    borderRadius: 0,
                }}
            />
        </View>
    )
};

export { CustomDrawer };