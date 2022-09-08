import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProductDescription from '../product/ProductDescription'
import SimilarProduct from '../product/SimilarProduct'
import "../home/cardHome.css"
const ProductDetail = () => {
  const [productInfo, setProductInfo] = useState()

  const {id} =  useParams()

  useEffect(() => {
    const URL = `https://ecommerce-api-react.herokuapp.com/api/v1/products/${id}`
    axios.get(URL)
    .then(res => setProductInfo(res.data.data.product))
    .catch(err => console.log(err))
  }, [ ])
  // console.log(productInfo);
  

  return (
    <div>
      <ProductDescription
        productInfoo={productInfo}
      />

        
        <SimilarProduct
        productInfoo={productInfo}
        />

      
      
    </div>
  )
}

export default ProductDetail