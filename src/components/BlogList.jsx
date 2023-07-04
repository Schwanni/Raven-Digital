import React from 'react';
import BlogCard from './BlogCard';

const BlogList = ({Blogs}) => {

  return (
    <div className='flex flex-wrap gap-8 justify-start'> 
        {/* sortier die Blog einträge nach Datum und zeigt den jüngsten zuerst (wenn der älteste zuerst gezeigt werden soll, müssen die -1 und die 1 getauscht werden) */}
        {Blogs.sort((a, b) =>  a.date > b.date ? -1 : 1).map(blog => {
            return <BlogCard blog={blog} key={blog.id} />
        })}
    </div>
  )
}

export default BlogList