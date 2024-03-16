import { StyleSheet, View, ImageBackground } from 'react-native';
import FormLogin from '../components/FormLogin';

const Login = (props) => {
    return (
        <View style={styles.background}>
            <ImageBackground
                source={require('../assets/cachorroLogin.avif')}
                style={{flex: 1}}
                blurRadius={1.5}
            >
                 <View style={{
                    backgroundColor: 'rgba(0, 0, 0, 0.35)',
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    }}>
                     <FormLogin navigation={props.navigation}/>
                 </View>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: '100dvw',
        height: '100dvh',
        borderRadius: 10,
        overflow: 'hidden',
    },
});

export default Login;