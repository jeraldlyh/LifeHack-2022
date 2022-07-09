import { createContext, useContext, useState } from "react";
import firebaseApp from "../database/firebase";
import { getAuth, signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword } from "firebase/auth";
import { BYPASS_LOGIN } from "@env";

type TProviderProps = {
    children?: React.ReactNode;
};

type TContext = {
    isLoggedIn: boolean;
    isLoading: boolean;
    login: (email: string, password: string) => Promise<void>;
    logout: () => Promise<void>;
    register: (email: string, password: string) => Promise<void>;
};
const initialContext = {
    isLoggedIn: false,
    isLoading: false,
    login: async () => undefined,
    logout: async () => undefined,
    register: async () => undefined,
};

export const AuthContext = createContext<TContext>(initialContext);

export const AuthProvider: React.FC<TProviderProps> = ({ children }) => {
    const auth = useCustomAuth();

    return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);

const useCustomAuth = () => {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(BYPASS_LOGIN || false);

    const firebaseAuth = getAuth(firebaseApp);

    const login = async (email: string, password: string) => {
        try {
            setIsLoading(true);
            await signInWithEmailAndPassword(firebaseAuth, email, password);
            setIsLoggedIn(true);
        } catch (error) {
            console.warn(error);
        } finally {
            setIsLoading(false);
        }
    };

    const logout = async () => {
        try {
            setIsLoading(true);
            await signOut(firebaseAuth);
            setIsLoggedIn(false);
        } catch (error) {
            console.warn(error);
        } finally {
            setIsLoading(false);
        }
    };

    const register = async (email: string, password: string) => {
        try {
            setIsLoading(true);
            await createUserWithEmailAndPassword(firebaseAuth, email, password);
            setIsLoggedIn(true);
        } catch (error) {
            console.warn(error);
        } finally {
            setIsLoading(false);
        }
    };

    return {
        isLoggedIn,
        isLoading,
        login,
        logout,
        register,
    };
};
