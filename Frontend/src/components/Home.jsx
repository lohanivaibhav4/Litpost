import React, { useState } from "react"
import axios from 'axios'
import { Link } from "react-router-dom"

export default function Home(){
    const [ loading, setLoading ] = useState(true)
    const [ allBlogs, setAllBlogs ] = React.useState([])
   
    React.useEffect(()=>{
        axios
            .get(`${import.meta.env.VITE_API_URL}/api/v1`)
            .then((res=>{
                setAllBlogs(res.data.allBlogs.reverse())
                setLoading(false)
            }))
            .catch((err)=> {
                console.log(err)
            })
    },[])
    
    const backendBaseURL = "http://localhost:5000"; 
    // const backendBaseURL = import.meta.env.VITE_API_URL; // Not used, but for reference
    const blogCards = allBlogs.map((blog)=>{

        if(loading) return <h2 className="font-bold text-gray-700 text-2xl">Loading...</h2>
        return (
            <Link to={blog._id} key={blog._id} className="block w-full">
            <div
                    className="bg-white border border-gray-200 rounded-2xl 
                    shadow-sm overflow-hidden m-4 hover:shadow-xl hover:scale-[1.02] 
                    transition-all duration-300"
                >
                {/* Cover Image */}
                <div className="relative">
                    <img
                        src={`${backendBaseURL}${blog.coverImageURL}`} 
                        alt="blog-cover-image"
                        className="w-full h-64 object-cover"
                    />
                     {/* Optional gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent"></div>
                </div>

            {/* Content */}
            <div className="p-6">
                {/* Title */}
                <h2 className="text-2xl font-bold text-gray-900 mb-3 leading-tight line-clamp-2">
                    {blog.title}
                </h2>

                {/* Body Preview */}
                <p className="text-gray-600 text-base line-clamp-4">
                    {blog.body}
                </p>

                {/* Footer */}
                <div className="mt-5 flex justify-between items-center text-sm text-gray-500">
                    <span>{blog.createdBy.name}</span>
                    <span>{new Date(blog.createdAt).toLocaleDateString()}</span>
                </div>
            </div>
            </div>
            
            </Link>
        );

    })
    
    return(
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
            {blogCards}
        </div>
    )
}