"use client"

import accountReducer from "./accountReducer";
import homepageReducer from "./homepageReducer";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";


const store = configureStore({
    reducer: {
        account: accountReducer,
        homepage: homepageReducer
    }
})

export const ReduxProvider = ({children}) => (
    <Provider store={store}>
        {children}
    </Provider>
)

store.subscribe(() => console.log(store.getState()));