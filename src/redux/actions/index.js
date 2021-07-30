import { createActions, createAction } from 'redux-actions';

export const getType = (reduxAction) => {
    return reduxAction().type;
}

export const getProducts = createActions({
    getProductsRequest : undefined,
    getProductsSuccess: (payload) => payload,
    getProductFailure: (err) => err
});

export const createProduct = createActions({
    createProductRequest : (payload) => payload,
    createProductSuccess : (payload) => payload,
    createProductFailure : (err) => err,
});
export const updateProduct = createActions({
    updateProductRequest : (payload) => payload,
    updateProductSuccess : (payload) => payload,
    updateProductFailure : (err) => err,
});
export const deleteProduct = createActions({
    deleteProductRequest : (payload) => payload,
    deleteProductSuccess : (payload) => payload,
    deleteProductFailure : (err) => err,
});
