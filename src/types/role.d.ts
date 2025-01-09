import {Permission} from "@/types/permission";

export interface Role {
    id: string;
    name: string;
    is_system_role: boolean;
    permissions: Permission[];
}

