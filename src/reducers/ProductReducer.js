import { ADD_PRODUCT, REDACT_PRODUCT } from "../app/ProductActions";

const initState = [];

const ProductReducer = (state = initState, action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            return [...state, { id: Date.now(), title: action.payload.title, desc: action.payload.desc, price: action.payload.price, available: action.payload.available }];
        default:
            return state;
    }
}

export default ProductReducer;