import { useNavigate } from "react-router-dom";
import CoverImageInput from "./CoverImageInput";
import axios from "axios";

export default function AddPost(){
    const navigate = useNavigate()

    function handleSubmit(formData){
        const postFormData = Object.fromEntries(formData)
        axios
    .post(`${import.meta.env.VITE_API_URL}/api/v1/add-blog`, postFormData, {
            headers:{ "Content-Type": "multipart/form-data" },
             withCredentials: true
        })
        .then((res)=>{
            alert('Published Successfully!')
            navigate(`/${res.data.id}`)
        })
        .catch((error)=>console.log(error))
    }
    return(
        <div className="max-w-2xl w-full bg-[#faf7ef] border 
        border-[#9d0619] rounded-xl shadow-md p-6 mx-auto my-6">
            <h2 className="text-2xl font-bold text-center text-[#9d0619] mb-4">
                Publish a New Post
            </h2>

            <form className="flex flex-col gap-4 my-4" action={handleSubmit}>
                <CoverImageInput />
                <div className="relative">
                    <input
                        type="text"
                        id="title"
                        name="title"
                        placeholder=" "
                        className="peer border font-bold border-[#9d0619] rounded-md p-3 w-full bg-white focus:outline-none focus:ring-2 focus:ring-[#9d0619] placeholder-transparent"
                    />
                    <label
                        htmlFor="title"
                        className="absolute left-3 -top-2.5 bg-[#faf7ef] px-1 text-sm font-bold text-[#9d0619] transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-[#9d0619]"
                    >
                        Title
                    </label>
                </div>

                <textarea
                name="body"
                placeholder="Write Something..."
                className="border border-[#9d0619] rounded-md p-3 bg-white focus:outline-none focus:ring-2 focus:ring-[#9d0619] min-h-[150px]"
                />
                <button
                type="submit"
                className="bg-[#9d0619] text-white font-semibold py-2 rounded-md hover:bg-[#7b0413] transition"
                >
                Publish
                </button>
            </form>
        </div>

    )
}