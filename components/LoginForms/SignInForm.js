import { UserForm, FormUserInput, FormUserButton } from '../UserForm';
import formStyle from './formStyle';
import { useState } from 'react';

const SignInForm = ({ navigation }) => {
    {/* TODO: use UseContext hook to avoid these types of prop */}
    return (
        <>
            <UserForm
                style={formStyle.form}
                navigation={navigation}
            >
                <FormUserInput style={formStyle}>E-MAIL</FormUserInput>
                <FormUserInput style={formStyle}>SENHA</FormUserInput>
                <FormUserButton style={formStyle} color={'rgb(39, 24, 16)'}>ENTRAR</FormUserButton>
            </UserForm>
        </>
    )
};

export default SignInForm;