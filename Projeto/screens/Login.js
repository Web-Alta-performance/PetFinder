import { StyleSheet, View, ImageBackground } from 'react-native';
import FormLogin from '../components/FormLogin';

const Login = () => {
    return (
        <View style={styles.background}>
            <ImageBackground
                source={{uri: 'https://images.unsplash.com/photo-1503256207526-0d5d80fa2f47?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}}
                style={{flex: 1}}
                blurRadius={1.5}
            >
                 <View style={{
                    backgroundColor: 'rgba(0, 0, 0, 0.35)',
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    }}>
                     <FormLogin/>
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