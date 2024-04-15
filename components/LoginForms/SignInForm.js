import { View } from 'react-native';
import { UserForm, FormUserInput, FormUserButton, FormUserLink } from '../UserForm/UserForm';
import { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';

const SignInForm = ({ navigation }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { login } = useContext(AuthContext);

    const handleButtonPress = async () => {
        if (!email || !password) {
            alert('Por favor, preencha todos os campos');
            return;
        }

        await login({ email, password }).catch(error => console.log(error));
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