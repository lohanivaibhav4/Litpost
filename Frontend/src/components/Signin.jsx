import axios from "axios"

export default function Signin(){
    function handleSubmit(formData){
        const signinFormData = Object.fromEntries(formData)
        axios
            .post('/api/v1/user/signin',signinFormData)
            .then((res)=>{
                if(res.status == '200')
                    console.log(res.data.message)
            })
            .catch((err)=> console.log(err))
    }
    return (
        <div className="container flex justify-between my-2 p-2 flex-col items-center gap-y-2.5">
            <h2 className="font-semibold">Signin</h2>
            <form className="flex flex-col" action={handleSubmit}>
                <input type="email" placeholder="Email" name="email" />
                <input type="password" placeholder="Password" name="password" />
                <button type="submit" className="font-semibold">Signin</button>
            </form>
        </div>
    )
}