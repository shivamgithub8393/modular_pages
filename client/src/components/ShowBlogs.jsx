import React, {useState, useEffect} from 'react'
import axios from 'axios'

function ShowBlogs() {
  const [blogs, setBlogs] = useState([])
  const getAllBlogs = () => {
    axios.get("http://localhost:8000/blog")
    .then(res => setBlogs(res.data))
  }

  useEffect(()=>{
    getAllBlogs();
  })
  return (
    <div>
    {blogs.map((blog, index) => (
      <div className="container mt-5">
      <h2>{blog.blogTitle}</h2>   
      <p>{blog.blogContent}</p>  
    </div>
    ))}
    </div>
  )
}

export default ShowBlogs
