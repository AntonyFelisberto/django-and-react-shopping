import axios, { Axios } from 'axios'
import { PRODUCT_LIST_FAIL,PRODUCT_LIST_SUCCESS,PRODUCT_LIST_REQUEST } from '../constants/productConstants'

const listProduct = () => async (dispatch) => {
    try{
        dispatch({type:PRODUCT_LIST_REQUEST})
        const {data} = await axios.get("/api/products")
        dispatch({
            tyoe:PRODUCT_LIST_SUCCESS,
            process:data
        })
    }catch(error){
        dispatch({
            tyoe:PRODUCT_LIST_FAIL,
            payload:error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
        })
    }
}