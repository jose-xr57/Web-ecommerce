import axios from 'axios'
import React, { useEffect, useState } from 'react'
import getConfig from '../../utils/getConfig'
import ProductCartInfo from '../cart/ProductCartInfo'
import "../cart/cart.css"

const Cart = () => {
    const [cartProducts, setCartProducts] = useState( )

    const getAllProductCart = () => {
        const URL = "https://ecommerce-api-react.herokuapp.com/api/v1/cart"
        axios.get(URL, getConfig())
        .then(res => setCartProducts(res.data.data.cart.products))
        .catch(err => setCartProducts())
    }

    useEffect(() => {
        getAllProductCart()
        
    }, [])
    // console.log(cartProducts.data.cart.products)
    const handleCheckout = () => {
        const URL = "https://ecommerce-api-react.herokuapp.com/api/v1/purchases"
        const obj = {
            street: "Green St. 1456",
            colony: "Southwest",
            zipCode: 12345,
            city: "USA",
            references: "Some refrences"
        }
        axios.post(URL, obj, getConfig())
            .then(res => {
                console.log(res.data)
                getAllProductCart()
            }) 
            
            .catch(err => console.log(err))
    }
  return (
    <section className="cart">
        <div className="contain_card">
            <div className="card_title">
                <h1>Card</h1>
            </div>
            <div className="contain_card__product">

                {
                    cartProducts?.map(product => (
                        <ProductCartInfo
                        key={product.id}
                        product={product}
                        getAllProductCart={getAllProductCart}
                        />
                    ))
                }
            </div>
        </div>



        <hr className="cart__hr" />
        <footer className='footer'>
            <div className="containn">
                <span className="cart__total-global-label">Total:</span>
                <p className="cart__total-global-value">1350</p>
            </div>
            <div className="contenedor___button">

                <button onClick={handleCheckout} className="cart__btn">Checkout</button>
            </div>
        </footer> 
        
    </section>
  )
}

export default Cart