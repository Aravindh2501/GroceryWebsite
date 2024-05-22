import { createSlice } from "@reduxjs/toolkit";
import { fetchData } from "./Api";


const initialState = {
    products: [],
    filteredProducts: [],
    status: "idle",
    error: null,
    AddCart: [],
    user: null,
}

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.AddCart.push(action.payload);
        },
        removeToCart: (state, action) => {
            state.AddCart = state.AddCart.filter(cart => cart.id !== action.payload);
        },
        login: (state, action) => {
            state.user = action.payload;
        },
        logout: (state) => {
            state.user = null;
        },
        filterByCategory: (state, action) => {
            if (action.payload) {
                state.filteredProducts = state.products.filter(product => product.category === action.payload);
            } else {
                state.filteredProducts = state.products;
            }
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchData.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchData.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.products = action.payload;
                state.filteredProducts = action.payload;
            })
            .addCase(fetchData.rejected, (state) => {
                state.status = "failed";
            });
    }
});

export const { addToCart, removeToCart, login, logout, filterByCategory } = productSlice.actions;

export const productReducer = productSlice.reducer;
