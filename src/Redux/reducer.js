import axios from "axios"
import { GET_PRODUCTS_DATA, GET_PROD_FAILURE, GET_PROD_REQ, GET_PROD_SUCCESS } from "./actionTypes"


const initState = {
    products:[],
    isLoading:false,
    isError:false
}

export const Reducer = (state = initState, action)=>{
    // add the switch statement for different actions
    switch(action.type){
        case GET_PROD_REQ:
            return {...state, isLoading: true}
        case GET_PROD_SUCCESS:
            return {...state, isLoading: false}
        case GET_PROD_FAILURE:
            return {...state, isLoading: false, isError: true}
        case GET_PRODUCTS_DATA:
            axios.get("https://movie-fake-server.herokuapp.com/products").then(({data}) => {
                console.log(data);
                return {...state, isLoading: false, products: data.data}
            }).catch((error) => {
                console.log(error)
            })
                
        default:
            return state;
    }
}