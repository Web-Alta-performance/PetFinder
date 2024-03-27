import { StyleSheet, useWindowDimensions, View, Image, Text } from 'react-native';
import FormSignIn from '../components/LoginForms/FormSignIn';

const SignIn = ({ navigation }) => {

    const { height } = useWindowDimensions();
    
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Image
                source={require('../assets/signInBackground.jpg')}
                style={[styles.background, { height }]}
            />
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', width: '100%', gap: 30, }}>
                <FormSignIn navigation={navigation} style={{width: 200, height: 200, borderWidth: 3, borderRadius: 10,}}/>
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

export default SignIn;