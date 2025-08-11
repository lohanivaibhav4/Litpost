import React from "react"
import { Navigate, Outlet } from "react-router-dom"
import axios from "axios"

export default function AuthRequired(){
    const [ loggedIn, setLoggedIn ] = React.useState(true)

    return(
        <>
            { loggedIn ? <Outlet /> : < Navigate to='/signin' replace />}
        </>
    )
}