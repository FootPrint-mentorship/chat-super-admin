import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import { LoginResponse } from "@/types/profile";
import profileService from "@/redux/profile/profileService";

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


export const getProfile = createAsyncThunk(
    "auth/profile",
    async (_, thunkAPI) => {
        try {
            return await profileService.getProfile();
        } catch (error: any) {
            const message =
                (error.response && error.response.data && error.response.data.message) ||
                error.message ||
                error.toString();

            return thunkAPI.rejectWithValue(message);
        }
    }
);

const profileSlice = createSlice({
    name: 'profile',
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
            .addCase(getProfile.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getProfile.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isAuthenticated = true;
                state.userProfile = action.payload;
            })
            .addCase(getProfile.rejected, (state, action) => {
                state.isLoading = false;
                state.userProfile = null;
                state.error = true;
                state.message = action.payload;
            })
    }
});

export const { reset } = profileSlice.actions;
export default profileSlice.reducer;
