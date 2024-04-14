import { View } from 'react-native';
import { UserForm, FormUserInput, FormUserButton, FormUserLink } from '../UserForm/UserForm';
import { useState } from 'react';
import { registerUser } from '../../services/api';

const SignInForm = ({ navigation }) => {
    {/* TODO: use UseContext hook to avoid these types of prop */ }

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleButtonPress = () => {
        // check if form is filled
        if (!name
            || !email
            || !password
            || !confirmPassword) {
            alert('Por favor, preencha os campos.');
            return;
        }

        // check password and confirm password
        if (password !== confirmPassword) {
            alert('As senhas não coincidem');
            return;
        }

    };

    return (
        <UserForm
            height={560}
            navigation={navigation}
        >
            <FormUserInput onChange={setName} value={name}>NOME DE USUÁRIO</FormUserInput>
            <FormUserInput onChange={setEmail} value={email}>E-MAIL</FormUserInput>
            <FormUserInput onChange={setPassword} value={password} secure>SENHA</FormUserInput>
            <FormUserInput onChange={setConfirmPassword} value={confirmPassword} secure>CONFIRMAR SENHA</FormUserInput>
            <FormUserButton color={'#4CA9AF'} onPress={() => handleButtonPress()}>CRIAR CONTA</FormUserButton>
            <View style={{
                alignItems: 'center',
                justifyContent: 'center',
                gap: 10,
            }}>
                <FormUserLink onPress={() => navigation.navigate('SignIn')}>Fazer login</FormUserLink>
            </View>
        </UserForm>
    )
};

export default SignInForm;