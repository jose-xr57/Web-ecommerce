import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const productsSlice = createSlice({
    name: "product",
    initialState: null,
    reducers: {
        setProduct: (state,action) => action.payload
    }
})
export const {setProduct} = productsSlice.actions

export const getAllProduct = () => (dispatch) => {
    const URL = `https://ecommerce-api-react.herokuapp.com/api/v1/products`
    return axios.get(URL)
    .then(res => dispatch(setProduct(res.data.data.products)))
    .catch(err => console.log(err))
}

export default productsSlice.reducer