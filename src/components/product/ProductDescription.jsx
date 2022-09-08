  import React, { useEffect, useState } from 'react'
import "../product/details.css"
import { Link } from 'react-router-dom'
import getConfig from '../../utils/getConfig'
import axios from 'axios'

const ProductDescription = ({productInfoo}) => {
  // console.log(productInfoo)
  const [countImg, setCountImg] = useState(0)
  const [arrImg, setArrImg] = useState()
  const [count, setCount] = useState(1)
  
  useEffect(() => {
    const img =  productInfoo?.productImgs.map(product => product)
    setArrImg(img)
        
  }, [productInfoo])

  const changeImgMasOne = () => {
    if (countImg < arrImg.length-1) {
      setCountImg(countImg+1)
    }  
  }
  const changeImgMenosOne = () => {
    if(countImg > arrImg.length-arrImg.length){
      setCountImg(countImg-1)
    }
  }
  
  // Logica del count quantity
  const countSubtraction = () => {
    if(count - 1 <= 1){
      setCount(1)
    }else{
      setCount(count-1)
    }
  }

  const countAdition = () => {
    setCount(count+1)
  }
  // 
  const handleAddCard = e => {
    const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/cart'
    const obj = {
        id: productInfoo.id,
        quantity: 1,
    }
   
    axios.post(URL,obj, getConfig())
    .then(res => console.log(res.data) )
    .catch(err => console.log(err) )    
}
  return (
    <div>
        {/* <div className="conten">
          <i>Home</i><b className='product__name'>{productInfoo?.title}</b>
        </div> */}
        <div className="cabecera">
          <Link className='enlace__home' to="/">Home</Link>
          <div className="separator element"></div>
          <p className=" element">{productInfoo?.title}</p>
        </div>

        <main className="main__product">

          {/* --------------- */}
          <div className="product-carrusel__contendor" id="none">
            <button className='product-carrusel-contendor__btn btn-position__1' onClick={changeImgMenosOne}>&lt;</button>
              {
                <div className="product-carrusel-contendor__img">

                  <div className="carrusel-contendor__img">
                    <img src={arrImg?.[countImg]} alt="" />
                  </div>

                </div>

              }
            <button className='product-carrusel-contendor__btn btn-position__2' onClick={changeImgMasOne}>&gt;</button>
          </div>
          {/* --------------- */}
          <div className="product-info__contendor">

                <header className="product-info-description__title">
                  <h2>{productInfoo?.title}</h2>
                </header>

              <div className="contenedor-flex__reverse">

                <div className="contain">
                  <div className="product-info__price-cantidad">

                    <div className="info__price">
                      <h4 className='info__style'>Price:</h4>  
                      <i className='product-price__value'>{productInfoo?.price}</i>
                    </div>
                    
                    <div className="info__cantidad">
                      <h4 className='info__style'>Quantity: </h4>
                      <div className="Quantity_contain">
                          <div onClick={countSubtraction} className="Quantity_contain__box">-</div>
                          <div className="Quantity_contain__box contain__box-second">{count}</div>
                          <div onClick={countAdition} className="Quantity_contain__box">+</div>
                      </div>
                    </div>
                  </div>

                    <div className="contenedor__btn-addToCar">
                      <button onClick={handleAddCard} className='btn-addToCar'>
                        Add To Cart
                      </button>
                    </div>
                </div>

                <div className="product-info-description__contenedor">
                      <p className='product-info-description__paragraph'>
                        {productInfoo?.description}
                      </p>
                </div>
                
              </div>





              


          </div>

        </main>

        <section className="section-similar__items">
          <div className="containe">
            <div className="separator element"></div>
            <p className=" element">Discover Similar Items</p>
          </div>
        </section>
    </div>
  )
}
// Los estilos estan en CardHome.css 
export default ProductDescription