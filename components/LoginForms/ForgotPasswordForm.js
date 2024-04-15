import { View } from 'react-native';
import { UserForm, FormUserInput, FormUserButton, FormUserLink } from '../UserForm/UserForm';
import { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';

const ForgotPasswordForm = ({ navigation }) => {

    const [email, setEmail] = useState('');
    const [newPassword, setNewPassword] = useState('');

    const { changePassword } = useContext(AuthContext)

    const handleButtonPress = async () => {
        if (!email || !newPassword) {
            alert('Por favor, preencha todos os campos')
            return;
        }

        await changePassword({ email, newPassword });
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