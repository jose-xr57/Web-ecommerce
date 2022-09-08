import React from 'react'
import FormLogin from './login/FormLogin'
import "./login/login.css"

const Login = () => {
  return (
    <div className='Login-contain'> 
      <div className="box_modal">

        <FormLogin/>
      </div>
    </div>
  )
}

export default Login