import { useState } from "react";
import { Members } from "../constants";


const Team = () => {

 
    const [toggle, setToggle] = useState(false);
    const cardToggle = () => setToggle(!toggle);
   

  return (
    <section id="team" className='section xl:flexStart mx-8 sm:mx-12 md:mx-32 xl:mx-52'>
        <div >
            <h2 className='h2Heading mb-20'>Our Team</h2>
            <div className="flex gap-4 md:gap-8 lg:gap-20"> 
            {Members.map((member) => (
                <div key={member.id} className="flex">
                    {!toggle && (
                    <div onClick={cardToggle} className="w-[240px] h-[310px] rounded-md flex">
                        <img src={member.imgSrc}  className="w-full max-h-[310px] object-cover rounded-md" />
                    </div>)}
                    {toggle && ( <div onClick={cardToggle} className="flex-col justify-center items-center flex w-[240px] h-[310px] rounded-md bg-[#2B61F7]">
                        <h3 className="text-white">{member.name}</h3>
                        <h3 className="text-white mt-2">{member.job}</h3>
                        <p className="text-white my-4 px-2">{member.text1}</p>
                        <div className="flex gap-6 mt-2 ">
                        <a href={member.facebookLink}><img src={member.facebookImg} className="w-8 h-8" /></a>
                        <a href={member.twitterLink}><img src={member.twitterimg} className="w-8 h-8" /></a>
                        <a href={member.instagramLink}><img src={member.instagramImg} className="w-8 h-8" /></a>
                        </div>
                    </div>)}
                   
                </div>
            ))} 
            </div>           
        </div>        
    </section>
  )
}

export default Team