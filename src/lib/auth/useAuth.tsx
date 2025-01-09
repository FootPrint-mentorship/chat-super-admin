import React, {createContext, useContext, useEffect, useState} from 'react';
import {LoginResponse} from "@/types/profile";
import {useAppDispatch, useAppSelector} from "@/hook/useReduxTypes";
import Cookies from "js-cookie";
import {authTokenStorageKeyName} from "@/constant";

interface AuthContextType {
    isAuthenticated: boolean;
    hasPermission: boolean;
    userProfile: LoginResponse['data']['user_profile'] | null;
    isLoading: boolean;
    error: string | null | unknown;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider = ({children}: { children: React.ReactNode }) => {
     const [isInitialized, setIsInitialized] = useState(false);
    const dispatch = useAppDispatch();
    const {isAuthenticated, isLoading, error, userProfile, hasPermission} = useAppSelector(state => state.auth);

    useEffect(() => {
        // const token = localStorage.getItem('token');
        const token =  Cookies.get(authTokenStorageKeyName as string);

        console.log(token)
        if (!token) {

            return;
        }

        const fetchProfile = async () => {

            try {
            // const res = await dispatch(getProfile());
            //
            //     console.log(res)

            } catch (err) {

            } finally {
                // setIsLoading(false);
                setIsInitialized(true);
            }
        };

        if (!isInitialized) {
            fetchProfile();
        }
    }, [dispatch, isInitialized]);


    return (
        <AuthContext.Provider value={{isAuthenticated, hasPermission, userProfile, isLoading, error}}>
            {children}
        </AuthContext.Provider>
    );
};
