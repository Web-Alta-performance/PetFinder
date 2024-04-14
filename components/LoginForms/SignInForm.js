import { View } from 'react-native';
import { UserForm, FormUserInput, FormUserButton, FormUserLink } from '../UserForm/UserForm';
import { useState } from 'react';
import axios from 'axios';

const SignInForm = ({ navigation }) => {
    {/* TODO: use UseContext hook to avoid these types of prop */ }

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleButtonPress = () => {
        if (!email || !password) {
            alert('Por favor, preencha todos os campos');
            return;
        }
    };

    return (
        <UserForm
            height={400}
            navigation={navigation}
        >
            <FormUserInput onChange={setEmail} value={email}>E-MAIL</FormUserInput>
            <FormUserInput onChange={setPassword} value={password} secure>SENHA</FormUserInput>
            <FormUserButton color={'#271810'} onPress={handleButtonPress}>ENTRAR</FormUserButton>
            <View style={{
                alignItems: 'center',
                justifyContent: 'center',
                gap: 10,
            }}>
                <FormUserLink onPress={() => navigation.navigate('ForgotPassword')}>Esqueci a senha</FormUserLink>
                <FormUserLink onPress={() => navigation.navigate('SignUp')}>Crie uma conta aqui</FormUserLink>
            </View>
        </UserForm>
    )
};

export default SignInForm;