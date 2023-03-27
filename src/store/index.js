import {configureStore} from "@reduxjs/toolkit";
import authSlice from "./auth-slice";
import cartslice from "./cartslice";

const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        cart: cartslice.reducer
    }
})

export default store;
