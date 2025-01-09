import {useRouter} from "next/router";
import {FC, ReactNode, useEffect, useState} from "react";
import {useAppSelector} from "@/hook/useReduxTypes";
import {authRoutePathname, authTokenStorageKeyName} from "@/constant";
import Cookies from "js-cookie";

interface AuthenticatedProps {
    children: ReactNode;
}


export const Authenticated: FC<AuthenticatedProps> = (props) => {
    const { children } = props;
    const {isLoading} = useAppSelector(state => state.auth);

    const [verified, setVerified] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const token =  Cookies.get(authTokenStorageKeyName as string);

        if (!router.isReady || isLoading ) return;

        if (token) {
            void router.push(`${authRoutePathname}/login` as string);
        } else {
            setVerified(true);
        }
    }, [isLoading, router, verified]);

    if (!verified) {
        return null;
    }

    return <>{children}</>;

};
