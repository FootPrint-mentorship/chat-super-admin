import "@/styles/globals.css";
import type {AppProps} from "next/app";
import {QueryClient} from "@tanstack/query-core";
import React, {ReactElement, useState} from "react";
import {QueryClientProvider} from "@tanstack/react-query";
import {ToastContainer} from 'react-toastify';
import {NextComponentType, NextPageContext} from "next";
import {Provider} from "react-redux";
import {persistor, store} from "@/store/store";
import {PersistGate} from "redux-persist/integration/react";


interface MyAppProps extends AppProps<ReactElement | null> {
    Component: NextComponentType<NextPageContext, unknown, unknown> & {
        getLayout: (page: ReactElement) => ReactElement;
    };
}

export default function App(props: MyAppProps) {
    const [queryClient] = useState(() => new QueryClient());

    const {Component, pageProps} = props;
    const getLayout = Component?.getLayout ?? ((page) => page);


    return (
        <PersistGate persistor={persistor}>
            <Provider store={store}>
                <QueryClientProvider client={queryClient}>
                    {getLayout(<Component {...pageProps} />)}
                    <ToastContainer/>
                </QueryClientProvider>
            </Provider>
        </PersistGate>


    );
}
