import { StyleSheet, View, Image } from 'react-native';
import FormSignIn from '../components/LoginForms/FormSignIn';

const SignIn = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Image
                source={require('../assets/signInBackground.jpg')}
                style={styles.background}
                blurRadius={1.5}
            />
            <View style={[styles.background, styles.backgroundOpacity]}>
                <FormSignIn navigation={navigation}/>
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
    backgroundOpacity: {
        backgroundColor: 'rgba(0, 0, 0, 0.35)',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default SignIn;