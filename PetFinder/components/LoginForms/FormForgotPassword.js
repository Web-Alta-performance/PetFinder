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

const FormForgotPassword = ({ navigation }, props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style={[styles.container, { backgroundColor: 'rgba(203, 207, 180, 0.65)' }, props.style]}>
            
            {/* forms */}
            <FormInput onChange={setEmail}>E-mail</FormInput>
            <FormInput secure onChange={setPassword} value={password}>Nova senha</FormInput>

            {/* login button */}
            <Pressable onPress={() => console.log(email)}>
                <View style={[styles.button, { backgroundColor: '#3D641E',  }]}>
                    <Text style={[text.default, { fontSize: 20, color: 'white' }]}>
                        ALTERAR SENHA
                    </Text>
                </View>
            </Pressable>

            {/* go to forgot password and create account pages */}
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

export default FormForgotPassword;