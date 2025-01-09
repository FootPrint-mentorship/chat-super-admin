import {Role} from "@/types/role";
import {Organization} from "@/types/organization";

export interface UserProfile {
    user: {
        id: string;
        first_name: string;
        last_name: string;
        email: string;
        picture: string;
        email_verified: boolean;
        user_type: string;
        organization: Organization;
        roles: Role[];
        last_login: string;
        date_joined: string;
    };
}

export interface LoginResponse {
    success: boolean;
    error: {
        message: string;
        detail: string;
    };
    data: {
        token: string | null;
        user_profile: { user_profile: UserProfile };
    };
}