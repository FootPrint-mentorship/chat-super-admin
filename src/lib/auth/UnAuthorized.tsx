import { useRouter } from 'next/router';
import type { FC, PropsWithChildren } from 'react';
import { useEffect, useState } from 'react';
import {useAppSelector} from "@/hook/useReduxTypes";
import PropTypes from "prop-types";

export const UnAuthorize: FC<PropsWithChildren> = (props) => {
    const { children } = props;
    const {isAuthenticated, isLoading, error, userProfile, hasPermission, message} = useAppSelector(state => state.auth);

    const { isReady, push, query, asPath } = useRouter();
    const [verified, setVerified] = useState(false);

    console.log(userProfile)

    useEffect(() => {
        if (!isReady  || asPath === '/') return;
        if (isAuthenticated && userProfile) {
            if (userProfile?.user_profile?.user?.user_type === 'ngo') {
                location.assign('/');
            } else {

                if ('user' in userProfile) {

                    const profile = userProfile?.user_profile?.user;
                    console.log(message,"message")
                    console.log(profile,"profile")
                    // if (message.toLowerCase().includes('password')) {
                    //   void push('/auth/set-password');
                    // }

                    if (!profile.first_name) {
                        void push('/auth/set-profile');
                    }

                    if (profile.first_name) {
                        void push('/');
                    }
                    return;
                }

            }
        } else {
            setVerified(true);
        }
    }, [query?.backTo, isReady, push, asPath, isAuthenticated, userProfile, message]);

    if (!verified) {
        return null;
    }

    return <>{children}</>;
};

UnAuthorize.propTypes = {
    children: PropTypes.node,
};
