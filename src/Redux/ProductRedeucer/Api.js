import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchData = createAsyncThunk(
    'products/fetchData',

    async () => {
        try {
            const response = await axios.get("https://6636514b415f4e1a5e26ff23.mockapi.io/Product");

            const data = response.data;

            return data;
        } catch (error) {
            throw Error("Error fetching data");
        }
    }
);
