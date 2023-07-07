import SocialMedia from "./SocialMedia";
import Team from "../images/cherrydeck-A44EW3n2PgM-unsplash 1.png"
import Button from "./Button";

const About = () => {
  return (
    <section id="about" className="relative w-full flex flex-col justify-center items-center xl:flex-row mt-16">
        <div className="md:w-[0.5px] h-[1080px] absolute left-12 -top-[170px]  border-gradient"></div>
        <SocialMedia  />

        <div className="flex flex-col justify-center w-1/2 xl:ml-52">
          <div className="flex flex-col ">
            <h1 className="text-white text-[55px] font-bold text-left">WE ARE <br />
                DIGITAL AGENCY</h1>
            <p className="text-white max-w-[450px] my-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit id fringilla turpis tempor enim. Vel tristique suspendisse eget sodales egestas. Donec duis lacus, odio velit eu eget ac tortor. Ac sit ultricies hendrerit pellentesque arcu fames sit lectus. Scelerisque id bibendum velit cras. 
            </p>  
          </div>

        
          <Button title={"Learn more"} css={"my-4"} />
        </div>

        <div className="w-1/2">
            <img src={Team} alt="team" loading="lazy" />
        </div>
    </section>
  )
}

export default About