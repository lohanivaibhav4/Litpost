import axios from "axios"
import { useContext } from "react"
import { AuthContext } from "../contexts/AuthContext"
import { useNavigate } from "react-router-dom"

export default function Signin(){
    const { setLoggedIn, setUser, checkAuth } = useContext(AuthContext)
    const navigate = useNavigate()

    function handleSubmit(formData){
        const signinFormData = Object.fromEntries(formData)
        axios
            .post('/api/v1/user/signin',signinFormData)
            .then((res)=>{
                if(res.status == '200'){
                    setLoggedIn(true)
                    setUser(res.data.user)
                    navigate('/')
                }
            })
            .catch((err)=> console.log(err))
    }
    checkAuth()
    return (
        <div className="max-w-sm w-full bg-[#faf7ef] border border-[#9d0619] rounded-xl shadow-md p-6 mx-auto my-6">
          <h2 className="text-2xl font-bold text-center text-[#9d0619] mb-4">Signin</h2>

          <form className="flex flex-col gap-4" action={handleSubmit}>
            <input
              type="email"
              placeholder="Email"
              name="email"
              className="border border-[#9d0619] rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#9d0619] bg-white"
            />
            <input
            type="password"
            placeholder="Password"
            name="password"
            className="border border-[#9d0619] rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#9d0619] bg-white"
            />
            <button
              type="submit"
              className="bg-[#9d0619] text-white font-semibold py-2 rounded-md hover:bg-[#7b0413] transition"
            >
              Signin
            </button>
          </form>
        </div>
)
}