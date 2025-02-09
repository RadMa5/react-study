import { createSlice } from '@reduxjs/toolkit';

export const ProductSlice = createSlice({
    name: 'product',
    initialState: {
        id: 0,
        title: 'No title',
        description: '',
        available: false
    },
    reducers: {
        changeId: (state, action) => {
            state.id = action.payload;
        },
        changeName: (state, action) => {
            state.name = action.payload;
        },
        changeDescription: (state, action) => {
            state.description = action.payload;
        },
        changeAvailability: (state, action) => {
            state.available = action.payload;
        }
    }
});

export const {changeId, changeName, changeDescription, changeAvailability} = ProductSlice.actions;
export default ProductSlice.reducer;