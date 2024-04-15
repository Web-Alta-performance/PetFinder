import { createContext, useState } from 'react';
import { registerUser, userChangePassword, userLogin } from '../services/api';
import { AxiosError } from 'axios';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const [userToken, setUserToken] = useState();
    const [userInfo, setUserInfo] = useState();

    const register = async ({
        name,
        email,
        password,
    }) => {
        try {
            await registerUser({
                name,
                email,
                password
            });
        } catch (error) {
            if (error instanceof AxiosError) {
                if (error.response.status === 400) {
                    return console.log(error.response.data)
                }
                return console.log(error.toJSON());
            }
            return console.log(error);
        }
    }

    const login = async ({
        email,
        password,
    }) => {
        try {
            const { token } = await userLogin({ email, password });
            setUserToken(token);
        } catch (error) {
            if (error instanceof AxiosError) {
                if (error.response.status === 400) {
                    alert('Nome de usuário ou senha incorretos.');
                    return console.log(error.response.data.message);
                };
            }
            return console.log(error);
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
            console.log(error);
        }
    };

    return (
        <AuthContext.Provider
            value={{
                userToken,
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