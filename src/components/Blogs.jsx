import { useEffect, useState } from "react";
import Blog from "./Blog";
import './Blogs.css'

const Blogs = ({handleAddName}) =>{
    const [blogs,setBlogs] =useState([]);
 useEffect(()=>{
    fetch('data.json')
      .then(res => res.json())
      .then(data =>setBlogs(data))
 },[])
      
    return (
        <div style={{display:'grid',gridTemplateColumns:'repeat(3, 3fr)',gap:'22px'}}>
            {
                blogs.map(blog =><Blog key={blog.id} handleAddName={handleAddName} blog={blog}></Blog>)
            }
        </div>
    )
}

export default Blogs;