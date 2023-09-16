import { useEffect, useState } from "react";
import './Course.css'
import Course from './Course'

const Courses = ({handleAddName}) =>{
    const [blogs,setBlogs] =useState([]);
 useEffect(()=>{
    fetch('data.json')
      .then(res => res.json())
      .then(data =>setBlogs(data))
 },[])
      
    return (
        
        <div style={{paddingBottom:'80px'}} className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:grid-cols-3">
            {
                blogs.map(blog =><Course key={blog.id} handleAddName={handleAddName} blog={blog}></Course>)
            }
        </div>
        
    )
}

export default Courses;