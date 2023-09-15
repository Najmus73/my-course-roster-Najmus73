import './Blogs.css'
import { FiDollarSign,FiBookOpen } from 'react-icons/fi';
const Blog = ({blog,handleAddName}) =>{
    const {image,title,details,price,credit}=blog
    return(
        
    <div className="fullCard">
  <figure className="px-5 pt-5">
    <img src={image} alt="" className="rounded-xl img" />
  </figure>
  <div className="card-body pl-5">
    <h2 className="text-lg font-semibold py-2.5">{title}</h2>
    <p className='pb-5'>{details}</p>
    <div className='flex gap-20 pb-5'>
       <p className='flex items-center gap-2'><FiDollarSign></FiDollarSign> Price : {price}</p>
       <p className='flex items-center gap-3'><FiBookOpen />Credit : {credit}hr</p>
    </div>
    <div className="card-actions">
      <button onClick={() =>handleAddName(blog)} className="btn btn-primary">Select</button>
    </div>
  </div>
</div>
      
    )
}
export default Blog;