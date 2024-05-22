// CardApi file
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCard = createAsyncThunk(
    'card/fetchCard',
    async (id) => {
        try {
            const res = await axios.get(`https://6636514b415f4e1a5e26ff23.mockapi.io/Product/${id}`);
            return res.data;
        } catch (error) {
            throw error.message;
        }
    }
);
