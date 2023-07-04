import React from 'react';
import BlogCard from './BlogCard';

const BlogList = ({Blogs}) => {
  return (
    <div>      
        {Blogs.map(blog => {
            return <BlogCard blog={blog} key={blog.id} />
        })}
    </div>
  )
}

export default BlogList