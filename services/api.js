import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.1.8:3000'
});

export const userRegister = async ({
    name,
    email,
    password,
}) => {
    const response = await api.post('/users', {
        name,
        email,
        password
    });

    return response.body;
}

export const userLogin = async ({
    email,
    password,
}) => {
    const response = await api.post('/users/auth', {
        email,
        password
    });

    return response.data;
}

export const userChangePassword = async ({
    email,
    newPassword,
}) => {
    alert('Essa função ainda está em progresso. Por favor, contate um administrador.');
};

export default api;