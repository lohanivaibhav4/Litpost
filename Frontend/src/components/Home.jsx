import React from "react"
import axios from 'axios'

export default function Home(){
    const [ allBlogs, setAllBlogs ] = React.useState([])

    React.useEffect(()=>{
        axios
            .get("/api/v1")
            .then((res=>setAllBlogs(res.data.allBlogs)))
            .catch((err)=> console.log(err))
    },[])
    
    const blogCards = allBlogs.map((blog)=>{
        return (
        <div key={blog._id} className="bg-primary border border-secondary p-2 m-2">
            <img src={blog.coverImageURL} alt="blog-cover-image" />
            <h2>{blog.title}</h2>
            <p>{blog.body}</p>
        </div>
        )
    })
    
    return(
        <div className="container flex">
            {blogCards}
        </div>
    )
}