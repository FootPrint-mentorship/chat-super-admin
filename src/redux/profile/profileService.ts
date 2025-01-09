import axiosInstance from "@/lib/api/axiosInstance";
import {API} from "@/constant";

const API_URL = "/auth/auth/";

//get user profile
const getProfile = async () => {
    const response = await axiosInstance.get(API + API_URL + "profile");
    console.log(response)

    return response.data;
};


const profileService = {
    getProfile,
};

export default profileService;