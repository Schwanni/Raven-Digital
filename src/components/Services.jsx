import Card from "./Card";
import Button from "./Button";


const Services = () => {
  return (
    <section id="services" className='section '>
        <h1 className='text-white text-[48px] my-8'>What we do</h1>
        <div className="flex md:flex-wrap flex-col relative">
            <Card />
            <div className="xxl:absolute xxl:bottom-[10%] xxl:right-[20%] mx-10 mt-4">
                <h2 className="text-white text-[32px] font-bold tracking-wide ">SOLUTIONS FOR <br />YOUR BUISSINESS</h2>
                <p className="text-white font-[20px] max-w-[350px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>  
                <Button title={"Learn more"} css={"mt-8"} />  
            </div>
        </div>
        
    </section>
  )
}

export default Services