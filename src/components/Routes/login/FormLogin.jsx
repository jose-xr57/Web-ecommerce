import axios from 'axios'
import React from 'react'
import {useForm} from 'react-hook-form'
const FormLogin = () => {

    const {register , handleSubmit, reset} = useForm()
    
    const submit = data => {
        // console.log(data)

        const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/users/login'
        axios.post(URL, data)
        .then(res => {
            localStorage.setItem( 'token', res.data.data.token)
        })
        .catch(err => console.log(err))

        // reset({
        //     email: '',
        //     password: '',
        // })
    }
    return (
    <form onSubmit={handleSubmit(submit)} className="formulario">
        <h2>Welcome! Enter your email and password to continue</h2>
        <div className="section">
            <div className="section_contain">

                <div className="login-contain">
                    <label className='Login_label' htmlFor='email'>Email</label>
                    <input {...register('email')} className='Login_input' type="email" id='email' />
                </div>

                <div className="login-contain">
                    <label className='Login_label' htmlFor='password'>Password</label>
                    <input {...register('password')} className='Login_input' type="password" id='password' />
                </div>

            </div>
        </div>

    <div className="container_btn">
        <button>Login</button>
    </div>

    </form>
  )
}

export default FormLogin