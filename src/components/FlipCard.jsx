import React, {useState} from 'react'


const FlipCard = ({flipcard}) => {
    const [toggle, setToggle] = useState(false);
    const cardToggle = () => setToggle(!toggle);
  return (
    
         <div className="flex flex-wrap gap-4 md:gap-8 lg:gap-20"> 
           
                <div key={flipcard.id} className={`flex FlipCard ${toggle? 'flip':''}`}>
                    {!toggle && (
                    <div onClick={cardToggle} className={`w-[240px] h-[310px] rounded-md flex FlipCard ${toggle? 'flip':''}`}>
                        <img src={flipcard.imgSrc}  className="w-full max-h-[310px] object-cover rounded-md" />
                    </div>)}
                    {toggle && ( <div onClick={cardToggle} className="flex-col justify-center items-center flex w-[240px] h-[310px] rounded-md bg-[#2B61F7] FlipCardBack">
                        <h3 className="text-white">{flipcard.name}</h3>
                        <h3 className="text-white mt-2">{flipcard.job}</h3>
                        <p className="text-white my-4 px-2">{flipcard.text1}</p>
                        <div className="flex gap-6 mt-2 ">
                        <a href={flipcard.facebookLink}><img src={flipcard.facebookImg} loading='lazy' className="w-8 h-8" /></a>
                        <a href={flipcard.twitterLink}><img src={flipcard.twitterimg} loading='lazy' className="w-8 h-8" /></a>
                        <a href={flipcard.instagramLink}><img src={flipcard.instagramImg} loading='lazy' className="w-8 h-8" /></a>
                        </div>
                    </div>)}
                   
                </div>
            
            </div>  
    
  )
}

export default FlipCard