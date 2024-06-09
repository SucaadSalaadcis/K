import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({

    name: "cart",
    initialState: {
        cartItems: [],
        totalPrice: 0
    },

    reducers: {
        addToCart: (state, action) => {
            const newData = action.payload
            state.cartItems.push(newData)
        },

        removeFromCart: (state, action) => {
            const itemId = action.payload;
            state.cartItems = state.cartItems.filter((item) =>  item.id != itemId.id)
        },

        calculateTotalPrice: (state) => {
                let total = 0;
                state.cartItems.forEach((item) => {
                    total += item.price
                })
                state.totalPrice = total
        }


    }

})

export const {addToCart, calculateTotalPrice, removeFromCart} = cartSlice.actions
export default cartSlice.reducer