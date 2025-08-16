import axios from "axios"
import { useNavigate } from "react-router-dom"
export default function Signup(){

  const navigate = useNavigate()

    function handleSubmit(formData){
        const signupFormData = Object.fromEntries(formData)
        axios
            .post(`${import.meta.env.VITE_API_URL}/api/v1/user/signup`,signupFormData)
            .then(()=>{
              navigate('/signin')
            })
            .catch((err)=> console.log(err))
    }
    return (
        <div className="max-w-sm w-full bg-[#faf7ef] border border-[#9d0619] rounded-xl shadow-md p-6 mx-auto my-6">
  <h2 className="text-2xl font-bold text-center text-[#9d0619] mb-4">
    Create A Litpost Account
  </h2>

  <form className="flex flex-col gap-4" action={handleSubmit}>
    <input
      type="text"
      placeholder="Full Name"
      name="name"
      className="border border-[#9d0619] rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#9d0619] bg-white"
    />
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
      Create Account
    </button>
  </form>
</div>

    )
}