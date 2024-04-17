import { View } from 'react-native';
import { UserForm, FormUserInput, FormUserButton, FormUserLink } from '../UserForm/UserForm';
import { useContext, useRef, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { contentTable } from '../../services/localization';

const ForgotPasswordForm = ({ navigation }) => {

    const [email, setEmail] = useState('');
    const [newPassword, setNewPassword] = useState('');

    const newPasswordInput = useRef();

    const { changePassword } = useContext(AuthContext)

    const handleButtonPress = async () => {
        if (!email || !newPassword) {
            alert('Por favor, preencha todos os campos')
            return;
        }

        await changePassword({ email, newPassword }).then(() => {
            alert('Senha alterada com sucesso!');
            navigation.navigate('SignIn');
        });
    }

    return (
        <UserForm
            height={370}
            navigation={navigation}
        >
            <FormUserInput onChange={setEmail} value={email} onSubmitEditing={() => newPasswordInput.current.focus()}>E-MAIL</FormUserInput>
            <FormUserInput onChange={setNewPassword} value={newPassword} secure ref={newPasswordInput} onSubmitEditing={handleButtonPress}>
                {contentTable.newPasswordLabel.toUpperCase()}
            </FormUserInput>
            <FormUserButton color={'#E59466'} onPress={handleButtonPress}>{contentTable.forgotPasswordButton.toUpperCase()}</FormUserButton>
            <View style={{
                alignItems: 'center',
                justifyContent: 'center',
                gap: 10,
            }}>
                <FormUserLink onPress={() => navigation.navigate('SignIn')}>{contentTable.signInLabel}</FormUserLink>
            </View>
        </UserForm>
    )
};

export default ForgotPasswordForm;