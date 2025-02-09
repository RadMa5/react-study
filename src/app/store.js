import { configureStore } from '@reduxjs/toolkit';
import ProductReducer from '../reducers/ProductReducer';


const store = configureStore({
    reducer: {
        product: ProductReducer
    },
});

export default store;