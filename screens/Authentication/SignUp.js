import { StyleSheet, useWindowDimensions, View, Image } from 'react-native';
import SignUpForm from '../../components/LoginForms/SignUpForm';
import { useState } from 'react';
import { FormUserLink } from '../../components/UserForm/UserForm';
import { ShowAppInfo } from '../../components/ShowAppInfo';

const SignUp = ({ navigation }) => {

    const { height } = useWindowDimensions();
    const [infoVisible, setInfoVisible] = useState(false);

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

            {/* FORM */}
            <Image
                source={require('../../assets/signUpBackground.jpg')}
                style={[styles.background, { height }]}
            />
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', width: '100%', gap: 30, }}>
                <SignUpForm navigation={navigation} />
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

export default SignUp;