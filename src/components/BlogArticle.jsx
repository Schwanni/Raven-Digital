import React from 'react'
import {Navbar, News, Testimonials} from "./index"
import { Blog } from '../constants'



const BlogArticle = () => {
  const lastField = window.location.search.split("?")



  return (
    <div>
      <Navbar />
      {Blog.map((blog) => { 
        
        return <>
        {(blog.id == lastField[1])?
                <div className='flex flex-col justify-center items-center my-4' key={blog.id} > 
                <div className='h2Heading'>
                { (blog.id == lastField[1])? blog.title : "" }
                </div>
                <img src={(blog.id == lastField[1])? blog.imgSrc: "" } alt={(blog.id == lastField[1])? blog.imgAlt : ""} className='max-w-[400px] py-8'  />
              </div> :""
              }
              </>
        
      
      })}
         

      <News />
      
    </div>
  )
}

export default BlogArticle