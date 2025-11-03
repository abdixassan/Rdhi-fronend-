import React from 'react'
import { Navigate } from 'react-router-dom'

const ProtactRouter = ({children}) => {
  const Admin =localStorage.getItem("Admin")
  if(!Admin){
    return <Navigate to="/AdminLogin" replace/>
  } 
  return  children
}

export default ProtactRouter
