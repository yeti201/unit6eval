import { GET_PRODUCTS_DATA, GET_PROD_FAILURE, GET_PROD_REQ, GET_PROD_SUCCESS, SORT_PRODUCTS } from "./actionTypes";

// action for get products request
export const getProductsReq = () => ({type: GET_PROD_REQ});

// action for get products success

export const getProductsSuccess = () => ({type: GET_PROD_SUCCESS});

// action for get products failure

export const getProductsFailure = () => ({type: GET_PROD_FAILURE});

// thunk call to fetch products  list
export const getproductsData = (payload) => ({type: GET_PRODUCTS_DATA});

// action object for sort  feature

export const sortProducts = () => ({type: SORT_PRODUCTS});
