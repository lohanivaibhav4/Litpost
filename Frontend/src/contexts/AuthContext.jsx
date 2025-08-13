import React, { useEffect, useState } from "react";
import axios from 'axios'


const AuthContext = React.createContext()

export default function AuthProvider({children}){
    const [ loading, setloading ] = useState(true)
    const [ loggedIn, setLoggedIn ] = useState(false)
    const [ user, setUser ] = useState(null)

    const checkAuth = async ()=>{
        try{
            const res = await axios.get('/api/v1/user/check-auth', { withCredentials:true })
            if(res.status == 200){
                setLoggedIn(true)
                setUser(res.data.user)
            }else{
                setLoggedIn(false)
                setUser(null)
            }
        }catch(error){
            console.log(error)
            setLoggedIn(false)
        }finally{
            setloading(false)
        }
    }
    useEffect(()=>{
        checkAuth()
    },[])

    return(
        <AuthContext.Provider value={{ loading, setloading, loggedIn, setLoggedIn, user, setUser, checkAuth }}>
            {children}
        </AuthContext.Provider>
    )
}
export { AuthContext }