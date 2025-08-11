import axios from "axios"
export default function Signup(){
    function handleSubmit(formData){
        const signupFormData = Object.fromEntries(formData)
        axios
            .post('/api/v1/user/signup',signupFormData)
            .then((res)=>console.log(res.data))
            .catch((err)=> console.log(err))
    }
    return (
        <div className="container flex justify-between my-2 p-2 flex-col items-center gap-y-2.5">
            <h2 className="font-semibold">Create A Litpost Account</h2>
            <form className="flex flex-col" action={handleSubmit}>
                <input type="text" placeholder="Full Name" name="name"/>
                <input type="email" placeholder="Email" name="email" />
                <input type="password" placeholder="Password" name="password" />
                <button type="submit" className="font-semibold">Create Account</button>
            </form>
        </div>
    )
}