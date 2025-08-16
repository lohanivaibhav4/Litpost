import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"

export default function BlogDetails(){
    const [ loading, setLoading ] = useState(true)
    const [ blog, setBlog ] = useState(null)
    const blogId = useParams().id
    const backendBaseURL = import.meta.env.VITE_API_URL;
    
    useEffect(()=>{
        axios
        .get(`${backendBaseURL}/api/v1/${blogId}`)
        .then((res)=> {
            setBlog(res.data)
            setLoading(false)
        })
        .catch((err)=> console.log(err))
    },[blogId,backendBaseURL])
    

    if(loading) return <h2 className="font-bold text-gray-700 text-2xl">Loading...</h2>
    return (
         <article className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
      {/* Cover Image */}
      <div className="relative">
        <img
          src={`${backendBaseURL}${blog.coverImageURL}`} 
          alt={blog.title}
          className="w-full h-96 object-cover"
        />
        {/* Optional gradient overlay for style */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent"></div>
      </div>

      {/* Content */}
      <div className="p-8">
        {/* Title */}
        <h1 className="text-4xl font-bold text-gray-900 leading-tight mb-4">
          {blog.title}
        </h1>

        {/* Author & Date */}
        <div className="flex items-center mb-6 text-gray-600 text-sm">
          {blog.authorImageURL && (
            <img
              src={blog.authorImageURL}
              alt={blog.author}
              className="w-10 h-10 rounded-full object-cover mr-3"
            />
          )}
          <div>
            <p className="font-medium">{blog.createdBy.name}</p>
            <p>{new Date(blog.createdAt).toLocaleDateString()}</p>
          </div>
        </div>


        {/* Body */}
        <div className="prose prose-lg max-w-none text-gray-800 whitespace-pre-wrap break-words">
            {blog.body}
        </div>
      </div>
      
    </article>
    )
}