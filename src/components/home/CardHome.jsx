import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../../img/icon.png'
import getConfig from '../../utils/getConfig'
const CardHome = ({product}) => {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate(`/product/${product.id}`)
    }

//   console.log(product)
    const handleAddCard = e => {
        e.stopPropagation()
        const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/cart'
        const obj = {
            id: product.id,
            quantity: 1,
        }
       
        axios.post(URL,obj, getConfig())
        .then(res => console.log(res.data) )
        .catch(err => console.log(err) )    
    }
    return (
        <article onClick={handleClick} className='card-home'>
            
            
            <header className='card-home_header'>
                <img src={product.productImgs[0]} alt="" />
            </header>
            
            <div className='card-home__body'>
                <h3 className='card-home__name'> 
                    {product.title}
                </h3>
                <section className='card-home__price'>
                    <div className="card-home-price__contain">
                        <h4>Price: </h4>
                        <span className='card-home__price-value'>{product.price}</span>
                    </div>
                    <div className="card-home-contenedor__btn">
                        <button onClick={handleAddCard}><img src={logo} alt="" /></button>
                    </div>
                </section>
            </div>
        </article>
  )
}

export default CardHome