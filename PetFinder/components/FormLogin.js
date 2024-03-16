import { StyleSheet, View, Image, Text, TextInput, Pressable } from 'react-native';
import { useFonts } from 'expo-font';

const FormLogin = () => {
    
    const [fontsLoaded] = useFonts({
        'Quicksand': require('../assets/fonts/Quicksand.ttf')
    });

    return (
        <View style={styles.container}>
            <Image source={require('../assets/Logo.png')}/>
            
            {/* Campo de formulário */}
            <View style={{gap: 2, width: '100%'}}>
                <Text style={[styles.text, { fontSize: '1.15rem', }]}>
                    E-mail
                </Text>
                <TextInput style={styles.input}/>
            </View>

            <View style={{gap: 2, width: '100%'}}>
                <Text style={[styles.text, { fontSize: '1.15rem', }]}>
                    Senha
                </Text>
                <TextInput style={styles.input} secureTextEntry={true}/>
            </View>

            {/* botão de login */}
            <Pressable>
                <View style={styles.button}>
                    <Text style={[styles.text, {fontSize: '1.6rem', color: 'white', }]}>
                        ENTRAR
                    </Text>
                </View>
            </Pressable>

            {/* esqueceu a senha + criar conta */}
            <View style={styles.containerAcesso}>
                <Pressable>
                    <Text style={styles.text}>
                        Esqueceu a senha?
                    </Text>
                </Pressable>
                <Pressable>
                    <Text style={styles.text}>
                        Crie uma conta aqui!
                    </Text>
                </Pressable>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '90dvw',
        height: '55dvh',
        backgroundColor: 'rgba(207, 237, 214, 0.8)',
        borderRadius: 20,
        paddingHorizontal: 30,

        justifyContent: 'space-evenly',
        alignItems: 'center',
        gap: 10,
        paddingVertical: 5,
    },
    text: {
        fontFamily: 'QuickSand',
        fontWeight: 'bold',
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
        width: '36dvw',
        height: '7dvh',
        backgroundColor: '#165925',
        borderRadius: 20,
    },
    containerAcesso: {
        justifyContent: 'center',
        alignItems: 'center',
        gap: 7,
    }
});

export default FormLogin;