import { createContext, useContext, useState } from 'react';
import { IUser } from '../types/user';

interface IAuthContext {
    user: IUser | null;
    login: (user: IUser) => void;
    logout: () => void;
}

const AuthContext = createContext<IAuthContext>({
    user: null,
    login: () => {},
    logout: () => {},
});

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
    const [user, setUser] = useState<IUser | null>(null);

    const login = (user: IUser) => {
        setUser(user);
    };

    const logout = () => {
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};
