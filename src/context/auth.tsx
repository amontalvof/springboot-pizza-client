import { createContext, useContext, useState } from 'react';
import { IUser } from '../types/user';

interface IAuthContext {
    token: string | null;
    login: (user: IUser) => void;
    logout: () => void;
}

const AuthContext = createContext<IAuthContext>({
    token: null,
    login: () => {},
    logout: () => {},
});

const getTokenFromSessionStorage = () => {
    return sessionStorage.getItem('token');
};

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
    const [token, setToken] = useState<string | null>(
        getTokenFromSessionStorage()
    );

    const login = (user: IUser) => {
        const { username, password } = user;
        const token = btoa(`${username}:${password}`);
        sessionStorage.setItem('token', token);
        setToken(token);
    };

    const logout = () => {
        setToken(null);
        sessionStorage.removeItem('token');
    };

    return (
        <AuthContext.Provider value={{ token, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};
