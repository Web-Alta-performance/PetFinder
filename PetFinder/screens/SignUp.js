import { StyleSheet, View, Image } from 'react-native';
import FormSignUp from '../components/FormSignUp';

const SignUp = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Image
                source={require('../assets/signUpBackground.jpg')}
                style={styles.background}
                blurRadius={1.5}
            />
            <View style={[styles.background, styles.backgroundOpacity]}/>
            <FormSignUp navigation={navigation}/>
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
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default SignUp;