import { useState } from 'react';
import { StyleSheet, View, Image, Text, TextInput, Pressable, Platform } from 'react-native';
import { useFonts } from 'expo-font';
import styles from './style'

const FormInput = (props) => {
    return (
        <View style={{ gap: 2, width: '100%', height: 70 }}>
            <Text style={styles.text}>
                {props.children}
            </Text>
            <TextInput
                secureTextEntry={props.secure}
                multiline={false}
                style={[styles.input, styles.text]}
                onChangeText={t => props.onChange(t)}
                value={props.value}
                autoCapitalize="none"
                autoCorrect={false}
            />
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

const FormSignIn = ({ navigation }, props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [fontsLoaded] = useFonts({
        'Quicksand': require('../../assets/fonts/Quicksand.ttf')
    });
    
    if (!fontsLoaded) return null;

    return (
        <View style={[styles.container, { backgroundColor: 'rgba(207, 237, 214, 0.75)' }, props.style]}>
            <Image source={require('../../assets/Logo.png')}/>
            
            {/* forms */}
            <FormInput onChange={setEmail}>E-mail</FormInput>
            <FormInput secure onChange={setPassword} value={password}>Senha</FormInput>

            {/* login button */}
            <Pressable onPress={() => console.log(email)}>
                <View style={[styles.button, { backgroundColor: '#165925',  }]}>
                    <Text style={[styles.text, {fontSize: 20, color: 'white', }]}>
                        ENTRAR
                    </Text>
                </View>
            </Pressable>

            {/* go to forgot password and create account pages */}
            <View style={styles.optionsContainer}>
                <LinkButton>Esqueceu a senha?</LinkButton>
                <LinkButton onPress={() => navigation.navigate('SignUp')}>Crie uma conta aqui</LinkButton>
            </View>
        </View>
    );
};

export default FormSignIn;