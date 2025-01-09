import axios from "axios";
import axiosInstance from "@/lib/api/axiosInstance";
import Cookies from 'js-cookie';
import {API, authRefreshTokenStorageKeyName, authTokenStorageKeyName} from "@/constant";

const API_URL = "/auth/auth/";

//Register user
const register = async (userData: any) => {
    const response = await axios.post(API_URL, userData);

    if (response.data) {
        localStorage.setItem("user", JSON.stringify(response.data));
    }

    return response.data;
};

//Logout user
const logout = () => {
        localStorage.removeItem(authRefreshTokenStorageKeyName as string);
        localStorage.removeItem(authTokenStorageKeyName as string);
        Cookies.remove(authRefreshTokenStorageKeyName as string);
        Cookies.remove(authTokenStorageKeyName as string);

    };

//login user
const login = async (userData: {email: string; password: string}) => {
    const response = await axiosInstance.post(API + API_URL + "login", userData);
    console.log("Loginresponse:", response)
    if (response.data) {
        Cookies.set(authTokenStorageKeyName as string,response.data.token.access_token)
        Cookies.set(authRefreshTokenStorageKeyName as string,response.data.token.access_token)
        localStorage.setItem(authTokenStorageKeyName as string, response.data.token.refresh_token)
        localStorage.setItem(authRefreshTokenStorageKeyName as string, response.data.token.refresh_token)
    }

    return response.data;
};


const authService = {
    register,
    logout,
    login,
};

export default authService;