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

const FormCadastro = (props) => {
    
    const [fontsLoaded] = useFonts({
        'Quicksand': require('../assets/fonts/Quicksand.ttf')
    });

    return (
        <View style={[styles.container, props.style]}>
            <Image source={require('../assets/Logo.png')}/>
            
            {/* Campo de formulário */}
            <FormInput>E-mail</FormInput>
            <FormInput secure>Senha</FormInput>
            <FormInput secure>Confirmar senha</FormInput>

            {/* botão de login */}
            <Pressable>
                <View style={styles.button}>
                    <Text style={[styles.text, {fontSize: '1.1rem', color: 'white', }]}>
                        CRIAR CONTA
                    </Text>
                </View>
            </Pressable>

            {/* esqueceu a senha e criar conta */}
            <View style={styles.containerAcesso}>
                <LinkButton onPress={() => props.navigation.navigate('Login')}>Fazer login</LinkButton>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '90dvw',
        maxWidth: 450,
        backgroundColor: 'rgba(239, 233, 199, 0.75)',
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
        backgroundColor: '#1F5916',
        borderRadius: 15,
        marginTop: 5,
    },
    containerAcesso: {
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default FormCadastro;