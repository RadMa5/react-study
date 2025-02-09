export const ADD_PRODUCT = "ADD_PRODUCT";
export const REDACT_PRODUCT = "REDACT_PRODUCT";

export const addProduct = (title, desc, price, available) => ({
    type: ADD_PRODUCT,
    payload: { title: title, desc: desc, price: price, available: available }
});

export const redactProduct = (title, desc, price, available, id) => ({
    type: REDACT_PRODUCT,
    payload: { title: title, desc: desc, price: price, available: available, id: id }
});