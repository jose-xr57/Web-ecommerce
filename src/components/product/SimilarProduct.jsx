import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import CardHome from '../home/cardHome'

const SimilarProduct = ({productInfoo,product}) => {
    const [filterProducts, setFilterProducts] = useState()
    
    const products = useSelector(state => state.products)
    
    useEffect(() => {
        if(productInfoo){
            const filter = products.filter( e => e.category.name === productInfoo.category)
            setFilterProducts(filter);
        }
    }, [productInfoo])

    console.log(filterProducts)
  return (
        <div className="home__container-card">
        {
            filterProducts?.map(product => {
                if(product.title !== productInfoo.title){ 
                  return <CardHome
                  key={product.id}
                  product={product}
                  />
                //   <article className='_card-home'>
                //     <header className='_card-home-header'>
                //         <img src={filterProducts?.productImgs[0]} alt="" />
                //     </header>
                    
                //     <div className='_card-home-body'>
                //         <h3 className='_card-home-name'> 
                //             {filterProducts?.title}
                //         </h3>
                //         <section className='_card-home-price'>
                //           <div className="_card-home-price-contain">
                //             <h4>Price: </h4>
                //             <span className='_card-home-price-value'>{filterProducts?.price}</span>
                //           </div> 

                //           <div className="_card-home-contenedor-btn">
                //             <button>.</button>
                //           </div>
                //         </section>

                //     </div>
                // </article>
                }

            })

        }
       </div>

  )
}

export default SimilarProduct

//  https://ecommerce-api-react.herokuapp.com/api/v1/products

//  ?category=1