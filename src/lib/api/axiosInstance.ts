import axios, {AxiosError, AxiosInstance, AxiosResponse} from 'axios';
import {API, authRefreshTokenStorageKeyName, authRoutePathname, authTokenStorageKeyName} from "@/constant";
import {handleLogout} from "@/util";
import Cookies from "js-cookie";

const baseURL = API;

// Create Axios instance with configuration
const axiosInstance: AxiosInstance = axios.create({
    baseURL,
    headers: {
        'Content-Type': 'application/json',
    },
    timeout: 10000, // 10 seconds timeout
});

// Helper function to get token based on environment
const getToken = (): string | null => {
    if (typeof window !== 'undefined') {
        // Client-side: Get token from cookies
        return Cookies.get(authTokenStorageKeyName as string) ||  Cookies.get(authTokenStorageKeyName as string) || null;
    } else {
        // Server-side: Token retrieval from cookies or request headers
        return null;
    }
};


axiosInstance.interceptors.request.use(
    (config) => {
        const token = getToken();
        if (token) {

            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    (error: AxiosError) => {
        return Promise.reject(error);
    }
);

// Intercept all responses to handle token expiration
axiosInstance.interceptors.response.use(
    (response: AxiosResponse) => {
        return response.data;
    },
    async (error: AxiosError) => {
        const originalRequest = error.config;
        // const router = useRouter();
        const refreshToken = localStorage.getItem(authRefreshTokenStorageKeyName as string);


        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        if (error.response?.status === 401 || error?.response?.status === 403 && !originalRequest._retry) {

            if (typeof window !== "undefined") {
                const pathname = window.location.pathname;
                if (pathname.endsWith("/") || pathname.startsWith("/auth")) {
                    /* @HINT: No logged-in user, so return error response here */
                    /* @HINT: Return control flow so refresh token API endpoint isn't called */
                    return Promise.reject(
                        new AxiosError(
                            error.message,
                            error.code,
                            error.request,
                        )
                    );
                }

                /* @HINT: Log user out immediately */
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-expect-error
                originalRequest._retry = true;

                // const currentPath = router.asPath; // Get the current route path/


                handleLogout()

                // Redirect user to the login page
                // router.push(`/login?redirect=${encodeURIComponent(currentPath)}`);

                window.location.href = `${authRoutePathname}/login`;

                return;
            }


            return axiosInstance.post(`${API}/auth/auth/refresh-token`, {
                token: refreshToken,
            }).then((response) => {
                if (response.data.status && response.data.success !== false) {
                    if (response.data) {
                        Cookies.set(authTokenStorageKeyName as string, response.data.data.token.access_token);
                        Cookies.set(authRefreshTokenStorageKeyName as string, response.data.data.token.refresh_token);

                    }
                }
                throw new Error(
                    "response unavailable"
                );
            }).catch(() => {

                handleLogout()

                // Redirect user to the login page
                console.log("windows:", window)
                window.location.href = `${authRoutePathname}/login`;

                return;
            })

        }

        return Promise.reject(error);
    }
);

export default axiosInstance;
