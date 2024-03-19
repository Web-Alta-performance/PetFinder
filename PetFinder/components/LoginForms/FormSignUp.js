import { useState } from 'react';
import { StyleSheet, View, Image, Text, TextInput, Pressable } from 'react-native';
import styles from './style'

const FormInput = (props) => {
    return (
        <View style={{ gap: 2, width: '100%', height: 70 }}>
            <Text style={[text.default]}>
                {props.children}
            </Text>
            <TextInput
                secureTextEntry={props.secure}
                multiline={false}
                style={[styles.input, text.default]}
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
            <Text style={[text.default]}>
                {props.children}
            </Text>
        </Pressable>
    );
};

const FormSignUp = ({ navigation }, props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    return (
        <View style={[styles.container, { backgroundColor: 'rgba(239, 233, 199, 0.75)' }, props.style]}>
            
            {/* forms */}
            <FormInput onChange={setEmail}>E-mail</FormInput>
            <FormInput secure onChange={setPassword} value={password}>Senha</FormInput>
            <FormInput secure onChange={setConfirmPassword} value={confirmPassword}>Confirmar senha</FormInput>

            {/* create account button */}
            <Pressable onPress={() => console.log(email)}>
                <View style={[styles.button, { backgroundColor: '#1F5916' }]}>
                    <Text style={[text.default, { fontSize: 20, color: 'white', }]}>
                        CRIAR CONTA
                    </Text>
                </View>
            </Pressable>

            {/* go to login page */}
            <View style={styles.optionsContainer}>
                <LinkButton onPress={() => navigation.navigate('SignIn')}>Fazer login</LinkButton>
            </View>
        </View>
    );
};

const text = StyleSheet.create({
    default: {
        fontFamily: 'Quicksand-Bold',
        fontSize: 15,
    },
});

export default FormSignUp;