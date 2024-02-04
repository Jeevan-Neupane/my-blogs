import { api } from "./api/api";
import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slice/userSlice";

const store = configureStore({
    reducer: {
        user: userSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware)
})

export default store;