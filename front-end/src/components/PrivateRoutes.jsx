import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoutes = () => {
    const token=localStorage.getItem('token');
    let verifyuser=false
    if (token)
    {
        verifyuser=true
    }
  return (
    verifyuser?<Outlet/>:<Navigate to={'/'}/>
  )
}

export default PrivateRoutes