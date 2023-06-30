import { Cards } from "../constants";


const Card = () => {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xxl:grid-cols-4 justify-center items-center mx-10 gap-2">
        {Cards.map((card) => (
            <div key={card.id} className='flex flex-col w-[350px] h-[345px] bg-[#1B2837] rounded-[4px]'>
                <div className="flex flex-col ml-6 mt-8">
                <h2 className="text-white text-[24px] font-extrabold">{card.title}</h2>
                <p className="text-[#F8F9FA] text-[16px] font-normal leading-6 my-8">{card.text}</p>
                <a href={card.link} className="text-[#F8F9FA] text-[16px] font-medium leading-6 underline mb-4">{card.linkTitle}</a>
                </div>
                <div className="flex justify-end items-end">
                    <div className="flex justify-center items-center w-[140px] h-[100px] bg-[#003ADB] border-top-left">
                    <img src={card.imgSrc} alt={card.imgAlt} className="w-[48px] h-  [48px] text-white"/>
                    </div>
                </div>
            </div>

        ))}
        
    </div>
  )
}

export default Card