import { View } from 'react-native';
import { UserForm, FormUserInput, FormUserButton, FormUserLink } from '../UserForm/UserForm';
import { useState } from 'react';

const SignInForm = ({ navigation }) => {
    {/* TODO: use UseContext hook to avoid these types of prop */ }

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [forgotPassword, setForgotPassword] = useState('');

    return (
        <UserForm
            height={550}
            navigation={navigation}
        >
            <FormUserInput>NOME DE USUÁRIO</FormUserInput>
            <FormUserInput onChange={setEmail} value={email}>E-MAIL</FormUserInput>
            <FormUserInput onChange={setPassword} value={password} secure>SENHA</FormUserInput>
            <FormUserInput onChange={setForgotPassword} value={forgotPassword} secure>CONFIRMAR SENHA</FormUserInput>
            <FormUserButton color={'#4CA9AF'}>CRIAR CONTA</FormUserButton>
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