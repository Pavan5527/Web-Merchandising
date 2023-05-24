import React from 'react'
import { Link } from 'react-router-dom'
import blog from "../images/blog-1.jpg";

const BlogCard = () => {
  return (
    
        <div className='blog-card'>
            <div className='card-image'>
                <img src={blog} className='img-fluid w-100' alt='blog' />
            </div>
            <div className='blog-content'>
           <p className='date'>2 Apr 2023</p>
           <h5 className='title'>A beautiful sunday morning renaissance</h5>
           <p className='desc'>npm, Inc. is a company founded in 2014, and was acquired by GitHub in 2020. npm is a critical part.</p>
           <Link to='/blog/:id' className='button'>
            Read More
           </Link>
            </div>
        </div>
    
  )
}

export default BlogCard