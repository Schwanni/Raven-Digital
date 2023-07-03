import { useState } from "react";
import { Members } from "../constants";
import FlipCardList from "./FlipCardList";


const Team = () => {

 
  

    const [FlipCards, setFlipCard] = useState(Members)

    
   

  return (
    <section id="team" className='section ml-8 sm:ml-12 md:ml-32'>
       <div className="flex flex-col">
            <h2 className='h2Heading mb-20'>Our Team</h2>
            <div className="flex flex-wrap gap-4 md:gap-8 lg:gap-20">
            <FlipCardList FlipCards={FlipCards} />
            </div>
                   
        </div>     
    </section>
  )
}

export default Team