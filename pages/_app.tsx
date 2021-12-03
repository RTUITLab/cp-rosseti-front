import { ChakraProvider } from "@chakra-ui/react";
import {Provider, useDispatch} from 'react-redux'
import {PersistGate} from 'redux-persist/integration/react'
import store, {persistors} from "./redux/store";
import { Header } from "../components/Header/Headet";
import { useEffect } from "react";
import { authActions, login } from "./redux/store/auth-reducer";

export default function App({Component, pageProps}) {
    return (
    <ChakraProvider>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistors}>
                <Header/>
                <Component {...pageProps}/>
            </PersistGate>
        </Provider>
    </ChakraProvider>
    )
}