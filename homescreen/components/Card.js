import { useState } from 'react';
import { StyleSheet, View, TextInput, Pressable, Text } from 'react-native';
import Icone from './Icone';

const Card = () => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    return (
        <View style={styles.card}>
            <Icone size={90}/>
            <View style={{width: '75%', gap: 20,}}>
                <TextInput
                    editable
                    maxLength={40}
                    onChangeText={text => setEmail(text)}
                    value={email}
                    style={styles.textInput}
                    placeholder={'E-mail'}
                    placeholderTextColor={'rgba(0,0,0,0.3)'}
                    />
                <TextInput
                    editable
                    maxLength={40}
                    onChangeText={text => setSenha(text)}
                    value={senha}
                    style={styles.textInput}
                    placeholder={'Senha'}
                    placeholderTextColor={'rgba(0,0,0,0.3)'}
                    secureTextEntry={true}
                    />
            </View>
            <View>
                <Pressable style={styles.button} onPress={() => alert()}>
                    <View style={styles.buttonBg}>
                        <Text style={styles.buttonText}>Entrar</Text>
                    </View>
                </Pressable>
                <Pressable>
                    <Text style={styles.forgotPassText}>Esqueceu a senha?</Text>
                </Pressable>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        width: '60vw',
        height: '75vh',
        backgroundColor: '#db9cff',
        borderRadius: 20,

        alignItems: 'center',
        justifyContent: 'space-evenly',
        flexShrink: 1,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.35,
        shadowRadius: 10,

        elevation: 10,
    },
    textInput: {
        fontSize: 20,
        paddingHorizontal: 10,
        paddingVertical: 5,
        backgroundColor: '#eee',
        borderRadius: 5,
        outlineStyle: 'none',
        
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.15,
        shadowRadius: 10,

        elevation: 5,
    },
    button: {
        marginBottom: '15%',
    },
    buttonBg: {
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        borderRadius: 10,
    },
    buttonText: {
        color: 'black',
        fontWeight: '500', 
        fontSize: '1.5rem',
    },
    forgotPassText: {
        textDecorationLine: 'underline',
    }
});

export default Card;