import axios from 'axios'
import React from 'react'
import getConfig from '../../utils/getConfig'

const ProductCartInfo = ({product,getAllProductCart}) => {
  console.log(product)

  const handleDeleteProduct = () => {
    const URL = `https://ecommerce-api-react.herokuapp.com/api/v1/cart/${product.id}`
    axios.delete(URL, getConfig())
    .then(() => getAllProductCart())
    .catch(err => console.log(err))
  }
  return (
    <article className="cart__item">
        <header className="cart__item-header item__header">

          <header  >
              <h3 className="cart__category">{product.brand}</h3>
              <h4 className="cart__name">{product.title}</h4>
          </header>
          <button onClick={handleDeleteProduct}> X </button>

        </header>


        <div className="cart_footer">

          <div className="contenedor_quantity">
            <i className="icon"> {product.productsInCart.quantity}</i>
          </div>

          <div>
              <span className="cart__total-label">Total:</span>
              <p className="cart__total-number">{product.price}</p>
          </div>
 
        </div>
    </article>
  )
}

export default ProductCartInfo