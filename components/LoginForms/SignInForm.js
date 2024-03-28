import { View } from 'react-native';
import { UserForm, FormUserInput, FormUserButton, FormUserLink } from '../UserForm';
import formStyle from './formStyle';
import { useState } from 'react';

const SignInForm = ({ navigation }) => {
    {/* TODO: use UseContext hook to avoid these types of prop */}
    return (
        <>
            <UserForm
                style={formStyle.form}
                height={410}
                navigation={navigation}
            >
                <FormUserInput style={formStyle}>E-MAIL</FormUserInput>
                <FormUserInput style={formStyle}>SENHA</FormUserInput>
                <FormUserButton style={formStyle} color={'#271810'}>ENTRAR</FormUserButton>
                <View style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 10,
                }}>
                    <FormUserLink style={formStyle}>Esqueceu a senha?</FormUserLink>
                    <FormUserLink style={formStyle}>Criar uma conta</FormUserLink>
                </View>
            </UserForm>
        </>
    )
};

export default SignInForm;