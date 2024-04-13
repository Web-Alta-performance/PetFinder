import { createContext, useState } from 'react';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const [userToken, setUserToken] = useState();

    return (
        <AuthContext.Provider
            value={{
                userToken,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export { AuthProvider };