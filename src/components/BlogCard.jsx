import React, {useState} from 'react';
import { Link } from 'react-router-dom';



const BlogCard = ({blog}) => {
    const released = useState(blog.released);
    const date = useState(blog.date);
    const newDate = date[0].split('.');
    const newDateString = newDate[2] + "/" + newDate[1] + "/" + newDate[0];

  return (
    <>
    {released[0] ? (
        <div className='w-[230px] sm:w-[460px] h-[714px] bg-[#11161C] rounded-tr-[90px] my-20 relative group'>
            
       <Link to={`/blog/id=${blog.id}`} reloadDocument={true}>
       <div className='flex flex-col justify-center items-center '>
            <div className='w-[207px] sm:w-[415px] h-[207px] sm:h-[415px] relative my-6 z-[3]'>
                <img src={blog.imgSrc} alt={blog.imgAlt} loading='lazy' className='rounded-[4px] rounded-tr-[90px] z-[3]' />
                <div className='w-[125px] h-[53px] rounded-tr-[69.5px] flex justify-center items-center text-white font-medium text-lg absolute bottom-0  bg-[#003ADB] z-[2]'>{blog.genre}</div>
            </div>
            <div className='flex flex-col w-full px-8'>
                <div className='flex justify-between w-full'>
                    <h4 className='text-[#727272] group-hover:text-[#89A8FF] text-lg font-medium z-[2]'>{newDateString}</h4>
                    <h4 className='text-[#727272] group-hover:text-[#89A8FF] text-lg font-medium z-[2]'>{blog.id}</h4>
                </div>
                <h3 className='text-[#D0D0D0]  text-2xl font-medium my-2 z-[2]'>{blog.title}</h3>
                <p className='text-[#9C9898] group-hover:text-[#D0D0D0] text-lg font-light z-[2]'>{blog.text}</p>
            </div>
       </div> 
       <div className='w-full h-2 group-hover:h-[450px] duration-300 z-0 bg-[#003ADB] absolute bottom-0'></div>
       </Link>
    </div>
    ) : ""}

  
    </>
  )
}

export default BlogCard