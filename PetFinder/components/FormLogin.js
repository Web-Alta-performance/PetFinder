import { StyleSheet, View, Image, Text, TextInput, Pressable } from 'react-native';
import { useFonts } from 'expo-font';

const FormInput = (props) => {
    return (
        <View style={{gap: 2, width: '100%'}}>
            <Text style={styles.text}>
                {props.children}
            </Text>
            <TextInput secureTextEntry={props.secure} style={styles.input}/>
        </View>
    );
};

const LinkButton = (props) => {
    return (
        <Pressable onPress={props.onPress}>
            <Text style={styles.text}>
                {props.children}
            </Text>
        </Pressable>
    );
};

const FormLogin = ({ navigation }, props) => {

    const [fontsLoaded] = useFonts({
        'Quicksand': require('../assets/fonts/Quicksand.ttf')
    });

    return (
        <View style={[styles.container, props.style]}>
            <Image source={require('../assets/Logo.png')}/>
            
            {/* Campo de formulário */}
            <FormInput>E-mail</FormInput>
            <FormInput secure>Senha</FormInput>

            {/* botão de login */}
            <Pressable>
                <View style={styles.button}>
                    <Text style={[styles.text, {fontSize: '1.1rem', color: 'white', }]}>
                        ENTRAR
                    </Text>
                </View>
            </Pressable>

            {/* esqueceu a senha e criar conta */}
            <View style={styles.containerAcesso}>
                <LinkButton>Esqueceu a senha?</LinkButton>
                <LinkButton onPress={() => navigation.navigate('Cadastro')}>Crie uma conta aqui</LinkButton>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '90dvw',
        maxWidth: 450,
        backgroundColor: 'rgba(207, 237, 214, 0.75)',
        borderRadius: 20,
        
        padding: 20,
        gap: 20,

        alignItems: 'center',
    },
    text: {
        fontFamily: 'QuickSand',
        fontWeight: 'bold',
        fontSize: '0.95rem',
    },
    input: {
        flex: 1,
        backgroundColor: 'white',
        paddingVertical: 15,
        paddingHorizontal: 10,
        borderRadius: 10,
        outlineStyle: 'none',
        fontFamily: 'Quicksand',
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 24,
        paddingVertical: 12,
        backgroundColor: '#165925',
        borderRadius: 15,
        marginTop: 5,
    },
    containerAcesso: {
        justifyContent: 'center',
        alignItems: 'center',
        gap: 5,
    }
});

export default FormLogin;