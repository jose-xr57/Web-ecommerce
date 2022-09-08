import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoutes = () => {
    const isLoged = localStorage.getItem("token")

    if (isLoged) {
        return <Outlet/> 
    }else {
        return <Navigate to="login" />
    }

  return (
    <div>ProtectedRoutes</div>
  )
}

export default ProtectedRoutes