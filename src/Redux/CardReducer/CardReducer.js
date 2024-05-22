// CardReducer file
import { createSlice } from '@reduxjs/toolkit';
import { fetchCard } from './CardApi';

const initialState = {
    Card: {},
    status: 'idle',
}

const cardSlice = createSlice({
    name: 'cardDetail',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCard.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchCard.fulfilled, (state, action) => {
                state.status = 'success';
                state.Card = action.payload;
            })
            .addCase(fetchCard.rejected, (state) => {
                state.status = 'failed';
            });
    },
});

export const cardReducer = cardSlice.reducer;
