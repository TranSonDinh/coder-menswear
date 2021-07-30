import { INIT_STATE } from "../../constant";
import { getProducts, createProduct,updateProduct, getType } from "../actions";

export default function productsReducers(state = INIT_STATE.products, action) {
    switch(action.type){
        case getType(getProducts.getProductsRequest):
            return{
                ...state,
                isLoading : true
            };
        case getType(getProducts.getProductsSuccess):
            return{
                ...state,
                isLoading : false,
                data: action.payload
            };
        case getType(getProducts.getProductFailure):
            return{
                ...state,
                isLoading : false
            };
        case getType(createProduct.createProductRequest):
            return{
                ...state,
                data : [...state.data, action.payload],
            };
        case getType(updateProduct.updateProductSuccess):
            return {
                ...state,
                data: state.data.map((product) =>
                product._id === action.payload._id ? action.payload : product
                ),
            };
        default: 
            return state;
    }
}