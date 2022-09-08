import React from 'react'
import { NavLink } from 'react-router-dom'
import "../../../src/App.css"
import img1 from "../../img/user.png"
import img3 from "../../img/carrito.png"

const Header = () => {
    const a = 'header__link'
  return (
    <header className="header">
        <NavLink to='/' >
            <h1 className='header__logo'>e-comerce</h1>
        </NavLink >

        <nav className="header__nav">
            <ul className="header__list">
                <li className="header__item"><NavLink className={({isActive}) => isActive ? "active": ""} to='/login'> 
                <img src={img1} alt="" />
            </NavLink></li>

                <li className="header__item"><NavLink className='header__link' to='/purchases'> P   </NavLink></li>

                <li className="header__item"><NavLink className='header__link' to='/cart'> <img src={img3} alt="" />  </NavLink></li>
            </ul>
        </nav>
    </header>
    )
}

export default Header