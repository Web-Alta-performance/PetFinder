import { createContext, useState } from 'react';
import { userChangePassword, userLogin, userRegister } from '../services/api';
import { AxiosError } from 'axios';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const [userToken, setUserToken] = useState('');
    const [userInfo, setUserInfo] = useState();

    const register = async ({
        name,
        email,
        password,
    }) => {
        try {
            await userRegister({
                name,
                email,
                password
            });
        } catch (error) {
            if (error instanceof AxiosError) {
                switch (error.response.status) {
                    case 400:
                        alert('E-mail inválido.');
                        console.log(error.response.data);
                        break;
                    case 401:
                        alert('Já existe um usuário com este e-mail.');
                        break;

                    default: alert('Ops, algo deu errado!');
                }
            } else {
                console.log(error.toJSON());
            }
        }
    }

    const login = async ({
        email,
        password,
    }) => {
        try {
            const { token, user } = await userLogin({ email, password });
            setUserInfo({
                name: user.name,
                email: user.email,
                phone_number: user.phone_number,
            });
            setUserToken(token);
        } catch (error) {
            if (error instanceof AxiosError) {
                switch (error.response.status) {
                    case 400:
                        alert('Nome de usuário ou senha incorretos.');
                        console.log(error.response.data.message);
                        break;

                    default: alert('Ops, algo deu errado!');
                }
            } else {
                console.log(error.toJSON());
            }
        }
    };

    const changePassword = async ({
        email,
        newPassword,
    }) => {
        try {
            await userChangePassword({
                email,
                newPassword
            });
        } catch (error) {
            if (error instanceof AxiosError) {
                switch (error.response.status) {
                    case 400:
                        alert('E-mail inválido.');
                        break;

                    default: alert('Ops, algo deu errado!');
                }
            } else {
                console.log(error.toJSON());
            }
        }
    };

    return (
        <AuthContext.Provider
            value={{
                userToken,
                userInfo,
                login,
                register,
                changePassword,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export { AuthProvider };