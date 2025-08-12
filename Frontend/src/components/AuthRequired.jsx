import React from "react"
import { Navigate, Outlet } from "react-router-dom"
import { useContext } from "react"
import { AuthContext } from "../contexts/AuthContext"


export default function AuthRequired(){
    const { loading, loggedIn } = useContext(AuthContext)

    if(loading) return <div><h3>Loading...</h3></div>
    if(!loggedIn) return <Navigate to='/signin' replace />
    return <Outlet /> 
}