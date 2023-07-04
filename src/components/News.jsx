import React, {useState} from 'react';
import { Blog } from '../constants';
import BlogList from './BlogList';


const News = () => {

  const [Blogs, setBlogs] = useState(Blog);

  return (
    <section id="News" className='section xl:flexCenter sm:max-w-sm md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1280px] lg:mx-14'>
      <h2 className='h2Heading flex justify-center'>Blog</h2>
      <div>
          <BlogList Blogs={Blogs} />
      </div>
    </section>
  )
}

export default News