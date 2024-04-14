import { View } from 'react-native';
import { UserForm, FormUserInput, FormUserButton, FormUserLink } from '../UserForm/UserForm';
import { useState } from 'react';

const ForgotPasswordForm = ({ navigation }) => {
    {/* TODO: use UseContext hook to avoid these types of prop */ }

    const [email, setEmail] = useState('');
    const [newPassword, setNewPassword] = useState('');

    const handleButtonPress = () => {
        if (!email || !newPassword) {
            alert('Por favor, preencha todos os campos')
            return;
        }
    }

    return (
        <UserForm
            height={370}
            navigation={navigation}
        >
            <FormUserInput onChange={setEmail} value={email}>E-MAIL</FormUserInput>
            <FormUserInput onChange={setNewPassword} value={newPassword} secure>NOVA SENHA</FormUserInput>
            <FormUserButton color={'#E59466'} onPress={(handleButtonPress)}>ALTERAR SENHA</FormUserButton>
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

export default ForgotPasswordForm;