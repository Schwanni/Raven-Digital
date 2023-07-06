import React, {useState} from 'react';
import { Blog } from '../constants';
import BlogList from './BlogList';


const News = () => {

  const [Blogs, setBlogs] = useState(Blog);

  return (
    <section id="news" className='section justify-start ml-8 sm:ml-12 md:ml-32 '>
      <h2 className='h2Heading flex justify-center'>Blog</h2>
      <div>
          <BlogList Blogs={Blogs} />
      </div>
    </section>
  )
}

export default News