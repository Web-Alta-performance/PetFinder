import { View } from 'react-native';
import { UserForm, FormUserInput, FormUserButton, FormUserLink } from '../UserForm/UserForm';
import { useContext, useRef, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { contentTable } from '../../services/localization';

const SignInForm = ({ navigation }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const passwordInput = useRef();

    const { login } = useContext(AuthContext);

    const handleButtonPress = async () => {
        if (!email || !password) {
            alert('Por favor, preencha todos os campos');
            return;
        }

        await login({ email, password });
    };

    const clearFormsAndGoToScreen = (screen) => {
        setEmail('');
        setPassword('');
        navigation.navigate(screen);
    }

    return (
        <UserForm
            height={400}
            navigation={navigation}
        >
            <FormUserInput onChange={setEmail} value={email} onSubmitEditing={() => passwordInput.current.focus()}>E-MAIL</FormUserInput>
            <FormUserInput onChange={setPassword} value={password} secure ref={passwordInput} onSubmitEditing={handleButtonPress}>{contentTable.passwordLabel.toUpperCase()}</FormUserInput>
            <FormUserButton color={'#271810'} onPress={handleButtonPress}>{contentTable.loginButton.toUpperCase()}</FormUserButton>
            <View style={{
                alignItems: 'center',
                justifyContent: 'center',
                gap: 10,
            }}>
                <FormUserLink onPress={() => clearFormsAndGoToScreen('ForgotPassword')}>{contentTable.forgotPasswordLabel}</FormUserLink>
                <FormUserLink onPress={() => clearFormsAndGoToScreen('SignUp')}>{contentTable.createAccountLabel}</FormUserLink>
            </View>
        </UserForm>
    )
};

export default SignInForm;