import { StyleSheet, useWindowDimensions, View, Image } from 'react-native';
import SignInForm from '../../components/LoginForms/SignInForm';
import { ShowAppInfo } from '../../components/ShowAppInfo';
import { FormUserLink } from '../../components/UserForm/UserForm';
import { useState } from 'react';

const SignIn = ({ navigation }) => {

    const { height } = useWindowDimensions();
    const [infoVisible, setInfoVisible] = useState(false);

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

            {/* LOGO */}
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', position: 'absolute', bottom: height - 150, }}>
                <Image source={require('../../assets/Logo.png')} style={{ zIndex: 5, width: 100, height: 100 }} />
            </View>

            {/* FORM */}
            <Image
                source={require('../../assets/signInBackground.jpg')}
                style={[styles.background, { height }]}
            />
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', width: '100%', gap: 30, }}>
                <SignInForm navigation={navigation} />
            </View>

            {/* APP INFO MODAL */}
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', position: 'absolute', top: height - 75, }}>
                <FormUserLink onPress={() => setInfoVisible(!infoVisible)}>
                    Petfinder v0.0
                </FormUserLink>
            </View>
            <ShowAppInfo visible={infoVisible} onPress={() => setInfoVisible(!infoVisible)} />
        </View>
    );
};

const styles = StyleSheet.create({
    background: {
        position: 'absolute',
        flex: 1,
        width: '100%',
        height: '100%',
        overflow: 'hidden',
    },
});

export default SignIn;