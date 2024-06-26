import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.1.8:3000'
});

export const userRegister = async ({
    name,
    email,
    password,
}) => {
    await api.post('/users', {
        name,
        email,
        password
    });
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
    const response = await api.patch(`/users/${email}`, {
        password: newPassword
    });
};

export default api;