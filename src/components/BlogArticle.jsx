import React from 'react'
import {Navbar, News} from "./index"
import { Blog } from '../constants'
import { useState } from 'react'



const BlogArticle = () => {
  const lastField = window.location.search.split("?");

  return (
    <div>
      <Navbar />
      {Blog.map((blog) => { 
         const date = useState(blog.date);
         const newDate = date[0].split('.');
         const newDateString = newDate[2] + "/" + newDate[1] + "/" + newDate[0];
        
        return <div key={blog.id}>
        {(blog.id == lastField[1])?
                <div className='flex flex-col justify-center items-center my-4'> 
                  <div className='h2Heading'>
                  {blog.title}
                  </div>
                  <img src={(blog.id == lastField[1])? blog.imgSrc: "" } alt={blog.imgAlt} className='max-w-[400px] py-8'  />
                  <div className='w-1/2 flex justify-between'>
                    <h3 className='text-white'>{newDateString}</h3>
                    <h3 className='text-white'>{blog.id}</h3>
                  </div>
                  <div className='w-full] md:w-3/4 flex justify-center items-center flex-col'>
                  <h3 className='text-white my-8 text-2xl font-bold'>{blog.blogArticleHead}</h3>
                  <p className='text-white text-lg max-w-[70%] mb-4'>{blog.blogArticleText1}</p>
                  <p className='text-white text-lg max-w-[70%] mb-4'>{blog.blogArticleText2}</p>
                  <p className='text-white text-lg max-w-[70%] mb-4'>{blog.blogArticleText3}</p>
                  <p className='text-white text-lg max-w-[70%] mb-4'>{blog.blogArticleText4}</p>
                  </div>

              </div>
              
              : "" }
              </div>
        
      
      })}
         

      <News />
      
    </div>
  )
}

export default BlogArticle