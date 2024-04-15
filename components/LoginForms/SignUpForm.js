import { View } from 'react-native';
import { UserForm, FormUserInput, FormUserButton, FormUserLink } from '../UserForm/UserForm';
import { useState } from 'react';
import { registerUser, userRegister } from '../../services/api';

const SignInForm = ({ navigation }) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleButtonPress = async () => {
        // check if form is filled
        if (!name
            || !email
            || !password
            || !confirmPassword) {
            alert('Por favor, preencha os campos.');
            return;
        }

        // check if password and confirm password matches
        if (password !== confirmPassword) {
            alert('As senhas não coincidem');
            return;
        }

        await userRegister({ name, email, password }).then(() => {
            navigation.navigate('SignIn');
        });
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