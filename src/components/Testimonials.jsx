import Carousel from "nuka-carousel";
import { Examples } from "../constants";



const Testimonials = () => {
  
  return (
    <section id="testimonials" className='section flexCenter'>
      
      <div className="mx-4 xxl:mx-52 xxl:my-16">
        <Carousel renderCenterRightControls={false} renderCenterLeftControls={false}>
          {Examples.map((example) => (
            
            <div key={example.id}>
            <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start mx-auto mb-10"> 
            <img src={example.imgSrc} className="max-w-[546px] h-[517px] rounded-tr-[80px]" />
              <div className="flex flex-col mx-16 my-8 md:justify-center md:items-center lg:justify-normal lg:items-start">
                <h2 className="text-white text-[48px] font-medium mb-6">Testimonials</h2>
                <h3 className="text-[#D0D0D0] text-[24px] font-medium">{example.name}</h3>
                <h3 className="text-[#727272] text-[24px] font-medium">{example.job}</h3>
                <p className="text-white text-xl font-light leading-7 my-8 md:max-w-[450px]">{example.text1}</p>
                <p className="text-white text-xl font-light leading-7 md:max-w-[450px]">{example.text2}</p>
              </div>
            </div>
          </div>
          ))}            
        </Carousel>        
      </div>     
    </section>
  )  
}

export default Testimonials