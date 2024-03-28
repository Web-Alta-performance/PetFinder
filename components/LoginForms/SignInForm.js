import { Pressable, Text, View } from 'react-native';
import { UserForm, FormUserInput, FormUserButton, FormUserLink } from '../UserForm';
import formStyle from './formStyle';
import { useState } from 'react';

const SignInForm = ({ navigation }) => {
    {/* TODO: use UseContext hook to avoid these types of prop */}

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    return (
        <UserForm
            style={formStyle.form}
            height={400}
            navigation={navigation}
        >
            <FormUserInput style={formStyle} onChange={setEmail} value={email}>E-MAIL</FormUserInput>
            <FormUserInput style={formStyle} onChange={setPassword} value={password} secure>SENHA</FormUserInput>
            <FormUserButton style={formStyle} color={'#271810'}>ENTRAR</FormUserButton>
            <View style={{
                alignItems: 'center',
                justifyContent: 'center',
                gap: 10,
            }}>
                <FormUserLink style={formStyle}>Esqueci a senha</FormUserLink>
                <FormUserLink style={formStyle}>Crie uma conta aqui</FormUserLink>
            </View>
        </UserForm>
    )
};

export default SignInForm;