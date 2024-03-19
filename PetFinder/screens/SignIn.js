import { StyleSheet, useWindowDimensions, View, Image } from 'react-native';
import FormSignIn from '../components/LoginForms/FormSignIn';

const SignIn = ({ navigation }) => {

    const { height } = useWindowDimensions();
    
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Image
                source={require('../assets/signInBackground.jpg')}
                style={[styles.background, { height }]}
                blurRadius={1.5}
            />
            <View style={[styles.background, { backgroundColor: 'rgba(0, 0, 0, 0.35)' }]}/>
            <FormSignIn navigation={navigation}/>
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