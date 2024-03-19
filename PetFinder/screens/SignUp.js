import { StyleSheet, useWindowDimensions, View, Image, Text } from 'react-native';
import FormSignUp from '../components/LoginForms/FormSignUp';

const SignUp = ({ navigation }) => {

    const { height } = useWindowDimensions();

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Image
                source={require('../assets/signUpBackground.jpg')}
                style={[styles.background, { height }]}
                blurRadius={1.5}
            />
            <View style={[styles.background, { backgroundColor: 'rgba(0, 0, 0, 0.5)' }]}/>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', width: '100%', gap: 30, }}>
                <View style={{alignItems: 'center', gap: 5,}}>
                    <Image source={require('../assets/Logo.png')}/>
                    <Text style={{fontFamily: 'Quicksand-Bold', color: 'white', fontSize: 40,}}>Criar conta</Text>
                </View>
                <FormSignUp navigation={navigation}/>
            </View>
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