import { Works } from "../constants";
import { Button } from "../components";

const Portfolio = () => {
  return (
    <section id="portfolio" className='section flexCenter'>
      <h2 className='h2Heading w-3/4 my-8'>Our works</h2>
      <div className="flex flex-wrap gap-4 items-center justify-center mx-52">
        {Works.map((work) => (
          <div key={work.id} className={`lg:${work.w} lg:${work.h} mb-4`} >
          
            {work.id !== 4 ? <img src={work.imgSrc} alt={work.imgAlt} className={``}  /> : 
              <div className="flex flex-col flex-1 ">
                <h2 className="text-white text-[32px] font-bold">{work.h2}</h2>
                <p className="max-w-[360px] text-white font-light text-[20px] my-8">{work.p}</p>
                <Button title={work.buttonTitle} />
              </div>}
          </div>
        ))}
      </div>
      
    </section>
  )
}

export default Portfolio