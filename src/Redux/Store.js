import { configureStore } from "@reduxjs/toolkit";
import { productReducer } from "../Redux/ProductRedeucer/Reducer";
import { cardReducer } from "../Redux/CardReducer/CardReducer";

const store = configureStore({
    reducer: {
        product: productReducer,
        card: cardReducer,
    }
})


export default store;