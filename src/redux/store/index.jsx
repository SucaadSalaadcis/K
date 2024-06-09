import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "../reducer/cart"
const store = configureStore({
    reducer: {
        cart: CartSlice
    }
})

export default store