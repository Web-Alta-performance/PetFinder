import { StyleSheet, View, ImageBackground } from 'react-native';
import FormCadastro from '../components/FormCadastro';

const Cadastro = (props) => {
    return (
        <View style={styles.background}>
            <ImageBackground
                source={require('../assets/gatoCadastro.jpg')}
                style={{flex: 1, width: '100vw', height: '100vh'}}
                blurRadius={1.5}
            >
                 <View style={{
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    }}>
                     <FormCadastro navigation={props.navigation}/>
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

export default Cadastro;