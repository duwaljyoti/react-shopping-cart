import {configureStore} from "@reduxjs/toolkit";
import authSlice from "./auth-slice";
import cartslice from "./cartslice";
import uislice from "./uislice";

const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        cart: cartslice.reducer,
        ui: uislice.reducer,
    }
})

export default store;
