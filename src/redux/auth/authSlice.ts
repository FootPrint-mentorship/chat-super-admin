import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import { LoginResponse } from "@/types/profile";
import authService from "@/redux/auth/authService";

interface AuthState {
    isAuthenticated: boolean;
    hasPermission: boolean;
    userProfile: LoginResponse['data']['user_profile'] | null;
    isLoading: boolean;
    error: string | null | unknown;
    message: string | null | unknown;
}

const initialState: AuthState = {
    isAuthenticated: false,
    hasPermission: false,
    userProfile: null,
    isLoading: false,
    error: null,
    message: "",
};

export const login = createAsyncThunk("auth/login", async (user:{ email: string; password: string;}, thunkAPI) => {
    try {
        return await authService.login(user);
    } catch (error: any) {
        const message =
            (error.response && error.response.data && error.response.data.message) ||
            error.message ||
            error.toString();

        return thunkAPI.rejectWithValue(message);
    }
});

export const logout = createAsyncThunk("auth/logout", async () => {
    await authService.logout();
});

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        reset: (state) => {
            state.isLoading = false;
            state.isAuthenticated = false;
            state.error = null;
            state.userProfile = null;
        },
    },
    extraReducers: (builder)=>{
        builder
            .addCase(login.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isAuthenticated = true;
                state.userProfile = action.payload;
            })
            .addCase(login.rejected, (state, action) => {
                state.isLoading = false;
                state.userProfile = null;
                state.error = true;
                state.message = action.payload;
            }).addCase(logout.fulfilled, (state) => {
            state.userProfile = null;
            state.isAuthenticated = false;
            state.isLoading = false;
        })
    }
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;
